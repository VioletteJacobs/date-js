// # Exercice 3 
// - Créer un programme qui va nous afficher la date d'aujourd'hui avec le format jj/dd/aaaa

// méthode forcée

// let jour= prompt("quel jour sommes nous? JJ")
// let mois = prompt("Quel mois? MM")
// let annee = prompt ("quelle année AA" )


// let date= ()=>{
//     alert (`Nous sommes le ${jour}/${mois}/${annee}`)
// }
// date()

// méthode L
let format = ()=> {
    let date = new Date()
    console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, c'est l'annif à Théo!!`);
}
format()