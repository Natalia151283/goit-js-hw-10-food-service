const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('#theme-switch-toggle');
const themeStorage = localStorage.getItem('Theme');

inputEl.addEventListener('change', function() {
    if(inputEl.checked){
        isDarckTheme();
    } else {
        isLightTheme();
    }
});

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const isLightTheme = () => {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK); 
    localStorage.setItem('Theme','LIGHT');
    inputEl.checked = false;
}

const isDarckTheme = () => {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT); 
    localStorage.setItem('Theme','DARK');
    inputEl.checked = true;
}

const selectedTheme = () => {
    if(themeStorage == 'LIGHT') {
        isLightTheme();
    } else if(themeStorage == 'DARK') {
        isDarckTheme();
    } else {
        isLightTheme();
    }
}

selectedTheme();
