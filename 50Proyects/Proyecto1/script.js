const panels = document.querySelectorAll('.panel') ;

console.log(panels) ;

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
    removeActiveClases();
    panel.classList.add('active')
    })  
});


function removeActiveClases(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    }  )
}