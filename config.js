const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to convert string to boolean
const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'
global.eypzApi = 'https://api.eypz.c0m.in/'

// Define the Sequelize instance based on DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// Export configuration variables
module.exports = {
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  BRANCH: "main",
  MODE: (process.env.MODE || 'public').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),true
  SESSION_ID: process.env.SESSION_ID || "izumi~UywZXMfs",
  MENU_URL: process.env.MENU_URL || "https://ik.imagekit.io/eypz/1725983369079_26RvczEkc.png",
  CAPTION: process.env.CAPTION || "Iᴢᴜᴍɪ",
  READ_MSG: toBool(process.env.READ_MSG),true
  OWNER_NAME: process.env.OWNER_NAME || "ARAKKAL LUCIFER",
  BOT_NAME: process.env.BOT_NAME || "LUCIFE_BOT",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "LUCIFE_BOT",
  AUDIO_DATA: process.env.AUDIO_DATA || "{ "contextInfo": { "forwardingScore": 5, "isForwarded": true }, "linkPreview": { "head": "ᝃ𑁍／一═デ︻🎈 ARAKKAL LUCIFER 🎈︻デ═一⍆⥬❲🌟🐊❳🐼💋", "body": "⇆ㅤ||◁ㅤ❚❚ㅤ▷||ㅤ⇆", "mediaType": 2, "thumbnail": "https://telegra.ph/file/30ff50a0f38df0e4e3854.jpg", "sourceUrl": "https://www.instagram.com/__arakkal_lucifer=="} , "waveform": [ 20,5,0,80,80,30,20,50 ] }",
  PROCESSNAME: process.env.PROCESSNAME || "Izumi-v3",
  AUTHOR: process.env.AUTHOR || "Eypz God",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:postgres://koyeb-adm:aAXZVMUP1Wi7@ep-flat-morning-a2jz68hj.eu-central-1.pg.koyeb.app/koyebdb
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
