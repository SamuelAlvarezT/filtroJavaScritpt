import React, { useState } from 'react';
import problema1 from './components/problema1.jsx';
import problema2 from './components/problema2.jsx';
import problema3 from './components/problema3.jsx';
import App from './App.jsx';



function Appf() {
  const [mostrarproblema1, setmostrarproblema1] = useState(false);
  const [mostrarproblema2, setmostrarproblema2] = useState(false);
  const [mostrarproblema3, setmostrarproblema3] = useState(false);
  const [mostrarproblema4, setmostrarproblema4] = useState(false);
  const [mostrarproblema, setmostrarproblema5] = useState(false);


  function returnpage() {
    setmostrarproblema1(false);
    setmostrarproblema1(false);
    setmostrarproblema2(false);
    setmostrarproblema4(false);
  }

  function iniciarproblma1() {
    setmostrarproblema1(true);
    setmostrarproblema1(false);
    setmostrarproblema4(false);
    setmostrarproblema4(false);
  }

  function iniciarproblma2() {
    problema1(true);
    setmostrarproblema1(false);
    setmostrarproblema4(false);
    setmostrarproblema4(false);
  }

  function iniciarproblma3() {
    setmostrarproblema4(true);
    setmostrarproblema1(false);
    setmostrarproblema1(false);
    setmostrarproblema4(false);
  }

  function iniciarporblema4() {
    setmostrarproblema4(true);
    setmostrarproblema1(false);
    setmostrarproblema1(false);
    setmostrarproblema4(false);
  }

  return (
    <div className="Container">
      <div className="section_left">
        <div className="logo" onClick={returnpage}>
          <h1>elija algun problema</h1>
        </div>
        <div className="opcion-1" onClick={iniciarproblma1}>
          <h3>problema 1</h3>
        </div>
        <div className="opcion-2" onClick={iniciarproblma2}>
          <h3>problema 2</h3>
        </div>
        <div className="opcion-3" onClick={iniciarproblma3}>
          <h3>problema 3</h3>
        </div>
        <div className="opcion-4" onClick={iniciarporblema4}>
          <h3>problema 4</h3>
        </div>
      </div>
      <div className="section_right">
        {!mostrarproblema1 && !mostrarproblema2 && !mostrarproblema3 && !mostrarproblema4 ? (
          <div className="text">
            <h1>Bienvenido</h1>
            <p>filtro de javascript</p>
            <img src="https://lizard-cruiser-2ac.notion.site/images/page-cover/webb1.jpg" alt="" />
          </div>
        ) : mostrarproblema1 ? (
          <problema1 />
        ) : mostrarproblema2 ? (
          <problema2 />
        ) : mostrarproblema3 ? (
          <problema3 />
        ) : (
          <problema4 />
        )}
      </div>
    </div>
  );
}



export default Appf;