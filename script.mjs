// =============================================
// 🧩 Exercice 01 – Pokedex Explorer
// Fichier : J09/01_pokedex/script.js
// =============================================

// 🧠 Objectif : explorer et analyser les données du Pokédex en JavaScript pur
// ---------------------------------------------------------------
// Étapes :
// 1. Charger les données JSON
// 2. Manipuler les tableaux et objets
// 3. Écrire des fonctions d’analyse et de recherche
// ---------------------------------------------------------------

// 💾 Étape 1 : Charger le fichier JSON
// Si tu es dans un environnement Node.js, tu peux utiliser fs :
/* const fs = require("fs"); */
/* import { asyncWrapProviders } from "async_hooks"; */
import fs from "fs";
/* import { type } from "os"; */

let pokedex;

// Essaie d’abord de lire et parser le fichier local pokedex.json
try {
  const data = fs.readFileSync("./pokedex.json", "utf8");
  pokedex = JSON.parse(data);
  console.log("✅ Fichier chargé avec succès !");
} catch (err) {
  console.error("❌ Erreur de lecture du fichier pokedex.json :", err.message);
  process.exit(1);
}

// Vérifie que la structure est bien celle attendue
console.log("Nombre de Pokémon :", pokedex.pokemon.length);
console.log("Premier Pokémon :", pokedex.pokemon[0].name);

// ---------------------------------------------------------------
// ✨ Étape 2 : Analyse de base 🔍 - Fonctions de base à compléter
// ---------------------------------------------------------------

/* Retourne le nombre total de Pokémon dans le Pokédex */
function countPokemon() {
  // TODO : compter les Pokémon à partir de pokedex.pokemon//je compte les pokemon en number.
  console.log(pokedex.pokemon.length)
}
countPokemon()

/*cette function sert à recuperer les pokemon de plus de 10kg */
function heavyPokemon() { //nom de la function
 let bigpokemon = []// le groupe de gros pokemon (de + de 10kg)
 for (let i = 0; i < pokedex.pokemon.length; i++) {//la boucle cherche dans le groupe de pokedex entier
   let poidpokemon = parseFloat(pokedex.pokemon[i].weight);//la boucle cherche dans le groupe de pokemon,leurs poids, et transforme la valeur 'lettre' en number 
   if (poidpokemon > 10 ){//si le poid du pokemon est de + de 10kg
 bigpokemon.push({name:pokedex.pokemon[i].name,weight:poidpokemon});//alors je pousse leur nom et leur dans le groupe bigpokemon
 }} 
 bigpokemon.sort((a,b)=>a.weight -b.weight); //je tie le poid des pokemons par ordre croissant
  for (let i = 0; i < bigpokemon.length; i++) {//je refais une boucle pour noter distinctement le nom et le poid du pokemon
 console.log(bigpokemon[i].name + " - " + bigpokemon[i].weight + "kg"); }
 
}
heavyPokemon()

/*cette function sert à recuperer les pokemon de moins de 10kg */
function sortByWeight() {
   let slimpokemon = []// le groupe de gros pokemon (de - de 10kg)
 for (let i = 0; i < pokedex.pokemon.length; i++) {//la boucle cherche dans le groupe de pokedex entier
   let poidpokemon = parseFloat(pokedex.pokemon[i].weight);//la boucle cherche dans le groupe de pokemon,leurs poids, la valeur
   if (parseFloat(poidpokemon) < 10 ){//si le poid du pokemon est de - de 10kg
 slimpokemon.push({name:pokedex.pokemon[i].name, weight:poidpokemon}); //alors je pousse leur nom dans le groupe bigpokemon
 }}   slimpokemon.sort((a, b) => a .weight- b.weight ) ;
 for (let i = 0; i < slimpokemon.length; i++) {
  console.log(slimpokemon[i].name + " - " + slimpokemon[i].weight + "kg"); 
 }
}
sortByWeight()  
/*cette function sert à recuperer les pokemon par poid en orde croissant*/
function pokemonunivers(){
let allpokemon = []/* out les pokemon en ordre croissant */

for (let i=0;i < pokedex.pokemon.length; i++) {
  let poidpokemon = parseFloat(pokedex.pokemon[i].weight);//cela convertit le poid en nombre dans le grp de pokemon

  allpokemon.push({name: pokedex.pokemon[i].name, weight: poidpokemon}); //on pousse dans le allpokemon le nom et le poid du pokemon
} allpokemon.sort((a, b) => a .weight- b.weight ) ; //trie le tableau du plus leger au plus lourd
   for (let i = 0; i < allpokemon.length; i++) {
    console.log(allpokemon[i].name + " - " + allpokemon[i].weight + "kg"); //affichage de chaque pokemon ligne par ligne
  }
}
pokemonunivers()

// ---------------------------------------------------------------
// ✨ Étape 3 : Évolutions 🌱
// ---------------------------------------------------------------

/*Retourne les évolutions d’un Pokémon donné (s’il en a)
 */
function getEvolutions(name) {
  let evolution = []/* tableau vide pour tous les attraper*/
for (let i = 0; i < pokedex.pokemon.length; i++) { //on va cherhcer dans le fichier de pokedex et dans le grp pokemon
if (pokedex.pokemon[i].name === name && pokedex.pokemon[i].next_evolution){ //Si. name est strictement egale au nom du pokemon et a son evolution 
for (let j = 0; j < pokedex.pokemon[i].next_evolution.length; j++) { //alorson va chercher le NOME de levolution (J) dans le groupe de l'evoltion
evolution.push(pokedex.pokemon[i].next_evolution[j].name);//puis on pousse le nom et le nom de l'evolution
}}}
if (evolution.length > 0) {
    console.log(evolution);//si le nom est superieur à 0 alors le nom s'affiche
}else {
    console.log(name + " n'a pas d'évolution connue.");
  }//si non  on affiche ""
    //console.log(evolution); //affichagele pokemon du pokemon
  }
getEvolutions("Pikachu")
// ---------------------------------------------------------------
// ✨ Étape 4 : Mini Pokédex interactif 🧠
// ---------------------------------------------------------------

/* Retourne un objet complet représentant le Pokémon recherché
 */
function searchPokemon(name) {
 
for (let i = 0; i < pokedex.pokemon.length; i++) { //on va cherhcer dans le tableau de pokedex et dans le grp du en question pokemon ( i indice de chaque pokemon)
if (pokedex.pokemon[i].name === name) {//si le pokemon porte le nom entre() de la function, si juste le code est executé.
console.log("Nom : " + pokedex.pokemon[i].name);//son nom s'affiche
//type
let types = []; //tableau vide
      if (pokedex.pokemon[i].type) {//si il existe type, on parcourt tout ses types avec une boucle.puis ils sont ajoutes
        for (let k = 0; k < pokedex.pokemon[i].type.length; k++) {//n parcourt tout ses types avec une boucle.
          types.push(pokedex.pokemon[i].type[k]);//puis ils sont ajoutes au tableau type
}
}
let typesText = "inconnu";
    if (types.length > 0) { typesText = types.join(", ");
     } 
    console.log("Type : " + typesText);
//taille et poid
let taille = "inconnu";
      if (pokedex.pokemon[i].height) {
        taille = parseFloat(pokedex.pokemon[i].height);
      }
      let poids = "inconnu";
      if (pokedex.pokemon[i].weight) {
        poids = parseFloat(pokedex.pokemon[i].weight);
      }
      console.log("Taille : " + taille + " m");
      console.log("Poids : " + poids + " kg");
//evolution
let evolutions = [];
if (pokedex.pokemon[i].next_evolution) {
  for (let j = 0; j < pokedex.pokemon[i].next_evolution.length; j++) {
    evolutions.push(pokedex.pokemon[i].next_evolution[j].name);
  }
}
let evolutionsText = "Aucune";
if (evolutions.length > 0) {
  evolutionsText = "";
  for (let j = 0; j < evolutions.length; j++) {
    evolutionsText += evolutions[j];
    if (j < evolutions.length - 1) {
      evolutionsText += " → "; // ajoute la flèche entre les évolutions
    }
  }
}
console.log("Évolutions : " + evolutionsText);
//faiblesse
let faiblesses = [];
if (pokedex.pokemon[i].weaknesses) {
  for (let l = 0; l < pokedex.pokemon[i].weaknesses.length; l++) {
    faiblesses.push(pokedex.pokemon[i].weaknesses[l]);
  }
}

let faiblessesText = "Aucune";
if (faiblesses.length > 0) {
  faiblessesText = "";
  for (let l = 0; l < faiblesses.length; l++) {
    faiblessesText += faiblesses[l];
    if (l < faiblesses.length - 1) {
      faiblessesText += ", "; // ajoute une virgule entre les faiblesses
    }
  }
}
console.log("Faiblesses : " + faiblessesText);}}}
searchPokemon("Charmander")
// ---------------------------------------------------------------
// 🔍 Tests rapides (tu peux commenter ou adapter ces lignes)
// ---------------------------------------------------------------

// console.log(countPokemon());
// console.log(heavyPokemon().slice(0, 5));
// console.log(getEvolutions("Bulbasaur"));
// console.log(searchPokemon("Pikachu"));

countPokemon()
heavyPokemon()
sortByWeight() 
pokemonunivers()
getEvolutions(" ")
searchPokemon(" ")