const express = require("express");
const axios = require("axios");
let heroes = [];
let newId = 4999;
const app = express();


module.exports = {
    getHeroes: (req, res) => {
if (!heroes.length) {
    axios.get(`https://api.opendota.com/api/heroes`)
    .then(list => {
        // console.log(list)
        heroes = list.data;
        res.status(200).json(heroes);
    })
    .catch(err => res.status(500).json(err));
} else {
    res.status(200).json(heroes);
}
    },

  
  
    postHeroes: (req, res) => {
const {name, primary_attr, attack_type, roles} = req.body;
let url = `https://api.opendota.com/api/heroes/${newId}/`;
heroes.push({url, name,primary_attr, attack_type, roles});
newId++;
res.status(200).json(heroes);
    },
   
   
   
   
//     updateHeroes: (req, res) => {
// const {id} = req.params;
// const {name,birth_year} = req.body;
// characters.forEach(hero => {
//     if (hero.url.split("/")[5] === id) {
//         hero.name = name;
//         hero.primary_attr = primary_attr;
//         hero.attack_type = attack_type;
//         hero.roles = roles;
//     }
// });
// res.status(200).json(heroes);
//     },
   
   
   
   
//     deleteHeroes: (req, res) => {
// const { id } = req.params;
//     }
}
