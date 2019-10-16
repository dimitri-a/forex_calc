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

  const [tp, setTp] = React.useState(0);

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

    setAtr(Number(atr.target.value))

  }


  const calculateRisk = (riskPercentage) => {


    let tmp = Number(riskPercentage.target.value) * 0.01 * balance;

    setAmountRisked(tmp);



  }



  const changeStandardLots = () => {

    let temp = amountRisked / sl;

    standardLots = temp * 10 //this is a microlot $5000 balance to start

  }


  const changeEntryPrice = (entry) => {
    debugger
    setEntryPrice(entry.target.value);

   
//todo JPY  calculation!


let nr = Number(entryPrice);
let b = atr * 1.5)/10000;

    if (longPosition) {
      //setSl(Number(entryPrice) - ( );
    }
    else {
      //setSl(Number(entryPrice) + (atr * 1.5)/10000);
    }

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

        <label>TP:</label>

        {tp}
        <br />

        <label>SL:</label>

        {sl}

      





        {/* <input type="number" ref="principal" placeholder="Loan Amount" value={this.state.value.principal} onChange={this.handleChange}/><br/>
      <input type="number" ref="rate" placeholder="Interest Rate" value={this.state.value.rate} onChange={this.handleChange}/><br/>
      <input type="number" ref="term" placeholder="Length of loan" value={this.state.value.term} onChange={this.handleChange}/><br/>
      <h3>Your estimated monthly payment is ${this.state.payment}</h3> */}
      </form>
    </div>
  );
}

export default App;
