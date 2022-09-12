fetch('/profile/user')
.then((res) => res.json())
.then((data) => createPost(data))
.catch((error) => { 
    swal({
        title: 'Error!',
        text: error,
        icon: 'error',
        button: 'OK',
    })
});

HTMLElement.prototype.createAppendElement = function (nodeType, properties) {
    const node = document.createElement(nodeType);
    for (let property in properties) {
        node[property] = properties[property];
    }
    this.appendChild(node);
    return node;
};

// For Adding New Post
const newPost = document.getElementById('new-post');
const addPost = document.getElementById('add-post');
const postsContainer = document.getElementById('posts');
const usernameLeft = document.querySelector('.username');
const username = document.querySelector('.name');
const namee = document.querySelector('.name-light');
const home = document.querySelector('.home');
home.addEventListener('click', () => {
    window.location.href='/homePage'
})

function createPost(data) {
    postsContainer.innerText = '';
    
    data.forEach((ele) => {
        usernameLeft.textContent = ele.username;
        username.textContent = ele.username;
        namee.textContent = '@'+ele.username;
        if(ele.content){

            const postComments = postsContainer.createAppendElement('div', { className : 'post-comments', id: ele.id});
            const post = postComments.createAppendElement('div', { className : 'post'});
            const votesSection = post.createAppendElement('div', { className : 'votes-section'});
            votesSection.createAppendElement('i', { className : 'fa fa-arrow-up vote-icon'});
            votesSection.createAppendElement('p', { className : 'votes', innerText: ele.likes })
            votesSection.createAppendElement('i', { className : 'fa fa-arrow-down vote-icon'});
    
            const postContent = post.createAppendElement('div', { className : 'post-content'});
            const userInfo = postContent.createAppendElement('div', { className : 'user-info'});
            const userLeft = userInfo.createAppendElement('div', { className : 'user-left'});
            
            userLeft.createAppendElement('img', { className:  'user-avatar', src : './assets/reddit-logo.png'});
            const userDate = userLeft.createAppendElement('div', { className: 'user-date'});
            userDate.createAppendElement('p', { className: 'user-name', textContent: ele.username});
            userDate.createAppendElement('p', { className: 'date', textContent: ele.post_date});
            
            const userRight = userInfo.createAppendElement('div', { className: 'user-right'});
            const userIcons = userRight.createAppendElement('ul', { className: 'li-user-icons'});
            const userIconsItem1 = userIcons.createAppendElement('li', { className: 'user-icon'});
            userIconsItem1.createAppendElement('i', { className: 'fa-solid fa-star'});
            const userIconsItem2 = userIcons.createAppendElement('li', { className: 'user-icon'});
            const editBtn = userIconsItem2.createAppendElement('button', { className:'delete-btn edit-btn'});
            editBtn.createAppendElement('i', { className: 'fa-solid fa-pencil'});
            editBtn.addEventListener('click', () => editPost(ele.id, ele.content));

            const userIconsItem3 = userIcons.createAppendElement('li', { className: 'user-icon'});
            const deleteBtn = userIconsItem3.createAppendElement('button', { className:'delete-btn'});
            deleteBtn.createAppendElement('i', { className: 'fa fa-trash'});
            userRight.createAppendElement('button', { className: 'join-btn', textContent: 'joined'});
            deleteBtn.addEventListener('click', ()=> deletePost(ele.id))

            const userContent = postContent.createAppendElement('div', { className: 'user-content'});
            const postText = userContent.createAppendElement('p', { className: 'post-content-para', textContent: ele.content, id : ele.id});

            const postIcons = postContent.createAppendElement('div', { className: 'post-icons'});
            const postIconsList = postIcons.createAppendElement('ul', { className: 'post-icons-list'});
            const postIconItem = postIconsList.createAppendElement('li', { className: 'post-icons-item', textContent: 'comment'});
            postIconItem.createAppendElement('i', { className: 'fa fa-comment' });
            const postIconItem2 = postIconsList.createAppendElement('li', { className: 'post-icons-item', textContent: 'share'});
            postIconItem2.createAppendElement('i', { className: 'fa fa-share' });
            const postIconItem3 = postIconsList.createAppendElement('li', { className: 'post-icons-item', textContent: 'Save'});
            postIconItem3.createAppendElement('i', { className: 'fa fa-bookmark' });

            const save = document.createElement('button');
            save.setAttribute('class', 'join-btn')
            save.textContent = 'Save';
            const create = document.querySelector('.create-post');
            create.append(save);
            save.style.display = 'none';

            function editPost(id, content) {
                addPost.style.display = 'none';
                save.style.display = 'block';
                newPost.value = content;
                scroll({top: 250});
                save.addEventListener('click', () =>{
                    const postInfo = {
                        post_id: id,
                        content: newPost.value
                    }
                        fetch(
                            '/edit', {
                            headers :{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            },
                            method : 'POST',
                            body : JSON.stringify(postInfo),
                            }
                        )
                        .then(res => res.json())
                        .then((data) => {
                            if(data.id === id){
                                postText.innerText = data.content;
                            }
                            newPost.value = '';
                            save.style.display = 'none';
                            addPost.style.display = 'block';
                        })
                        .catch((error) => { 
                            swal({
                                title: 'Error!',
                                text: error,
                                icon: 'error',
                                button: 'OK',
                            })
                        });
                
            })
            }
            fetch('/comments')
            .then(res => res.json())
            .then((response) => renderComments(response))
            .catch((error) => { 
                swal({
                    title: 'Error!',
                    text: error,
                  icon: 'error',
                  button: 'OK',
              })
            });
                    
            function renderComments(response){
              const comments = document.createElement('div');
              comments.setAttribute('class', 'comments');

              const addComment = comments.createAppendElement('div', { className: 'add-comment'});
              addComment.createAppendElement('img', {src: './assets/reddit-logo.png', className: 'comment-img'});
              const comCon = addComment.createAppendElement('input', {className: 'comment-text', placeholder: 'Add Your Comment'});
              const  addCo = addComment.createAppendElement('button', {className: 'add-btn', textContent :'Add'})

              addCo.addEventListener('click', (e) => {
                const commentInfo = {
                    content : comCon.value,
                    postId : e.target.parentNode.parentNode.id
                }
                fetch(
                    '/addComment', {
                    headers :{
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                    },
                    method : 'POST',
                    body : JSON.stringify(commentInfo),
                  }
                  )
                .then(res=>res.json())
                .then((res) => {
                    if(res.error){
                    swal({
                        title: '',
                        text: res.error,
                        icon: 'warning',
                        button: 'OK',
                    })
                    } 
                    window.location.reload();
                })
                .catch((error) => { 
                swal({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    button: 'OK',
                })
                });
              })
              postComments.appendChild(addComment)

              response.forEach(ele => {
                console.log(ele)
                const commentr = comments.createAppendElement('div', { className: 'comment', id: ele.id});
                commentr.createAppendElement('img', { src:ele.avatar, className: 'comment-logo'});
                const commentInfo = commentr.createAppendElement('div', { className: 'comment-info'});
                commentInfo.createAppendElement('p', { textContent:ele.username, className: 'comment-username'});
                commentInfo.createAppendElement('p', { className: 'comment-content', textContent: ele.content})
                
                const deleteCom = commentr.createAppendElement('button', { className: 'delete-btn fa fa-trash', id: 'delete-comment' })
                deleteCom.addEventListener('click', ()=>{
                    fetch(`/deleteComment/${ele.id}`)
                    .then(res=>res.json())
                .then((res) => {
                    if(res.error){
                    swal({
                        title: '',
                        text: res.error,
                        icon: 'warning',
                        button: 'OK',
                    })
                    } 
                    window.location.reload();
                })
                .catch((error) => { 
                swal({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    button: 'OK',
                })
                });
                })

                    if(postComments.id == ele.post_id){
                        postComments.appendChild(commentr);
                  }
                })
            }
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
                setTimeout(()=>{ window.location.reload()}, 2000);
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
                setTimeout(()=>{ window.location.reload()}, 2000);
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