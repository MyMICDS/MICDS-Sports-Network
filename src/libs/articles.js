function postArticle(user, data, db, callback) {
	db.articles.insertOne(data);
}

module.exports.post = postArticle;
