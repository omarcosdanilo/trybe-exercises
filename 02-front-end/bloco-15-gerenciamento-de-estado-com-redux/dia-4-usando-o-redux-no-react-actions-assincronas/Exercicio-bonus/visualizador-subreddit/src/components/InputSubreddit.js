import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubreddit, fetchPosts } from '../redux/actions'

class InputSubreddit extends Component {
  constructor() {
    super()

    this.state = {
      disabled: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { dispatchSubreddit, getPosts } = this.props;
    const subredditSelected = e.target.options[e.target.selectedIndex].text

    dispatchSubreddit(subredditSelected);
    getPosts(subredditSelected.toLowerCase());

    this.setState({
      disabled: true,
    })
  }
  render() { 
    const { disabled } = this.state
    return (
      <div>
        <form onChange={ (e) => this.handleChange(e) }>
          <label htmlFor='select-input'>
            <select id='select-input'>
              <option disabled={ disabled }>Selecionar</option>
              <option name='frontend'>FrontEnd</option>
              <option name='reactjs'>ReactJS</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSubreddit: (subreddit) => dispatch(selectSubreddit(subreddit)),
  getPosts: (subredditName) => dispatch(fetchPosts(subredditName))
})
 
export default connect(null, mapDispatchToProps)(InputSubreddit);