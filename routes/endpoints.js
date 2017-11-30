const cors = require('cors');

module.exports = (app) => {

  app.post('/api/signin', cors(), (req, res) => {
    console.log('req --->', req.body);
      res.json({ message: 'signed in', token: 'someToken' });
  });

  app.post('/api/updateLocation', (req, res) => {
    res.json({ message: 'updateLocation'});
  });

  app.get('/api/findNearMe', (req, res) => {
    res.json({ message: 'findNearMe'});
  });
};
