let index = 0;
let titles = ['Software Engineer', 'iOS Developer', 'Computer Scientist', 'Java Developer']

const whatido = 'I am an adaptable software developer from London, currently focused on iOS and web development, as well as UI/UX design.\nI have also dabbled in some 3D game development using Unity and C#.'
const interests = 'Besides programming, I have interests in both music composition, and guitar playing. I also play video games with my friends in my free time.'

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

    document.querySelector('#interests').textContent = interests
    document.querySelector('#whatido').textContent = whatido
})