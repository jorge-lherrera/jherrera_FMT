const BASE_URL = `http://localhost:9000/users`;

const getUserInfo = async function () {
  try {
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json();
    return data;
  } catch {
    console.error(`Error loading data`);
  }
};

const showInfor = (async function () {
  try {
    await setTimeout(async () => {
      const userInfo = await getUserInfo();
      console.log(userInfo);
    }, 2000);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
})();
