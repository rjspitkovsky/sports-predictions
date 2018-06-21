# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!


#TRIED TO RESOLVE CORS ISSUE 
# config.action_dispatch.default_headers = {
#     'Access-Control-Allow-Origin' => 'http://localhost:3001/api/predictions',
#     'Access-Control-Request-Method' => %w{GET POST OPTIONS}.join(",")
#   }
