


async function createComment(postId: string, content: string, userId: string) {
    try {
        const response = await fetch('/post/addComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId, content, userId }), // sending postId, content, and userId
        });

        const jsonResponse = await response.json();
        
        if (response.ok) {
            console.log('Comment added successfully:', jsonResponse);
            // Optionally, update the UI or notify the user
        } else {
            console.error('Error adding comment:', jsonResponse.error);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}