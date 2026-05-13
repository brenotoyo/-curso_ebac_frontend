document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const endpoint = `https://api.github.com/users/brenotoyo`;

    fetch(endpoint)
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        avatarElement.src = json.avatar_url;
        usernameElement.innerText = `@${json.login}`;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
})