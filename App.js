import Workingprops from "./components/Workingprops.jsx"
// import './App.css';
// 
function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <Workingprops
          title="Learn React"
          description="In-depth"
        />
        <Workingprops
          title="Practice"
          description="Practice working with React, components etc"
        />
      </ul>
    </div>
  );
}
 
export default App;