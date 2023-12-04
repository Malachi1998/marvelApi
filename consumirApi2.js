const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8c2d3a5291d897afd32e5ef5af3de2d9&hash=9e9a26ee4eb194216ff8a4b89efba180';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;

                    contentHTML += `
                        <div class="carousel-item">
                            <a href="${urlHero}" target="_blank">
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="d-block w-100">
                            </a>
                            <div class="carousel-caption">
                                <h3 class="title">${hero.name}</h3>
                                <p class="description">${hero.description}</p>
                            </div>
                        </div>`;
                }
                container.innerHTML = `
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            ${json.data.results.map((_, index) => `<li data-target="#carouselExampleIndicators" data-slide-to="${index + 1}"></li>`).join('')}
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${json.data.results[0].thumbnail.path}.${json.data.results[0].thumbnail.extension}" alt="${json.data.results[0].name}" class="d-block w-100">
                                <div class="carousel-caption">
                                    <h3 class="title">${json.data.results[0].name}</h3>
                                    <p class="description">${json.data.results[0].description}</p>
                                </div>
                            </div>
                            ${contentHTML}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                `;
                console.log(json, 'RES.JSON');
            });
    }
};

marvel.render();




/*const marvel = {
    render: () => { //render es un objeto, por eso aparece entre llaves y aparece con una funcion como valor

        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8c2d3a5291d897afd32e5ef5af3de2d9&hash=9e9a26ee4eb194216ff8a4b89efba180';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
        

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) { //con esta linea accedo a todos los elementos del json por eso dice:json.data.results
                    let urlHero = hero.urls[0].url;
                    
                    //con la linea 13 creo el contenido que se introduce en la variable de la linea 6
                    contentHTML += `
                <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}"
                     class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
                }
                container.innerHTML= contentHTML
                console.log (contentHTML)
                console.log(json, 'RES.JSON')
            })
           
    }
}; 

marvel.render();*/