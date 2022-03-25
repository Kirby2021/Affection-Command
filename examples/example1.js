const { MessageEmbed } = require("discord.js");
const rga = require("random-gif-api")



module.exports = {
    name: "hug",
    description: "hug someone!",
  
    options: [
        {
            name: "member",
            description: "Mention the user you want to hug",
            type: "USER",
            required: true,
            
        }
    ],
    async execute(interaction) {
        const Target = interaction.options.getMember("member");
        const Executer = interaction.user;
        const data = await rga.getGif('cuddle');
        const HugEmbed = new MessageEmbed()
        .setColor('#000000')
        .setDescription(`**${Executer} gives a big hug to ${Target}**`)
        .setImage(data)
        .setTimestamp()

    console.log(data); // this isnt mandatory btw.
      
       if(Target.id === Executer.id) {
        Response = new MessageEmbed()
        .setColor('#000000')
        .setDescription("⛔ You cant hug yourself! But is you ok? Do you need to vent?")
            return interaction.reply({ embeds: [Response] })
        } else {
        interaction.reply({ embeds: [HugEmbed]}); 
        }
    }
}

