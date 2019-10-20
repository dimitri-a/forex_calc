import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [amountRisked, setAmountRisked] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [positionSize, setpositionSize] = React.useState(0);

  const [pipsRisk, setPipsRisk] = React.useState(0);
  const [longPosition, setLongPosition] = React.useState(0);


  const [sl, setSl] = React.useState(0);

  const [tp, setTP] = React.useState(0);

  const [entryPrice, setEntryPrice] = React.useState(0);

  const [standardLots, setStandardLots] = React.useState(0);


  const [atr, setAtr] = React.useState(0);

  const calculate = (risk) => {

    console.log('hi');
    setAmountRisked(risk.target.value);

  }

  const calculateBalance = (amount) => {

    setBalance(amount.target.value);

  }

  const changeAtr = (atr) => {

    setAtr(Number(atr.target.value) / 10000)

  }


  const calculateRisk = (riskPercentage) => {


    let tmp = Number(riskPercentage.target.value) * 0.01 * balance;

    setAmountRisked(tmp);



  }



  const changeStandardLots = () => {

    let temp = amountRisked / sl;

    standardLots = temp * 10 //this is a microlot $5000 balance to start

  }


  const calculateSL_TP = (e) => {
    //todo JPY  calculation!
    debugger;

    let price = Number(entryPrice);
    let atr_multiplied = atr * 1.5;

    if (longPosition) {
      setSl(price - atr_multiplied);
    }
    else {
      setSl(price + atr_multiplied);
    }

    //set TP
    if (longPosition) {
      setTP(price + atr);
    }
    else {
      setTP(price - atr);
    }

    e.stopPropagation();
  }

  const changeEntryPrice = (entry) => {
    setEntryPrice(entry.target.value);

  }


  const changeLongPosition = (chb) => {

    if (chb.target.value) {
      setLongPosition(true)
    }
    else {
      setLongPosition(false)
    }

  }

  return (
    <div className="container form-group">
      <h2>Forex Calculator</h2>
      <form className="form-group">



        {' '}<input type="checkbox" placeholder="long/short" onChange={changeLongPosition} />
        <br />
        {/* <input type="number" placeholder="balance" onChange={calculateBalance} /> */}
        {/* <input type="number" placeholder="risk percentage" onChange={calculateRisk} /> */}


        <input type="number" placeholder="atr" onChange={changeAtr} />


        {/* <input type="number" placeholder="sl" value={sl} onChange={calculate} /> */}

        <input type="number" placeholder="entryPrice" onChange={changeEntryPrice} />



        <br></br>
        {/* <label>amountRisk:{' '}$</label>
        {amountRisked}<br /> */}
        {/* <label>position size(lots):{' '}</label> */}
        {/* {standardLots}<br /> */}


        <label>SL:</label>

        <input type="number" value={sl} />

        <br />


        <label>TP:</label>

        <input type="number" value={tp}></input>
        <br />


        <input type="button" onClick={calculateSL_TP} value="calculate SL and TP"></input>





        {/* <input type="number" ref="principal" placeholder="Loan Amount" value={this.state.value.principal} onChange={this.handleChange}/><br/>
      <input type="number" ref="rate" placeholder="Interest Rate" value={this.state.value.rate} onChange={this.handleChange}/><br/>
      <input type="number" ref="term" placeholder="Length of loan" value={this.state.value.term} onChange={this.handleChange}/><br/>
      <h3>Your estimated monthly payment is ${this.state.payment}</h3> */}
      </form>
    </div>
  );
}

export default App;
