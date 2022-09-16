import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";
import Nav from "./components/Nav";

import { BarcaContext  } from "./Context/BarcaContext";
import axios from 'axios'
import MainPage from "./components/MainPage";





function App() {
  const [showFirstPage,setShowFirstPage]=useState(true)
  const [data,setData]=useState("")
  const [isLoading,setIsLoading]=useState(true)


  
  const Back=()=>{
    setShowFirstPage(true)
  }
  const fetchPlayerData= async()=>{
    await axios.get(`https://barca-players-info.herokuapp.com/api/${data}`).then(res=>{
      console.log(res)
      setData(res.data)
      if(!res.status===200){
        setIsLoading(true)
      }else{
        setIsLoading(false)
      }
    }).catch(err=>console.log(err))
  }


  const showSecondPage=()=>{
    setShowFirstPage(false)
    fetchPlayerData()
  
  }
  
  useEffect(()=>{
    fetch(`https://barca-players-info.herokuapp.com/api/${data}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  })
  
  return (
      <div className="App">
        <BarcaContext.Provider value={{showFirstPage,setShowFirstPage,showSecondPage,Back,data,setData,fetchPlayerData,isLoading}}>
        <Nav />
       { showFirstPage&&<IntroPage />}
        {!showFirstPage&&<MainPage />}
        </BarcaContext.Provider>
      </div>
  );
}

export default App;

