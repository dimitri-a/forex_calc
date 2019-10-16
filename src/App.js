import React ,{useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [value, setValue] = React.useState('');
  const inputEl =useRef(null);

  const calculate = (event) => {
    
    console.log('hi');
    setValue(event.target.value);

  } 
  return (
    <div className="form-group">
    <h2>Forex Calculator</h2>
    <form className="form-group">

    <input type="number" placeholder="risk" onChange={calculate}/>

    

<label>result value:</label>
{value}


      {/* <input type="number" ref="principal" placeholder="Loan Amount" value={this.state.value.principal} onChange={this.handleChange}/><br/>
      <input type="number" ref="rate" placeholder="Interest Rate" value={this.state.value.rate} onChange={this.handleChange}/><br/>
      <input type="number" ref="term" placeholder="Length of loan" value={this.state.value.term} onChange={this.handleChange}/><br/>
      <h3>Your estimated monthly payment is ${this.state.payment}</h3> */}
    </form>        
  </div>
  );
}

export default App;
