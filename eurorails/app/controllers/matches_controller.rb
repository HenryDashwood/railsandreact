class MatchesController < ApplicationController

  def index
    render :json => Match.all
  end

  def show
    render :json => Match.find(params[:id])
  end

  def create
    render :json => Match.create({home_team: params[:home_team], home_score: params[:home_score], away_score: params[:away_score], away_team: params[:away_team]})
  end

  private
  def match_params
    params.require(:match).permit(:home_team, :home_score, :away_score, :away_team)
  end

end
