const { getMeme, getMemes } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('Meme routes', () => {
  it('creates a meme', async() => {    
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'Struggles for days to make a meme',
        image: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/140427-apps-news-the-best-and-most-famous-internet-memes-around-image4-zeqjykn0ls.jpg?v1',
        bottom: 'Finds Meme Generator'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'Struggles for days to make a meme',
          image: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/140427-apps-news-the-best-and-most-famous-internet-memes-around-image4-zeqjykn0ls.jpg?v1',
          bottom: 'Finds Meme Generator',
          __v: 0
        });
      });
  });

  it('gets all memes', async() => {
    const memes = await getMemes();

    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

});
