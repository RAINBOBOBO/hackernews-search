import React from 'react';

/** SearchForm
 * 
 * Props:
 * - search: function to give searchTerm to StoryList
 * 
 * State:
 * - searchTerm: string
 * 
 * StoryList -> SearchForm
 */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  render () {
    return (
      <form className="SearchForm" onSubmit={evt => this.handleSubmit}>
        <label htmlFor="searchTerm"></label>
        <input 
          id="searchTerm"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;