function getUserInfo() {
  const name = prompt("What is your name?");
  const age = prompt("What is your age?");
  const email = prompt("What is your email?");

  return { name, age, email };
}

const userData = getUserInfo();

localStorage.setItem(`userData`, JSON.stringify(userData));
