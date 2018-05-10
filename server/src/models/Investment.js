module.exports = (sequelize, DataTypes) => {
    const Investment = sequelize.define('Investment', {
        email: DataType.STRING,
        invested: DataType.BOOLEAN,
        tokenAmount: DataType.NUMBER,
        bitcoinAmount: DataType.NUMBER,
        ethereumAmount: Datatype.NUMBER,
        isWithdraw: DataType.BOOLEAN,
        bonusPersent: DataType.NUMBER
    })
}