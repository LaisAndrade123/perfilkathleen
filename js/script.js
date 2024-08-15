const toggleTheme = document.getElementById('toggleTheme');

const rootHtml = document.documentElement;


// Função para alternar o Tema
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark"? rootHtml.setAttribute ("data-theme", "light") : rootHtml.setAttribute ("data-theme", "dark");

    toggleTheme.classList.toggle ("bi-sun");
    toggleTheme.classList.toggle ("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// Fim da função mudar o tema

