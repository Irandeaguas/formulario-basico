const target = document.querySelectorAll('[ data-target]')
const content = document.querySelectorAll('[data-content]')

target.forEach(target=>{
    target.addEventListener('click', ()=>{
        content.forEach(x=>{
            x.classList.remove('active')
        })
        const f = document.querySelector(target.dataset.target)
        f.classList.add('active')
    })
})