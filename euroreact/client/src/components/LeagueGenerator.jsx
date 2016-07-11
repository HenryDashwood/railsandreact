var React = require('react');
var PropTypes = React.PropTypes;
var LeagueGenerator = React.createClass({

  getInitialState: function() {
    return {team: ''};
  },

  handleTeamChange: function(e) {
    this.setState({team: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var team = this.state.team.trim();
    if(!team) {
      return;
    }
    this.props.onLeagueSubmit({team: team})
    this.setState({team: ''})
  },

  render: function() {
    return (
      <div>
        <form className="teamForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Team name" value={this.state.team} onChange={this.handleTeamChange}/>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }

});

module.exports = LeagueGenerator;
