
document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");
    const errorMessage = document.getElementById("error-message");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json(); 
    })
    .then(data => {
    const firstTenPosts = data.slice(0, 10); 
        firstTenPosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(card);
    });
})
    .catch(error => {
    errorMessage.textContent = "Failed to load posts. Please try again.";
    console.error("Fetch error:", error);
    });
});