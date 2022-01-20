async function newPostFormHandler(event) {
    event.preventDefault();

    const strain_id = document.querySelector('#strain').value.trim();
    const rating = document.querySelector('#rating').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    if (strain_id && rating && comment) {
        const response = await fetch(`/api/reviews`, {
            method: 'POST',
            body: JSON.stringify({ strain_id, rating, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/api/reviews/');
        } else {
            alert('Failed to post!');
        }
    }

}

document.querySelector('.review-form').addEventListener('submit', newPostFormHandler);