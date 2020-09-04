import React from 'react';

/** Story
 * 
 * Prop:
 * - url: string
 * - title: string
 * 
 * StoryList -> Story
 */
class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>
        <a href={this.props.url} >{this.props.title}</a>
      </li>
    )
  }
}

export default Story;