const list = document.querySelector(".list");
const ShowMore = document.querySelector(".ShowMore");
let offset = 10;

function onClick(event) {
  console.log("clicked");
  morePosts(APIurl2);
  offset += 10;
  ShowMore.style.display = "none";
}

const APIurl = `https://mhagenflowerpower.one/TheUnderground/wp-json/wp/v2/posts?_embed&per_page=10&categories=3&categories_exclude=7`;
const APIurl2 = `https://mhagenflowerpower.one/TheUnderground/wp-json/wp/v2/posts?_embed&per_page=10&categories=3&categories_exclude=7&offset=${offset}`;

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  for (let i = 0; i < 10; i++) {
    const post = posts[i];
    console.log(post);

    list.innerHTML += `<div class="card2"><a href="blog.html?id=${post.id}"><img src=${post._embedded["wp:featuredmedia"]["0"].source_url}><div class="blog-title"><a href="blog.html?id=${post.id}">${post.title.rendered}</a></div></div>`;
  }
}

async function morePosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(post);

    list.innerHTML += `<div class="card2"><a href="blog.html?id=${post.id}"><img src=${post._embedded["wp:featuredmedia"]["0"].source_url}><div class="blog-title"><a href="blog.html?id=${post.id}">${post.title.rendered}</a></div></div>`;
  }
}

getPosts(APIurl);

ShowMore.addEventListener("click", onClick);
