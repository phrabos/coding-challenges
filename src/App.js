// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)


  
  useEffect(() => {
    setLoading(true)
    fetchGif().then(result => {
      setUrl(result);
      
    })
    setLoading(false)
  }, [])

  
  async function fetchGif() {
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=vBCWNyFrAzaje96Ry8yw19DOH35jbpfO')
    const data = await response.json()
    const url = data.data.image_url
    return url
  }

  console.log(fetchGif().then(url3 => console.log(url3))).then()
 
  

  if (loading) return <h1 style={{ color: 'red' }}>loading...</h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={url} alt="logo" />
        <p>
          Random Giphy
        </p>
      </header>
    </div>
  );
}

export default App;
