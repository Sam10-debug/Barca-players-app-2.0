import { useState } from "react";
import IntroPage from "./components/IntroPage";
import Nav from "./components/Nav";

import { BarcaContext  } from "./Context/BarcaContext";
import axios from 'axios'
import MainPage from "./components/MainPage";




function App() {
  const [showFirstPage,setShowFirstPage]=useState(true)
  const [data,setData]=useState("")


  
  const Back=()=>{
    setShowFirstPage(true)
  }
  const fetchPlayerData= async()=>{
    axios.get(`https://barca-players-info.herokuapp.com/api/${data}`).then(res=>{
      console.log(res.data)
      setData(res.data)
    }).catch(err=>console.log(err))
  }


  const showSecondPage=()=>{
    setShowFirstPage(false)
    fetchPlayerData()
  
  }
  
  return (
      <div className="App">
        <BarcaContext.Provider value={{showFirstPage,setShowFirstPage,showSecondPage,Back,data,setData,fetchPlayerData}}>
        <Nav />
       { showFirstPage&&<IntroPage />}
        {!showFirstPage&&<MainPage />}
        </BarcaContext.Provider>
      </div>
  );
}

export default App;

