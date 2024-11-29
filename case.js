/*
 -  Script by   : Maxtream_09
 -  Github.     : https://github.com/Maxz-09
 -  Sosmed    : https://linktr.ee/Maxtream_09
 */ 
 
// Buy to unlock all encrypted codes - $30 USD


require("./config.js")
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction.js')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, RevikaruectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediavikaruInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisvikaruectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const { exec } = require("child_process")
const moment = require('moment-timezone')
const pino = require("pino")
const readline = require("readline")

// Base
module.exports = async (vikaru, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

// Variable Prefix 
const prefixRegex = /^[./#!]/; // Prefix
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.'; // Delete the dot text inside the quotation marks if you don't want the bot to use the prefix. Ex: ( [0] : ''; )

(function(_0x34fcbb,_0xe1d7dc){function _0x3aea64(_0x48bea5,_0x5842d9,_0x53572f,_0x110c78){return _0x5a64(_0x53572f-0x374,_0x110c78);}function _0x506591(_0xe981a3,_0x4728b7,_0x56f6eb,_0x24e663){return _0x5a64(_0x56f6eb-0x109,_0x24e663);}const _0xb9fb21=_0x34fcbb();while(!![]){try{const _0x41c3d1=parseInt(_0x3aea64(0x4a6,0x484,0x4bd,0x4cc))/(-0xc*-0x32+-0x10c8+0xe71)+-parseInt(_0x3aea64(0x476,0x480,0x477,0x47b))/(-0x981+0xe3f+-0x4bc)+parseInt(_0x506591(0x228,0x212,0x1e3,0x22b))/(-0xb*0x7f+-0x3f2*0x2+0xd5c)+-parseInt(_0x3aea64(0x43f,0x486,0x445,0x436))/(-0x1ae8+-0x2*-0x1057+-0x5c2)*(-parseInt(_0x3aea64(0x42e,0x465,0x425,0x3e0))/(0xfb0*-0x1+0xbe*0x34+-0x16e3))+-parseInt(_0x506591(0x21b,0x274,0x228,0x270))/(0x1779*0x1+-0xe07+-0x96c)*(-parseInt(_0x3aea64(0x430,0x4a3,0x452,0x453))/(0x122d+0x1b24+-0x2d4a))+-parseInt(_0x3aea64(0x40c,0x3e5,0x42a,0x43c))/(0x1336+-0xe65+-0x5*0xf5)*(-parseInt(_0x3aea64(0x49d,0x471,0x450,0x450))/(-0x10*0x21d+0x2c8*0x1+0x2d3*0xb))+-parseInt(_0x506591(0x1b4,0x1ab,0x1ed,0x239))/(-0x1046+0x1b3*-0x3+0x1569);if(_0x41c3d1===_0xe1d7dc)break;else _0xb9fb21['push'](_0xb9fb21['shift']());}catch(_0x5226fc){_0xb9fb21['push'](_0xb9fb21['shift']());}}}(_0x1c03,0x1074b8+-0xa97be*0x2+-0x47f*-0x458));const _0x4c0c16=(function(){function _0x3e59b(_0xc2f0dd,_0x5c5d2e,_0x536e89,_0x551b70){return _0x5a64(_0x5c5d2e- -0x307,_0x536e89);}const _0x1a1af7={};_0x1a1af7[_0x3e59b(-0x1dc,-0x225,-0x1d8,-0x1d8)]=_0x554541(0x19f,0x190,0x1dc,0x19b)+'ng',_0x1a1af7[_0x3e59b(-0x19f,-0x1d8,-0x1a8,-0x188)]=function(_0x3e0cfb,_0x3e0182){return _0x3e0cfb===_0x3e0182;};function _0x554541(_0x4bb142,_0x1f0569,_0x3b02f8,_0x27e25c){return _0x5a64(_0x4bb142-0xf5,_0x27e25c);}const _0x582d73=_0x1a1af7;let _0x44f1c8=!![];return function(_0x50bc5a,_0x188bb5){function _0x4f233e(_0x181811,_0x41955e,_0x4dcfbc,_0x510a08){return _0x3e59b(_0x181811-0x1b0,_0x510a08-0x1cd,_0x41955e,_0x510a08-0x99);}function _0x5c0eea(_0x1bbaf9,_0x1ae8a6,_0x187ce7,_0x50ee0b){return _0x554541(_0x1ae8a6-0x2eb,_0x1ae8a6-0x65,_0x187ce7-0x1e8,_0x187ce7);}if(_0x582d73[_0x4f233e(-0x3d,0x18,-0x4,-0xb)](_0x5c0eea(0x533,0x522,0x50b,0x537),_0x4f233e(0x26,-0x26,0x38,0x8))){const _0x53e516=_0x44f1c8?function(){function _0x4d5979(_0x171da9,_0x2938bd,_0x565a31,_0x271741){return _0x4f233e(_0x171da9-0x130,_0x2938bd,_0x565a31-0x1c1,_0x271741-0x1d5);}if(_0x188bb5){const _0x233e1e=_0x188bb5[_0x4d5979(0x147,0x145,0x1c5,0x18b)](_0x50bc5a,arguments);return _0x188bb5=null,_0x233e1e;}}:function(){};return _0x44f1c8=![],_0x53e516;}else _0x33a372=_0x582d73[_0x4f233e(-0x59,-0x23,-0x26,-0x58)];};}()),_0x1f0e1c=_0x4c0c16(this,function(){const _0x59e0aa={};function _0x334470(_0x21f7f4,_0x28425c,_0x295a20,_0xf12954){return _0x5a64(_0x21f7f4-0x291,_0x28425c);}_0x59e0aa[_0x334470(0x38f,0x3d5,0x3b7,0x3c6)]=_0x334470(0x393,0x3ad,0x382,0x3a5)+'+$';const _0x462cba=_0x59e0aa;function _0x4b6563(_0x2b89c9,_0x3df113,_0x41660b,_0x4c9e8a){return _0x5a64(_0x4c9e8a-0x360,_0x41660b);}return _0x1f0e1c[_0x334470(0x348,0x358,0x38b,0x31f)]()['search'](_0x462cba[_0x334470(0x38f,0x35f,0x346,0x37b)])[_0x4b6563(0x3e7,0x468,0x3f3,0x417)]()[_0x4b6563(0x407,0x420,0x3fd,0x44c)+'r'](_0x1f0e1c)[_0x4b6563(0x402,0x3e7,0x40d,0x439)](_0x462cba[_0x334470(0x38f,0x3cf,0x37b,0x39b)]);});_0x1f0e1c();const budy=typeof m[_0x9972fa(0x1ef,0x193,0x1f9,0x1be)]===_0x9972fa(0x174,0x20b,0x1e2,0x1c1)?m[_0x837296(0x3d3,0x441,0x40c,0x403)]:'',isCmd=body[_0x9972fa(0x1bf,0x1f5,0x1bf,0x1cb)](prefix),command=isCmd?body[_0x837296(0x43e,0x41f,0x3ee,0x409)](prefix[_0x9972fa(0x245,0x223,0x26f,0x236)])[_0x9972fa(0x274,0x21b,0x27f,0x243)]()[_0x9972fa(0x1fa,0x1a3,0x1d1,0x1e1)]('\x20')['shift']()[_0x837296(0x44c,0x3dd,0x413,0x427)+'e']():'',args=body[_0x837296(0x4a5,0x4da,0x491,0x46e)]()['split'](/ +/)[_0x837296(0x404,0x3e8,0x3ee,0x3b2)](0xa97*-0x2+0x3e*0x50+-0x1cf*-0x1),text=q=args[_0x9972fa(0x1e3,0x1ad,0x1dc,0x1aa)]('\x20'),sender=m[_0x9972fa(0x1b9,0x1a8,0x1d5,0x1d8)][_0x837296(0x431,0x489,0x441,0x48d)]?vikaru[_0x837296(0x403,0x3b2,0x404,0x43a)]['id'][_0x9972fa(0x212,0x1d5,0x20f,0x1e1)](':')[-0x303+0x14ec+-0x11e9]+(_0x9972fa(0x233,0x204,0x280,0x22e)+_0x9972fa(0x273,0x210,0x255,0x233))||vikaru[_0x9972fa(0x165,0x1d4,0x1fc,0x1b6)]['id']:m[_0x837296(0x3e7,0x441,0x426,0x45c)][_0x9972fa(0x24b,0x243,0x216,0x21f)+'t']||m[_0x9972fa(0x1d1,0x20e,0x1ac,0x1d8)]['remoteJid'],senderNumber=sender[_0x837296(0x3f0,0x3e3,0x42f,0x3e0)]('@')[0x3*-0x9e9+-0x1f94+0x3d4f],pushname=m[_0x9972fa(0x1be,0x1d4,0x222,0x1df)]||''+senderNumber,botNumber=await vikaru[_0x9972fa(0x1b2,0x19a,0x1f8,0x1cf)](vikaru[_0x837296(0x443,0x3e1,0x404,0x3e7)]['id']),isBot=botNumber[_0x837296(0x453,0x3ec,0x41a,0x3da)](senderNumber),itsMe=m[_0x9972fa(0x202,0x1c7,0x1a3,0x1b1)]==botNumber?!![]:![],quoted=m['quoted']?m[_0x9972fa(0x241,0x232,0x256,0x210)]:m,mime=(quoted[_0x837296(0x412,0x45e,0x445,0x40d)]||quoted)[_0x837296(0x49c,0x48c,0x45a,0x450)]||'',qmsg=quoted['msg']||quoted,isMedia=/image|video|sticker|audio/['test'](mime),isDeveloper=m&&m[_0x837296(0x406,0x424,0x3ff,0x446)]&&[botNumber,...global['owner']][_0x9972fa(0x204,0x26a,0x1fb,0x23e)](_0x196120=>_0x196120['replace'](/[^0-9]/g,'')+(_0x837296(0x45d,0x49d,0x47c,0x435)+'p.net'))[_0x9972fa(0x214,0x181,0x1fe,0x1cc)](m['sender'])||![];function _0x837296(_0x4e1cd8,_0x41ca1e,_0x101dc1,_0x2b4c63){return _0x5a64(_0x101dc1-0x345,_0x41ca1e);}const isDemo=m&&m[_0x837296(0x44e,0x3f7,0x3ff,0x3d2)]&&[global[_0x9972fa(0x26d,0x22e,0x252,0x227)]][_0x9972fa(0x277,0x215,0x215,0x23e)](_0x11e46d=>_0x11e46d[_0x9972fa(0x1b0,0x198,0x222,0x1ea)](/[^0-9]/g,'')+('@s.whatsap'+_0x837296(0x47a,0x4c7,0x481,0x44d)))[_0x9972fa(0x1cc,0x20e,0x1e9,0x1cc)](m[_0x9972fa(0x19c,0x177,0x1f6,0x1b1)])||![],contributor=JSON['parse'](fs[_0x837296(0x41e,0x437,0x40d,0x402)+'nc'](_0x837296(0x3f8,0x3eb,0x3f3,0x405)+'base/admin'+_0x9972fa(0x1df,0x1ef,0x1c8,0x1bc))),isAdmin=[botNumber,...contributor]['map'](_0x29c3a7=>_0x29c3a7[_0x9972fa(0x218,0x1d0,0x20f,0x1ea)](/[^0-9]/g,'')+('@s.whatsap'+_0x9972fa(0x212,0x231,0x21a,0x233)))[_0x9972fa(0x1f3,0x17d,0x201,0x1cc)](m[_0x9972fa(0x18a,0x1f1,0x1f4,0x1b1)]);let premium=JSON[_0x837296(0x454,0x49c,0x459,0x465)](fs[_0x837296(0x433,0x429,0x40d,0x44d)+'nc'](_0x837296(0x42d,0x42a,0x3f3,0x3c1)+_0x9972fa(0x1fd,0x22f,0x1e9,0x208)+_0x9972fa(0x279,0x24f,0x222,0x230)));const isPremium=[botNumber,...contributor,...premium][_0x837296(0x489,0x448,0x48c,0x448)](_0x169998=>_0x169998['replace'](/[^0-9]/g,'')+(_0x9972fa(0x258,0x253,0x1f2,0x22e)+_0x837296(0x481,0x45e,0x481,0x489)))[_0x837296(0x43f,0x42b,0x41a,0x3fa)](m[_0x9972fa(0x1d2,0x1aa,0x183,0x1b1)]),isGroup=m[_0x837296(0x485,0x3ff,0x440,0x46f)][_0x837296(0x494,0x49a,0x473,0x44e)](_0x9972fa(0x1ec,0x1e8,0x20a,0x21a)),groupMetadata=m['isGroup']?await vikaru[_0x9972fa(0x27a,0x278,0x281,0x238)+'ata'](m[_0x837296(0x444,0x3f3,0x440,0x482)])['catch'](_0x5c4b02=>{}):'',groupName=m['isGroup']?groupMetadata[_0x837296(0x46e,0x410,0x45b,0x418)]:'',participants=m['isGroup']?await groupMetadata['participan'+'ts']:'',groupAdmins=m[_0x9972fa(0x220,0x1cc,0x1cb,0x1dc)]?await getGroupAdmins(participants):'',isBotAdmins=m['isGroup']?groupAdmins[_0x837296(0x46a,0x401,0x41a,0x44c)](botNumber):![],isAdmins=m[_0x9972fa(0x18f,0x1e3,0x1af,0x1dc)]?groupAdmins[_0x837296(0x41a,0x3c9,0x41a,0x403)](m[_0x837296(0x3d5,0x3b8,0x3ff,0x404)]):![],groupOwner=m[_0x837296(0x422,0x42b,0x42a,0x424)]?groupMetadata[_0x9972fa(0x234,0x213,0x26a,0x22d)]:'',isGroupOwner=m[_0x837296(0x3fc,0x474,0x42a,0x433)]?(groupOwner?groupOwner:groupAdmins)[_0x837296(0x42b,0x463,0x41a,0x429)](m['sender']):![],time=moment()['tz'](_0x9972fa(0x1eb,0x21f,0x1cf,0x1ee)+'ta')[_0x9972fa(0x23f,0x1f7,0x23b,0x218)](_0x9972fa(0x230,0x212,0x254,0x21b)),wib=moment(Date[_0x9972fa(0x228,0x1e6,0x23f,0x209)]())['tz'](_0x9972fa(0x1c6,0x208,0x201,0x1ee)+'ta')['locale']('id')[_0x837296(0x44a,0x416,0x466,0x480)](_0x837296(0x4a3,0x45c,0x47a,0x469)),wita=moment(Date['now']())['tz'](_0x837296(0x3e7,0x41b,0x400,0x3de)+'sar')['locale']('id')[_0x837296(0x4b3,0x48d,0x466,0x451)](_0x9972fa(0x223,0x1f7,0x23b,0x22c)),wit=moment(Date[_0x837296(0x40e,0x41f,0x457,0x497)]())['tz']('Asia/Jayap'+'ura')[_0x837296(0x499,0x454,0x46c,0x460)]('id')[_0x9972fa(0x23f,0x1e0,0x1fc,0x218)]('HH:mm:ss\x20z'),salam=moment(Date[_0x9972fa(0x254,0x1f2,0x1e2,0x209)]())['tz']('Asia/Jakar'+'ta')[_0x9972fa(0x1d1,0x213,0x1e3,0x21e)]('id')[_0x9972fa(0x21a,0x1c5,0x245,0x218)]('a');let timeSayings;if(time>=_0x9972fa(0x21d,0x271,0x205,0x223)&&time<_0x9972fa(0x23f,0x213,0x1fe,0x1ff))timeSayings=_0x837296(0x423,0x496,0x45f,0x474);else{if(time>=_0x9972fa(0x21f,0x219,0x1c1,0x20f)&&time<_0x837296(0x46b,0x425,0x471,0x45e))timeSayings='Good\x20Eveni'+'ng';else{if(time>=_0x837296(0x46c,0x4c2,0x48d,0x44c)&&time<_0x9972fa(0x237,0x1cb,0x245,0x20f))timeSayings=_0x837296(0x41b,0x429,0x462,0x42e)+_0x9972fa(0x1eb,0x1c7,0x192,0x1a2);else time>=_0x837296(0x449,0x4c4,0x479,0x49c)&&time<_0x837296(0x48b,0x480,0x48d,0x472)?timeSayings=_0x9972fa(0x1dc,0x1bb,0x20d,0x20e)+'ng':timeSayings=_0x9972fa(0x1b7,0x1b1,0x1d6,0x1b9)+_0x837296(0x45f,0x4c9,0x489,0x47a);}};let d=new Date(),gmt=new Date(-0x56f+0x3ee*0x3+-0x65b)[_0x9972fa(0x240,0x279,0x26f,0x242)]()-new Date('1\x20Januari\x20'+_0x9972fa(0x1a7,0x182,0x1e4,0x1b3))['getTime'](),weton=[_0x9972fa(0x16c,0x14e,0x1e3,0x19f),_0x9972fa(0x16a,0x1fc,0x17b,0x1bb),'Wage',_0x837296(0x480,0x3f0,0x433,0x43c),'Legi'][Math['floor']((d*(-0x15d0+0x2461+0x3a4*-0x4)+gmt)/(0x81a8f4+0x5c2cf85+-0x13993b9))%(0x2*-0x114d+-0x1bf7+-0x2*-0x1f4b)];const _0x5eb205={};_0x5eb205[_0x837296(0x3dd,0x3b4,0x3fe,0x3de)]=_0x9972fa(0x1ca,0x1fe,0x1fb,0x1ce);let week=d[_0x837296(0x401,0x441,0x422,0x474)+_0x837296(0x444,0x3ca,0x403,0x400)]('id',_0x5eb205);const _0x980595={};_0x980595['day']='numeric',_0x980595[_0x837296(0x3ef,0x3f9,0x3ec,0x39f)]='long',_0x980595[_0x837296(0x455,0x419,0x415,0x3d2)]='numeric';let calender=d[_0x837296(0x436,0x3e8,0x422,0x45e)+_0x9972fa(0x1f6,0x18c,0x202,0x1b5)]('id',_0x980595);const _0x4c3a3c={};_0x4c3a3c['remoteJid']='0@s.whatsa'+_0x837296(0x432,0x3fa,0x43d,0x474);function _0x5a64(_0x178168,_0x3bd379){const _0x10fb46=_0x1c03();return _0x5a64=function(_0x4b63e6,_0xc056ed){_0x4b63e6=_0x4b63e6-(-0x15*-0x13c+-0x6*-0x60d+0x1*-0x3d93);let _0x302829=_0x10fb46[_0x4b63e6];return _0x302829;},_0x5a64(_0x178168,_0x3bd379);}function _0x9972fa(_0x39d3c1,_0x5996a2,_0x5ead65,_0x372472){return _0x5a64(_0x372472-0xf7,_0x39d3c1);}_0x4c3a3c[_0x837296(0x457,0x41a,0x441,0x405)]=![],_0x4c3a3c['id']=_0x9972fa(0x221,0x1d5,0x1f2,0x1e0)+'pp.net',_0x4c3a3c['participan'+'t']='0@s.whatsa'+_0x837296(0x43c,0x418,0x43d,0x47d);function _0x1c03(){const _0x596313=['om/Maxz-09','06:00:00','HH:mm:ss\x20z','owner','@s.whatsap','\x20\x20:\x20\x1b[0m[\x20','um.json','t.js','3.0\x0aN:Sy;B','p.net','message','Premium','length','Dev!','groupMetad','hbExr','›\x20in\x20\x20\x20\x20\x20\x20','phile','.moe/ly216','n\x20reached,','map','11:00:00','1674413xdDgJr','Developer','getTime','trim','month','Pahing','slice','Good\x20Eveni','noon','\x20access\x20he','relayMessa','./lib/data','Premium!','deIso4217','3375530zODdkz','mentMessag','join','\x1b[0m','requestPay','8OjaVAF','toString','sourceUrl','weekday','sender','Asia/Makas','2024','mediaType','teString','user','//github.c','renderLarg','Good\x20Nycto','title','Pon','.json','›\x20Sender\x20\x20','text','readFileSy','value','string','\x20open\x20full','stamp','ext=Hello','toLowerCas','expiryTime','year','8ubTSOD','status@bro','https://wa','startsWith','includes','\x1b[1;32m☰\x20P','short','decodeJid','search','4661784vBJjsy','les.catbox','1634994HIdqON','toLocaleDa','77pIOAoe','amount1000','body','key','fImZq','offset','41769390FazQvR','isGroup','BLabel:Pon','extendedTe','pushName','0@s.whatsa','split','©Maxz-09','constructo','currencyCo','Kliwon','erThumbnai','apply','8899033/?t','ARD','replace','contextInf','›\x20Limit\x20\x20\x20','requestFro','Asia/Jakar','pp.net','ot;;;\x0aFN:y','sendMessag','chat','fromMe','----------','wAfrQ','USD','msg','User','(((.+)+)+)','290172MIXDpQ','32m','log','\x20/\x20\x1b[0;33m','re\x0a\x0ahttps:','23:59:00','mtype','D\x0aVERSION:','Demo\x20user\x20','access\x20lim','User!','Buy\x20to\x20rem','›\x20Status\x20\x20','remoteJid','base/premi','now',';waid=','parse','mimetype','subject','Good\x20Morni','15:00:00','quoted','Good\x20Night','mentionedJ','ove\x20limit❗','Good\x20After','noteMessag','290052DiXHTm','sel\x0aEND:VC','format','base/limit','@g.us','HH:mm:ss','.me/628950','Personal\x20C','locale','participan','C\x1b[1;32m-C','xtMessage','Vikaru-Md','19:00:00','C-CMD','endsWith','mIaRu','devNumber','Unlimited','amount'];_0x1c03=function(){return _0x596313;};return _0x1c03();}const _0x18883b={};_0x18883b[_0x837296(0x461,0x4b2,0x460,0x48c)+'id']=[''+m[_0x837296(0x434,0x3ef,0x3ff,0x44f)]];const _0x3b6ae0={};_0x3b6ae0['text']=timeSayings+'\x20-\x20'+(isDeveloper?_0x9972fa(0x26e,0x204,0x27a,0x237):isPremium?_0x837296(0x3a8,0x3f6,0x3f4,0x3a3):_0x9972fa(0x1e2,0x242,0x1f3,0x204)),_0x3b6ae0[_0x9972fa(0x20a,0x229,0x1f7,0x1eb)+'o']=_0x18883b;const _0x144458={};_0x144458['extendedTe'+_0x9972fa(0x1d9,0x254,0x20b,0x221)]=_0x3b6ae0;const _0x5d78f8={};_0x5d78f8[_0x837296(0x3f5,0x431,0x40e,0x3d7)]=0x3b9ac9ff,_0x5d78f8[_0x837296(0x3fc,0x41d,0x428,0x3eb)]=0x3e8,_0x5d78f8[_0x9972fa(0x214,0x200,0x1e2,0x1e4)+'de']=_0x837296(0x441,0x46c,0x444,0x494);const _0x37a524={};_0x37a524[_0x9972fa(0x1ea,0x231,0x1c3,0x1e4)+_0x837296(0x3dc,0x3df,0x3f5,0x3ec)]=_0x837296(0x433,0x432,0x444,0x47b),_0x37a524['amount1000']=0x1869f,_0x37a524[_0x837296(0x46a,0x462,0x43b,0x40e)+'m']=_0x837296(0x440,0x464,0x42e,0x401)+_0x837296(0x430,0x468,0x43d,0x416),_0x37a524['noteMessag'+'e']=_0x144458,_0x37a524['expiryTime'+'stamp']=0x0,_0x37a524[_0x9972fa(0x1ea,0x1f7,0x242,0x229)]=_0x5d78f8;const _0x5364fc={};_0x5364fc['requestPay'+_0x837296(0x3e0,0x442,0x3f7,0x3b3)+'e']=_0x37a524;const _0x492c49={};_0x492c49['key']=_0x4c3a3c,_0x492c49[_0x837296(0x466,0x4a9,0x482,0x484)]=_0x5364fc;let qPayment=_0x492c49;const _0x374745={};_0x374745[_0x9972fa(0x1d7,0x21a,0x21e,0x207)]=_0x9972fa(0x178,0x1f8,0x203,0x1c9)+'adcast',_0x374745[_0x9972fa(0x206,0x202,0x21f,0x1f3)]=![],_0x374745['id']=_0x9972fa(0x1fd,0x1df,0x223,0x1e0)+_0x9972fa(0x1cb,0x1dc,0x206,0x1ef),_0x374745['participan'+'ts']=_0x837296(0x417,0x45d,0x42e,0x3de)+_0x837296(0x3f4,0x3ff,0x43d,0x3ea);let qContact={'key':_0x374745,'message':{'contactMessage':{'vcard':'BEGIN:VCAR'+_0x9972fa(0x1c7,0x22d,0x1be,0x201)+_0x837296(0x4b3,0x4bb,0x480,0x495)+_0x9972fa(0x1f8,0x206,0x22f,0x1f0)+'\x0aitem1.TEL'+_0x9972fa(0x21f,0x1c2,0x22a,0x20a)+m[_0x9972fa(0x1ed,0x1ea,0x183,0x1b1)][_0x9972fa(0x1f3,0x1eb,0x206,0x1e1)]('@')[-0x1fc0*-0x1+-0x2de+0x1*-0x1ce2]+':'+m[_0x9972fa(0x1b5,0x18f,0x1cc,0x1b1)][_0x837296(0x3e6,0x40d,0x42f,0x457)]('@')[0x5e2+0x5d9*0x5+-0x231f]+('\x0aitem1.X-A'+_0x9972fa(0x1de,0x1a3,0x223,0x1dd)+_0x837296(0x477,0x431,0x465,0x49b)+_0x837296(0x42e,0x460,0x437,0x479))}},'participant':_0x837296(0x3dc,0x45b,0x42e,0x42d)+_0x837296(0x446,0x442,0x43d,0x40f)};if(isCmd){let limitCount=-0x1e20+0x6d0+0x175a,limit=JSON[_0x837296(0x449,0x43a,0x459,0x415)](fs[_0x837296(0x3e0,0x42c,0x40d,0x456)+'nc']('./lib/data'+_0x9972fa(0x23e,0x23e,0x22d,0x219)+_0x9972fa(0x17c,0x18b,0x1af,0x1bc)));const {getLimit,isLimit,limitAdd,giveLimit,addBalance,kurangBalance,getBalance,isGame,gameAdd,givegame,cekGLimit}=require('./lib/limi'+_0x9972fa(0x27c,0x216,0x266,0x231));!isDemo&&limitAdd(m[_0x9972fa(0x19c,0x16a,0x176,0x1b1)],limit);if(isLimit(m['sender'],isDeveloper,isAdmin,isPremium,isDemo,limitCount,limit)){const _0x131a35={};_0x131a35['remoteJid']=_0x9972fa(0x19a,0x1b7,0x226,0x1e0)+'pp.net',_0x131a35[_0x9972fa(0x1d4,0x1de,0x1b0,0x1f3)]=![],_0x131a35['id']='0@s.whatsa'+_0x837296(0x40d,0x472,0x43d,0x483),_0x131a35[_0x837296(0x450,0x45b,0x46d,0x440)+'t']=_0x9972fa(0x1c0,0x1a5,0x1bb,0x1e0)+_0x9972fa(0x23d,0x22c,0x1c4,0x1ef);const _0x18badc={};_0x18badc['mentionedJ'+'id']=[''+m['sender']];const _0x4779d9={};_0x4779d9[_0x837296(0x452,0x433,0x40c,0x3ef)]=_0x837296(0x474,0x499,0x453,0x400)+_0x837296(0x484,0x4ab,0x461,0x486),_0x4779d9[_0x837296(0x460,0x451,0x439,0x415)+'o']=_0x18badc;const _0x4dca48={};_0x4dca48[_0x9972fa(0x229,0x1a3,0x1b9,0x1de)+_0x9972fa(0x239,0x266,0x1e4,0x221)]=_0x4779d9;const _0x6bcce5={};_0x6bcce5['value']=0x7530,_0x6bcce5[_0x9972fa(0x1ac,0x21e,0x1b5,0x1da)]=0x3e8,_0x6bcce5[_0x9972fa(0x21c,0x1e7,0x1bf,0x1e4)+'de']=_0x837296(0x451,0x42c,0x444,0x3ff);const _0x12dd4b={};_0x12dd4b[_0x837296(0x484,0x3e2,0x432,0x455)+_0x837296(0x42a,0x3cd,0x3f5,0x3fa)]=_0x837296(0x3f7,0x464,0x444,0x448),_0x12dd4b[_0x837296(0x468,0x44d,0x424,0x458)]=0x7530,_0x12dd4b[_0x9972fa(0x1c0,0x1a3,0x1c0,0x1ed)+'m']=_0x837296(0x451,0x3f7,0x42e,0x44b)+_0x9972fa(0x22a,0x20b,0x1b8,0x1ef),_0x12dd4b[_0x837296(0x422,0x4b6,0x463,0x4ab)+'e']=_0x4dca48,_0x12dd4b[_0x837296(0x3e9,0x429,0x414,0x402)+_0x9972fa(0x18c,0x19d,0x1b2,0x1c3)]=0x0,_0x12dd4b['amount']=_0x6bcce5;const _0x37a4cf={};_0x37a4cf[_0x9972fa(0x166,0x178,0x1f7,0x1ac)+_0x837296(0x40a,0x3ba,0x3f7,0x3f8)+'e']=_0x12dd4b;const _0x338304={};_0x338304['key']=_0x131a35,_0x338304[_0x9972fa(0x227,0x1fc,0x230,0x234)]=_0x37a4cf;let qPrice=_0x338304,text=_0x837296(0x44f,0x467,0x450,0x432)+_0x837296(0x424,0x412,0x451,0x455)+'it\x20has\x20bee'+_0x837296(0x45f,0x468,0x48b,0x4d5)+_0x837296(0x450,0x43b,0x410,0x3c8)+_0x837296(0x40b,0x3d9,0x3f1,0x3e5)+_0x9972fa(0x1ab,0x1fe,0x248,0x1fe)+_0x837296(0x401,0x3de,0x405,0x3cb)+_0x9972fa(0x232,0x1f3,0x224,0x22a)+'/Vikaru-Bo'+'t';const _0x4a842c={};_0x4a842c[_0x837296(0x3dc,0x419,0x408,0x41e)]=_0x9972fa(0x20e,0x24c,0x24d,0x222),_0x4a842c['body']=_0x9972fa(0x217,0x197,0x1bf,0x1e2),_0x4a842c['thumbnailU'+'rl']='https://fi'+_0x9972fa(0x1b2,0x1e6,0x1f8,0x1d2)+_0x9972fa(0x246,0x265,0x281,0x23c)+'w.jpg',_0x4a842c[_0x9972fa(0x1b8,0x195,0x174,0x1af)]=_0x837296(0x40b,0x447,0x418,0x404)+_0x9972fa(0x1fc,0x20f,0x248,0x21c)+_0x9972fa(0x1fd,0x1bb,0x237,0x1e8)+_0x9972fa(0x204,0x178,0x203,0x1c4),_0x4a842c[_0x837296(0x3f0,0x3dc,0x402,0x3e8)]=0x1,_0x4a842c[_0x837296(0x401,0x41a,0x406,0x400)+_0x9972fa(0x1c5,0x1d7,0x1ab,0x1e6)+'l']=![],await vikaru[_0x9972fa(0x21b,0x242,0x1ab,0x1f1)+'e'](m['chat'],{'text':text,'contextInfo':{'isForwarded':!![],'mentionedJid':[m[_0x837296(0x427,0x3c0,0x3ff,0x3be)]],'externalAdReply':_0x4a842c}},{'userJid':m[_0x9972fa(0x1e5,0x1c5,0x1df,0x1f2)],'quoted':qPrice}),vikaru[_0x9972fa(0x15b,0x1a2,0x177,0x1a4)+'ge'](m['key'][_0x9972fa(0x256,0x1ca,0x244,0x207)],m[_0x837296(0x457,0x43a,0x440,0x467)],{'messageId':m['key']['id']});}console[_0x9972fa(0x205,0x213,0x215,0x1fc)](),console[_0x837296(0x43e,0x473,0x44a,0x45b)]((m[_0x9972fa(0x22d,0x1d5,0x208,0x1dc)]?'\x1b[1;32m☰\x20G'+_0x837296(0x479,0x439,0x46e,0x480)+'MD':_0x9972fa(0x1bf,0x20c,0x1d9,0x1cd)+_0x9972fa(0x1e9,0x1e0,0x1ed,0x224))+_0x837296(0x4a8,0x446,0x47d,0x478)+(m[_0x837296(0x444,0x447,0x425,0x46a)]||m[_0x837296(0x484,0x406,0x44e,0x48b)])+('\x20]\x20at\x20\x1b[0;'+_0x837296(0x442,0x40c,0x449,0x492))+calender+'\x1b[0m'),console[_0x837296(0x403,0x41a,0x44a,0x414)]('=---------'+_0x9972fa(0x1f3,0x23f,0x23c,0x1f4)+_0x9972fa(0x1a1,0x1fe,0x1f8,0x1f4)+'----------'+'----=\x1b[0m'),console[_0x9972fa(0x20e,0x210,0x1c4,0x1fc)](_0x9972fa(0x21f,0x225,0x242,0x23a)+':\x20'+(m[_0x9972fa(0x195,0x1c9,0x1d0,0x1dc)]?groupName:_0x9972fa(0x1f4,0x25f,0x23f,0x21d)+'hat')+'\x1b[0m'),console['log']('›\x20From\x20\x20\x20\x20'+':\x20'+m[_0x9972fa(0x1c3,0x202,0x220,0x1f2)]+_0x9972fa(0x1bd,0x172,0x183,0x1ab)),console[_0x837296(0x411,0x42a,0x44a,0x417)](_0x9972fa(0x1d7,0x1ae,0x1d7,0x1bd)+':\x20\x1b[0;37m'+m[_0x837296(0x40c,0x431,0x3ff,0x3e9)][_0x837296(0x433,0x446,0x42f,0x458)]('@')[-0x2*-0x65+0x82a+0x1*-0x8f4]+'\x1b[0m'+(m[_0x837296(0x3f7,0x427,0x42d,0x47f)]?_0x9972fa(0x203,0x238,0x20f,0x1fd)+m[_0x837296(0x3f2,0x448,0x42d,0x3ed)]:'Undefined!')+_0x837296(0x3c3,0x432,0x3f9,0x3cc)),console[_0x9972fa(0x20a,0x1c0,0x205,0x1fc)](_0x837296(0x459,0x43b,0x454,0x49e)+':\x20'+(isDeveloper?_0x837296(0x4e0,0x469,0x48f,0x464):isPremium?_0x837296(0x43c,0x44d,0x483,0x48b):_0x837296(0x454,0x488,0x446,0x421))+_0x837296(0x3fa,0x3d6,0x3f9,0x3b5)),console[_0x9972fa(0x24d,0x1d2,0x1d6,0x1fc)](_0x837296(0x489,0x448,0x43a,0x430)+':\x20'+(isDemo?_0x9972fa(0x228,0x255,0x1e5,0x228):getLimit(m[_0x837296(0x3d7,0x437,0x3ff,0x3db)],limitCount,limit))+_0x9972fa(0x16a,0x1ed,0x19f,0x1ab)),console[_0x9972fa(0x1ed,0x1d3,0x221,0x1fc)]();};

// Variable image ( case menu )
let imgFile = fs.readFileSync('./media/image/menu.png')
let imgUrl = 'https://telegra.ph/file/4a18ce660b79afea0058a.jpg'
let imgUrlRandom = await axios.get(`https://api.waifu.pics/sfw/waifu`).then(({data}) => data.url )
let ppUrl = await vikaru.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1dff1788814dd281170f8.jpg")

// Exports Text
const { menu } = require('./lib/exports/menu.js')
const { clear } = require('./lib/exports/clear.js')

// Exports Virtex
const { virtex1 } = require('./lib/exports/virtex1.js')
const { virtex2 } = require('./lib/exports/virtex2.js')

// Reply Message / Forward ( isForwarded: true )
const reply = (teks) => {
vikaru.sendMessage(m.chat, { text : teks, contextInfo: { forwardingScore: 1000, isForwarded: false }}, { quoted: m })
};

// List Command ( Cannot be deleted ) ( default )
switch(command) {



//------------------------× EXAMPLE CMD ×-------------------------//


// Read message
case 'read': {
vikaru.readMessages([m.key])
} break

// Reaction + read
case 'reaction': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
} break

// Default message
case 'text1': {
await vikaru.sendMessage(m.chat, { text: 'Text' });
} break

// Default message + read
case 'text2': {
vikaru.sendMessage(m.chat, { text: 'Text', key: m.key });
} break

// Default message + quoted
case 'text3': {
await vikaru.sendMessage(m.chat, { text: 'Text' }, { quoted: m });
} break

// Default message + forward 
case 'text4': {
await vikaru.sendMessage(m.chat, { text: 'Text', contextInfo: { forwardingScore: 1, isForwarded: true }});
} break

// Default message + quoted + read
case 'text5': {
vikaru.sendMessage(m.chat, { text: 'Text', key: m.key }, { quoted: m });
} break

// Default message + quoted + read + forward
case 'text6': {
vikaru.sendMessage(m.chat, { text: 'Text', contextInfo: { forwardingScore: 10, isForwarded: true }, key: m.key }, { quoted: m });
} break

// Simple message + quoted + read
case 'repy': {
await reply('Text');
} break

// Sticker message
case 'sticker': {
await vikaru.sendMessage(m.chat, { sticker: fs.readFileSync('./media/sticker/wait.webp')});
} break

// Image + caption + quoted
case 'image': {
await vikaru.sendMessage(m.chat, { image: fs.readFileSync('./media/image/menu.png'), mimetype: 'image/jpeg', caption: `Text` }, { quoted: m });
} break

// Image + link + newsletter + caption + quoted
case 'link': {
let text = 'Caption'
await vikaru.sendMessage(m.chat, {
            text,
            contextInfo: {
                isForwarded: true, 
                mentionedJid: [m.sender], 
	            forwardedNewsletterMessageInfo: {
    newsletterJid: '120363279751315563@newsletter', // 6289508899033@s.whatsapp.net
    newsletterName: 'Vikaru-Md | © Max',
    serverMessageId: -1
},
                externalAdReply: {
                    title: `Title`,
                    body: `Description`,
                    thumbnailUrl: imgUrl,
                    //thumbnailUrl: imgUrlRandom,
                    //thumbnail: imgFile,
                    //thumbnailUrl: ppUrl,
                    //sourceUrl: `https://wa.me/6289513484928`,
                    sourceUrl: `${global.sosmed}`,
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
}, { userJid: m.chat, quoted: m })
 vikaru.relayMessage(m.key.remoteJid, m.chat, {
  messageId: m.key.id })
} break

// Document message + caption + quoted
case 'document': {
await vikaru.sendMessage(m.chat, { document: fs.readFileSync('./media/document/doc.txt'), caption: `Text` }, { quoted: m });
} break

// Audio message + quoted
case 'audio': {
await vikaru.sendMessage(m.chat, { audio : fs.readFileSync('./media/audio/menu.mp3'), mimetype: 'audio/mpeg' }, { quoted: m });
} break

// Voice note message + quoted
case 'vn': {
await vikaru.sendMessage(m.chat, { audio : fs.readFileSync('./media/audio/menu.mp3'), mimetype: 'audio/mp4', ptt: true }, { quoted: m });
} break

// Contact Message + quoted
case 'contact': {
let contact =  {
displayName: "Contact", contacts: [{displayName: 'Name', vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+'Name'+";;;\nFN:"+'Name'+"\nitem1.TEL;waid="+'6289508899033'+":"+'6289508899033'+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
};
await vikaru.sendMessage(m.chat, {contacts: contact }, { quoted: m })
} break

// Catalog + newsletter + quoted
case 'catalog': {
const msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
      contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: { // Newsletter 
            newsletterJid: '120363279751315563@newsletter', // 6289508899033@s.whatsapp.net
            newsletterName: 'Vikaru-Md | © Max', 
            serverMessageId: -1
		    }, // The divider
	businessMessageForwardInfo: { businessOwnerJid: vikaru.decodeJid(vikaru.user.id) },
	forwardingScore: 256,
            externalAdReply: {  
                title: 'Vikaru-Md', 
                thumbnailUrl: 'https://telegra.ph/file/8089ac60dd17836dcd0bf.jpg', 
                sourceUrl: 'https://chat.whatsapp.com/JfpGsd5GPh5EzvRVjm54tx',
                mediaType: 1,
                renderLargerThumbnail: false
            }
          }, 
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*\nHere is a list of products!`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: '© Max'
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            { // Button url
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: 'Button url'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: 'Title\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/9106a72b183e27a81a02d.jpg' } }, { upload: vikaru.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Open","url":"https://wa.me/6289508899033","merchant_url":"https://wa.me/6289508899033"}`
                  }
                  ]
              })
            }, // The divider
            { // Button copy
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: 'Button copy'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: 'Title\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/9106a72b183e27a81a02d.jpg' } }, { upload: vikaru.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                  name: "cta_copy",
                  buttonParamsJson: `{\"display_text\":\"Copy\",\"id\":\".menu\",\"copy_code\":\"text\"}`
                  }
                  ]
              })
            }, // The divider
            { // Button reply ( This button cannot be used in groups. error! )
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: 'Button reply'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: 'Judul\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/9106a72b183e27a81a02d.jpg' } }, { upload: vikaru.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                  name: "quick_reply",
                  buttonParamsJson: `{"display_text":"Select","id":".menu"}`
                  }
                  ]
              })
            } // The divider
          ]
        })
      })
    }
  }
}, { userJid: m.chat, quoted: m })
vikaru.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
} break

// Example command
case 'example': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});

let textmenu =
`Hello ${pushname}

List Menu :
- /ai <text>
- /ping
- /clear
- /menu
- /owner
- /sound
- /catalog
- /tagall <text>
- /addadmin
- /deladmin
- /addprem
- /delprem
- /anticall on/off
- /autoread on/of
- /autoreadsw on/off
- /self
- /public


${global.credit}`

await vikaru.sendMessage(m.chat, { image: fs.readFileSync('./media/image/menu.png'), mimetype: 'image/jpeg', caption: textmenu }, { quoted: m });
} break

//------------------------------------------------------------------------------------//



/* Need questions ?
 - WhatsApp : https://wa.me/6289508899033
 - Telegram  : https://t.me/Maxtream_09 
 */



//-------------------------=× LIST MENU ×=---------------------------//


// Ping
case 'ping': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
reply(`pong!`)
} break


// Clear
case 'clear': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
reply(clear) // "clear" Exports from ('./lib/exports/clear.js')
} break


// All Menu
case 'list':
case 'menu':
case 'allmenu': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});

let text = menu // "menu" Exports from ('./lib/exports/menu.js')

await vikaru.sendMessage(m.chat, {
            text,
            contextInfo: {
                isForwarded: true, 
                mentionedJid: [m.sender], 
	            forwardedNewsletterMessageInfo: {
    newsletterJid: '120363279751315563@newsletter',
    newsletterName: 'Vikaru-Md | © Max',
    serverMessageId: -1
},
                externalAdReply: {
                    title: `${pushname}`,
                    body: `Premium: ${isPremium ? 'true' : 'false'}`,
                    thumbnailUrl: ppUrl,
                    sourceUrl: `${global.sosmed}`,
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
}, { userJid: m.chat, quoted: qPayment })
 vikaru.relayMessage(m.key.remoteJid, m.chat, {
  messageId: m.key.id })
 
// Sound menu
await vikaru.sendMessage(m.chat, { audio : fs.readFileSync('./media/audio/menu.mp3'), mimetype: 'audio/mp4', ptt: true });
} break


// Block contact
case 'block': {
if (!isAdmin) return reply('Admin only!')
if (!text) return reply(` ⓘ Ex: *${prefix+command}* 628xxxx`)
vikaru.updateBlockStatus(text+"@s.whatsapp.net", "block")
reply('Successfully!')
} break


// Unblock contact
case 'unblock': {
if (!isAdmin) return reply('Admin only!')
if (!text) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
vikaru.updateBlockStatus(text+"@s.whatsapp.net", "unblock")
reply('Successfully!')
} break


// Auto Read on/off
case 'autoread': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (args.length < 1) return reply(`> ⓘ Ex: *${prefix+command}* on/off`)
if (q === 'on') {
global.autoread = true
reply(`Successfully!`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Successfully!`)
}
} break


// Auto Read WhatsApp Status on/off
case 'autoreadsw': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (args.length < 1) return reply(`> ⓘ Ex: *${prefix+command}* on/off`)
if (q === 'on') {
global.autoreadsw = true
reply(`Successfully!`)
} else if (q === 'off') {
global.autoreadsw = false
m.reply(`Successfully!`)
}
} break


// Anti Call on/off
case 'anticall': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (args.length < 1) return reply(`> ⓘ Ex: *${prefix+command}* on/off`)
if (q === 'on') {
global.anticall = true
reply(`Successfully!`)
} else if (q === 'off') {
global.anticall = false
m.reply(`Successfully!`)
}
} break


// Ai Gemini Advance
case 'ai':
case 'gemini': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!text) return m.reply(`> ⓘ Ex: *${prefix+command}* <text>`)
let {data} = await axios.get("https://api.nyxs.pw/ai/gemini-advance?text=" + text); 
m.reply(data.result);
} break


 // Virtex1 text only
case 'virtex1': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isPremium) return reply('Premium only!')
if (!args[0]) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
target = text.split("|")[0].replace(/[^0-9]/g, '')
let cekno = await vikaru.onWhatsApp(target + `@s.whatsapp.net`)
if (cekno.length == 0) return (`The number you entered is invalid!`)
reply(`Successfully!`)
vikaru.sendMessage(target + "@s.whatsapp.net", { text: virtex1 });
} break


 // Virtex2 img + caption 
case 'virtex2': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isPremium) return reply('Premium only!')
if (!args[0]) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
target = text.split("|")[0].replace(/[^0-9]/g, '')
let cekno = await vikaru.onWhatsApp(target + `@s.whatsapp.net`)
if (cekno.length == 0) return (`The number you entered is invalid!`)
reply(`Successfully!`)
vikaru.sendMessage(target+'@s.whatsapp.net', {image: fs.readFileSync('./media/image/10K.png'), caption: virtex2 })
} break


// Contact Developer 
case 'contact':
case 'owner':
case 'ownerbot':
case 'botowner': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
let ownContact = {
displayName: "Contact", contacts: [{displayName: devName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+devName+";;;\nFN:"+devName+"\nitem1.TEL;waid="+global.devNumber+":"+global.devNumber+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
};
let soContact = await vikaru.sendMessage(m.chat, {contacts: ownContact}, {quoted: m })
// Timeout
setTimeout(() => {vikaru.sendMessage(m.chat, {delete: soContact.key})}, 20000)
} break


// Add Admin
case 'addadmin': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (!args[0]) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
ownsplit = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await vikaru.onWhatsApp(premsplit + `@s.whatsapp.net`)
if (cek1.length == 0) return (`The number you entered is invalid!`)
contributor.push(premsplit)
fs.writeFileSync('./lib/database/admin.json', JSON.stringify(contributor))
reply(`Successfully!`)
vikaru.sendMessage(premsplit+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4591e4839848523095e05.jpg`}, caption: `You are now the admin / contributor of the bot`}, {quoted: m })
} break


// Delete Admin
case 'deladmin':
case 'deleteadmin': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (!args[0]) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
ownsplit = text.split("|")[0].replace(/[^0-9]/g, '')
unp = contributor.indexOf(ownsplit)
contributor.splice(unp, 1)
fs.writeFileSync('./lib/database/admin.json', JSON.stringify(contributor))
reply(`Successfully!`)
vikaru.sendMessage(ownsplit+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4a18ce660b79afea0058a.jpg`}, caption: `You Are now no longer the contributor!!`},{quoted: m })
} break


// Add Premiums
case 'addprem':
case 'addpremium': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (!args[0]) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
premsplit = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await vikaru.onWhatsApp(premsplit + `@s.whatsapp.net`)
if (cek1.length == 0) return (`The number you entered is invalid!`)
premium.push(premsplit)
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))
reply(`Successfully!`)
vikaru.sendMessage(premsplit+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4a18ce660b79afea0058a.jpg`}, caption: `You are now a premium user!!`},{quoted: m })
} break


// Delete Premiums
case 'delprem':
case 'delpremium':
case 'deleteprem':
case 'deletepremium': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
if (!args[0]) return reply(`> ⓘ Ex: *${prefix+command}* 628xxxx`)
premsplit = text.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(premsplit)
premium.splice(unp, 1)
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))
reply(`Successfully!`)
vikaru.sendMessage(premsplit+'@s.whatsapp.net', {image: {url: `https://telegra.ph/file/4a18ce660b79afea0058a.jpg`}, caption: `You are no longer premium!!`},{quoted: m })
} break


// Self Mode ( Ignore all numbers )
case 'self': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isDeveloper) return reply('Developer only!')
vikaru.public = false
reply('Successfully!')
} break


// Public Mode ( Delete all ignored numbers )
case 'public': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!itsMe) throw reply('Bot only!')
vikaru.public = true
reply('Successfully!')
} break


// Tag all group participants
case 'tagall': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!isGroup) return reply('Group only!')
if (!isAdmin) return reply('Admin only!')
let teks = `*# Note :* ${q ? q : 'undefined'}\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n` }
vikaru.sendMessage(m.chat, {text: teks, mentions: participants.map(a => a.id)
}, {quoted: m })
} break


// Random Sounds
case 'sound': {
await vikaru.sendMessage(m.chat, { react: { text: '☑️', key: m.key }});
if (!text) return reply(`> ⓘ Ex: *${prefix+command}* 11`);
if (/^\d+$/.test(text)) {
    if (text > 161) {
        return reply('Only up to 161!');
    } else {
        let link = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command+text}.mp3`;
        try {
        await vikaru.sendMessage(m.chat, { audio: { url: link }, mimetype: 'audio/mpeg' }, { quoted: m });
        } catch (error) {
        console.error('Error fetching audio:', error);
        return reply('Oops, failed! Maybe the song was not found.');
        }
    }
} else {
    return reply('Special numbers!');
}
} break


//-----------------------=× CLOSING CMD ×=-----------------------//


default:
if (budy.startsWith('=>')) {
if (!isDeveloper) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>>')) {
if (!isDeveloper) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isDeveloper) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

} // Switch Command

} catch (err) {
console.log(util.format(err));
await vikaru.sendMessage(global.devNumber + "@s.whatsapp.net", { text: util.format(err) }, { quoted: m });
}

} // Module Exports

// Refreshing File After Recode/Editing
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log()
console.log(`› [ ${chalk.black(chalk.bgBlue(' Update Files '))} ] - ${__filename}`)
delete require.cache[file]
require(file)
})