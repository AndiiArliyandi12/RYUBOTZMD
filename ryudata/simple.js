const fs = require('fs')
const chalk = require('chalk')

//SILAHKAN EDIT SESUKA KALIAN

//SIMPLE MENU
exports.simple = (pushname, ucapanWaktu, prefix) => {
	return`*Halo Kak ${pushname} 👋*
*${ucapanWaktu}*

📌 Ketik .allmenu Untuk Menampilkan Fitur ❗


`
}

//LIST MENU
exports.list = (pushname, ucapanWaktu) => {
	return`*Halo Kak ${pushname} 👋*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia !*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix 😎*

*Terima Kasih 🙏*
`
}

//MENU OWNER
exports.sowner = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👤 OWNER MENU*
☣ ${prefix}setmenu
☣ ${prefix}join [link]
☣ ${prefix}leave
☣ ${prefix}self
☣ ${prefix}public
☣ ${prefix}setppbot
☣ ${prefix}block @user
☣ ${prefix}unblock @user
☣ ${prefix}bc
☣ ${prefix}bcgc
☣ ${prefix}setcmd [reply sticker/pesan]
☣ ${prefix}delcmd [reply sticker/pesan]
☣ ${prefix}listcmd
☣ ${prefix}lockcmd
☣ ${prefix}promosi
`
}

//MENU GRUP
exports.sgrup = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👥 GROUP MENU*
🉐 ${prefix}antilink
🉐 ${prefix}antiwame
🉐 ${prefix}antivirtex
🉐 ${prefix}nsfw
🉐 ${prefix}afk [alasan]
🉐 ${prefix}tagall
🉐 ${prefix}hidetag
🉐 ${prefix}absen
🉐 ${prefix}hadir
🉐 ${prefix}tidakhadir
🉐 ${prefix}cekabsen
🉐 ${prefix}hapusabsen
🉐 ${prefix}linkgroup
🉐 ${prefix}revoke
🉐 ${prefix}ephemeral [option]
🉐 ${prefix}setppgc
🉐 ${prefix}setname [text]
🉐 ${prefix}group [option]
🉐 ${prefix}add @user
🉐 ${prefix}kick @user
🉐 ${prefix}promote @user
🉐 ${prefix}demote @user
`
}

//MENU DOWNLOAD
exports.sdown = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*📦 DOWNLOAD MENU*
⚘👾 ${prefix}tiktok [url]
⚘👾 ${prefix}tiktokwm [url]
⚘👾 ${prefix}tiktoknowm [url]
⚘👾 ${prefix}tiktokaudio [url]
⚘👾 ${prefix}instagram [url]
⚘👾 ${prefix}twitter [url]
⚘👾 ${prefix}facebook [url]
⚘👾 ${prefix}ytmp4 [url]
⚘👾 ${prefix}ytmp3 [url]
⚘👾 ${prefix}play [judul]
⚘👾 ${prefix}ytsearch [judul]
⚘👾 ${prefix}gitclone
`
}

//MENU SEARCH
exports.ssearch = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🔎 SEARCH MENU*
⚘👾 ${prefix}pinterest [query]
⚘👾 ${prefix}pantun
⚘👾 ${prefix}google [query]
⚘👾 ${prefix}gimage [query]
⚘👾 ${prefix}kbbi [query]
⚘👾 ${prefix}darkjokes
⚘👾 ${prefix}igstalk [username]
⚘👾 ${prefix}ghstalk [username]
`
}

//MENU INFORMASI
exports.sinfo = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🗞️ INFORMASI MENU*
⚘👾 ${prefix}infogempa
⚘👾 ${prefix}faktaunik
⚘👾 ${prefix}ssweb
`
}

//MENU NULIS
exports.snulis = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*✍️ NULIS MENU*
⚘👾 ${prefix}nulisbiasa
⚘👾 ${prefix}nuliskanan
⚘👾 ${prefix}nuliskiri
⚘👾 ${prefix}foliokanan
⚘👾 ${prefix}foliokiri
`
}

//MENU ASUPAN
exports.sasupan = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👭 ASUPAN MENU*
⚘👾 ${prefix}hijaber
⚘👾 ${prefix}cecan
⚘👾 ${prefix}bocil
⚘👾 ${prefix}ukhty
⚘👾 ${prefix}gheayubi
⚘👾 ${prefix}rikagusriani
⚘👾 ${prefix}santuy
`
}

//MENU CECAN
exports.scecan = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👩 CECAN MENU*
⚘👾 ${prefix}china
⚘👾 ${prefix}vietnam
⚘👾 ${prefix}thailand
⚘👾 ${prefix}indonesia
⚘👾 ${prefix}korea
⚘👾 ${prefix}japan
⚘👾 ${prefix}malaysia
`
}

//MENU VOICE
exports.svoice = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🎙️ VOICE CHANGER*
⚘👾 ${prefix}bass
⚘👾 ${prefix}blown
⚘👾 ${prefix}deep
⚘👾 ${prefix}earrape
⚘👾 ${prefix}fast
⚘👾 ${prefix}fat
⚘👾 ${prefix}nightcore
⚘👾 ${prefix}reverse
⚘👾 ${prefix}robot
⚘👾 ${prefix}slow
⚘👾 ${prefix}tupai
`
}

//MENU EPHOTO
exports.spoto = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*📸 EPHOTO MENU*
⚘👾 ${prefix}3dnature
⚘👾 ${prefix}bevel
⚘👾 ${prefix}burnpaper
⚘👾 ${prefix}quotesgrass
⚘👾 ${prefix}stars
⚘👾 ${prefix}flaming
⚘👾 ${prefix}romance
⚘👾 ${prefix}gerbang
⚘👾 ${prefix}fur
⚘👾 ${prefix}funnycup
`
}

//MENU PHOTOOXY
exports.sphoto = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🖼️ PHOTOOXY MENU*
⚘👾 ${prefix}3d-underwater  
⚘👾 ${prefix}3dtext-pig  
⚘👾 ${prefix}3dvalentine-cards  
⚘👾 ${prefix}anonymous-neon  
⚘👾 ${prefix}advanced-glow  
⚘👾 ${prefix}art-shader  
⚘👾 ${prefix}angels-wings 
`
}

//CASE FUN MENU
exports.sfun = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🎮 FUN MENU*
🔮 ${prefix}truth
🔮 ${prefix}dare
🔮 ${prefix}bagaimanakah
🔮 ${prefix}kapankah
🔮 ${prefix}dimanakah
🔮 ${prefix}suit [✌️/✊/✋]
🔮 ${prefix}aduayam [🐤/🐓/🐥/🐣/🦃]
🔮 ${prefix}suitpvp [tag user]
🔮 ${prefix}ttt
🔮 ${prefix}delttt
`
}

//GAME MENU
exports.sgame = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🎰 GAME MENU*
🧿 ${prefix}tebak lagu
🧿 ${prefix}tebak gambar
🧿 ${prefix}tebak kata
🧿 ${prefix}tebak kalimat
🧿 ${prefix}tebak lirik
🧿 ${prefix}tebak lontong
🧿 ${prefix}kuismath
`
}

//GAME MENU
exports.srandom = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🎡 RANDOM MENU*
⚘🧿 ${prefix}quotes
⚘🧿 ${prefix}quotes2
⚘🧿 ${prefix}katabijak
⚘🧿 ${prefix}wallpentol
⚘🧿 ${prefix}wallcogan
⚘🧿 ${prefix}wallcecan
⚘🧿 ${prefix}wallestetik
⚘🧿 ${prefix}wallislami
`
}

//MENU ANIME
exports.sanime = (prefix) => {
	return`Media Sosial 🌱
IG : -._

*⛩️ ANIME MENU*
⚘👾 ${prefix}quotesanime
⚘👾 ${prefix}waifu
⚘👾 ${prefix}loli
⚘👾 ${prefix}cry
⚘👾 ${prefix}kill
⚘👾 ${prefix}hug
⚘👾 ${prefix}pat
⚘👾 ${prefix}lick
⚘👾 ${prefix}kiss
⚘👾 ${prefix}bite
⚘👾 ${prefix}yeet
⚘👾 ${prefix}neko
⚘👾 ${prefix}bully
⚘👾 ${prefix}bonk
⚘👾 ${prefix}wink
⚘👾 ${prefix}poke
⚘👾 ${prefix}nom
⚘👾 ${prefix}slap
⚘👾 ${prefix}smile
⚘👾 ${prefix}wave
⚘👾 ${prefix}awoo
⚘👾 ${prefix}blush
⚘👾 ${prefix}smug
⚘👾 ${prefix}glomp
⚘👾 ${prefix}happy
⚘👾 ${prefix}dance
⚘👾 ${prefix}cringe
⚘👾 ${prefix}cuddle
⚘👾 ${prefix}highfive
⚘👾 ${prefix}shinobu
⚘👾 ${prefix}megumin
⚘👾 ${prefix}handhold
`
}

//NSFW MENU
exports.snsfw = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*🔞 NSFW MENU*
⚘👾 ${prefix}ahegeo
⚘👾 ${prefix}ass
⚘👾 ${prefix}bdsm
⚘👾 ${prefix}blowjob
⚘👾 ${prefix}cuckold 
⚘👾 ${prefix}cum 
⚘👾 ${prefix}ero
⚘👾 ${prefix}femdom
⚘👾 ${prefix}foot
⚘👾 ${prefix}gangbang
⚘👾 ${prefix}glasses
⚘👾 ${prefix}hentai
⚘👾 ${prefix}ahy
⚘👾 ${prefix}mstb
⚘👾 ${prefix}neko
⚘👾 ${prefix}orgy
⚘👾 ${prefix}panties
⚘👾 ${prefix}pussy
⚘👾 ${prefix}yuri
⚘👾 ${prefix}zettai
`
}

//MAKER MENU
exports.smaker = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👨‍🎨 MAKER MENU*
⚘👾 ${prefix}toimage
⚘👾 ${prefix}smeme
⚘👾 ${prefix}smeme2
⚘👾 ${prefix}sticker
⚘👾 ${prefix}tovideo
⚘👾 ${prefix}togif
⚘👾 ${prefix}tourl
⚘👾 ${prefix}emojimix 😎+😂
⚘👾 ${prefix}readmore
⚘👾 ${prefix}ttp [teks]
⚘👾 ${prefix}semoji [emoji]
`
}

//TEXTPRO MENU
exports.stextpro = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*👨‍🎨 TEXTPRO MENU*

`
}

//OTHER MENU
exports.sother = (prefix) => {
	return`Apakah Kamu Tau?
Tak Ada Yang Spesial Di Dunia Ini Kecuali Martabak Spesial

*☕ OTHER MENU*
⚘👾 ${prefix}simi [teks]
⚘👾 ${prefix}ping
⚘👾 ${prefix}owner
⚘👾 ${prefix}menu / ${prefix}help / ${prefix}?
⚘👾 ${prefix}delete
`
}

//MENU AWAL
exports.smenu = (pushname) => {
	return`Halo Kak *${pushname}* 👋
Satu Dua Tutup Botol , Muka Kau Itu Cem Kmtl !
#Canda Kmtl :v
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
