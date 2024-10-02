function handleMouseEnter () {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEnventListenersTocard() {
    const cardElements = document.getElementsByClassName("s-card");

    for (let i = 0; cardElements.length; i++){
        const card  = cardElements[i];
        card.addEventListener('mouseenter',  handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

function selectCarouselItem(selectedItem){
    console.log("Selecionando item:",selectedItem)
}


document.addEventListener("DOMContentLoaded", addEnventListenersTocard, false);