require 'nokogiri'
require 'open-uri'
require 'data_mapper'
require 'dm-migrations'
require 'sinatra'
require 'json'
require 'uri'
set :static, true

DataMapper.setup(:default, "sqlite://#{File.expand_path(File.dirname(__FILE__))}/players.db")

class Player
  include DataMapper::Resource
  property :id,           Serial                      # An auto-increment integer key
  property :name,         String                      # A varchar type string, for short strings
  property :position,     String                      # Their position on the pitch
  property :team,         String                      # The national team they play for
  property :imageURL,     String, :length => 1024     # The URL to the image
  property :votes,        Integer                     # The total number of votes
end

DataMapper.finalize
DataMapper.auto_migrate!

countries = Array.new
countries.push(43843, 43849, 43854, 43860, 43876, 43976, 43817, 43819, 43822, 43935, 44037, 43938, 43942, 43946, 43948, 43949, 43954, 43960, 43963, 43965, 43969, 43971, 43901, 43909, 43911, 43921, 43922, 43924, 43925, 43926, 43927, 43930)

#This was an attempt to get all the country codes, but I ended up just hardcoding it
#cDoc = Nokogiri::HTML(open('http://www.fifa.com/worldcup/teams/index.html'))
#cDoc.css('div.qualifiedteamscontainer col-xs-2').each do |element|
#  p element
#  element.css('ul li').each do |country|
#    toAdd = country.css('a').text;
#    toAdd = toAdd.sub("/worldcup/teams/team=", "")
#    toAdd = toAdd.sub("/index.html")
#    countries.push(toAdd)
#    p toAdd
#  end
#end

countries.each do |countryCode|
  puts countryCode.to_s
  doc = Nokogiri::HTML(open('http://www.fifa.com/worldcup/edition=2014/_final/teams/team=' + countryCode.to_s + '/library/edition2014/_players/_players_list.html'))
  #puts doc

  doc.css('div.p-list div.p').each do |element|
    if (element.css('div.p-i img')[0].attributes['src'].to_s == "http://img.fifa.com/imgml/void.gif")
      imgURL = element.css('div.p-i img')[0].attributes['data-src']
    else 
      imgURL = element.css('div.p-i img')[0].attributes['src']
    end
    imgURL = imgURL.text.sub("prt-1", "prt-3")
  
    Player.create(:name => element.css('div.p-n span.p-n-webname').text, :position => element.css('div.p-n span.p-i-fieldpos').text, :team => URI.escape(element.css('div.p-n span.p-i-clubname').text), :imageURL => imgURL, :votes => 0)
    #puts element.css('div.p-n span.p-i-fieldpos').text
  end
end

get '/' do
  redirect to('/1')
end

get '/:pageNum' do
  erb :soul, :locals => {:pageNum => params[:pageNum]}
end

get '/players/pageJSON/:pageNum' do
  content_type :json
  offset = (params[:pageNum].to_i - 1) * 18
  players = Player.all(:offset => offset, :limit => 18, :order => [:votes.desc])
  players.to_json
end

get '/players/country/:country' do
  erb :byCountry, :locals => {:country => params[:country]}
end

get '/players/countryJSON/:country' do
  content_type :json
  players = Player.all(:team => URI.escape(params[:country]), :order => [:votes.desc])
  players.to_json
end

get '/players/position/:position' do
  erb :byPosition, :locals => {:position => params[:position]}
end

get '/players/positionJSON/:position' do
  content_type :json
  players = Player.all(:position => params[:position], :order => [:votes.desc])
  players.to_json
end

post '/up/:player' do
  player = Player.first(:name => URI.unescape(params[:player]))
  current = player.votes
  current = current + 1
  player.update(:votes => current)
  redirect to('/')
end

post '/down/:player' do
  player = Player.first(:name => URI.unescape(params[:player]))
  current = player.votes
  current = current - 1
  player.update(:votes => current)
  redirect to('/')
end

post '/players/country/:country/:player/up' do
  player = Player.first(:name => URI.unescape(params[:player]))
  current = player.votes
  current = current + 1
  player.update(:votes => current)
  redirect to('/players/country/' + URI.escape(params[:country]))
end

post '/players/country/:country/:player/down' do
  player = Player.first(:name => URI.unescape(params[:player]))
  current = player.votes
  current = current - 1
  player.update(:votes => current)
  redirect to('/players/country/' + URI.escape(params[:country]))
end

post '/players/position/:position/:player/up' do
  player = Player.first(:name => URI.unescape(params[:player]))
  current = player.votes
  current = current + 1
  player.update(:votes => current)
  redirect to('/players/position/' + URI.escape(params[:position]))
end

post '/players/position/:position/:player/down' do
  player = Player.first(:name => URI.unescape(params[:player]))
  current = player.votes
  current = current - 1
  player.update(:votes => current)
  redirect to('/players/position/' + URI.escape(params[:position]))
end