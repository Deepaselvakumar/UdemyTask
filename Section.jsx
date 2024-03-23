import React from "react";
import Item from "./Item.jsx";

function Section({items ,handleCheck,Delete}){
  
    return(
        <main>
            {(items.length)?(
           <Item
           items={items}
           handleCheck={handleCheck}
           Delete={Delete}  />
            ):(<p>Your list is empty</p>)
                }
        </main>
  )
    
}



export default Section;
