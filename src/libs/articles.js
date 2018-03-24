function postArticle(user, data, db, callback) {
	let articles = db.collection('articles');
	articles.insertOne(data, err => {
		if (err) {
			callback(err);
		}
		callback(null);
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

function getArticle(user, id, db, callback) {
	let articles = db.collection('articles');
	articles.findOne({ _id: id }, (err, doc) => {
		if (err) {
			callback(err, null);
		}
		console.log(doc);
		callback(null, doc);
	});
}

module.exports.post = postArticle;
module.exports.getList = getArticleList;
module.exports.get = getArticle;
