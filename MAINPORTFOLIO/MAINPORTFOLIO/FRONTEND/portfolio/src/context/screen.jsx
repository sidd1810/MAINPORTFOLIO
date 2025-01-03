import { createContext, useContext,useState,useEffect } from "react";

export const screen=createContext(null)

export const Provider=(props)=>{
  const [count, setCount] = useState(10);

  const [sm, setSm] = useState(false);
  const [result,setResult]=useState(null);
  

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setSm(true);
    } else {
      setSm(false);
    }
    window.addEventListener("resize", () => {
      console.log("Tame Resize Karyu ");

      if (window.innerWidth <= 640) {
        setSm(true);
      } else {
        setSm(false);
      }
    });
  }, []);
    return(
       <screen.Provider value={{sm,result,setResult}}>
         {props.children}
       </screen.Provider>
     
    )
}