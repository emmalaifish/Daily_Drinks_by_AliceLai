import React, { Component } from "react";
import EditDrink from "./EditDrink";

class DrinkListItem extends Component {
    
    onClickClose = () => {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone = () =>{
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    editItem = (drinkItem,note,price) => {//因為要在這裡拿到index所以要寫一個method呼叫父組建的edit並且再將此方法傳入子組建
      var index = parseInt(this.props.index);
      this.props.editItem(index,drinkItem,note,price);
    }
    
    render () {
      return(
        <li className="list-group-item ">
          <div className="undone">
            <span className="name" onClick={this.onClickDone}></span>
            {this.props.item.name}

            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
            <span className="price" onClick={this.onClickDone}>
            {this.props.item.price}
            </span>
            <div>
              <label className="note">
                <span>{this.props.item.note}</span>
              </label>
            </div>
          </div>
          <EditDrink editItem={this.editItem}/>
        </li>     
      );
    }
  }

export default DrinkListItem;