$(document).ready(function() {
    // Cambia "API_KEY" por tu propia clave de API
    var apiKey = "TU API AQUI";
    
    // Realiza una solicitud GET a la API para obtener las noticias
    $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey, function(data) {
        // Recorre cada artículo devuelto y agrega su información a la página web
        $.each(data.articles, function(i, article) {
            var noticias = `
				<div class="col-md-4">
					<div class="card mb-4 shadow-sm">
						<img src="${article.urlToImage}" alt="Imagen de noticia" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title">${article.title}</h5>
							<p class="card-text">${article.description}</p>
							<div class="d-flex justify-content-between align-items-center">
								<a href="${article.url}" target="_blank" class="btn btn-sm btn-primary">Leer más</a>
								<small class="text-muted">${article.publishedAt}</small>
							</div>
						</div>
					</div>
				</div>
            `;
            $("#noticias").append(noticias);
        });
    });
});
