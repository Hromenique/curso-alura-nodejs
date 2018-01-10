function ProdutoBanco(connection){
    this._connection = connection;
}

ProdutoBanco.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

module.exports = function () {
    return ProdutoBanco;   
}