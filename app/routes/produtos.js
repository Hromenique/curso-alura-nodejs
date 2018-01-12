module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();        
        
        var produtosBanco = new app.infra.ProdutoDAO(connection);

        produtosBanco.lista((erros, resultados) => {
            if (erros) {
                console.log(erros);
                return;
            }

            res.render("produtos/lista", { lista: resultados });
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
    });
}

