const ul = document.getElementById('result');
const filter = document.getElementById('filter');
console.log(result)

const listItems = []; 
ul.innerHTML = "";

async function getData(){
  const res = await fetch('https://randomuser.me/api?results=50');

    const {results} = await res.json()
    
        results.forEach((user) => {
        const li = document.createElement('li');
        
        // ul.innerHTML = "";
  
        listItems.push(li);
        li.innerHTML = `
                        <img src="${user.picture.large}" alt="${user.name.first}">
                        <div class="user-info">
                            <h4>${user.name.first} ${user.name.last}</h4>
                            <p>${user.location.city} ${user.location.country}</p>
                        </div>`;
              ul.appendChild(li);          
    });
}

filter.addEventListener('input', (event) => filtrage(event.target.value))

function filtrage(inputValue){
    listItems.forEach(li =>{
        if(li.innerText.toLowerCase().includes(inputValue.toLowerCase())){
            li.classList.remove('hide')
        }
        else{
            li.classList.add('hide')
        }
    })
}
getData();

// Ce code implémente une fonction de filtrage de texte pour une liste d'éléments HTML.
// Lorsqu'un utilisateur tape du texte dans un élément d'entrée (input), l'événement "input"
// est déclenché et le gestionnaire d'événements associé appelle la fonction filtrage avec
// la valeur de l'entrée en tant qu'argument.

// La fonction filtrage prend en entrée une chaîne de caractères inputValue.
// Elle utilise la méthode forEach pour boucler sur chaque élément HTML li dans
// la liste listItems. Pour chaque élément li, la fonction vérifie si son texte
// interne (contenu entre les balises <li> et </li>) contient la chaîne de caractères inputValue
// en ignorant les différences de casse. Si c'est le cas, elle supprime la classe "hide" de 
//la liste de classes de l'élément li à l'aide de la méthode classList.remove, ce qui rend l'élément
// visible. Si ce n'est pas le cas, elle ajoute la classe "hide" à la liste de classes de l'élément li
// à l'aide de la méthode classList.add, ce qui masque l'élément.

// La classe "hide" est généralement définie dans une feuille de style CSS et utilise la propriété display: none;
// pour masquer les éléments HTML. Cette approche permet de cacher les éléments sans occuper d'espace dans 
//la disposition de la page.

// En résumé, ce code implémente une fonction de filtrage de texte simple pour une liste d'éléments 
//HTML en utilisant JavaScript et CSS.



