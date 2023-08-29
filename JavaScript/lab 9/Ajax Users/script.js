const preloader = document.querySelector("#preloader");
const authorsContainer = document.querySelector("#authors");
const postsContainer = document.querySelector("#posts");

function renderAuthors(authors) {
  const ul = document.createElement("ul");
  authors.forEach((author) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = author.name;

    button.addEventListener("click", (e) => {
      document.querySelectorAll("#authors button").forEach((btn) => {
        btn.classList.remove("active");
      });

      e.target.classList.add("active");
      filterPostsByAuthor(author.id);
      console.log(author.id, e);
    });

    li.appendChild(button);
    ul.appendChild(li);
  });
  authorsContainer.appendChild(ul);
  console.log(authors);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((authorsRes) => authorsRes.json())
  .then((authors) => {
    setTimeout(() => {
      preloader.remove();
      renderAuthors(authors);
    }, 1000);
  })
  .catch((err) => console.log(err));

async function filterPostsByAuthor(id) {
  try {
    const postsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await postsRes.json();
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      const title = document.createElement("h2");
      title.innerText = post.title;
      title.classList.add("title");
      const content = document.createElement("p");
      content.innerText = post.body;
      content.classList.add("content");
      postDiv.appendChild(title);
      postDiv.appendChild(content);
      postsContainer.appendChild(postDiv);
    });
  } catch (err) {
    console.log(err);
  }
}
