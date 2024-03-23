// import React from "react";
// import YouPro1 from "./components/YouPro1";

// // import Header from "./Header";
// import Section from "./Section";
// import Footer from "./Footer";
// import Additem from "./components/Additem";
// import YouPro from "./components/YouPro1";
// const [newItem,setNewItem]=('')
// const handleSumbit=(e)=>{
//   console.log("sumbitted")
// }
// function App(){
//   return(
//     <div>
//          {/* <Additem 
//          newItem={newItem}
//          setNewItem={setNewItem}
//          handleSumbit={handleSumbit}/>
//       <Section />
   
//     <Footer /> */}
//     <div> <YouPro1 /></div>

//     </div>
//   )
// }

// export default App;


// // GAME
// import Demogame from "./components/Game";
// import "./App.css";
// // import Demogame from "./components/Demogame";
// function App() {
//   return (
//     <div>
//       <Demogame />
//     </div>
//   );
// }

// export default App;

// CALCULATOR
// import Calculator from "./components/Calculator";
// function  App(){
//   return(
//     <div><Calculator/></div>
//   )
// }
// export default App;
// import Salem from "./components/Salem"
// function App(){
//   return(
//     <div><Salem /></div>
//   )
// }
// export default App;


// import Form from "./components/Form";
// import Task from "./components/Task";
// import './App.css';
// function App(){
//   return(
//     // <div>
//     //   <Form />
//     //   <Task />
//     //   <Task />
//     //   <Task />
//     //   <Task />
//     //   <Task />
    
import AddItem from "./AddItem.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import {  useState } from "react";

function App() {
  // const API="http://localhost:3000/items";
  const [items, setItems] = useState([
    // {
    //   id: 1,
    //   checked: true,
    //   item: "Practice Coding"
    // },
    // {
    //   id: 2,
    //   checked: false,
    //   item: "Mobile"
    // },
    // {
    //   id: 3,
    //   checked: true,
    //   item: "Communication"
    // }
  ]);
// useEffect(()=>{
//   const fetchItems=async()=>{
//     try{
//       const response =await fetch(API);
//       console.log(response)
//       const listitems=await response.json();
//       console.log(listitems)

//     }catch (err){
//       console.log(err.stack)
//     }
//   }
//   (async()=>await fetchItems())()
// },[])
  const [newItem, setNew] = useState(''); 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNew = { id, checked: false, item };
    const listitemss = [...items, addNew];
    setItems(listitemss);
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
  };

  const Delete = (id) => {
    const list = items.filter((item) => item.id !== id);
    setItems(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub")
    if (!newItem) return;
    addItem(newItem);
    setNew(""); 
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newI={newItem}
        setNewItems={setNew} 
        handleSubmit={handleSubmit}
      />
      <Section items={items} handleCheck={handleCheck} Delete={Delete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
