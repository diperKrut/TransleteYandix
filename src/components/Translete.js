import React, {useContext,useRef} from "react";
import  {context} from "../App";

export  default function Translete(props) {
    let {handler,SelectLang}= useContext(context);
    let refInput= useRef();
    const Refs=(e)=>{
        handler(refInput.current.value);
    }
    return(
        <div className="form-group">
            <select className="form-control" onChange={SelectLang}>
                {props.Langs.map(el=> {
                    return <option key={el} value={el[0]}>{el[1]}</option>
                })}
            </select>
            <br/>
            <textarea className="form-control" cols={100}  rows={10} ref={refInput}/>
            <br/>
            <button className="btn btn-primary" onClick={Refs}>Перевести</button>

        </div>
    )
}