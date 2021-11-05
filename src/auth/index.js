export function storeToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}

export function getToken() {
  const myToken = JSON.parse(localStorage.getItem('token'));
  return myToken;
}

export function clearCurrentToken() {
  localStorage.removeItem('token');
}

export function storeUsername(username) {
  localStorage.setItem('username', JSON.stringify(username));
}

export function getUsername() {
  const currentUsername = JSON.parse(localStorage.getItem('username'));
  return currentUsername;
}

export function clearCurrentUser() {
  localStorage.removeItem('username');
}

