const APIurl =
  "https://mhagenflowerpower.one/TheUnderground/wp-json/wp/v2/posts?_embed&per_page=12&categories=7&categories_exclude=3";
const container = document.querySelector(".container-about");

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();

  for (let i = 0; i < posts.length; i++) {
    const result = posts[i];
    console.log(result);

    container.innerHTML += `<h1>${result.title.rendered}</h1><p>${result.content.rendered}</p>`;
  }
}

getPosts(APIurl);
