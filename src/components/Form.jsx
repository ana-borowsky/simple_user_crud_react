import React, { useRef, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = ({ onEdit, setOnEdit, getUsers }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.idade.value = onEdit.idade;
      user.cpf.value = onEdit.cpf;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.idade.value || !user.cpf.value) {
      return alert("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios.put("http://localhost:8800/" + onEdit.idusuario, {
        nome: user.nome.value,
        idade: user.idade.value,
        cpf: user.cpf.value,
      });
    } else {
      await axios.post("http://localhost:8800/", {
        nome: user.nome.value,
        idade: user.idade.value,
        cpf: user.cpf.value,
      });
    }

    user.nome.value = "";
    user.idade.value = "";
    user.cpf.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} className="form-container">
      <input name="nome" placeholder="Nome" />
      <input name="idade" type="number" placeholder="Idade" />
      <input name="cpf" placeholder="CPF" />

      <button type="submit">Salvar</button>
    </form>
  );
};

export default Form;