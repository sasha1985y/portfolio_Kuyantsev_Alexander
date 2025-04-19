const themes = {
    light: {
        '--background-img-sun':'"🌦"',
        '--background-color': ' #ffffff',
        '--div-background-color': ' #e4e4e4',
        '--text-color': ' #4b4b4b',
        '--text-shadow': '5px 5px 15px #444444',
        '--primary-color': ' #2e4153',
        '--secondary-color': ' #e4e4e4',
        '--filled-color': 'unset',
        '--stroke': '.6px #272727',
        '--custom-box-shadow_1': '3px 3px 3px 3px #2e4153, -3px -3px 3px 3px #2e4153',
        '--custom-box-shadow_2': '3px 3px 3px 3px #e4e4e4, -3px -3px 3px 3px #e4e4e4',
    },
    dark: {
        '--background-img-sun':'"🌤"',
        '--background-color': ' #222f3d',
        '--div-background-color': ' #2e4153',
        '--text-color': ' #ecf0f1',
        '--text-shadow': '10px 10px 30px #2101ec, -10px 10px 30px #d83cec',
        '--primary-color': ' #3ca3e7',
        '--secondary-color': ' #2e4153',
        '--filled-color': 'transparent',
        '--stroke': '.5px #dd3bd0',
        '--custom-box-shadow_1': '3px 3px 3px 3px #3ca3e7, -3px -3px 3px 3px #3ca3e7',
        '--custom-box-shadow_2': '3px 3px 3px 3px #2e4153, -3px -3px 3px 3px #2e4153',
    }
};

let currentTheme = 'light';
const themeBtn = document.getElementById("themeBtn");

const switchTheme = () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    const theme = themes[currentTheme];

    for (const [variable, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(variable, value);
    }
};