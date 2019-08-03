import React, { Component } from "react";

class DrinkForm extends Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.itemName.focus();
      this.refs.itemNote.focus();
      this.refs.itemPrice.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemName = this.refs.itemName.value;
      var newItemNote = this.refs.itemNote.value;
      var newItemPrice = this.refs.itemPrice.value;
      
      if(newItemName) {
        this.props.addItem({newItemName},{newItemNote},{newItemPrice});
        this.refs.form.reset();
      }
    }
    render () {
      return (
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input type="text" ref="itemName" className="form-control" placeholder="飲品名稱"/>
          <input type="text" ref="itemNote" className="form-control" placeholder="甜度冰塊"/>
          <input type="text" ref="itemPrice" className="form-control" placeholder="價格"/>
          <button type="submit" className="btn">Add</button> 
        </form>
      );   
    }
  }


  export default DrinkForm;