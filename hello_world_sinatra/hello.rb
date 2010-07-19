# rvm use jruby
# bundle exec hello.rb
# ab -n 1000 -c 100 http://127.0.0.1:4567/

require "rubygems"
require "bundler"
Bundler.setup
require "sinatra"

get '/hi' do
  "Hello World\n"
end
