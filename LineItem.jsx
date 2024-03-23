import React from "react";
import { FaTrash } from "react-icons/fa6";

function LineItem({item,handleCheck,Delete}){
    return(
        <li className="item" key={item.id}>
            <input type="checkbox"
            onClick={() => handleCheck(item.id)}
            checked={item.checked}/>
            <label style={(item.checked)?{textDecoration:"line-through"}:null}>{item.item}</label>
            <FaTrash 
            onClick={()=>{Delete(item.id)}}
            role="button"
            class="btn"/>
  
        </li>
    )
}
export default LineItem;