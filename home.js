let index = 0;
let titles = ['Software Engineer', 'iOS Developer', 'Computer Scientist', 'Java Developer']

const whatido = 'I am an adaptable software developer from London, currently focused on iOS and web development, as well as UI/UX design.\nI have done some basic 3D game development using Unity and C# scripting, and participated in the GMTK 2021 Game Jam.'
const whatido2 = 'I also run an instagram page where I do tutorials in iOS development, and blog about my personal project progress.'

const interests = 'Besides programming, I have interests in both music composition, and guitar playing. I occasionally create thematic pieces using Logic Pro X and practice guitar aiming towards my Grade 8 certificate.'
const interests2 = "I also do some basic graphic design in Photoshop, some of which can be seen on my Instragram. In my downtime I'm often out with friends, or playing video games online with them."

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
    document.querySelector('#interests2').textContent = interests2
    document.querySelector('#whatido').textContent = whatido
    document.querySelector('#whatido2').textContent = whatido2
})