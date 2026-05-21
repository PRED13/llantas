import { useState } from "react";
import "./App.css";

function App() {

  // EMPRESAS INICIALES
  const [empresas, setEmpresas] = useState([
    {
      nombre: "Empresa 1",
      T: 20,
      H: 30,
      V: 20,
      W: 40
    },
    {
      nombre: "Empresa 2",
      T: 50,
      H: 50,
      V: 40,
      W: 50
    },
    {
      nombre: "Empresa 3",
      T: 60,
      H: 55,
      V: 50,
      W: 60
    },
    {
      nombre: "Empresa 4",
      T: 100,
      H: 80,
      V: 60,
      W: 70
    }
  ]);

  // NUEVA EMPRESA
  const [nuevaEmpresa, setNuevaEmpresa] = useState({
    nombre: "",
    T: "",
    H: "",
    V: "",
    W: ""
  });

  // TIPO SELECCIONADO
  const [tipoSeleccionado, setTipoSeleccionado] = useState("T");

  // RESULTADO
  const [resultado, setResultado] = useState(null);

  // AGREGAR EMPRESA
  const agregarEmpresa = () => {

    if (
      nuevaEmpresa.nombre === "" ||
      nuevaEmpresa.T === "" ||
      nuevaEmpresa.H === "" ||
      nuevaEmpresa.V === "" ||
      nuevaEmpresa.W === ""
    ) {
      alert("Completa todos los campos");
      return;
    }

    setEmpresas([
      ...empresas,
      {
        nombre: nuevaEmpresa.nombre,
        T: Number(nuevaEmpresa.T),
        H: Number(nuevaEmpresa.H),
        V: Number(nuevaEmpresa.V),
        W: Number(nuevaEmpresa.W)
      }
    ]);

    setNuevaEmpresa({
      nombre: "",
      T: "",
      H: "",
      V: "",
      W: ""
    });

  };

  // RESOLVER
  const resolver = () => {

    // ORDENAR EMPRESAS
    const resultados = [...empresas].sort(
      (a, b) =>
        a[tipoSeleccionado] -
        b[tipoSeleccionado]
    );

    setResultado(resultados);

  };

  return (
    <div className="container">

      <h1>Algoritmo A*</h1>

      {/* TABLA */}
      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Empresa</th>
              <th>Tipo T</th>
              <th>Tipo H</th>
              <th>Tipo V</th>
              <th>Tipo W</th>
            </tr>
          </thead>

          <tbody>

            {empresas.map((empresa, index) => (
              <tr key={index}>

                <td>{empresa.nombre}</td>

                <td>${empresa.T}</td>

                <td>${empresa.H}</td>

                <td>${empresa.V}</td>

                <td>${empresa.W}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* FORMULARIO */}
      <div className="formulario">

        <h2>Agregar Empresa</h2>

        <input
          type="text"
          placeholder="Nombre Empresa"
          value={nuevaEmpresa.nombre}
          onChange={(e) =>
            setNuevaEmpresa({
              ...nuevaEmpresa,
              nombre: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Precio Tipo T"
          value={nuevaEmpresa.T}
          onChange={(e) =>
            setNuevaEmpresa({
              ...nuevaEmpresa,
              T: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Precio Tipo H"
          value={nuevaEmpresa.H}
          onChange={(e) =>
            setNuevaEmpresa({
              ...nuevaEmpresa,
              H: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Precio Tipo V"
          value={nuevaEmpresa.V}
          onChange={(e) =>
            setNuevaEmpresa({
              ...nuevaEmpresa,
              V: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Precio Tipo W"
          value={nuevaEmpresa.W}
          onChange={(e) =>
            setNuevaEmpresa({
              ...nuevaEmpresa,
              W: e.target.value
            })
          }
        />

        <button onClick={agregarEmpresa}>
          Agregar Empresa
        </button>

      </div>

      {/* SELECTOR */}
      <div className="selector-tipo">

        <h2>
          Tipos de llantas
        </h2>

        <select
          value={tipoSeleccionado}
          onChange={(e) =>
            setTipoSeleccionado(e.target.value)
          }
        >

          <option value="T">
            Tipo T
          </option>

          <option value="H">
            Tipo H
          </option>

          <option value="V">
            Tipo V
          </option>

          <option value="W">
            Tipo W
          </option>

        </select>

      </div>

      {/* BOTON */}
      <button
        className="resolver-btn"
        onClick={resolver}
      >
        Resolver
      </button>

      {/* RESULTADOS */}
      {resultado && (

        <div className="resultado">

          <h2>
            precios
          </h2>

          {resultado.map((empresa, index) => (

            <div
              key={index}
              className={
                index === 0
                ?
                "resultado-item mejor"
                :
                "resultado-item"
              }
            >

              <p>
                {empresa.nombre}
              </p>

              <p>
                Tipo {tipoSeleccionado}
              </p>

              <p>
                ${empresa[tipoSeleccionado]}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default App;