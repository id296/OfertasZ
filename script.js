const sheetUrl = "https://opensheet.vercel.app/14620k8AIFDBsMCI5KJFFhCUYNsVIkrPsVehGydpDfKM/Hoja1";

fetch(sheetUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("noticias");
    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "noticia";

      card.innerHTML = `
        <h2><a href="${item.url}" target="_blank">${item.titulo}</a></h2>
        <p class="fecha">${item.fecha}</p>
        <p>${item.descripcion}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error al cargar las noticias:", error);
    document.getElementById("noticias").innerHTML = "<p>Error al cargar las noticias.</p>";
  });
