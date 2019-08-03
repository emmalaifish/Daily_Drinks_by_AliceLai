import React, { Component } from "react";
import DrinkList from "./DrinkList";
import DrinkForm from "./DrinkForm";

class Drink extends Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.editItem = this.editItem.bind(this);
      this.state = {drinkItems: this.props.initItems};
    }
    
    addItem(drinkItem, note, price) {
      let drinkItems = this.state.drinkItems;
      drinkItems.unshift({
        index: drinkItems.length+1, 
        name: drinkItem.newItemName, 
        price: price.newItemPrice,
        note: note.newItemNote
      });
      this.setState({drinkItems: drinkItems});
    }
    editItem(idx, drinkItem, note, price) {
      let drinkItems = this.state.drinkItems;
      drinkItems[idx].name = drinkItem;
      drinkItems[idx].note = note;
      drinkItems[idx].price = price;
      this.setState({drinkItems: drinkItems});
    }
    removeItem (itemIndex) {
      let drinkItems = this.state.drinkItems;
      drinkItems.splice(itemIndex, 1);
      this.setState({drinkItems: drinkItems});
    }
    markTodoDone(itemIndex) {
      let drinkItems = this.state.drinkItems;
      var todo = drinkItems[itemIndex];
      drinkItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? drinkItems.push(todo) : drinkItems.unshift(todo);
      this.setState({drinkItems: drinkItems});  
    }
    render() {
      return (
        <div id="main">
          <DrinkList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} editItem={this.editItem}/>
          <DrinkForm addItem={this.addItem} />
        </div>
      );
    }
  }
  
  export default Drink;