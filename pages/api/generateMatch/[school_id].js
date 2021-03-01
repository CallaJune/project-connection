const { Pool } = require('pg');

const pool = new Pool()

export default async (req, res) => {
	if (req.method === 'GET') {
		let result = null;
		const school_id = req.query.school_id;
		try {
			result = await pool.query(`
				SELECT school_id,
						name,
						lat,
						lon,
						country_code,
						languages,
						num_students,
						email,
						mail,
						address,
						match_id,
						num_classrooms,
						num_latrines,
						num_teachers,
						num_sections,
						water,
						electricity,
						comments FROM schools
					 WHERE school_id != ${school_id}
					 AND match_id IS NULL
					 ORDER BY RANDOM()
					 LIMIT 1;`);
		} catch(e) {
			console.log(e)
		}	

		let output = null;
		if(result) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			output = JSON.stringify(result.rows[0])
		} else {
			res.statusCode = 500
		}
		res.end(output);
	} else {
		res.statusCode = 405;
		res.end();
	}
}
