const Feadback = require('../models/feadback');

function storeFeadback(req , res) {
    // Create new feadback
    const feadback = new feadback({
        title : req.body.title , 
        
        description : req.body.feadback
    });

    feadback.save()
    .then(() => res.redirect('/feadback'));

}

module.exports = {
    storeFeadback
}