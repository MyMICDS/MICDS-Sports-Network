function postArticle(user, data, db, callback) {
	let articles = db.collection('articles');
	articles.insertOne(data, err => {
		if (err) {
			callback(err);
		}
	});
}

function getArticleList(user, db, callback) {
	let articles = db.collection('articles');
	articles.find().project({ content: 0 }).toArray((err, docs) => {
		if (err) {
			callback(err, null);
		}
		callback(null, docs);
	});
}

module.exports.post = postArticle;
