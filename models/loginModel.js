const db = require('./db');

module.exports = {

    validate: function(user, callback) {
        var sql = "select * from user where email='" + user.email + "' and password='" + user.password + "'";
        db.getResults(sql, function(results) {
          callback(results);
            // if (results.length > 0) {
            //     callback(true);
            // } else {
            //     callback(false);
            // }
        });
    }

}
