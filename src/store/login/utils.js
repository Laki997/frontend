export function getItem(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}

export function setItem(keyName, value) {
  localStorage.setItem(keyName, JSON.stringify(value));
}

export function removeItem(keyName) {
  localStorage.removeItem(keyName);
}
