var React = require('react');
var PropTypes = React.PropTypes;

var TeamGenerator = React.createClass({

  getInitialState: function() {
    return {team: ''};
  },

  handleTeamChange: function(e) {
    this.setState({team: e.target.value})
  },

  handleTeamSubmit: function(e) {
    e.preventDefault();
    console.log("Yeah")
    var teamName = this.state.team.trim();
    if(!teamName) {
      return;
    }
    this.props.onTeamSubmit({name: teamName, played: 0, wins: 0, draws: 0, losses: 0, goals_for: 0, goals_against: 0, goal_difference: 0, points: 0})
  },

  render: function() {
    return (
      <div>
        <form className="teamForm" onSubmit={this.handleTeamSubmit}>
          <input type="text" placeholder="Team name" value={this.state.team} onChange={this.handleTeamChange}/>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }

});

module.exports = TeamGenerator;
