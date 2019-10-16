import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [amountRisk, setAmountRisk] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [positionSize, setpositionSize] = React.useState(0);
  // const inputEl =useRef(null);

  const calculate = (risk) => {

    console.log('hi');
    setAmountRisk(risk.target.value);

  }

  const calculateBalance = (amount) => {

  setBalance(amount.target.value);

  }

  const calculateRisk = (riskPercentage) => {

    debugger;

    setAmountRisk(Number(riskPercentage.target.value) * 0.01 * balance);

  }
  return (
    <div className="form-group">
      <h2>Forex Calculator</h2>
      <form className="form-group">


        <input type="number" placeholder="balance" onChange={calculateBalance} />
        <input type="number" placeholder="risk percentage" onChange={calculateRisk} />
        <input type="number" placeholder="sl" onChange={calculate} />

        <input type="number" placeholder="askprice" onChange={calculate} />


        <br></br>
        <label>amountRisk:{' '}$</label>
        {amountRisk}<br/>
        <label>position size(lots):{' '}</label>
        {positionSize}<br/>



        {/* <input type="number" ref="principal" placeholder="Loan Amount" value={this.state.value.principal} onChange={this.handleChange}/><br/>
      <input type="number" ref="rate" placeholder="Interest Rate" value={this.state.value.rate} onChange={this.handleChange}/><br/>
      <input type="number" ref="term" placeholder="Length of loan" value={this.state.value.term} onChange={this.handleChange}/><br/>
      <h3>Your estimated monthly payment is ${this.state.payment}</h3> */}
      </form>
    </div>
  );
}

export default App;
