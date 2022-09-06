// For Adding New Post
const newPost = document.getElementById('new-post');
const addPost = document.getElementById('add-post');


fetch('/homePost')
.then((data) => data.json())
// .then((data)=> console.log(data))
.then((response) => createPost(response))
.catch((err)=> console.log(err));


const postsContainer = document.getElementById('posts');

function createPost(response) {
    postsContainer.innerText = '';
    
    response.forEach((post) => {
        postsContainer.innerHTML += 
        `
        <div class="post-comments">
                    <div class="post">
                        <div class="votes-section">
                            <i class="fa fa-arrow-up vote-icon" aria-hidden="true"></i>
                            <p class="votes">${post.likes}</p>
                            <i class="fa fa-arrow-down vote-icon" aria-hidden="true"></i>
                        </div>

                        <div class="post-content">
                            <div class="user-info">
                                <img src=${post.avatar} alt="" class="user-avatar">
                                <p class="user-name">${post.username}</p>
                                <ul class="li-user-icons">
                                    <li class="user-icon">
                                        <i class="fa fa-address-book" aria-hidden="true"></i>
                                    </li>
                                    <li class="user-icon">
                                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                                    </li>
                                    <li class="user-icon">
                                        <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                                    </li>
                                    <li class="user-icon" >
                                        <button class="delete-btn" onClick="deletePost(${post.id})">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </li>
                                </ul>
                                <button class="join-btn">joined</button>
                            </div>

                            <div class="user-content">
                                <p class="post-content-para">
                                ${post.content}
                                </p>
                            </div>

                            <div class="post-icons">
                                <ul class="post-icons-list">
                                    <li class="post-icons-item">
                                        <i class="fa fa-comment" aria-hidden="true"></i>
                                        2 comment
                                    </li>
                                    <li class="post-icons-item">
                                        <i class="fa fa-share" aria-hidden="true"></i>
                                        Share
                                    </li>
                                    <li class="post-icons-item">
                                        <i class="fa fa-bookmark" aria-hidden="true"></i>
                                        Save
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        
        `
    });
}


function deletePost(id) {
    fetch(`/delete/${id}`)
    .then(() => { window.location.href = '/homePage' })
    .catch(err => console.log(err))
}

addPost.addEventListener('click', () => {
    if(newPost.value){
        fetch(`/addPost/${newPost.value}`)
        .then(() => window.location.href = '/homePage')
        .catch((err)=> console.log(err))
    } else {
        alert('Empty Posts are not allowed');
    }
    newPost.value = '';
    //create new post with edit and delete button with dom 
    // id clicked it sends to the back the user id with book id and if it matches these it can be deleted.
    // fetch('/homePost')
    // .then((data) => data.json())
    // .then((response) => renderAllPosts(response))
    // .catch((err)=> console.log(err)); 
    // or res.redirect('/homePage')
    // .then(() => { window.location.reload(); });
});