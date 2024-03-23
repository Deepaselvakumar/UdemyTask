import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useRef } from "react";
function AddItem({newI,setNewItems,handleSubmit}){
    const inputRef=useRef()
    return(
        <form className="addForm"onSubmit={handleSubmit}>
            {/* <label >Add Task Here</label> */}
            <input type="text"id="additem"placeholder="Add Task"value={newI} ref={inputRef} onChange={(e)=>setNewItems(e.target.value)}/>
            <button type="submit"onClick={()=>inputRef.current.focus()}><FaPlus/></button>
        </form>
    )
}
export default AddItem;