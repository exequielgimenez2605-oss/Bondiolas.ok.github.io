document.querySelectorAll(".btnPedido").forEach(boton => {
  boton.addEventListener("click", () => {
    let numero = "5491159521772";
    let servicio = boton.getAttribute("data-servicio");
    let mensaje = `hola! Como estas?, me gustaria pedirte info sobre el ${servicio}`;
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});