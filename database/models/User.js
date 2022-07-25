module.exports = (sequelize, dataTypes) => {

    let alias = 'Users';

    let cols = {

        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_first_name: {
            type: dataTypes.STRING
        },
        user_last_name: {
            type: dataTypes.STRING
        },
        user_email: {
            type: dataTypes.STRING
        },
        user_password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.TINYINT
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}