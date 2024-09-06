document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("DALL·E 2024-09-06 13.23.18 - A futuristic skyscraper made of glass and steel with organic flowing lines and rooftop gardens, surrounded by smaller modern buildings. The scene is s.webp")
            .then(response => response.json ())
            .then(data => {
                image.src = data.message
                image.width = 100;
                image.height = 100;
            })
    }

})