import React from "react";
import Checklist from "./Checklist"
import "./style.css";


class App extends React.Component{

  render(){

     return (
    <div>
    <center>
      <h1>Employees Data</h1> </center>
      <Checklist/>
    </div>
    
  );
  }
}

export default App;