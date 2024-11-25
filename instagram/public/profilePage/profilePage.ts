async function displayUserPosts() {
    try {
        // Fetch the current user ID (you might retrieve it from localStorage or a similar method)
        const response = await fetch('/users/getUser');
        const user = await response.json();
        const userId = user.user._id;
        
        // Get the posts of the current user
        const postsResponse = await fetch(`/posts/profile/${userId}`);
        const postsData = await postsResponse.json();
        console.log(postsData);
        // Target the DOM element where posts will be displayed
        const postsContainer = document.getElementById("user-posts") as HTMLDivElement;
        postsContainer.innerHTML = ""; // Clear any existing content

        // Loop through the posts and create HTML for each post
        postsData.posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            postElement.innerHTML = `
                <h3>${post.author.username}</h3>
                <p>${post.content}</p>
                <img src="${post.imageURL}" alt="Post Image" />
                <p>Likes: <span id="likes-count-${post._id}">${post.likes.length}</span></p>
                <button onclick="handleLikePost('${post._id}')">Like</button>
            `;

            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error displaying user posts:', error);
    }
}
const button=document.querySelector("#homepage") as HTMLButtonElement;
button.addEventListener("click",()=>{
   
    window.location.href='../home/home.html';
});