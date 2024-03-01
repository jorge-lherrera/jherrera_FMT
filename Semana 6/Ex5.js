const getImages = async function () {
  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10`
    );
    const data = await res.json();
    data.forEach((cat) => {
      const imageUrl = cat.url;
      document.write(
        `<div style="display: inline-block; margin: 10px;"><img src="${imageUrl}" style="width: 200px; height: 200px; object-fit: cover;" /></div>`
      );
    });
  } catch {
    console.error(`Error loading data`);
  }
};

getImages();
