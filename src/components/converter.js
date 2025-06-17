import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './converter.css';

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const API_KEY = 'cur_live_uz2LHTId8Ij7tbTS4eXjUETntGp9rxRXk6XgnmhR';
  

  useEffect(() => {
    axios.get(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`)

      .then(res => {
       
        const currencyData = res.data.data;
        const currencyCodes = Object.keys(currencyData);
        setCurrencies(currencyCodes);
      })
      .catch(err => console.error('Currency list error:', err));
  }, []);

  const convert = () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }

    axios.get(`https://api.currencyapi.com/v3/latest`, {
      params: {
        apikey: API_KEY,
        base_currency: fromCurrency,
        currencies: toCurrency,
      }
    }).then(res => {
      const rate = res.data.data[toCurrency].value;
      setResult((amount * rate).toFixed(2));
    }).catch(err => console.error('Conversion error:', err));
  };

  return (
    <div className="converter-container">
      <h2> Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="converter-input"
      />

      <div className="converter-selects">
        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
          {currencies.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>

        <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
          {currencies.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <button onClick={convert} className="converter-button">Convert</button>

      {result !== null && (
        <div className="converter-result">
          {amount} {fromCurrency} = {result} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default Converter;
