import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const generateTable = (number) => {
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr  key={i}>
          <td style={{border:'1px solid black'}}>{i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter a number"
      />
      <table>
        <tbody>{generateTable(Number(number))}</tbody>
      </table>
    </div>
  );
}

export default App;
