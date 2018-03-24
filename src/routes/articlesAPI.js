const article = require(__dirname + '/../libs/articles.js');

module.exports = (app, db) => {
	app.post('/articles', (req, res, next) => {
		const data = req.body;
		article.post({name: 'jcai'}, data, db, err => {
			if (err) {
				next(err);
			}
		});
	});

	app.get('/articles', (req, res, next) => {
		article.get({name: 'jcai'}, db, (err, data) => {
			if (err) {
				next(err);
			}
			res.json(data);
		});
	});
}
