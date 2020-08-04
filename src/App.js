import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <tr className="tabla">Nombre</tr>
          <td className="table-active">Karol Eliana Cuellar Narváez</td>
          <td className="table-active">Mayra Vanessa Posada Alvarez</td>
          <td className="table-active">Dahiana Restrepo Londoño</td>
          <td className="table-active">Mariana Soto Maya</td>

        </tr>
        <tr>
          <tr className="tabla">Correo</tr>

          <td className="table-active">karoleliana2003@gmail.com</td>
          <td className="table-active">mayravanessaposadaalvarez@gmail.com</td>
          <td className="table-active">dahianarl113@gmail.com</td>
          <td className="table-active">marianasotomaya@gmail.com</td>

        </tr>
        <tr>
          <tr className="tabla">Tarjeta de Identidad</tr>
          <td className="table-active">1083864859</td>
          <td className="table-active">1088824206</td>
          <td className="table-active">1015332035</td>
          <td className="table-active">1000536751</td>

        </tr>

        <tr>
          <tr className="tabla">Telefono</tr>
          <td className="table-active">3107747306</td>
          <td className="table-active">3005773510</td>
          <td className="table-active">3194960925</td>
          <td className="table-active">3113144328</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
