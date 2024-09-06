let db = require('../models');  // Importamos los modelos

let kanjisController = {
    add(req, res) {
        db.Kanjis.findAll()  // Asegúrate de que db.Kanjis está correctamente definido
        .then(function(kanjis) {
            return res.render('allKanjis', { kanjis: kanjis });
        })
        
    }
};

module.exports = kanjisController;