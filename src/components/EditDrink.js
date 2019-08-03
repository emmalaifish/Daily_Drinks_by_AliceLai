import React, { Component } from "react";

class EditDrink extends Component {
    onSubmit = (event) => {
        event.preventDefault();
        var ItemName = this.refs.itemName.value;
        var ItemNote = this.refs.itemNote.value;
        var ItemPrice = this.refs.itemPrice.value;
        
        if(ItemName) {
          this.props.editItem(ItemName,ItemNote,ItemPrice);
          this.refs.form.reset();
        }
      }
    render () {
        return (
          <form ref="form" onSubmit={this.onSubmit} className="form-inline">
            <input type="text" ref="itemName" className="form-control" placeholder="飲品名稱"/>
            <input type="text" ref="itemNote" className="form-control" placeholder="甜度冰塊"/>
            <input type="text" ref="itemPrice" className="form-control" placeholder="價格"/>
            <button type="submit" className="btn">Edit</button> 
          </form>
        );   
      }
}


export default EditDrink;