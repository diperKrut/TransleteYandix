import React, {createContext, useState, useEffect} from 'react';
import YandexTransleteApi from "./API/YandexApi";
import  Translete from  "./components/Translete"
import  TransleteReady from  "./components/TransleteReady"


export const context = createContext(null);

function App() {
  let [currentLang, setCurrentLang]= useState("af");
  let [currentLangReady, setCurrentLandReady]= useState("af");
  let [transleteText, setTransleteText]= useState("")
  let [allLangs,setLangs]= useState([])
  const SelectLandReady=e=>{
      setCurrentLandReady(e.target.value);
  }
  const SelectLang=e=>{
      setCurrentLang(e.target.value);
  }
  useEffect(()=>{
      YandexTransleteApi.getAllLangues()
          .then(res=>{
              setLangs(Object.entries(res.data.langs));
          })
  },[]);
  const handler= (text)=>{
        YandexTransleteApi.Translete(text, currentLang+"-"+currentLangReady)
            .then(res=>{
                setTransleteText(res.data.text[0])
            })
    }


  return (
        <context.Provider value={{handler,SelectLang,SelectLandReady}}>
          <div className="App">
            <Translete Langs={allLangs}/>
            <TransleteReady Langs={allLangs} Text={transleteText} />
          </div>
        </context.Provider>

  );
}

export default App;

