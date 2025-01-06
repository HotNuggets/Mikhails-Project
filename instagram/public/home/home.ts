
async function getUser() {
    try {
        const response = await fetch('/users/getUser');
        const jsonResponse = await response.json();
        if (jsonResponse.user) {
            
            userCard(jsonResponse.user.username,jsonResponse.user.image, document.querySelector('.userCard'));
        } else {
            window.location.href = './../login/login.html';
        }
       
       
    }
    catch (error) {
        console.error(error);
    }
}

getUser();

function userCard(userName:string,userImage:string, element:HTMLElement|null){
    try {
        if(!element){
            throw new Error('Element not found');
        }
        let html = `<div id="user-card-container">
            <img src="${userImage}" alt="user image">
            <span id="user-name" style="cursor: pointer;">${userName}</span>
            <button id="logout" onclick="logout()">logout</button>
            </div>`;
        element.innerHTML = html;
    
        
        const userNameElement = document.getElementById("user-name");
        if (userNameElement) {
            userNameElement.addEventListener("click", () => {
                window.location.href = '../profilePage/profilePage.html';
               
            });
        }
    } catch (error) {
        console.error(error);
    }
    
}
async function logout(){

    const response = await fetch('/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId:"userId" }),
    });
    const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            localStorage.clear();
            window.location.href = '../index.html';
        } else {
            alert(jsonResponse.error);
        }

}
async function findUserName(event){
    try {
        event.preventDefault();
        const form = event.target;
        const data = form.username.value;
        console.log(data);
        const response = await fetch('/users/getUserName', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: data }),
        });

        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            console.log("Saving to localStorage: ", jsonResponse.user.username, jsonResponse.user.image, jsonResponse.user._id);

            
            localStorage.setItem('username', jsonResponse.user.username);
            localStorage.setItem('userImage', jsonResponse.user.image);
            localStorage.setItem('userId', jsonResponse.user._id);
            window.location.href = './search/search.html';
        } else {
            alert(jsonResponse.error);
           
        }

    } catch (error) {
        console.error(error);

    }

}

const button=document.querySelector("#create-Post") as HTMLButtonElement;
button.addEventListener("click",()=>{

    window.location.href='../post/createPost.html';
});
    
async function displayFollowedPosts() {
    try {
        const response = await fetch('/posts/getPosts');
        const jsonResponse = await response.json();

        if (jsonResponse.posts) {
            const postsContainer = document.getElementById('postsContainer') as  HTMLDivElement;

            postsContainer.innerHTML = ''; 

            jsonResponse.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';

                postElement.innerHTML = `
                    <div class="post-header" data-user-id="${post.author._id}" style="cursor: pointer;">
                        <img src="${post.author.image}" alt="${post.author.username}'s profile picture" class="author-image">
                        <span class="author-name">${post.author.username}</span>
                    </div>
                    <p class="post-content">${post.content}</p>
                    ${post.imageURL ? `<img src="${post.imageURL}" alt="Post image" class="post-image">` : ''}
                    <div class="post-footer">
                        <button onclick="handleLikePost('${post._id}')">Like (${post.likes.length})</button>
                        <button onclick="handleShowComments('${post._id}')">Comments (${post.comments.length})</button>
                    </div>
                `;

                postsContainer.appendChild(postElement);
            });
            postsContainer.addEventListener('click', event => {
                const target = event.target as HTMLElement;
                const postHeader = target.closest('.post-header');
                if (postHeader) {
                    const userId = postHeader.getAttribute('data-user-id');
                    if (userId) {
                        handleProfile(userId);
                    }
                }
            });
        } else {
            console.error("Failed to load posts.");
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

}

async function  handleLikePost(postId) {
    try {
        const getuser = await fetch('/users/getUser');
        const user = await getuser.json();
        const userId = user.user._id;
        console.log(user.user._id,postId);
        const response = await fetch('/posts/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId , userId}),
        });

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (response.ok) {
            // Update the likes count in the DOM
            const likesCountElement = document.getElementById(`likes-count-${postId}`);
            if (likesCountElement) {
                likesCountElement.textContent = jsonResponse.likesCount;
            }
        } else {
            console.error("Error liking post:", jsonResponse.error);
        }
    } catch (error) {
        console.error("There was an error:", error);
    }
}

function handleProfile(userId){
    console.log(userId);
    localStorage.setItem('otherUserId', userId);
    window.location.href = '../otherUserPage/otherUserPage.html';
}
