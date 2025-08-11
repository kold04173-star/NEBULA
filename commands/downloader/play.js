/*
const { quote } = require("coderxza");
const axios = require("axios");


module.exports = {
    name: "play",
    aliases: ["p"],
    category: "downloader",
    permissions: {
        coin: 10
    },
    code: async (ctx) => {
        const input = ctx.args.join(" ") || null;
        if (!input) {
            return await ctx.reply(quote("⚠️ ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ꜱᴏɴɢ ɴᴀᴍᴇ."));
        }

        try {
            const apiUrl = `https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(input)}`;
            const response = (await axios.get(apiUrl)).data;

            if (response.success && response.result && response.result.download && response.result.download.audio) {
                const audioUrl = response.result.download.audio;
                const { title, url, thumbnail, author } = response.result;

                const audioResponse = await axios.get(audioUrl, { responseType: 'arraybuffer' });
                const audioBuffer = Buffer.from(audioResponse.data);

                await ctx.reply({
                    audio: audioBuffer,
                    mimetype: 'audio/mp4',
                    contextInfo: {
                        externalAdReply: {
                            title: title,
                            body: author?.name || "Downloaded from YouTube",
                            mediaType: 2,
                            thumbnailUrl: thumbnail,
                            renderLargerThumbnail: true,
                            mediaUrl: url
                        },
                        forwardingScore: 999,
                        isForwarded: true
                    }
                });

            } else {
                return await ctx.reply(quote("⚠️ ᴄᴏᴜʟᴅ ɴᴏᴛ ꜰᴇᴛᴄʜ ᴀᴜᴅɪᴏ ꜰʀᴏᴍ ᴀᴘɪ."));
            }
        } catch (error) {
            return await ctx.reply(quote(`⚠️ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ: ʀᴇꜱᴇɴᴅ`));
        }
    }
}

*/

const { quote } = require("coderxza");
const axios = require("axios");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
    name: "play",
    aliases: ["p"],
    category: "downloader",
    permissions: {
        coin: 10
    },
    code: async (ctx) => {
        const input = ctx.args.join(" ") || null;
        if (!input) {
            return await ctx.reply(quote("⚠️ ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ꜱᴏɴɢ ɴᴀᴍᴇ."));
        }

        try {
            // Use your API URL here
            const apiUrl = `https://coderxsa-api.onrender.com/v1/downloaders/coderx/download/ytmp3v2?query=${encodeURIComponent(input)}`;
            const response = (await axios.get(apiUrl)).data;

            if (response.success && response.result && response.result.download && response.result.download.audio) {
                const audioUrl = response.result.download.audio;
                const { title, url, thumbnail, author } = response.result;

                const audioResponse = await axios.get(audioUrl, { responseType: 'arraybuffer' });
                const audioBuffer = Buffer.from(audioResponse.data);

                // Wait 3 seconds before sending audio
                await delay(3000);

                await ctx.reply({
                    audio: audioBuffer,
                    mimetype: 'audio/mp4',
                    contextInfo: {
                        externalAdReply: {
                            title: title,
                            body: author?.name || "Downloaded from YouTube",
                            mediaType: 2,
                            thumbnailUrl: thumbnail,
                            renderLargerThumbnail: true,
                            mediaUrl: url
                        },
                        forwardingScore: 999,
                        isForwarded: true
                    }
                });
            } else {
                return await ctx.reply(quote("⚠️ ᴄᴏᴜʟᴅ ɴᴏᴛ ꜰᴇᴛᴄʜ ᴀᴜᴅɪᴏ ꜰʀᴏᴍ ᴀᴘɪ."));
            }
        } catch (error) {
            return await ctx.reply(quote(`⚠️ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀʀᴇᴅ: ʀᴇꜱᴇɴᴅ`));
        }
    }
}




