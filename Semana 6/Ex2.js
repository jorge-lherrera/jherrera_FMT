// Ex2 - Ex3

const BASE_URL = `http://localhost:9000/users`;

const getUserInfo = async function () {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error loading data: ${error.message}`);
  }
};

const showHtml = document.getElementById("nome");

const updateUserInfo = (async function () {
  try {
    await setTimeout(async () => {
      const users = await getUserInfo();

      showHtml.innerHTML = ` 
      Nome: ${users[0].nome}<br>
      Idade: ${users[0].idade}<br>
      Email: ${users[0].email}
      `;
      console.log(users);
    }, 2000);
  } catch (error) {
    console.error(`Error updating user info: ${error.message}`);
  }
})();
