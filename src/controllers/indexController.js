const controller = {
    home: (req, res, next) => {
        res.render('index', { title: 'Comisión 11', subtitle: 'Subtitulo' });
      },
}

module.exports = controller;