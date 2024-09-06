module.exports = (sequelize, DataTypes) => {
    const Kanjis = sequelize.define('Kanjis', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nivel: {
        type: DataTypes.TINYINT,
        allowNull: false
      },
      word: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hiragana: {
        type: DataTypes.STRING
      },
      onyomi: {
        type: DataTypes.STRING
      },
      kunyomi: {
        type: DataTypes.STRING
      },
      spanish: {
        type: DataTypes.TEXT
      },
      english: {
        type: DataTypes.TEXT
      }
    }, {
      tableName: 'kanjis',
      timestamps: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  
    return Kanjis;
  };