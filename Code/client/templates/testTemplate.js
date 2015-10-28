findUsers = function(db, callback) {
        var cursor = db.collection('users').find();
        cursor.each(function(err, doc) {
            assert.equals(err, null);
            if(doc != null) {
                console.dir(doc);
            } else {
                callback();
            }
        });
};

MongoClient.connect(url, function(err, db) {
        assert.equals(null, err);
        findUsers(db, function() {
                db.close();
        });
});