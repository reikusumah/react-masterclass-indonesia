import React from "react";
import ListItems from "./ListItems";

class List extends React.Component {
  render() {
    return (
      <>
        <h3>List {this.props.name}</h3>
        <ListItems />
      </>
    );
  }
}

export default List;
