const sessionUser = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  if (session) {
    return session;
  } else {
    return false;
  }
};

export default sessionUser;
