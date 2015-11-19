var Comments = React.createClass({
  render() {
    var CreateItem = ({body}) => <Comment comment={body} />;
    return <div>{this.props.comments.map(createItem)}</div>;
  }
});
