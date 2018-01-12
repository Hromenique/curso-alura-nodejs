function ProdutoDAO(connection){
    this._connection = connection;
}

ProdutoDAO.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

module.exports = function () {
    return ProdutoDAO;   
}