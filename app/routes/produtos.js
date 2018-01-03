module.exports = function(app){
    app.get('/produtos', function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'casadocodigo_nodejs'
        });

        connection.query('select * from produtos', function(err, results){
            if(err){
                console.log(err);
                return;
            }
            
            res.send(results);
            //res.render("produtos/lista", {lista: results});
        });

        connection.end();        
        //res.render("produtos/lista");
    });
}

