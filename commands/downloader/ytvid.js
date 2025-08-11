const { quote } = require("coderxza");
const axios = require("axios");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
    name: "ytvid",
    aliases: ["ytvid"],
    category: "downloader",
    permissions: {
        coin: 10
    },
    code: async (ctx) => {
        const input = ctx.args.join(" ") || null;
        if (!input) {
            return await ctx.reply(quote("⚠️ Please provide a video name."));
        }

        try {
            const apiUrl = `https://coderxsa-api.onrender.com/v1/downloaders/coderx/download/ytmp3v2?query=${encodeURIComponent(input)}`;
            const response = (await axios.get(apiUrl)).data;

            if (response.success && response.result && response.result.download && response.result.download.video) {
                const videoUrl = response.result.download.video;

                const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
                const videoBuffer = Buffer.from(videoResponse.data);

                // Wait 3 seconds before sending video
                await delay(3000);

                await ctx.reply({
                    video: videoBuffer,
                    mimetype: 'video/mp4'
                });

            } else {
                return await ctx.reply(quote("⚠️ Could not fetch video from API."));
            }
        } catch (error) {
            return await ctx.reply(quote(`⚠️ Error occurred: Resend.`));
        }
    }
}
