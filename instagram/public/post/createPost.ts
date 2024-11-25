async function handleCreatePost(event){
    event.preventDefault();
    try{
    const contentElement = document.getElementById("content") as HTMLInputElement;
    const imageUrlElement = document.getElementById("imageurl") as HTMLInputElement;
    const content = contentElement.value;
    const imageURL = imageUrlElement.value;
    const response = await fetch('/users/getUser');
    const jsonResponse = await response.json();
    const userId=jsonResponse.user._id;
   
        const addPostResponse = await fetch('/posts/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content, userId ,imageURL}), // sending content and userId
        });

    const postResponse = await addPostResponse.json();
    if (response.ok) {
        console.log('Post created successfully:', postResponse);
        window.location.href="../home/home.html";
        // Optionally, update the UI or navigate
    } else {
        console.error('Error creating post:', jsonResponse.error);
    }
    }
    catch(error){
        console.log("there is some error", error);
    }

}

checkCookie2();
async function checkCookie2(){
    try {
        const response = await fetch('/users/getUser');
        const jsonResponse = await response.json();
        if (!jsonResponse.user) {
            window.location.href='./home/home.html'
           
        } else {
           
        }
    }
    catch (error) {
        console.error(error);
    }
}

const button=document.querySelector("#discard") as HTMLButtonElement;
button.addEventListener("click",()=>{
    window.location.href='../home/home.html';
});