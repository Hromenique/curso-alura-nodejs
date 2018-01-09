module.exports = function(){
    this.lista = (connection, callback) => connection.query('select * from produtos', callback);

    return this;
}