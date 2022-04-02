const payload = [
    {name:"Bobby", description:"Comédien", imgSrc:"assets/boby.jpg"},
    {name:"Charlie", description:"Vulgarisatrice", imgSrc:"assets/charlie.jpg"},
    {name:"Christian", description:"Voyageur", imgSrc:"assets/christian.jpg"},
    {name:"Dessinateur", description:"Dessinateur", imgSrc:"assets/dessinateur"},
    {name:"Artiste", description:"Vulgarisation Art", imgSrc:"assets/gret_art.jpg"},
    {name:"OfflineTV", description:"Streameurs", imgSrc:"assets/offline.jpg"},
    {name:"Philippe", description:"Journaliste", imgSrc:"assets/philippe.jpg"},
    {name:"Villa Deveraux", description:"Influencer", imgSrc:"assets/villadeveraux.jpg"},
]
// ====Ajouter un élément à la liste payload======
let elt = {name:"Villa Deveraux", description:"Influencer", imgSrc:"assets/villadeveraux.jpg"}
payload.push(elt)

//=====Récupérer premier élément d'une liste=============
payload[0]

// ==============Comment créer des balises html avec javascript ?=========
const monDiv = document.createElement('div')
//===============Comment ajouter une classe à une balise html?======
    // 1- sélectionner l'élément
const monElement =  document.getElementById('mon_id')
    // 2- ajouter une classe
monElement.classList.add('ma_nouvelle_classe')

