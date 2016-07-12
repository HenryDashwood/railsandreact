var React = require('react');
var PropTypes = React.PropTypes;

var Team = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }

});

module.exports = Team;
