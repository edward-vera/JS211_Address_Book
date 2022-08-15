let arrayOfPosts;
let fivePosts;
let arrayOfComments;
let arrayOfUserIds;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts();
  getFivePosts();
}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
  console.log(arrayOfFivePosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
// Fetch all posts
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  });
};

// Fetch 5 Posts
const getFivePosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => (arrayOfFivePosts = posts.slice(0, 5)));
};

const displayFivePost = () => {
    const showFivePosts = document.getElementById('five-posts')
    arrayOfFivePosts.map((post, index) => {
        const li = `<li>#${index + 1}, Title: ${post.title}: ${post.body}, by user: ${post.userId}</li>`;
            showFivePosts.insertAdjacentHTML('beforeend', li);
    });
};
/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/