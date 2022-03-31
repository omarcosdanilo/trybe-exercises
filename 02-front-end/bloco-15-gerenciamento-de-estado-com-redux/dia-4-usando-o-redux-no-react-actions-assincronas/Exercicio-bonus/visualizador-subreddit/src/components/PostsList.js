import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions'


class PostsList extends Component {
  render() { 
    const { posts, isLoading, reload, selectedSubreddit } = this.props;
    //Código da data retirado do site https://tecadmin.net/get-current-date-time-javascript/
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return (
      <>
       { isLoading && <h3>Carregando...</h3>}
  
       { 
        !isLoading && selectedSubreddit !== '' && (
            <div>
            <div>
              <p style={ {fontWeight: 'bold', fontSize: '1.5rem'} }>
                Last time updated: { time }.
            </p>
                <button onClick={ () => reload(selectedSubreddit.toLowerCase()) }>Refresh</button>
    
            </div>
              <ul>
                {
                  posts.map(({ data: { title } }, index) => <li key={ index }> { title }</li>)
                }
              </ul>
            </div>
          )
        }
      </>

      // isLoading 
      // ? <h3>Carregando...</h3>

      // : (
      //   <div>
      //   <div>
      //     <p style={ {fontWeight: 'bold', fontSize: '1.5rem'} }>
      //       Last time updated: { time }.
      //   </p>
      //       <button onClick={ () => reload(selectedSubreddit.toLowerCase()) }>Refresh</button>

      //   </div>
      //     <ul>
      //       {
      //         posts.map(({ data: { title } }, index) => <li key={ index }> { title }</li>)
      //       }
      //     </ul>
      //   </div>
      //   )
      
    );
  }
}
 
const mapStateToProps = (state) => {
  const { posts, isLoading, selectedSubreddit } = state.subreddit
  return {
    posts,
    isLoading,
    selectedSubreddit
  }
}
 
const mapDispatchToProps = (dispatch) => ({
  reload: (subredditName) => dispatch(fetchPosts(subredditName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);