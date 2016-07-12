var React = require('react');
var PropTypes = React.PropTypes;
var MatchGenerator = React.createClass({

  getInitialState: function() {
    return {match: ''};
  },

  handleTeamChange: function(e) {
    this.setState({match: e.target.value})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var match = this.state.match.trim();
    if(!match) {
      return;
    }
    this.props.onLeagueSubmit({match: match})
    this.setState({match: ''})
  },

  render: function() {
    return (
      <div>
        <form className="matchForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Home team name" value={this.state.home_team} onChange={this.handleMatchChange}/>
          <input type="text" placeholder="Home team score" value={this.state.home_score} onChange={this.handleMatchChange}/>
          <input type="integer" placeholder="Away team score" value={this.state.away_score} onChange={this.handleMatchChange}/>
          <input type="text" placeholder="Away team name" value={this.state.away_team} onChange={this.handleMatchChange}/>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }

});

module.exports = MatchGenerator;
