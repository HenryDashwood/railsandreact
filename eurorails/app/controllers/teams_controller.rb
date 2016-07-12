class TeamsController < ApplicationController

  def index
    teams = Team.all
    render :json => teams
  end

  def show
    render :json => Team.find(params[:id])
  end

  def create
    render :json => Team.create({name: params[:name]})
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end

end
