import React from 'react';

export default class App extends React.Component {

    constructor(props) { 
        super(props)
        this.state = {  
          balance: 0, 
          rate: 0,
          term: 15,
          output: '',
        }
        this.updateValues = this.updateValues.bind(this);
        this.MortgageCalc = this.MortgageCalc.bind(this);
        this.ClickHandle = this.ClickHandle.bind(this);
    }

    updateValues(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    MortgageCalc(balance, rate, term) {
        balance = this.state.balance;
        rate = this.state.rate;
        term = this.state.term;
        let p = balance; 
        let r = rate / 1200; 
        let n =  term * 12; 
        let M = (p * (r * (1 + r) ** n) / ((1 + r) ** n - 1)).toFixed(2);

        return M;
    }  
    
    ClickHandle() {
        let payment = this.MortgageCalc()
        this.setState({output: `$${payment} is your monthly payment.`});
    }
         
  render() {
    return (
      <div className='container center-block'>
        <h1>Mortgage Calculator</h1>
        <p>Balance</p>
        <input name='balance' type='number' value = {this.state.balance} onChange = {this.updateValues}/> 
        <p>Rate(%)</p>
        <input name='rate' type='number' step ='0.01' value = {this.state.rate} onChange = {this.updateValues}/>
        <p>Term</p>
        <select name='term' value={this.state.term} onChange={this.updateValues}>
          <option value ='15'>15year</option>
          <option value='30'>30year</option>
        </select>
        <button className='btn btn-primary btn-block' name ='submit' type='button' value={this.state.output} onClick = {this.ClickHandle}>Calculate Mortgage</button>
        <div name ='output' id='output'> 
              <h4>{this.state.output}</h4> 
        </div>  
      </div>
    );
  }
}