document.getElementById('load-user').addEventListener('click', loadUser);

function loadUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userCard = document.getElementById('user-card');
            userCard.innerHTML = `
                <img src="${user.picture.large}" alt="User Picture">
                <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                <p><strong>Davlat:</strong> ${user.location.country}</p>
                <p><strong>Shahar:</strong> ${user.location.city}</p>
                <p><strong>Telefon:</strong> ${user.phone}</p>
            `;
        })
        .catch(error => {
            console.error('Xato yuz berdi:', error);
        });
}

loadUser();
