import React, {useContext} from "react";
import {context} from "../App";


const TransleteReady=(props)=>{
    let {SelectLandReady}= useContext(context);
    return(
        <div className={"form-group"}>
            <select className="form-control" onChange={SelectLandReady}>
                {props.Langs.map(el=> {
                    return <option key={el} value={el[0]}>{el[1]}</option>
                })}
            </select>
            <br/>
            <textarea className={"form-control"} cols="30" rows="10" value={props.Text} disabled>
            </textarea>
        </div>

    )
}

export default TransleteReady;