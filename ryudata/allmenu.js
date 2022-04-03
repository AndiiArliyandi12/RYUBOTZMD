const fs = require('fs')
const chalk = require('chalk')

exports.allmenu = (prefix) => {
	return`Kamu Aneh, Aku Kesel !
Kmtl , Ehh Maaf Becanda :v

*👤 𝕭𝖔𝖙 • Andii ༢࿔ྀ MENU*
🌋 ${prefix}setmenu
🌋 ${prefix}join [link]
🌋 ${prefix}leave
🌋 ${prefix}self
🌋 ${prefix}public
🌋 ${prefix}setppbot
🌋 ${prefix}block @user
🌋 ${prefix}unblock @user
🌋 ${prefix}bc
🌋 ${prefix}bcgc
🌋 ${prefix}setcmd [reply sticker/pesan]
🌋 ${prefix}delcmd [reply sticker/pesan]
🌋 ${prefix}listcmd
🌋 ${prefix}lockcmd
🌋 ${prefix}promosi

*👥 GROUP MENU*
🉐 ${prefix}antilink
🉐 ${prefix}antiwame
🉐 ${prefix}antivirtex
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

*📦 DOWNLOAD MENU*
📲 ${prefix}tiktok [url]
📲 ${prefix}tiktokwm [url]
📲 ${prefix}tiktoknowm [url]
📲 ${prefix}tiktokaudio [url]
📲 ${prefix}instagram [url]
📲 ${prefix}ytmp4 [url]
📲 ${prefix}ytmp3 [url]
📲 ${prefix}play [judul]

*🔎 SEARCH MENU*
⚘🎲 ${prefix}pinterest [query]
⚘🎲 ${prefix}pantun
⚘🎲 ${prefix}google [query]
⚘🎲 ${prefix}gimage [query]

*✍️ NULIS MENU*
⚘🪄 ${prefix}nulisbiasa
⚘🪄 ${prefix}nuliskanan
⚘🪄 ${prefix}nuliskiri
⚘🪄 ${prefix}foliokanan
⚘🪄 ${prefix}foliokiri

*🎙️ VOICE CHANGER*
⚘🖇 ${prefix}bass
⚘🖇 ${prefix}blown
⚘🖇 ${prefix}deep
⚘🖇 ${prefix}earrape
⚘🖇 ${prefix}fast
⚘🖇 ${prefix}fat
⚘🖇 ${prefix}nightcore
⚘🖇 ${prefix}reverse
⚘🖇 ${prefix}robot
⚘🖇 ${prefix}slow
⚘🖇 ${prefix}tupai

*📸 EPHOTO MENU*
⚘🧼 ${prefix}3dnature
⚘🧼 ${prefix}bevel
⚘🧼 ${prefix}burnpaper
⚘🧼 ${prefix}quotesgrass
⚘🧼 ${prefix}stars
⚘🧼 ${prefix}flaming
⚘🧼 ${prefix}romance
⚘🧼 ${prefix}gerbang
⚘🧼 ${prefix}fur
⚘🧼 ${prefix}funnycup

*🖼️ PHOTOOXY MENU*
⚘👾 ${prefix}3d-underwater  
⚘👾 ${prefix}3dtext-pig  
⚘👾 ${prefix}3dvalentine-cards  
⚘👾 ${prefix}anonymous-neon  
⚘👾 ${prefix}advanced-glow  
⚘👾 ${prefix}art-shader  
⚘👾 ${prefix}angels-wings 

*🎮 FUN MENU*
⚘📌 ${prefix}truth
⚘📌 ${prefix}dare
⚘📌 ${prefix}bagaimanakah [teks]
⚘📌 ${prefix}kapankah [teks]
⚘📌 ${prefix}dimanakah [teks]
⚘📌 ${prefix}suit [✌️/✊/✋]
⚘📌 ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
⚘📌 ${prefix}suitpvp [tag user]
⚘📌 ${prefix}ttt
⚘📌 ${prefix}delttt

*🎰 GAME MENU*
⚘🔮 ${prefix}tebak lagu
⚘🔮 ${prefix}tebak gambar
⚘🔮 ${prefix}tebak kata
⚘🔮 ${prefix}tebak kalimat
⚘🔮 ${prefix}tebak lirik
⚘🔮 ${prefix}tebak lontong
⚘🔮 ${prefix}kuismath

*🎡 RANDOM MENU*
⚘🧿 ${prefix}quotes
⚘🧿 ${prefix}quotes2
⚘🧿 ${prefix}katabijak
⚘🧿 ${prefix}wallpentol
⚘🧿 ${prefix}wallcogan
⚘🧿 ${prefix}wallcecan
⚘🧿 ${prefix}wallestetik
⚘🧿 ${prefix}wallislami

*🔞 NSFW MENU*
⚘⛔ ${prefix}ahegeo
⚘⛔ ${prefix}ass
⚘⛔ ${prefix}bdsm
⚘⛔ ${prefix}blowjob
⚘⛔ ${prefix}cuckold 
⚘⛔ ${prefix}cum 
⚘⛔ ${prefix}ero
⚘⛔ ${prefix}femdom
⚘⛔ ${prefix}foot
⚘⛔ ${prefix}gangbang
⚘⛔ ${prefix}glasses
⚘⛔ ${prefix}hentai
⚘⛔ ${prefix}ahy
⚘⛔ ${prefix}mstb
⚘⛔ ${prefix}neko
⚘⛔ ${prefix}orgy
⚘⛔ ${prefix}panties
⚘⛔ ${prefix}pussy
⚘⛔ ${prefix}yuri
⚘⛔ ${prefix}zettai

*🎨 MAKER MENU*
⚘☢ ${prefix}toimage
⚘☢ ${prefix}smeme
⚘☢ ${prefix}smeme2
⚘☢ ${prefix}sticker
⚘☢ ${prefix}tovideo
⚘☢ ${prefix}togif
⚘☢ ${prefix}tourl
⚘☢ ${prefix}emojimix 😎+😂
⚘☢ ${prefix}readmore
⚘☢ ${prefix}ttp [teks]
⚘☢ ${prefix}semoji [emoji]

*👨‍🎨 TEXTPRO MENU*
⚘🧧 ${prefix}blackpink [teks]
⚘🧧 ${prefix}neon [teks]
⚘🧧 ${prefix}horror [teks]
⚘🧧 ${prefix}toxic [teks]
⚘🧧 ${prefix}potter [teks]
⚘🧧 ${prefix}pornhub [teks|teks]
⚘🧧 ${prefix}tahta [teks]

*☕ OTHER MENU*
⚘💸 ${prefix}simi [teks]
⚘💸 ${prefix}ping
⚘💸 ${prefix}owner
⚘💸 ${prefix}menu / ${prefix}help / ${prefix}?
⚘💸 ${prefix}delete
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
