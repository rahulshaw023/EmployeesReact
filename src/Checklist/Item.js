import React from "react";
import './Item.css'
class Item extends React.Component{

  constructor(){
    super()
    this.state={
      text:true,
      value:0,
      edit:"EDIT"
    }
  }

  editHandler=()=>{

    if(this.state.value==0)
    this.setState({
      text:false,
      value:1,
      edit:"SAVE"
    })

    else{
       this.setState({
      text:true,
      value:0,
      edit:"EDIT"
    })

    }
  }

  render(){

    return (

      <center>
      <li key={this.props.index} className="checklist-item">
      <span>
      <input className="itemin" key={this.props.item} type="text" defaultValue={this.props.item} disabled={this.state.text}/>
      </span>
      
      <button key={this.props.index} className="btn delete-btn editbutton"  onClick={this.editHandler.bind(this)}>{this.state.edit} </button>
      <button  key={this.props.item} value={this.props.item} className="btn delete-btn delbutton" onClick={this.props.del}>DELETE</button>
    </li>
    </center>
  );
  }
  
  }

export default Item;
