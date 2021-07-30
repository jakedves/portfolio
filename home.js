
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            // scroll to button's title
            console.log(`Button pressed: ${button.dataset.where}`)
        }
    })
})