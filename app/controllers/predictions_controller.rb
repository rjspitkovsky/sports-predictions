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

  private

  def set_prediction
    @prediction = Prediction.find(params[:id])
  end

  def prediciton_params
    params.require(:prediction).permit(:content, :sport, :status)
  end
end
