const saveLastActive = (value: number) => {
  localStorage.setItem("lastActive", String(value));
};

const retrieveLastActive = () => {
  return localStorage.getItem("lastActive");
};

export { saveLastActive, retrieveLastActive };
