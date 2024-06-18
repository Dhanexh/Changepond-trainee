// import logo from './logo.svg';
import './App.css';
// import ConditionRenComp from './components/ConditionRenComp';
// import MyImagesComp from './components/MyImagesComp';
import ParentComp from './components/ParentComp';
// import ClassComp from './components/ClassComp';
// import FunctionComp from './components/FunctionComp';
// import MethodEventComp from './components/MethodEventComp';
// import SetStateComp from './components/SetStateComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Welcome to React</h1>
      {/* <FunctionComp myName="Dhanesh" post="Software Developer" company="Changepond" salary="95000"/> */}
      {/* <ClassComp myName="Dhanesh" post="Software Developer"/> */}
      {/* <MethodEventComp></MethodEventComp> */}
      {/* <SetStateComp/> */}
      {/* <ConditionRenComp/> */}
      {/* <MyImagesComp/> */}
      <ParentComp/>
    </div>
  );
}

export default App;
