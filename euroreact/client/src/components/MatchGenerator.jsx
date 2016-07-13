var React = require('react');
var PropTypes = React.PropTypes;
var MatchGenerator = React.createClass({

  getInitialState: function() {
    return {home_team: '', home_score: '', away_score: '', away_team: ''};
  },

  handleHomeTeamChange: function(e) {
    this.setState({home_team: e.target.value})
  },

  handleHomeScoreChange: function(e) {
    this.setState({home_score: e.target.value})
  },

  handleAwayScoreChange: function(e) {
    this.setState({away_score: e.target.value})
  },

  handleAwayTeamChange: function(e) {
    this.setState({away_team: e.target.value})
  },

  handleMatchSubmit: function(e) {
    e.preventDefault();
    var home_team = this.state.home_team.trim();
    var home_score = this.state.home_score.trim();
    var away_score = this.state.away_score.trim();
    var away_team = this.state.away_team.trim();
    if(!home_team || !home_score || !away_score || !away_team) {
      return;
    }
    this.props.onMatchSubmit({home_team: home_team, home_score: home_score, away_score: away_score, away_team: away_team})
  },

  homeTeamWon: function() {
    if(match.home_score > match.away_score)
    return true;
  },

  awayTeamWon: function() {
    if(match.home_score < match.away_score)
    return true;
  },

  draw: function() {
    if(match.home_score === match.away_score)
    return true;
  },

  render: function() {

    return (
      <div>

        <form className="matchForm" onSubmit={this.handleMatchSubmit}>
          <input type="text" placeholder="Home team name" value={this.state.home_team} onChange={this.handleHomeTeamChange}/>
          <input type="integer" placeholder="Home team score" value={this.state.home_score} onChange={this.handleHomeScoreChange}/>
          <input type="integer" placeholder="Away team score" value={this.state.away_score} onChange={this.handleAwayScoreChange}/>
          <input type="text" placeholder="Away team name" value={this.state.away_team} onChange={this.handleAwayTeamChange}/>
          <input type="submit" value="Post" />
        </form>

      </div>
    );
  }

});

module.exports = MatchGenerator;
