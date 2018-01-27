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
        res.render('produtos/form', {errosValidacao: {}, produto:{}});
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;      
        
        req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();

        if(erros){
            console.log(erros);

            res.render('produtos/form', {errosValidacao: erros, produto:produto});
            
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

