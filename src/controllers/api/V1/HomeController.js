const HomeController = {
  index: (req, res) => {
    res.render('index', {
      title: 'Hello hyundo',
      length: 5,
    });
  },
};

export default HomeController;