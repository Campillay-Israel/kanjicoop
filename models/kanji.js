module.exports = function(sequelize, dataTypes) {
    let alias = 'Kanjis';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nivel: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: true,
            defaultValue: 0
        },
        tracos: {
            type: dataTypes.TINYINT(2).UNSIGNED,
            allowNull: true,
            defaultValue: 0
        },
        bushu: {
            type: dataTypes.TINYINT(3).UNSIGNED,
            allowNull: true,
            defaultValue: 0
        },
        kanji: {
            type: dataTypes.STRING(8),
            allowNull: false
        },
        onyomi: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        kunyomi: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        portugues: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        espanol: {
            type: dataTypes.STRING(255),
            allowNull: true
        }
    };

    let config = {
        tableName: 'kanji',
        timestamps: false
    };

    let Kanjis = sequelize.define(alias, cols, config);
    return Kanjis;
}