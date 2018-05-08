module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('Example', {
    text1: {
        type: DataTypes.STRING
    }
})
  return Example
}