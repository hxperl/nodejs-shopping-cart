var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('127.0.0.1/shopping');

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg',
    title: 'Rainbow Six Siege',
    description: 'A new FPS experience that puts tactical combat and destruction at the center of of the action. Available now on PS4, Xbox One & PC.',
    price: 10000
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/_zDZYrIUgKE/maxresdefault.jpg',
    title: 'Dark Soul 3',
    description: 'Dark Sous 3 is an action RPG developed by FromSoftware and published internationally by Bandai Namco',
    price: 10000
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png',
    title: 'Call of Duty Black ops2',
    description: 'Call of Duty: Black Ops II is a first-person shooter video game, developed by Treyarch and published by Activision.',
    price: 10000
  }),
  new Product({
    imagePath: 'https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg',
    title: 'GTA 5',
    description: 'Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games.',
    price: 10000
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg',
    title: 'Fallout 4',
    description: 'Bethesda Game Studios, the award-winning creators of Skyrim, welcomes you to the world of Fallout 4.',
    price: 10000
  })   
];  
var done=0;
for(var i=0; i<products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
