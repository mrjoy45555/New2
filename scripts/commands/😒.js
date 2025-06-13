const fs = require("fs");

module.exports = {
  config: {
    name: "😒",
    version: "1.0.1",
    prefix: false,
    permssion: 0,
    credits: "Joy",
    description: "Fun + Video noprefix",
    category: "no prefix",
    usages: "😒",
    cooldowns: 5,
  },

  onStart: async function ({ message, event }) {
    const msg = event.body?.toLowerCase();

    // 😒 Trigger
    if (msg === "😒") {
      return message.reply("তুই একদম 😒");
    }

    // video Trigger
    if (msg === "video") {
      return message.reply({
        body: "🎥 ভিডিও ফিচার প্রিভিউ এখানে দেখুন:",
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/BQT75pm.mp4") // 🔁 এখানে তোমার ইমেজ লিংক বসাও
      });
    }
  }
};
