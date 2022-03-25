const { CommandInteraction, MessageEmbed } = require("discord.js");
const rga = require("random-gif-api")



module.exports = {
    name: "pat",
    description: "pat someone!",
  
    options: [
        {
            name: "member",
            description: "Mention the user you want to pat",
            type: "USER",
            required: true,
            
        }
    ],
    async execute(interaction) {
        let Target = interaction.options.getMember("member");
        let Executer = interaction.user;
        let data = await rga.getGif('pat');
        let patEmbed = new MessageEmbed()
        .setColor('#000000')
        .setDescription(`**${Executer} pats ${Target}**`)
        .setImage(data)
        .setTimestamp()

        console.log(data); // this isnt mandatory btw.
      
       if(Target.id === Executer.id) {
        Response = new MessageEmbed()
        .setColor('#000000')
        .setDescription("⛔ You cant pat yourself!")
            return interaction.reply({ embeds: [Response] })
        } else {
        interaction.reply({ embeds: [patEmbed]}); 
        }
    }
}

