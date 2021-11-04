/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. */

//1.creo un arrey di oggetti che contengono le card,i testi adiacenti(nome,ruolo)
// tramite un ciclo per gli oggetti vado ad estrapolarmi le varie informazioni
// stampo nel html le card con relativi nomi
// collego il form ad una variabile che mi pusha i nuovi membri nell'html

let team = [

    {
        "imgTeam": "img\wayne-barnett-founder-ceo.jpg",
        "nomeTeam": "Wayne Barnett",
        "ruoloTeam": "founder ceo"
    },

    {
        "imgTeam": "img\angela-caroll-chief-editor.jpg",
        "nomeTeam": "Angela Carol",
        "ruoloTeam": "chief editor"
    },

    {
        "imgTeam": "img\angela-lopez-social-media-manager.jpg",
        "nomeTeam": "Angela Lopez",
        "ruoloTeam": "media manager"
    },

    {
        "imgTeam": "img\barbara-ramos-graphic-designer.jpg",
        "nomeTeam": "Barbara Ramos",
        "ruoloTeam": "graphic designer"
    },

    {
        "imgTeam": "img\scott-estrada-developer.jpg",
        "nomeTeam": "Scott Estrada",
        "ruoloTeam": "developer "
    },



    {
        "imgTeam": "img\angela-caroll-chief-editor.jpg",
        "nomeTeam": "Angela Carol",
        "ruoloTeam": "chief editor"
    },


];

const containerTeam = document.querySelector('.team-container');

for (let i = 0; i < team.length; i++) {
    let figureTeam = team[i];
    let imGMemb = figureTeam.imgTeam;
    let nomeMemb = figureTeam.nomeTeam;
    let ruoloMemb = figureTeam.ruoloTeam;
    containerTeam.innerHTML +=`
        <div class="team-card">   
            <div class="card-image">
                    <img
                    src="${imGMemb}"
                    alt="${nomeMemb}"
                    />
            </div>
             <div class="card-text">
                    <h3>${nomeMemb}</h3>
                    <p>${ruoloMemb}</p>
            </div>

        </div>      
             ` ;
}



