// Variables
const postsContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

// Fetch Posts from api
async function getPosts() {
	const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

	const data = await res.json();
	return data;
}

// Show posts in DOM
async function showPosts() {
	const posts = await getPosts();

	posts.forEach((post) => {
		const postEl = document.createElement('div');
		postEl.classList.add('post');
		postEl.innerHTML = `
            <div class = "number">${post.id}</div>
            <div class = "post-info">
                <h2 class = "post-title">${post.title}</h2>
                <p class = "post-body">${post.body}</p>
            </div>
        `;

		postsContainer.appendChild(postEl);
	});
}

// show posts
showPosts();
