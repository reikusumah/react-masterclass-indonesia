import React from "react";

class ListItems extends React.Component {
  state = {
    books: ["Who's Child in the Kitchen", "Finding Neverland", "Lady Babushka"],
  };

  render() {
    return (
      <>
        {this.state.books.map(
          (item, i) => (
            i++,
            (
              <p>
                {i}. {item}
              </p>
            )
          )
        )}
      </>
    );
  }
}

export default ListItems;
