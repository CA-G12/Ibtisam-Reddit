// For Adding New Post
const newPost = document.getElementById('new-post');
const addPost = document.getElementById('add-post');


addPost.addEventListener('click', () => {
    if(newPost.value){
        fetch('/addPost',{
            headers :{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method : 'POST',
            body : JSON.stringify(newPost.value)
          })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err)=> console.log(err))
    } else {
        alert('Empty Posts are not allowed');
    }
    newPost.value = '';
    // fetch('/homePost')
    // .then((data) => data.json())
    // .then((response) => renderAllPosts(response))
    // .catch((err)=> console.log(err)); or res.redirect('/homePage')
});


const detailsContainer = document.querySelectorAll('.details-container');
const showDetails = document.getElementById('show-details');

detailsContainer.forEach((container)=>{
    container.addEventListener('click',() => {
        showDetails.classList.toggle('show-container');
    })
})
