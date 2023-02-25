const carousel = document.querySelector(".carousel");
const arrowNext = document.querySelector("#arrow-next");
const arrowPrev = document.querySelector("#arrow-prev");

const APIurl = `https://mhagenflowerpower.one/TheUnderground/wp-json/wp/v2/posts?_embed&per_page=12&categories=3&categories_exclude=7&orderby=date`;

async function getPosts(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  for (let i = 0; i < 6; i++) {
    const post = posts[i];
    console.log(post);

    carousel.innerHTML += `<div class="card"><a href="blog.html?id=${post.id}"><img src=${post._embedded["wp:featuredmedia"]["0"].source_url}><div class="blog-title"><a href="blog.html?id=${post.id}">${post.title.rendered}</a></div></div>`;
  }
}

getPosts(APIurl);

arrowNext.addEventListener("click", () => {
  const slideWidth = carousel.clientWidth;
  carousel.scrollLeft += slideWidth;
});

arrowPrev.addEventListener("click", () => {
  const slideWidth = carousel.clientWidth;
  carousel.scrollLeft -= slideWidth;
});
