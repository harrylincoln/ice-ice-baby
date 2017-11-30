module.exports = (app) => {

  app.get('/api/signin', (req, res) => {
      res.json({ message: 'hooray! welcome to our api!' });
  });

  app.post('/api/updateLocation', (req, res) => {
    res.json({ message: 'updateLocation'});
  });

  app.get('/api/findNearMe', (req, res) => {
    res.json({ message: 'findNearMe'});
  });
};
