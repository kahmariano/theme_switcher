//function para definir um determinado tema

function setTheme(themeName) {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

// function para alternar(toggle) entre tema claro e escuro
//setTheme significa definir tema
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light')
  } else {
    setTheme('theme-dark')
  }
}

//function para invocar a definição do tema no carregamento inicial
;(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark')
    document.getElementById('slider').checked = false
  } else {
    setTheme('theme-light')
  }
  document.getElementById('slider').checked = true
})()
