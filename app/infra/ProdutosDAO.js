function ProdutoDAO(connection){
    this._connection = connection;
}

ProdutoDAO.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

ProdutoDAO.prototype.salva = function(produto, callback){
    this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function () {
    return ProdutoDAO;   
}