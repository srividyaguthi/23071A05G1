import { useState } from 'react';

const Fibonacci = () => {
  const [num, setNum] = useState('');
  const [series, setSeries] = useState([]);

  const generateFibonacci = () => {
    const n = parseInt(num);
    if (isNaN(n) || n < 0) return;
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setSeries(n === 1 ? [0] : fib.slice(0, n));
  };

  return (
    <div className="container">
      <h2>Fibonacci Generator</h2>
      <input
        type="number"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={generateFibonacci}>Generate</button>
      {series.length > 0 && (
        <div className="result">
          <h4>Fibonacci Series:</h4>
          <p>{series.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Fibonacci;
