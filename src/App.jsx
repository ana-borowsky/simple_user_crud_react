import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form.jsx";
import Grid from "./components/Grid.jsx";
import "./App.css";
import "./components/Form.css"; 
import "./components/Grid.css"; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <div className="container">
        <h1>Gerenciamento de Usuários</h1>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
    </div>
    </>
  );
};

export default App;