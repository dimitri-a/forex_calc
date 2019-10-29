import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [amountRisked, setAmountRisked] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [positionSize, setpositionSize] = React.useState(0);

  const [pipsRisk, setPipsRisk] = React.useState(0);
  const [longPosition, setLongPosition] = React.useState(false);

  const [japaneseRelated, setJapaneseRelated] = React.useState(false);


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
    debugger;

    setAtr(Number(atr.target.value))


  }

  const changeJapaneseRelated = (chb) => {



    if (chb.target.checked) {
      setJapaneseRelated(true)

    }

    else {
      setJapaneseRelated(false)
    }


  }


  const calculateRisk = (riskPercentage) => {


    let tmp = Number(riskPercentage.target.value) * 0.01 * balance;

    setAmountRisked(tmp);



  }



  const changeStandardLots = () => {

    let temp = amountRisked / sl;

    standardLots = temp * 10 //this is a microlot $5000 balance to start

  }


  const calculateSL_TP = () => {
    //todo JPY  calculation!
    debugger;

    let price = Number(entryPrice);

    //atr is pips so convert to decimals:
    let sl_multiply_factor = 1;
    let atr_multiplied =  japaneseRelated ? atr*0.01 * sl_multiply_factor: atr*0.0001*sl_multiply_factor;

    let tp_multiply_factor =0.75;
    let atr_tp =  japaneseRelated ? atr*0.01*tp_multiply_factor: atr*0.0001*tp_multiply_factor;

    //SET SL
    if (longPosition) {

      if (japaneseRelated) {
        setSl((price - atr_multiplied).toFixed(5));
      }
      else {
        setSl((price - atr_multiplied).toFixed(5));
      }

    }
    else {
      //setSl((price + atr_multiplied).toFixed(5));
      if (japaneseRelated) {
        setSl((price + atr_multiplied).toFixed(5));
      }
      else {
        setSl((price + atr_multiplied).toFixed(5));
      }
    }




    //set TP
    if (longPosition) {
      if (japaneseRelated) {
        setTP((price + atr_tp).toFixed(5));
      }
      else {
        setTP((price + atr_tp).toFixed(5));
      }

    }
    else {
      if (japaneseRelated) {
        setTP((price - atr_tp).toFixed(5));
      }
      else {
        setTP((price - atr_tp).toFixed(5));
      }
    }

    // e.stopPropagation();
  }

  const changeEntryPrice = (entry) => {
    setEntryPrice(entry.target.value);

  }

  // const change_atr = (val) =>{
  //   if (japaneseRelated)
  //   {
  //     setAtr(Numbe
  //   }
  //   else
  //   {
  //     setAtr(atr.target.value)
  //   }

  // }


  const changeLongPosition = (chb) => {


    if (chb.target.checked) {
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



        {' '}<input type="checkbox" onChange={changeLongPosition} />{' '}{longPosition ? 'BUY' : 'SELL'}
        <br />
        <input type="number" placeholder="ATR in pips" onChange={changeAtr} />
        <br/>

        {' '}<input type="checkbox" onChange={changeJapaneseRelated} />{' '}{japaneseRelated ? 'JPY enabled' : ''}
        <br />
        {/* <input type="number" placeholder="balance" onChange={calculateBalance} /> */}
        {/* <input type="number" placeholder="risk percentage" onChange={calculateRisk} /> */}


     


        {/* <input type="number" placeholder="sl" value={sl} onChange={calculate} /> */}

        <input type="number" placeholder="Entry price" onChange={changeEntryPrice} />


        <br/>
        <input type="button" onClick={calculateSL_TP} value="Calculate SL and TP"></input>
        <br/>
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


        {/* <input type="button" onClick={change_atr} value="STEP 1 : calculate ATR"></input><br/> */}
    





        {/* <input type="number" ref="principal" placeholder="Loan Amount" value={this.state.value.principal} onChange={this.handleChange}/><br/>
      <input type="number" ref="rate" placeholder="Interest Rate" value={this.state.value.rate} onChange={this.handleChange}/><br/>
      <input type="number" ref="term" placeholder="Length of loan" value={this.state.value.term} onChange={this.handleChange}/><br/>
      <h3>Your estimated monthly payment is ${this.state.payment}</h3> */}
      </form>
    </div>
  );
}

export default App;
