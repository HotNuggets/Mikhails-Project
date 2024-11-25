function showSearchUsername(){
    try {
        const root = document.querySelector('.userCard') as HTMLDivElement;
        const username =localStorage.getItem('username');
        const userImage=localStorage.getItem('userImage');
        let html=`<img src="${userImage}"></img>
        <label>${username}</label>
        <button id="follow" onclick="handleFollow()">follow</button>
        <button id="unfollow">unfollow</button>`;
        root.innerHTML= html;
    } catch (error) {
        console.log(error);
    }
}

function backHome(){
    localStorage.clear();
    window.location.href = '../home.html';
}
async function handleFollow(){
    const followUserId = localStorage.getItem('userId');
    const response = await fetch('/users/getUser');
    const jsonResponse = await response.json();
    const currentUserId = jsonResponse.user._id;
    if (jsonResponse.user){
        const response = await fetch('/follows/follow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({currentUserId,followUserId}),
        });
        const Response = await response.json();
        if (Response){
            console.log("follow succesfully");
        }
        else{
            console.log("something went wrong");
        }
    }
}
