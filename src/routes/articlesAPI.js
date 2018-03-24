const articles = require(__dirname + '/../libs/articles.js');

module.exports = (app, db) => {
	app.post('/articles', (req, res, next) => {
		const data = req.body;
		articles.post({name: 'jcai'}, data, db, err => {
			if (err) {
				next(err);
			}
			res.json({ success: true });
		});
	});

	app.get('/articles', (req, res, next) => {
		articles.getList({name: 'jcai'}, db, (err, data) => {
			if (err) {
				next(err);
			}
			res.json({ data });
		});
	});

	app.get('/articles/:id', (req, res, next) => {
		articles.get({ name: 'jcai' }, req.params.id, db, (err, data) => {
			if (err) {
				next(err);
			}
			res.json({ data });
		});
	});
}
