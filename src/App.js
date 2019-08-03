import React from 'react';
import './App.css';

import Drink from "./components/Drink";

function App() {

  var drinkItems = [];
  drinkItems.push({index: 1, name: "波霸奶茶", price: "50", note: "少冰微糖"});
  drinkItems.push({index: 2, name: "四季春清茶", price: "30", note: "去冰少糖"});
  drinkItems.push({index: 3, name: "紅茶拿鐵", price: "65", note: "少冰半糖"});
  drinkItems.push({index: 4, name: "烏龍瑪其朵", price: "50", note: "少冰半糖"});
  drinkItems.push({index: 5, name: "8冰綠", price: "45", note: "少冰微糖"});
  drinkItems.push({index: 6, name: "四季春＋珍波椰", price: "40", note: "去冰微糖"});
  drinkItems.push({index: 7, name: "可可芭蕾", price: "65", note: "少冰無糖"});

  return (
    <div className="App">
      <header className="App-header">
        <p>DailyDrinks</p>
      </header>
      <Drink initItems={drinkItems}/>
    </div>
  );
}

export default App;
