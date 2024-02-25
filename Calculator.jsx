import React, { useState } from 'react';
import './calc.css';

function Calculator() {
  const [initial, setInitialInvestment] = useState("");
  const [annual, setAnnualInvestment] = useState("");
  const [expected, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [futureValue, setFutureValue] = useState("");
  const [history, setHistory] = useState([]);

  const FutureValue = () => {
    const Investments = initial + (annual * duration);
    const Return = Investments * (expected / 100);
    const Val = Investments + Return;
    setFutureValue(Val);
    const newEntry = {
        initial: parseFloat(initial),
        annual: parseFloat(annual),
        expected: parseFloat(expected),
        duration: parseFloat(duration),
        futureValue: Val
    };
    setHistory([...history, newEntry]);
  };

  return (
    <div className="investment">
      <h2>Investment Calculator</h2>
      <div>
        <label>Initial Investment:</label>
        <input className='number' type="number" value={initial} onChange={(e) => setInitialInvestment(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Annual Investment:</label>
        <input className='number' type="number" value={annual} onChange={(e) => setAnnualInvestment(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Expected Return Rate :</label>
        <input  className='number'type="number" value={expected} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Investment Duration :</label>
        <input className='number' type="number" value={duration} onChange={(e) => setDuration(parseFloat(e.target.value))} />
      </div>
      <button onClick={FutureValue}>Calculate</button>
      {futureValue > 0 && <p>Future Value: ${futureValue.toFixed(2)}</p>}
    
      <table>
        <thead>
          <tr>
            <th>Initial Investment</th>
            <th>Annual Investment</th>
            <th>Expected Return Rate </th>
            <th>Investment Duration </th>
            <th>Future Value</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.initial}</td>
              <td>{entry.annual}</td>
              <td>{entry.expected}</td>
              <td>{entry.duration}</td>
              <td>{entry.futureValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}

export default Calculator;
