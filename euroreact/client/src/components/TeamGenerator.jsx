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
    this.props.onTeamSubmit({name: teamName})
  },

  teamMatchesPlayed: function() {
    for(match of matches) {

      if(match.home_team === team.name) {
        team.played += 1;
        team.goals_for += match.home_score;
      } else if(match.away_team === team.name) {
        team.played += 1;
        team.goals_for += match.away_score;
      } else {
        return;
      };
    };
  },

  teamWins: function() {
    for(match of matches) {
      if((match.home_team === team.name) && match.homeTeamWon) {
        team.wins += 1;
        team.points += 3;
      } else if((match.away_team === team.name) && match.awayTeamWon) {
        team.wins += 1;
        team.points += 3;
      }
      else {
        return;
      }
    }
    return total;
  },

  teamDraws: function() {
    for(match of matches) {
      if(((match.home_team || match.away_team) === team.name) && match.draw) {
        team.draws += 1;
        team.points += 1;
      }
    }
    return total;
  },

  teamLosses: function() {
    for(match of matches) {
      if((match.home_team === team.name) && match.awayTeamWon) {
        team.losses += 1;
      } else if((match.away_team === team.name) && match.homeTeamWon) {
        team.losses += 1;
      }
      else {
        return;
      }
    }
  },

  teamGoalDifference: function() {
    team.goal_difference === team.goals_for - team.goals_against;
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

//Make another form to make matches and take in match results
//make that form update the league table appropriately
