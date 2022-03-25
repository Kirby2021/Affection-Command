const { MessageEmbed } = require("discord.js");
const rga = require("random-gif-api")
const fetch = require('node-fetch');



module.exports = {
    name: "kiss",
    description: "kiss someone!",
    options: [
        {
            name: "member",
            description: "Mention the user you want to kiss",
            type: "USER",
            required: true,
            
        }
    ],
    async execute(interaction) {
        let Target = interaction.options.getMember("member");
        let Executer = interaction.user;
        let data = await rga.getGif('kiss');
        let kissEmbed = new MessageEmbed()
        .setColor('#000000')
        .setDescription(`**${Executer} kisses ${Target}**`)
        .setImage(data)
        .setTimestamp()
        console.log(data); // this isnt mandatory btw.
      
       if(Target.id === Executer.id) {
        Response = new MessageEmbed()
        .setColor('#000000')
        .setDescription("⛔ You cant kiss yourself! But is you ok? Do you need to vent?")
            return interaction.reply({ embeds: [Response] })
        } else {
        interaction.reply({ embeds: [kissEmbed]}); 
        }
    }
}

