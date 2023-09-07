const { DataTypes } = require('sequelize');

const Model = (sequelize) => {
    return sequelize.define(
        'gear',
        {
            gearid: {
                type: DataTypes.INTEGER,
                allowNull: false, //NOT NULL
                primaryKey: true,
                autoIncrement: true,
            },
            gearTitle: {
                type: DataTypes.STRING(45),
                allowNull: false, //NOT NULL
            },
            gearExplain: {
                type: DataTypes.STRING(255),
                allowNull: false, //NOT NULL
            },
        },
        {
            freezeTableName: true,
        }
    );
};

module.exports = Model;