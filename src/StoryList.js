import React from 'react';
import SearchForm from './SearchForm';
import Story from './Story';
import axios from 'axios'

const BASE_URL = 'https://hn.algolia.com/api/v1/search';

/** StoryList
 * 
 * State:
 * - hits: array of objects about stories
 * 
 * App -> StoryList -> {SearchForm, Story}
 */
class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hits: [] }
    this.search = this.search.bind(this);
  }

  async search(searchTerm) {
    const result = await axios.get(`${BASE_URL}`, {params: {query: searchTerm}});
    console.log("this is result", result)
    this.setState({ hits: result.data.hits });
  }

  render () {
    const storyDisplay = this.state.hits.map(h => <Story url={h.url} title={h.title} key={h.objectID} />)

    return (
      <div className="StoryList">
        <SearchForm search={this.search} />
        <ul>
          {storyDisplay}
        </ul>
      </div>
    )
  }
}

export default StoryList;