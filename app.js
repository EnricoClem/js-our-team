// Creare i singoli oggetti con le tre key richieste:
    // Nome
    // Ruolo
    // Foto
// Creare un array contenente tutti gli oggetti
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// Stampare le stesse informazioni su DOM semplicemente come stringhe
// Trasformare la stringa foto in una immagine effettiva
// Organizzare i singoli membri in card/schede

const wayneB = {
    "name": "Wayne Barnett",
    "job": "Founder & CEO",
    "photo": "wayne-barnett-founder-ceo.jpg"
};

const angelaC = {
    "name": "Angela Caroll",
    "job": "Chief Editor",
    "photo": "angela-caroll-chief-editor.jpg"
};

const walterG = {
    "name": "Walter Gordon",
    "job": "Office Manager",
    "photo": "walter-gordon-office-manager.jpg"
};

const angelaL = {
    "name": "Angela Lopez",
    "job": "Social Media Manager",
    "photo": "angela-lopez-social-media-manager.jpg"
};

const scottE = {
    "name": "Scott Estrada",
    "job": "Developer",
    "photo": "scott-estrada-developer.jpg"
};

const barbaraR = {
    "name": "Barbara Ramos",
    "job": "Graphic Designer",
    "photo": "barbara-ramos-graphic-designer.jpg"
};

const ourTeam = [wayneB,angelaC,walterG,angelaL,scottE,barbaraR]

for(let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i]);
};

let cardContainer = document.getElementById('card-container');

for(let i = 0; i < ourTeam.length; i++) {

    teamMember = ourTeam[i];

    let teamCard = document.createElement('div');
    
    teamCard.innerHTML = `
    <img class="team-photo card-img-top" src="img/${teamMember.photo}" alt="">
    <div class="card-body">
        <h1 class="team-name card-title">${teamMember.name}</h1>
    </div>
    <div class="card-footer text-body-secondary">
        <h3 class="team-job">${teamMember.job}</h3>
    </div>`

    teamCard.classList.add('card', 'col-4')

    cardContainer.append(teamCard)

};