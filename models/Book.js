'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING, //Title is the only required area
      validate: {
        notEmpty: {
          msg: '"Title" is required'
        }  
      }
    },
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    year: DataTypes.INTEGER,
  }, {});
  Book.associate = function(models) {
    // associations can be defined here, if the app is made more complex
  };
  return Book;
};