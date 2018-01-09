module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();        
        
        var produtosBanco = app.infra.produtosBanco(connection);

        produtosBanco.lista((erros, resultados) => {
            if (erros) {
                console.log(erros);
                return;
            }

            res.render("produtos/lista", { lista: resultados });
        });

        connection.end();
    });

    /*
    app.get('produtos/remove', () => {

        var connection = app.infra.connectionFactory;
        var produtosBanco = app.infra.produtosBanco;
        produtosBanco.carrega(connection, id, ()=>{});

        if(produto){
            produtosBanco.remove(connection, produto, callback);
        }
    });
    */
}

