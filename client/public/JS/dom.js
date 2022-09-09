const detailsContainer = document.querySelectorAll('.details-container');
const showDetails = document.getElementById('show-details');

detailsContainer.forEach((container)=>{
    container.addEventListener('click',() => {
        showDetails.classList.toggle('show-container');
    })
})

