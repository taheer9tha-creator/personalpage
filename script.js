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

// Newsletter
document.querySelector(".newsletter button")
.addEventListener("click", () => {
    alert("Thank you for subscribing!");
});

// Search
document.querySelector(".search-box button")
.addEventListener("click", () => {
    const query = document.querySelector(".search-box input").value;

    if(query===""){
        alert("Please enter a keyword.");
    }else{
        alert("Searching for: " + query);
    }
});