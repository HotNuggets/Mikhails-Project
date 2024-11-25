async function handleLogin(e) {
    try {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            window.location.href = './home/home.html';
        } else {
            alert(jsonResponse.error);
        }

    } catch (error) {
        console.error(error);

    }
}

checkCookie();
async function checkCookie(){
    try {
        const response = await fetch('/users/getUser');
        const jsonResponse = await response.json();
        if (jsonResponse.user) {
            window.location.href='./home/home.html'
           
        } else {
           
        }
    }
    catch (error) {
        console.error(error);
    }
}