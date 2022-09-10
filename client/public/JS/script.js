const postsContainer = document.querySelector('.post-comments');

fetch('/post')
.then(res => res.json())
.then((response) =>{
  renderAllPosts(response)
})
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



function renderAllPosts(response) {
    postsContainer.innerText = '';
    response.forEach((ele) => {
        
        if(ele.content){
          
            const post = postsContainer.createAppendElement('div', { className : 'post', id: ele.id});
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
            userIconsItem2.createAppendElement('i', { className: 'fa fa-briefcase'});

            const userIconsItem3 = userIcons.createAppendElement('li', { className: 'user-icon'});
            userIconsItem3.createAppendElement('i', { className: 'fa fa-address-book'});
            userRight.createAppendElement('button', { className: 'join-btn', textContent: 'join'});

            const userContent = postContent.createAppendElement('div', { className: 'user-content'});
            userContent.createAppendElement('p', { className: 'post-content-para', textContent: ele.content});

            const postIcons = postContent.createAppendElement('div', { className: 'post-icons'});
            const postIconsList = postIcons.createAppendElement('ul', { className: 'post-icons-list'});
            const postIconItem = postIconsList.createAppendElement('li', { className: 'post-icons-item', textContent: 'comment'});
            postIconItem.createAppendElement('i', { className: 'fa fa-comment' });
            const postIconItem2 = postIconsList.createAppendElement('li', { className: 'post-icons-item', textContent: 'share'});
            postIconItem2.createAppendElement('i', { className: 'fa fa-share' });
            const postIconItem3 = postIconsList.createAppendElement('li', { className: 'post-icons-item', textContent: 'Save'});
            postIconItem3.createAppendElement('i', { className: 'fa fa-bookmark' });
        }
    });

    const postid = document.querySelectorAll('.post');
    console.log(postid[0].id);
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
      console.log(response[0].post_id);
      const comments  = document.createElement('div');
      comments.className = 'comments';

      response.forEach(comment => {
        comments.innerText += 
        `
                          <div class="comment">
                              <img src="./assets/reddit-logo.png" alt="" class="comment-logo">
                              <p class="comment-content">
                                  ${comment.content}
                              </p>
                          </div>
        `
        postid.forEach((post) => {
          if(post.id === comment.post_id){
            console.log(post.id)
            post.appendChild(comments);
          }
        })
      })
    }


}
