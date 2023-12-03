import { useState } from 'react';
import Head from 'next/head';
import "../styles/Table.module.css"

export default function Table() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    id: '',
    nombres: '',
    fechaNacimiento: '',
    planContratar: '',
    valor: '',
  });

  const addData = () => {
    setData([...data, { ...newData }]);
    
    setNewData({
      id: '',
      nombres: '',
      fechaNacimiento: '',
      planContratar: '',
      valor: '',
    });
  };
  

  return (
    <>
      <Head>
        <title>Crear Cliente</title>
        <meta name="description" content="Creación de clientes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contenedor">
        <h1>Creación nuevo cliente</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Fecha de Nacimiento</th>
              <th>Plan a Contratar</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.nombres}</td>
                <td>{item.fechaNacimiento}</td>
                <td>{item.planContratar}</td>
                <td>{item.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>Agregar Nuevo Registro</h2>
          <div>
            <label>ID:</label>
            <input
              type="text"
              value={newData.id}
              onChange={(e) => setNewData({ ...newData, id: e.target.value })}
            />
          </div>
          <div>
            <label>Nombres:</label>
            <input
              type="text"
              value={newData.nombres}
              onChange={(e) => setNewData({ ...newData, nombres: e.target.value })}
            />
          </div>
          <div>
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              value={newData.fechaNacimiento}
              onChange={(e) => setNewData({ ...newData, fechaNacimiento: e.target.value })}
            />
          </div>
          <div>
            <label>Plan a Contratar:</label>
            <input
              type="text"
              value={newData.planContratar}
              onChange={(e) => setNewData({ ...newData, planContratar: e.target.value })}
            />
          </div>
          <div>
            <label>Valor:</label>
            <input
              type="text"
              value={newData.valor}
              onChange={(e) => setNewData({ ...newData, valor: e.target.value })}
            />
          </div>
          <button onClick={addData}>Agregar</button>
        </div>
      </div>
    </>
  );
}

