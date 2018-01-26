module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();

        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista((erros, resultados) => {
            if (erros) {
                console.log(erros);
                return;
            }

            res.format({
                html: () => res.render('produtos/lista', { lista: resultados }),
                json: () => res.json(resultados)
            });
        });

        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;      
        
        var validatorTitulo = req.assert('titulo', 'Titulo é obrigatorio');
        validatorTitulo.notEmpty();
        var erros = req.validationErrors();

        if(erros){
            console.log("erros de validação");
            res.render('produtos/form');
            
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (erros, resultados) {
            res.redirect('/produtos');
        });

        connection.end();
    });
}

