import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>Docker Full Stack App</h1>
      <p>{data.message}</p>
      <pre>{JSON.stringify(data.time, null, 2)}</pre>
    </div>
  );
}

export default App;
