import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Grid.css";

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.idusuario !== id);
        setUsers(newArray);
        alert(data);
      })
      .catch(({ data }) => alert(data));

    setOnEdit(null);
  };

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  return (
    <table className="user-grid">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>CPF</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{item.nome}</td>
            <td>{item.idade}</td>
            <td>{item.cpf}</td>
            <td>
              <FaEdit onClick={() => handleEdit(item)} className="icon-edit" />
            </td>
            <td>
              <FaTrash onClick={() => handleDelete(item.idusuario)} className="icon-delete" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;