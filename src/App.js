import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [amountRisked, setAmountRisked] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [positionSize, setPositionSize] = React.useState(0);

  const [pipsRisk, setPipsRisk] = React.useState(0);
  const [longPosition, setLongPosition] = React.useState(false);

  const [japaneseRelated, setJapaneseRelated] = React.useState(false);

  const [sl, setSl] = React.useState(0);

  const [tp, setTP] = React.useState(0);

  const [entryPrice, setEntryPrice] = React.useState(0);

  const [standardLots, setStandardLots] = React.useState(0);

  const [atr, setAtr] = React.useState(0);

  const [updatedPositionSize,setUpdatedPositionSize] =React.useState(0);


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

  const changeJapaneseRelated = (chb) => {
    if (chb.target.checked) {
      setJapaneseRelated(true)
    }
    else {
      setJapaneseRelated(false)
    }

  }





  const changePositionSize = (pos) => {
    setPositionSize(Number(pos.target.value))
  }


  const calculateSL_TP = () => {
   
    let price = Number(entryPrice);

  
    //atr is pips so convert to decimals:
    let sl_multiply_factor = 1.5;
    let atr_multiplied = japaneseRelated ? atr * 0.01 * sl_multiply_factor : atr * 0.0001 * sl_multiply_factor;

    let tp_multiply_factor = 1;
    let atr_tp = japaneseRelated ? atr * 0.01 * tp_multiply_factor : atr * 0.0001 * tp_multiply_factor;


  
    let baseReferenceAtr = 10;
    if (atr >= baseReferenceAtr)
    {
      setUpdatedPositionSize(((positionSize/2)*baseReferenceAtr/atr).toFixed(5));

    }
    else
    {
      setUpdatedPositionSize((positionSize/2).toFixed(5));

    }
    

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


  }

  const changeEntryPrice = (entry) => {
    setEntryPrice(entry.target.value);

  }


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



        <input type="number" placeholder="position from calculator" onChange={changePositionSize} />
        <br />

        {' '}<input type="checkbox" onChange={changeJapaneseRelated} />{' '}{japaneseRelated ? 'This pair is JPY related' : 'This not JPY related.'}
        <br />
        {' '}<input type="checkbox" onChange={changeLongPosition} />{' '}{longPosition ? 'BUY' : 'SELL'}
        <br />
        <input type="number" placeholder="ATR in pips" onChange={changeAtr} />
        <br />

        <input type="number" placeholder="Entry price" onChange={changeEntryPrice} />


        <br />
        <input type="button" onClick={calculateSL_TP} value="Calculate SL and TP"></input>
        <br />

        
        <label>Updated positionsize (ATR):</label>

        <input type="number" value={updatedPositionSize}></input>
        <br />


        <label>SL:</label>

        <input type="number" value={sl} />

        <br />


        <label>TP:</label>

        <input type="number" value={tp}></input>
        <br />

      </form>
    </div>
  );
}

export default App;
