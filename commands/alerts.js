const Discord = require('discord.js');
exports.run = async (client, message, args) => {
      
      
  var taggedUser = message.guild.member(message.author);
  var roleName = "UHC"
  
  
  var rol = message.guild.roles.find(`name`, roleName);
  if(message.member.roles.has(rol.id)){
  
  
  await(taggedUser.removeRole(rol.id))
  message.channel.send(`You have disabled UHC alerts.`)
  }else{
    await(taggedUser.addRole(rol.id))
  message.channel.send(`You have enabled UHC alerts.`)
  message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(roleName))
  }
  
  if(!rol){
    try{
  message.channel.send(`I can't found **${roleName}** role name.`)
      
    }catch(e){
      console.log(e.stack);
    }
  }
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alert','uhcalerts','uhcalert'],
  permLevel: 0
};

exports.help = {
  name: 'alerts',
  description: '',
  usage: 'alerts'
};