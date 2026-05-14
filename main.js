document.addEventListener('DOMContentLoaded', async function(){
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const endpoint = `https://api.github.com/users/brenotoyo`;

    try {
        const res = await fetch(endpoint);

        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
        }

        const json = await res.json();

        nameElement.innerText = json.name;
        avatarElement.src = json.avatar_url;
        usernameElement.innerText = `@${json.login}`;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;

    } catch (error) {
        console.error('Falha ao buscar dados do GitHub:', error.message);
        // Opcional: mostrar mensagem de erro na UI
        nameElement.innerText = 'Usuário não encontrado';
    }
})