module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    signupMethod: DataTypes.STRING,
    oAuthId: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN
  }, {});
  User.associate = () => {
  };
  return User;
};
