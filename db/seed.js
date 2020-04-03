const Meme = require('../lib/models/Meme');

module.exports = async() => {
  
  await Meme.create({
    top: 'Struggles for days to make a meme',
    image: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/140427-apps-news-the-best-and-most-famous-internet-memes-around-image4-zeqjykn0ls.jpg?v1',
    bottom: 'Finds Meme Generator',
  });

  await Meme.create({
    top: 'get those reports to me',
    image: 'https://makeameme.org/media/templates/250/business_cat.jpg',
    bottom: 'right meow!'
  });

  await Meme.create({
    top: 'Trapped in the',
    image: 'https://i.imgflip.com/105fef.jpg',
    bottom: 'Meowtrix'
  });

  await Meme.create({
    top: 'Countin\' my',
    image: 'https://quoteswell.com/wp-content/uploads/2017/09/436-min.jpg',
    bottom: 'Benjameowns'
  });

};
