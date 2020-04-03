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
    top: 'Today',
    image: 'https://i.kym-cdn.com/photos/images/newsfeed/001/490/350/9a3.jpg',
    bottom: 'at Alchemy'
  });

  await Meme.create({
    top: 'Huh??',
    image: 'https://i.kym-cdn.com/photos/images/newsfeed/001/488/512/a52.jpg',
    bottom: '?????'
  });

};
