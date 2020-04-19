import React, { Component } from "react";

export default class SearchBar extends Component {

  state = {
    term : ''
  }

  onInputChange(e) {
    console.log(e.target.value);
  }

  OnFormSubmit = (e) => {
    e.preventDefault()
    this.props.onsubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.OnFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={e => this.setState({term : e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}
