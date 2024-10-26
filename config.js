//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349169759221";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUIrTXNvajlXRlpOL1FndG5FZXZMRkIwdHk0M1JYWlN2RER4MkZsVi9rWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2ExR0ZrbjBzelVuV2NuM1RJem95SHpCeFBPMFpzb0VnL2RIa1I4TEQyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRStKQThEK1VZbDcrSlBzNFppNTBTV01saWdkWmZKZUQ3MDhLTzZJOG5NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBekhzZnkzRnBDWnY1SEdkNmZKVDNZNExTbUp6UlFhdmVpQzNEcWdBaDM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHbk5ydGpvSXZBSnl5VDlablJQNEhTd2hxN3hxeS9MOEgyY3ZCTzJzbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis2bjg4NzB1VTZVdGQvS1grN2ZYVnVMalE5SmE2SE1UNUg0LzBvZ2NkZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1mTDM2S1hpZjNGTjRKT1hkZjZRb2VHRnU0eDVRYWNsMkRweUp5RjBYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzlTZGN1V0Z5bFBEcTcwbXZabmdDdFcxZ054eHFHWW94L3lwaHRFck5Ycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkaDVjMmUxM2I5Y1NmUzBaWVJBQVNMaGlTbmFLYkpxZjBMc2ROUC9tbC9SZWhydjhKWXhZVjBYYm9qcS91VzFMNXNnSFFFa2NFOEIrRVY2VS9TVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IlRDQzk2RGJCQy96NmZQajNIUHJhWVNldnBielB4ZDlsNVNUK3E4ODdFUHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNEaHd0TjRMUjFPUEJlVEl2QWJFM0EiLCJwaG9uZUlkIjoiYjNhY2M3NzYtNmZkYy00OWZjLTljMzktZWE5ZGFjOTIzYTM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NbWd6elVTRTNZWUREWEtBMWJKcUpVVzVERT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTTBXTjYyRjdmekwrb3J6NGtqU0NQbnpPczg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDFCWDhSUzgiLCJtZSI6eyJpZCI6IjIzNDkxNjk3NTkyMjE6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDb2FjaCBDaGkgQ2hpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdWk5YlVCRU5XZzg3Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwVnZvVlZxdmptNnpYcmxUL1lpRmRwbVArcTdDYWpwV20xVGhwK3Y4ZXg0PSIsImFjY291bnRTaWduYXR1cmUiOiJlcVZneDhXY21ISzIwUTZWZm9QZkxwVGhZQnlERlhxelduKytTKzdSc3RHd3dia2xoeXN5ZlJCTldqSnJLKzJLWmRsSmU4YVpKckNUeVhFeVIzcGFCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQnpRN21Fb1RGZzFJcTRybGtuR1BPOEV2OXI2RUJqNVJIV0NYYnFkQTBjR0tCbXdrVW9kYTJ5aGpHOSswUXpySHVKSnF3N0hFano3QyszT29RK2I0aFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY5NzU5MjIxOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVZiNkZWYXI0NXVzMTY1VS8ySWhYYVpqL3F1d21vNlZwdFU0YWZyL0hzZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTk0MTYwMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFOFcifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
