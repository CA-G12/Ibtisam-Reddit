fetch('/post')
.then((data) => data.json())
.then((response) => renderAllPosts(response))
.catch((err)=> console.log(err));

const postsContainer = document.getElementById('posts');

function renderAllPosts(response) {
    console.log(response);
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
                                    <li class="user-icon">
                                        <i class="fa fa-cloud" aria-hidden="true"></i>
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
                    <div class="comments">
                        <div class="comment">
                            <img src=${post.avatar} alt="" class="comment-logo">
                            <p class="comment-content">
                            ${post.comment}
                            </p>
                        </div>
                        <div class="comment">
                            <img src=${post.avatar} alt="" class="comment-logo">
                            <p class="comment-content">
                                ${post.comment}
                            </p>
                        </div>
                        <div class="comment">
                            <img src=${post.avatar} alt="" class="comment-logo">
                            <p class="comment-content">
                                ${post.comment}
                            </p>
                        </div>
                    </div>
                </div>
        `
    });
}
