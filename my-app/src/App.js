import logo from './logo.svg';
import './App.css';
import data from './Components/data';
import Table from './Components/Table';
import { useState } from 'react';
import Divs from './Components/Divs';

function App() {
  const [product, setProduct] = useState(data);

  const handleClick = (curr) => {

    if(curr=="all"){
      setProduct(data);
      return
    }
    const filterarr = data.filter((elem) => {
      return elem.brand === curr;
    });
    setProduct(filterarr);
  };
 
  return (
    <div className="App">
      <h1 style={{ position: "sticky" }}>The Product Table</h1>
      <Table data={product} handleClick={handleClick} />
      <button onClick={()=>handleClick("nike")}>NIKE</button>
      <button onClick={()=>handleClick("ucb")}>UCB</button>
      <button onClick={()=>handleClick("dabur")}>Dabur</button>
      <button onClick={()=>handleClick("all")}>ALL</button>

      <Divs />
    </div>
  )
}

export default App;
