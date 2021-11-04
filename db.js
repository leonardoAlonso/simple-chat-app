const db = require('mongoose');

db.Promise = global.Promise; // para que mongoose use promesas

// mongodb+srv://db_user_leo_dev:53HSCjtCxWkP@cluster0.g86o4.mongodb.net/platzinode_db

async function connect(url) {

    await db.connect(url, {
        useNewUrlParser: true,
    });

}

module.exports = connect;

