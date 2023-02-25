const containerBlog = document.querySelector(".container-blog");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const APIurl = `https://mhagenflowerpower.one/TheUnderground/wp-json/wp/v2/posts/${id}?_embed`;

async function getPosts(url) {
  const response = await fetch(url);
  const post = await response.json();
  console.log(post);

  containerBlog.innerHTML += `<div class="container-title">
  <div>
    <h1>${post.title.rendered}</h1>
    <span>${post.tag_names[0]}</span>
  </div>

  <div class="container-img">
  <img src=${post._embedded["wp:featuredmedia"]["0"].source_url}>
  </div>

  <div class="container-info">
    <span>Info</span>
    <ul>
      <li>${post.tag_names[0]}</li>
      <li>${post.tag_names[1]}</li>
      <li>${post.tag_names[2]}</li>
      <li>${post.tag_names[3]}</li>
      <li>${post.tag_names[4]}</li>
    </ul>
  </div>
</div>
<div class="container-content">
  <h2>${post.title.rendered} - Review</h2>
  <p>${post.content.rendered}</p>
</div>`;

  const postTags = post.tags;
  return postTags;
}

getPosts(APIurl);
