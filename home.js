let index = 0;
let titles = ['Software Engineer', 'iOS Developer', 'Computer Scientist', 'Java Developer']

function nextTitle() {
    index = (index + 1) % titles.length
    return titles[index]
}

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title')
    const name = document.querySelector('#name')
    const nameArray = name.textContent.split("")

    // Initialise name as many spans
    name.textContent = ""
    for(let i =0; i < nameArray.length; i++) {
        name.innerHTML += "<span>" + nameArray[i] + "</span>"
    }

    let timer = setInterval(applyFade, 50)
    let char = 0

    function applyFade() {
        const span = document.querySelectorAll('span')[char]
        span.classList.add('fade');
        char++;

        if (char === nameArray.length) {
            clearInterval(timer);
            timer = null;
            return;
        }
    }

    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            // scroll to button's title
            console.log(`Button pressed: ${button.dataset.where}`)
        }
    })

    setInterval(() => {
        title.innerHTML = nextTitle()
    }, 3000)
})