const loadBtn = document.getElementById('loadBtn');
const cardsContainer = document.getElementById('cards');
const countSelect = document.getElementById('count');
const status = document.getElementById('status');

function createCard(user){
    const card = document.createElement('article');
    card.className = 'card';

    const photo = document.createElement('div');
    photo.className = 'photo';
    photo.style.backgroundImage = `url(${user.picture.large})`;

    const info = document.createElement('div');
    info.className = 'info';

    const fullName = `${user.name.title ? user.name.title + ' ' : ''}${user.name.first} ${user.name.last}`;

    info.innerHTML = `
        <p class="label">Name:</p>
        <p>${fullName}</p>
        <p class="label">City:</p>
        <p>${user.location.city}</p>
        <p class="label">Postcode:</p>
        <p>${user.location.postcode}</p>
        <p class="label">Phone:</p>
        <p>${user.phone}</p>
    `;

    card.appendChild(photo);
    card.appendChild(info);
    return card;
}

function clearCards(){
    cardsContainer.innerHTML = '';
}


function showError(message){
    clearCards();
    status.textContent = '';
    const err = document.createElement('div');
    err.style.padding = '20px';
    err.textContent = 'Error: ' + message;
    cardsContainer.appendChild(err);
}

function fetchUsers(count){
    fetch(`https://randomuser.me/api/?results=${count}`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            clearCards();
            data.results.forEach(u => {
                const card = createCard(u);
                cardsContainer.appendChild(card);
            });
            status.textContent = 'Success!';
        })
        .catch(err => {
            console.error(err);
            showError(err.message || 'Unknown error');
        });
}

loadBtn.addEventListener('click', () => {
    const count = Number(countSelect.value) || 1;
    clearCards();
    status.textContent = '';
    const loader = document.createElement('div');
    loader.style.padding = '20px';
    loader.textContent = 'Loading...';
    cardsContainer.appendChild(loader);

    fetchUsers(count);
});