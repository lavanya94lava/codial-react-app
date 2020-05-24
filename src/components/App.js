import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { PostsList } from "./";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log("props", this.props);
    const { posts } = this.props;
    return <PostsList posts={posts}/>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
