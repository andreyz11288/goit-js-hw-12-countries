
// Изменение темы //

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export default function changeTheme() {
  const toolBar = document.querySelector('body')
toolBar.className = `${Theme.LIGHT}`
const inputRef = document.querySelector('.theme-switch__toggle')
inputRef.addEventListener('change', () => {
    let toolBarClassName = toolBar.className;
    if (toolBar.className === `${Theme.DARK}`) { toolBar.className = `${Theme.LIGHT}`; localStorage.setItem('toolBar.className', `${Theme.LIGHT}`); return } else { toolBar.className = `${Theme.DARK}`; localStorage.setItem('toolBar.className', `${Theme.DARK}`) };
    
   
})

const toolBarClassNameTheme = localStorage.getItem('toolBar.className');
toolBar.className = `${toolBarClassNameTheme}`;
if(toolBarClassNameTheme === `${Theme.DARK}`){inputRef.checked = true}
}