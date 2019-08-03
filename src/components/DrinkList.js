import React, { Component } from "react";
import DrinkListItem from "./DrinkListItem"

class DrinkList extends Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <DrinkListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} editItem={this.props.editItem}/>
        );
      });
      return (
        <ul className="list-group"> {items} </ul>
      );
    }
  }


  export default DrinkList;