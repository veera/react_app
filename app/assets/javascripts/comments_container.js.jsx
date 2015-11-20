var CommentContainer = React.createClass({
  getInitialState() {
    return { comments: [] };
  }
  render() {
    return <Comment comments={this.state.comments} />;
  }
})
