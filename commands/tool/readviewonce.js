const {
    MessageType,
    quote
} = require("n3bu1a");

module.exports = {
    name: "vv",
    aliases: ["rvo"],
    category: "tools",
    permissions: {coin: 10},
    code: async (ctx) => {
        if (!await tools.cmd.checkQuotedMedia(ctx.quoted, ["viewOnce"])) return await ctx.reply(quote(tools.cmd.generateInstruction(["reply"], ["viewOnce"])));

        try {
            const quoted = ctx.quoted;
            const quotedType = Object.keys(quoted).find(key => key.endsWith("Message"));
            const msg = quoted[quotedType];
            const buffer = await ctx.quoted.media.toBuffer();

            const options = {
                mimetype: msg.mimetype,
                caption: msg.caption || ""
            };

            if (quotedType === MessageType.audioMessage) {
                await ctx.reply({
                    audio: buffer,
                    mimetype: msg.mimetype,
                    ptt: true
                });
            } else if (quotedType === MessageType.imageMessage) {
                await ctx.reply({
                    image: buffer,
                    ...options
                });
            } else if (quotedType === MessageType.videoMessage) {
                await ctx.reply({
                    video: buffer,
                    ...options
                });
            }
        } catch (error) {
            return await ctx.reply(quote(`⚠️ ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ:`));
        }
    }
};