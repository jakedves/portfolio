let index = 0;
let titles = ['Software Engineer', 'iOS Developer', 'Computer Scientist', 'Java Developer']

function nextTitle() {
    index = (index + 1) % titles.length
    return titles[index]
}

document.addEventListener('DOMContentLoaded', () => {

    /* Change the title every few seconds */
    const title = document.querySelector('#title');
    const interval = 3000;
    setInterval(() => { // syncs animation with the change of title
        title.style.animationPlayState = 'running';
        title.style.animationDuration = `${interval}ms`;
        title.textContent = nextTitle();
    }, interval);
})