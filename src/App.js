import logo from './logo.svg';
import './App.css';
import './components/Tab.css';
import React, {useState} from 'react';

import Tab from './components/Tab';

function App() {

  const[tabs, setTabs] = useState([
    {label: "Tab 1",
    content: "Tab 1 Content -🤖"
    },
    {label: "Tab 2",
    content: "Tab 2 Content - 🦄"},
    {label: "Tab 3",
    content: "Tab 3 Content - 🐉"}
  ]);

  const [index, setIndex] = useState(0);

  return (
    <div className="App">
        <div>
          {tabs.map((item, i)=> <Tab key={i} tab = {item} index ={i} setIndex = {setIndex}></Tab>)}
          <div>
            <p className = "contents">{tabs[index].content}</p>
          </div>
        </div>
    </div>
  );
}

export default App;
