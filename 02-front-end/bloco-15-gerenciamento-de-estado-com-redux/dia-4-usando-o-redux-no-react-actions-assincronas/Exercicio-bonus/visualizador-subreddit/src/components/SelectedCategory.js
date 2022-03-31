import React, { Component } from 'react';
import { connect } from 'react-redux'

class SelectedCategory extends Component {
  render() { 
    const { selectedSubreddit } = this.props;
    return (
      <h1>Selected: { selectedSubreddit }</h1>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedSubreddit } = state.subreddit
  return {
    selectedSubreddit,
  }

}
 
export default connect(mapStateToProps)(SelectedCategory);