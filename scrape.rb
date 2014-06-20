require 'nokogiri'
require 'open-uri'
require 'data_mapper'
require 'dm-migrations'
require 'sinatra'
require 'json'

DataMapper.setup(:default, "sqlite://#{File.expand_path(File.dirname(__FILE__))}/players.db")

class Player
  include DataMapper::Resource
  property :id,           Serial                      # An auto-increment integer key
  property :name,         String                      # A varchar type string, for short strings
  property :position,     String                      # Their position on the pitch
  property :team,         String                      # The national team they play for
  property :imageURL,     String, :length => 1024     # The URL to the image
end

DataMapper.finalize
DataMapper.auto_migrate!

countries = Array.new
countries.push(43843, 43849, 43854, 43860, 43876, 43976, 43817, 43819, 43822, 43935, 44037, 43938, 43942, 43946, 43948, 43949, 43954, 43960, 43963, 43965, 43969, 43971, 43901, 43909, 43911, 43921, 43922, 43924, 43925, 43926, 43927, 43930)
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
  #puts element
    imgURL = element.css('div.p-i img')[0].attributes['src']
    imgURL = imgURL.text.sub("prt-1", "prt-3")
    #p imgURL
  
    Player.create(:name => element.css('div.p-n span.p-n-webname').text, :position => element.css('div.p-n span.p-i-fieldpos').text, :team => element.css('div.p-n span.p-i-clubname').text, :imageURL => imgURL)
  end
end

get '/' do
  File.read(soul.html)
end

get '/players' do
  content_type :json
  players = Player.all
  players.to_json
end
