//defines database columns and data types for spending goal database
module.exports = (sequelize, DataTypes) => {

    let SavingGoal = sequelize.define('SavingGoal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        progress: {
            type: DataTypes.NUMBER,
            allowNull: true,
            defaultValue: 0
        }
    })

    SavingGoal.sync({force: true}).then( () => {
        console.log('synced saving goals table')
    })

    return SavingGoal
}