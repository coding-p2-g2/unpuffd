async function newPostFormHandler(event) {
    event.preventDefault();

    const rating = document.querySelector('#rating').value.trim();
    const comment = document.querySelector('#comment').value.trim();
    const strain_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];

    if (strain_id && rating && comment) {
        const response = await fetch(`/api/reviews`, {
            method: 'POST',
            body: JSON.stringify({ strain_id, rating, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post!');
        }
    }

}

document.querySelector('.review-form').addEventListener('submit', newPostFormHandler);