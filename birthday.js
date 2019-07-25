const  Pool  = require('pg').Pool;



const pool = new Pool({
	user: 'llangford',
	host: 'localhost',
	database: 'testdb',
	password: '',
	port: 5432,
});

pool.query('select extract(month from now())',(err,res) => {
	const month = res;
	console.log(Object.values(res)[3][0]);
});

pool.query("select name from employee where birthday_date = '7/25'", (err, res) => {

	pool.end()
});