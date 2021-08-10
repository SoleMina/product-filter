import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  /* OLD VERSION
  onInputChange(event) {
    console.log(event.target.value);
  }
  onInputClick() {
    console.log("Input was clicked");
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }
  onSubmit={(event) => this.onFormSubmit(event)}
  */
  onFormSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmitDone(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
              //onChange={(e) => console.log(e.target.value)}
              //onChange={this.onInputChange}
              onClick={() => console.log("input was clicked")}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
