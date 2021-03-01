const { Pool } = require('pg');

const pool = new Pool()

export default async (req, res) => {
	if (req.method === 'POST') {
		pool.query(`UPDATE schools SET match_id = ${req.body.match_id} WHERE school_id = ${req.body.school_id}`, (err, res) => {
				console.log(err ? err.stack : res.rows[0]) 
		});
		pool.query(`UPDATE schools SET match_id = ${req.body.school_id} WHERE school_id = ${req.body.match_id}`, (err, res) => {
				console.log(err ? err.stack : res.rows[0]) 
		});
		res.statusCode = 200;
		res.end();
	} else {
		res.statusCode = 405;
		res.end();
	}
}
