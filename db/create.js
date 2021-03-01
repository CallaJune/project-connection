// Inspired by: https://github.com/lacabra/proco-map-app/blob/master/db/dbOps.js

const { Pool } = require('pg');
const pgtools = require("pgtools");

require('dotenv').config();


const config = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: 5432
};

const pool = new Pool()

function createDB() {
	pgtools.createdb(config, process.env.PGDATABASE, function(err, res) {
		if (err) {
			console.error(err);
			process.exit(-1);
		}	
	});
}

function dropDB(){
	pgtools.dropdb(config, process.env.PGDATABASE, function (err, res) {
	    if (err) {
			console.error(err);
			process.exit(-1);
	    }
  	});
}

async function createTables() {
	await pool.query(`
		CREATE TABLE schools(
			school_id INTEGER,
			name STRING,
			lat REAL,
			lon REAL,
			country_code TEXT,
			languages TEXT,
			num_students int,
			email BOOLEAN,
			mail BOOLEAN,
			address TEXT,
			match_id INTEGER,
			num_classrooms INTEGER,
			num_latrines INTEGER,
			num_teachers INTEGER,
			num_sections INTEGER,
			water BOOLEAN,
			electricity BOOLEAN,
			comments TEXT,
			unique (school_id)
		);
	`);

	await pool.query(`
		CREATE TABLE responses(
			date_entered DATE,
			school_id INTEGER,
			name STRING,
			lat REAL,
			lon REAL,
			country_code TEXT,
			languages TEXT,
			num_students int,
			email BOOLEAN,
			mail BOOLEAN,
			address TEXT,
			match_id INTEGER,
			num_classrooms INTEGER,
			num_latrines INTEGER,
			num_teachers INTEGER,
			num_sections INTEGER,
			water BOOLEAN,
			electricity BOOLEAN,
			comments TEXT,
			unique (school_id)
		);
	`);
	await pool.end()
}

async function dropTables() {
	await pool.query(`DROP TABLE IF EXISTS schools; DROP TABLE IF EXISTS responses;`);
	await pool.end();
}


// Uncoment any of the lines below, one at a time, to execute each of the needed self-explanatory functions

//createDB();
//createTables();
//dropTables();
//dropDB();


