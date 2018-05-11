module.exports = (sequelize, DataTypes) => {
    const Investment = sequelize.define('Investment', {
      
        email: DataTypes.STRING,
        invested: DataTypes.BOOLEAN,
        tokenAmount: DataTypes.INTEGER,
        bitcoinAmount: DataTypes.INTEGER,
        ethereumAmount: DataTypes.INTEGER,
        isWithdraw: DataTypes.BOOLEAN,
        bonusPersent: DataTypes.INTEGER
    })
    return Investment
}