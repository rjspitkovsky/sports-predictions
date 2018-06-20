Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :predictions
    get '/correct', to: 'predictions#correct'
    get '/wrong', to: 'predictions#wrong'
  end
end
