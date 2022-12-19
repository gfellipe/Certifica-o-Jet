$("#insert-modal").on("click", function() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://life.plataformaneo.com.br/assets/services/dados.json",
    method: "GET",
    headers: {
      cookie: "PathStorage=%2Fassets%2Fservices%2Fdados.json",
    },
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
    $(".list").append(response);
  });
});


