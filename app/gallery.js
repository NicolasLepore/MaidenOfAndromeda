const favorites = document.querySelectorAll("[data-gallery-fav]");
favorites.forEach(fav => {
    fav.addEventListener('click', (e) => {
        
        

        if(e.target.src === 'http://127.0.0.1:5500/imgs/estrela.png') {
            e.target.src = "../imgs/estrela-amarela.png";
        } else {
            e.target.src = "../imgs/estrela.png";
        }
        
    })
})