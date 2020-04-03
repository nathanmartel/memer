const Meme = require('../lib/models/Meme');

module.exports = async() => {
  
  await Meme.create({
    top: 'get those reports to me',
    image: 'https://makeameme.org/media/templates/250/business_cat.jpg',
    bottom: 'right meow!'
  });

};
