//defines database columns and data types for spending goal database
module.exports = (sequelize, DataTypes) => {

    let SpendGoal = sequelize.define('SpendGoal', {
        month: {
            type: DataTypes.DATE,
            allowNull: false
        },
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    })

    SpendGoal.sync({force: true}).then( () => {
        console.log('synced spending goals table')
    })

    return SpendGoal
}