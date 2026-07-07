// Smooth scrolling
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter (No alert)
document.querySelector(".newsletter button")
.addEventListener("click", () => {
    document.querySelector(".newsletter input").value = "";
});

// Search (No alert)
document.querySelector(".search-box button")
.addEventListener("click", () => {
    const query = document.querySelector(".search-box input").value.trim();

    if (query !== "") {
        console.log("Searching for:", query);

        // Optional: Clear the search box
        document.querySelector(".search-box input").value = "";
    }
});
