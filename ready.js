const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const db = require('quick.db');

var prefix = ayarlar.prefix

var yazı = db.fetch(`oynuyor_`, yazı) 

module.exports = client => {

  client.user.setStatus("online");
   var oyun = [

         "See you in the summer!"
     
     

       
 
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/FurkanIsCoding");
        }, 2 * 3000);
}
