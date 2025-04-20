const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,509xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,509xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50934419960,509xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_54_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVQyOEw1QlRGdnc5WTI1TEpHMWdCTlBudDFHenBMV29sMTlnaTR5cFByTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MDkzNDQxOTk2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkY2Mzc0QTkxODgwMTcyOEUyMTcwMTE2NDVGRjcwMThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ1MTE0MDQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5MzQ0MTk5NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4Qjc5MURGMEEyMUUwMjBFRjA1OUJGRkY4Mzk1MDc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NTExNDA0M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXSi1ONUl1UlJUNmRkcFBfdERjSkJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2YTY3ODQxLWNhYWUtNDJlYS04NDBhLWRiMTNkYmY3ZmRhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDIyNCxcbiAgICAgIDI0MCxcbiAgICAgIDI0MSxcbiAgICAgIDEyMSxcbiAgICAgIDczLFxuICAgICAgMTU5LFxuICAgICAgMTM2LFxuICAgICAgMTQyLFxuICAgICAgMTMxLFxuICAgICAgMjI1LFxuICAgICAgNyxcbiAgICAgIDE2NSxcbiAgICAgIDMyLFxuICAgICAgMSxcbiAgICAgIDEzMixcbiAgICAgIDk4LFxuICAgICAgMTU0LFxuICAgICAgMTQxLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxMzUsXG4gICAgICAyMDMsXG4gICAgICAxNDUsXG4gICAgICAxMDksXG4gICAgICAyNCxcbiAgICAgIDIxMixcbiAgICAgIDg2LFxuICAgICAgMTE5LFxuICAgICAgNzYsXG4gICAgICA5NyxcbiAgICAgIDM1LFxuICAgICAgMTk3LFxuICAgICAgMSxcbiAgICAgIDUwLFxuICAgICAgMjA0LFxuICAgICAgMjE3LFxuICAgICAgMjUzLFxuICAgICAgMTYxLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldNSjVBOVA5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzNDQxOTk2MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDc2NDUzNTI1ODcyNzI6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLihKJ+TXIgU2VuYX7igKLCrvCfpKlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNU3Q1djhHRUxXbmtjQUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllhOUQzWGFyQXAzY1JMQ000ZHo4OWN0ZTBYRFIxd3BMMTliT1NvQ1Vlbk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMzFGZXE0MWJzcGFsV21YaEpqd3E5eWpsQ2MwTVVKM1ZpelVqc3Q0YWVIcy9kQ1JBWHpScmJLYVBlZ3o1c01hRk5JSVNIWHhyK0szWmZxMy9ybFluQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZm9ocjZrWk5FUFllRUpPVGNmUXBPckxpclAvUUYyRENkVU90WE1qNklsM0x0K0dMcXhLYzV4bzlodG1PNHM1dnVLUS95R1RrLzRFWStVTEZUK2FMZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzQ0MTk5NjA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTExNDA0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlVSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVVKLmpzb24iOiAie1wia2V5RGF0YVwiOlwialhjZVlGWDFqK1hBUUZxdVZkanIzTVIwTktMRnJuS2FYcUtLc2kyNTdPbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc4NjI4MDM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ1Nzg1ODY2NjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Andromède",
  ownername:process.env.OWNER_NAME|| "trotsky",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
