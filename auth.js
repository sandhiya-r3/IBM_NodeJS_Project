let users = [];

const authenticated = (username, password) => {
  return users.some(u => u.username === username && u.password === password);
};

const registerUser = (username, password) => {
  if (users.some(u => u.username === username)) return false;
  users.push({ username, password });
  return true;
};

module.exports = {
  users,
  authenticated,
  registerUser
};
