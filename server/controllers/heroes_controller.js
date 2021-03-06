const express = require("express");
const axios = require("axios");
let heroes = [];
let newId = 4999;
const app = express();


module.exports = {
    getHeroes: (req, res) => {
        console.log("get")
if (!heroes.length) {
    axios.get(`https://api.opendota.com/api/heroes`)
    .then(list => {
        console.log(list)
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
heroes.unshift({url, name,primary_attr, attack_type, roles});
newId++;
res.status(200).json(heroes);
    },
   
   
   
   
    updateHeroes: (req, res) => {
const {id} = req.params;
const { name } = req.body;
heroes.forEach(hero => {
    if (hero.id === parseInt(id)) {
        console.log("found hero")
        hero.name = name;
    }
});
res.status(200).json(heroes);
    },
   
   
   
   
    deleteHeroes: (req, res) => {
const { id } = req.params;
let index = heroes.findIndex(hero => hero.id === parseInt(id))
heroes.splice(index,1);
res.status(200).json(heroes);
    }
}
