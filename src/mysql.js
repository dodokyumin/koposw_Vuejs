var mysql = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'koposw44',
  database : 'koposw44',
  port  : 33063
});
  
connection.connect();
  
connection.query('select a.kiho, b.name, count(a.kiho) from tupyo as a, hubo as b where a.kiho = b.kiho group by a.kiho;', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();