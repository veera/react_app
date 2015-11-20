var CommentContainer = React.createClass({
  fetchComments() {
    $.getJSON(
      this.props.commentsPath,
      (data) => this.setState({comments: data});
    );
  },
  getInitialState() {
    return { comments: [] };
  },
  render() {
    return <Comment comments={this.state.comments} />;
  }
})
