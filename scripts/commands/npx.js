const fs = require("fs");
module.exports = {
  config:{
	name: "😒",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Joy", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},
module.exports = {
  name: "messageCreate",
  execute: async (message, client) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    // Noprefix command: "video"
    if (content === "video") {
      return message.reply({
        content: "🎥 ভিডিও ফিচার প্রিভিউ এখানে দেখুন:",
        files: ["https://i.imgur.com/BQT75pm.mp4"] // <-- এখানে তোমার ভিডিও ফিচারের Imgur লিংক দিন
      });
    }
  }
};
