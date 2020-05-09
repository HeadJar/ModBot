const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
    var c = client.channels.get("691468795407106091")


    c.send("bishav crushes 10nl all day and some nights(Not tuesday)")
});

client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});
console.log(client.channels)

bot_token = "NzA4NDcyMDQwODA1MzY3ODcw.XrX2Xg.VylESDHWTwP0RILpFp7qoBJ5V6U"

client.login(bot_token)


