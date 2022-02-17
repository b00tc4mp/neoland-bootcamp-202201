const detailsLinks = document.querySelectorAll('.experience__show-details')

detailsLinks.forEach(link => {
    link.onclick = event =>{
        event.preventDefault()

        const linkStatus = link.innerText
        const detailBlock = link.nextElementSibling

        if(linkStatus === "+"){
            detailBlock.classList.remove('off')
            link.innerText = "-"
        }
        else{   
            detailBlock.classList.add('off')
            link.innerText = "+"
        }
    }
})

