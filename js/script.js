// Toggle
const btnSwitch = document.querySelector("#switch-btn");

btnSwitch.addEventListener("click", () => {
    // Alterna a classe "ravens-night" no corpo da página
    document.body.classList.toggle("ravens-night");
    // Alterna a classe "active" no botão de toggle
    btnSwitch.classList.toggle("active");
});
