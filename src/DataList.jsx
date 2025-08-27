import { useEffect, useState } from "react";
import "./DataList.css"

function DataList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('http://localhost:8800/')
      .then(response => response.json())
      .then(data => setData(data))
  }

  return (
    <div className="container">
      {data.map((user) => (
        <div className="item" key={user.idusuario}>
          <strong>Nome:</strong> {user.nome}<br></br>
          <strong>Idade:</strong>  {user.idade}<br></br>
          <strong>CPF:</strong>  {user.cpf}<br></br>
          <button onClick={() => { props.clicked(user) }} className="btn">Ver mais</button>
        </div>
      ))}
    </div>
  )
}
export default DataList;