class PredictionsController < ApplicationController
  before_action :set_prediction, only: [:show, :update, :destroy]

  def index
    @predictions = Prediction.all

    render json: @predictions
  end

  def show
    render json: @prediction
  end

  def create
    @prediction = Prediction.new(prediction_params)

    if @prediction.save
      render json: @prediction
    else
      render json: @prediction.errors, status: :unprocessable_entity
    end
  end

  def update
    if @prediction.update(prediction_params)
      render json: @prediction
    else
      render json: @prediction.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @prediction.destroy
  end

  #ADDITIONAL API ENDPOINTS 

  def correct
    @predictions = Prediction.where(status: 'correct')
    render json: @predictions
  end

  def wrong
    @predictions = Prediction.where(status: 'wrong')
    render json: @predictions
  end

  private

  def set_prediction
    @prediction = Prediction.find(params[:id])
  end

  def prediction_params
    params.permit(:content, :sport, :status)
  end
end
