//logout needed variables
const logout = document.getElementById('log-out-btn');
logout.addEventListener('click', ()=>{
    fetch('/logOut')
    .then((response) => {
        if (response.redirected) {
          window.location.href = response.url; 
         } 
       })
    .catch((error) => { 
    swal({
        title: 'Error!',
        text: error,
        icon: 'error',
        button: 'OK',
    })
    });
});

// For Adding New Post
const newPost = document.getElementById('new-post');
const addPost = document.getElementById('add-post');

fetch('/homePost')
.then((data) => data.json())
.then((response) => createPost(response))
.catch((error) => { 
    swal({
     title: 'Error!',
     text: error,
     icon: 'error',
     button: 'OK',
   })
});


const postsContainer = document.getElementById('posts');

function createPost(response) {
    postsContainer.innerText = '';
    
    response.forEach((post) => {
        if(post.content){
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
                                <div class="user-left">
                                    <img src='./assets/reddit-logo.png' alt="" class="user-avatar">
                                    <div class="user-date">
                                        <p class="user-name">${post.username}</p>
                                        <p class="date">${post.post_date}</p>
                                    </div>
                                </div>
                                <div class="user-right">
                                    <ul class="li-user-icons">
                                        <li class="user-icon">
                                            <i class="fa-solid fa-star"></i>                                        </li>
                                        <li class="user-icon">
                                            <button class=" delete-btn edit-btn" onClick="editPost(${post.id})">
                                                <i class="fa-solid fa-pencil"></i>
                                            </button>
                                        </li>
                                        <li class="user-icon" >
                                            <button class="delete-btn" onClick="deletePost(${post.id})">
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </li>
                                    </ul>
                                    <button class="join-btn">joined</button>
                                </div>
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
                                        comment
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
        }
    });
}

addPost.addEventListener('click', () => {
    if(newPost.value){
        fetch(`/addPost/${newPost.value}`)
        .then((res) => res.json())
        .then((data) =>{ 
            if(data.message){ 
                swal({
                    title: data.message,
                    icon: 'success',
                    button: 'OK',
                })
                setTimeout(()=>{ window.location.href = '/homePage'}, 2000);
            }
        })
        .catch((error) => { 
            swal({
             title: 'Error!',
             text: error,
             icon: 'error',
             button: 'OK',
           })
        });
        } else {
        swal('Empty Posts are not allowed');
    }
    newPost.value = '';
});

function deletePost(id) {
    fetch(`/delete/${id}`)
    .then((res) => res.json())
    .then((data) =>{ 
        if(data.message){ 
            swal({
                title: data.message,
                icon: 'success',
                button: 'OK',
            })
                setTimeout(()=>{ window.location.href = '/homePage'}, 2000);
            }
        })
        .catch((error) => { 
            swal({
            title: 'Error!',
            text: error,
            icon: 'error',
            button: 'OK',
        })
    });
}

// function editPost(id) {
//     const userInfo = {
//         post_id: id
//     }
//     fetch(
//         '/edit', {
//         headers :{
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         method : 'POST',
//         body : JSON.stringify(userInfo),
//       }
//       )
//     .then((res) => res.json())
//     .then((data) => {
//         addPost.textContent = 'edit';
//         newPost.value = data[0].content;
//         const post = {
//             post_id: id,
//             content: newPost.value
//         }
//         addPost.addEventListener('click', () =>{
//             fetch(
//                 '/edit/post', {
//                 headers :{
//                   'Content-Type': 'application/json',
//                   'Accept': 'application/json',
//                 },
//                 method : 'POST',
//                 body : JSON.stringify(post),
//             }
//               )
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch((error) => { 
//                 swal({
//                 title: 'Error!',
//                 text: error,
//                 icon: 'error',
//                 button: 'OK',
//             })
//             });
//         })
//     })
// }