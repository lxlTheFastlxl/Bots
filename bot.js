const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });

const PREFIX = "k$";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('k$' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }



/////////////////////////////////////////////

/////////////////////////////////////////////

client.on("message", message => {
     if (message.content === "k$help") {
         message.react('👌')
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("** تم الاريسال فـ الخاص :heavy_check_mark: **")
     }
});

client.on("message", message => {
 if (message.content === "k$help") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

 **
╔[❖════════════❖]╗
                  Prefix = ' k$ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ k$members ➾ معلومات الاعضاء

❖ k$avatar ➾ شعار حسابك

❖ k$image  ➾ شعار السيرفر

❖ k$stats ➾ معلومات عن البوت سرعة البوت والخادم ايضا

❖ k$id ➾ اي دي

❖ k$Date ➾ التاريخ

❖ k$ping ➾ عرض سرعه اتصال البوت

❖ k$bot ➾ معلومات البوت

❖ k$server ➾ معلومات السيرفر

❖ k$hphoto ➾ اذا ترد صورة من فريق الدعم لى سيرفر/أليك/الصديقكا

❖ k$hintro ➾ اذا تريد انترو لي قناتك اليوتيوب

❖ k$fk ➾ لعبه الفواكه
**

`)


message.author.sendEmbed(embed)

}
});
/////////////////////////////////////////////

/////////////////////////////////////////////

client.on("message", message => {
     if (message.content === "k$help") {
         message.react('👌')
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("** تم الاريسال فـ الخاص :heavy_check_mark: **")
     }
});

client.on("message", message => {
 if (message.content === "k$help") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

 **
╔[❖════════════❖]╗
                  Prefix = ' k$ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                     أوامر الميوزك
╚[❖════════════❖]╝

❖ k$play ➾ لبدء الأغنيه (لازم رابط الاغنيه او أسم الأغنيه )لكي يدخل لك البوت

❖ k$skip ➾ لي تخطي الأغنيه

❖ k$pause ➾ لكي يوقف الإنيه مؤقتا

❖ k$resume ➾ لكي يكمل الأغنيه

❖ k$leave ➾ لكي يخرج البوت من الروم

❖ k$vol ➾ اذا تبغا تعلي صوت البوت او توطيه

❖ k$np ➾ لتعرف معلومات الأغنيه كم ناقص لها على الأنتهاء

❖ k$queue ➾ لتعرف الأغاني الذي موجوده في القائمه
**

`)


message.author.sendEmbed(embed)

}
});
client.on("message", message => {
 if (message.content === "k$help") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

 **
╔[❖════════════❖]╗
                  Prefix = ' k$ '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                     اوامر الأداره
╚[❖════════════❖]╝

❖ k$mute ➾ اذا تريد تعطي شخص ميوت

❖ k$unmute ➾ لي ألغاء الميوت لي شخص

❖ k$kick ➾ لي أعطاء العضو كيك

❖ k$ban ➾ لي أعطاء العضو بان

❖ k$warn ➾ لي اعطاء العضو تحظير ملاحظه: يجب ان يكون في رول بأسم Warn1 + Warn2

❖ k$setcooldown on/off ➾ لي عمل وقت محدد للكتابه فلروم

❖ k$setrole ➾ لي عمل رولات بلريأكشن

❖ k$setMedia/sm ➾ اذا تبغا تحددروم مخصص للصور

❖ k$toggleMedia/tm ➾ اذا تبغا تخلي روم محدد لي الصور ON/OFF

❖ k$infoMedia/im ➾ اذا تبغا تعرف معلومات الروم حق الصور

❖ k$roll 2/3/4 ➾ لي العمل قرعه عشوائيه


╔[❖══════════════════════════════════❖]╗

bot invite link: 

╚[❖══════════════════════════════════❖]╝
**

`)


message.author.sendEmbed(embed)

}
});
//
client.on('message', message => {
     if (message.content === "k$ping") {
      const embed = new Discord.RichEmbed()

  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` ts  Bot
 .`, 'https://a.top4top.net/p_829o87y51.png')

  message.channel.sendEmbed(embed);
    }
});
//
client.on('message', message => {
    if (message.content.startsWith("k$stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('! ts Team')
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

//
client.on('message', message => {
    if (message.content.startsWith("k$avatar")) {
        var mentionned = message.mentions.users.first();
    var iiTzK;
      if(mentionned){
          var iiTzK = mentionned;
      } else {
          var iiTzK = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage('{iiTzK.avatarURL}')
      message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "k$mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
     return message.reply("** تم اعطاء العضو المحدد ميوت  **").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("** تم اعطاء العضو المحدد ميوت كتابي .. **").catch(console.error);
    });
  }

};

});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "k$unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** تم فك الميوت عن الشخص المحدد  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** تم فك الميوت عن الشخص المحدد .. **").catch(console.error);
    });
  }

};

});

var prefix = "k$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }



if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x00AE86)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
    if (message.content == 'k$server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.guild.iconURL)
            .addField('اسم السيرفر', servername)
            .addField('اي دي السيرفر ', [ايدي])
            .addField('أعضاء السيرفر', اعضاء)
            .addField('رومات السيرفر', الرومات)
            .addField('روم الشات الأساسي', الروم)
            .addField('صاحب السيرفر', اونر)
            .addField('بلد السيرفر', بلدالسيرفر)
            .addField('تاريخ افتتاح السيرفر', عمل)
            .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }

});

var prefix = 'k$';


client.on('message', message => {
    if (message.content.startsWith("k$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith(prefix + "k$servers")) {
         if(!message.author.id === '285236833804222464') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
})
}
});

client.on('message', message => {  // ui
if (!message.channel.guild) return;
var prefix = "k$";
  if (message.content ===  prefix + 'ui') {
let user = message.mentions.users.first();
 if (!user) { user = message.author }
let guild = message.guild;
let embed = new Discord.RichEmbed()
    .setTitle('User Information')
    .setThumbnail(user.displayAvatarURL)
    .setFooter(message.createdAt , client.user.avatarURL)
    .setColor("#428cdf")
    .addField("Username", "**"+`${user.tag}`+"**" , true)
    .addField("Nickname", "**"+`${user.nickname || "None"}`+"**", true)
    .addField("UserID", "**"+`${user.id}`+"**", true)
    .addField("Playing",  user.presence.game ? "**"+ user.presence.game.name +"**" : '**None**', true)
    .addField("UserStatus", "**"+`${user.presence.status}`+"**", true)
    .addField("isBot", "**"+`${user.bot}`+"**", true)
	.addField('Roles', message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(' '))
    message.channel.send({embed});
}
});

 var prefix = "k$";
client.on('message', message => {
         if (message.content === prefix + "Date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('**الامارات** :flag_ae:',
                "���"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('**مكه المكرمه** :flag_sa:',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('**مصر** :flag_eg:',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")

                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
});

client.on("message", message => {
    const prefix = "k$"

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => {
   if (message.content === "k$roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});

client.on('message', message => {
   if (message.content === "k$roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});

client.on('message', message => {
   if (message.content === "k$roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});

client.on('message', message => {
   if (message.content === "k$roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});

client.on('message', message => {
     if (message.content === "k$bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if(message.content == 'k$members') {
       message.react(":white_check_mark:")
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
:blue_heart:   all:  ${message.guild.memberCount}**`)
         message.channel.send({embed});

    }
  });

client.on('message', message => {
    if(message.content.startsWith(prefix+'support')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`suport server **[here](https://discord.gg/n89cUeC)**`)
    .setColor('RANDOM');
    
        message.author.send(embed)
}
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'Welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

     .setFooter(`${member.guild.name}`)
        .setTimestamp()

      channel.sendEmbed(embed);
    });

    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====ولكم منور السيرفر اتمنا لك الاستمتاع====`, 'https://media.discordapp.net/attachments/499333346153725953/500834836081278976/x.png')

    var channel =member.guild.channels.find('name', 'chat')
    });

client.on('message', message => {
if (message.content.startsWith(prefix + "servers")) {
         if(!message.author.id === '285236833804222464') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
})
}
});

client.on('message', message => {
var prefix = "k$";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;


if (message.content.startsWith(prefix + 'name')) {
  if (message.author.id !== '285236833804222464') return message.reply('**only for the botowner **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : done`)
} else

if (message.content.startsWith(prefix + 'streem')) {
  if (message.author.id !== '285236833804222464') return message.reply('**only for the botowner **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** streem changed to`)
    message.react("👌")

} else



if (message.content.startsWith(prefix + 'watch')) {
  if (message.author.id !== '285236833804222464') return message.reply('**only for the botowner **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Watching changed to`)
 message.react(":white_check_mark:")

}

 });


client.on('message' , message => {
var prefix = "k$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "rep")) {
    message.react("👌")
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");


client.channels.get("430707000515493889").send(
    "\n" + "```" + "==========" +
    "\n" +  "● السيرفر :" +
    "\n"  + "» " + message.guild.name +
    "\n" +  " ● المرسل : " +
    "\n" +  "» " + message.author.tag +
    "\n" + " ● الرسالة : " +
    "\n" + args +
    "\n" + "===========" + "```"
    )

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)

message.channel.send(embed);


}

});
//
 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendEmbed(Embed11)
    }
});

//
client.on('message', message => {
var prefix = "k$"
  if (message.author.iiTz) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({embed : kickembed})
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});

client.on('message', async message => {
  if(message.content.startsWith(prefix + "sugg")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("501882221016252416").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
client.on('message', message => {


           if (message.content.startsWith(prefix + "id")) {
           if (message.channel.id !== "500074463191236618") return;
            if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()

    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)
    message.channel.sendEmbed(id);
})
}



     });
client.on('message', message => {
   if(message.content.startsWith(prefix + "invite")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});

const moment = require("moment");
const dateFormat = require('dateformat');
const Canvas = require("canvas");
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))
client.on("message", message => {

  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'Super User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 150,
  };


fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on('guildMemberAdd', member=> { 
   let rwlc = JSON.parse(fs.readFileSync('./AutoRole.json' , 'utf8')); 
    member.addRole(member.guild.roles.find("name","SKeLToN")); 
    }); 

const arf = JSON.parse(fs.readFileSync("./arf.json", "utf8"));
let emojiss = require("node-emoji");//npm i node-emoji
client.on("message", msg=>{
if(msg.content.startsWith(`${prefix}setRole`)){
    if(!arf[msg.guild.id]) arf[msg.guild.id] = {
        role: "Member"
    }
if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply("you don't have permission").then(s => {s.delete(1600);}
msg.reply("منشن الروم الي تبي فيه التفعيل").then(msgs=>{
  const filter = response => response.author.id === msg.author.id;
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
  .then( collected =>{
    msg.delete();
    let idC = msg.guild.channels.find(c=>c.id == collected.first().mentions.channels.first().id)
    if(!idC) return msgs.edit("لم اجد الروم");
     idC = idC.id;
     msgs.edit(`${msg.author}, ادخل الايموجي الذي تريدة للتفعيل`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
if(!emojiss.hasEmoji(collected.first().mentions._content)) return msgs.edit("ادخل ايموجي صحيح !");
newemoji = collected.first().mentions._content;
msg.delete();
msgs.edit(`${msg.author}, منشن للرتبة الذي تريدها`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
let roleW = collected.first().mentions.roles.first()
if(!roleW) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - منشن الرتبة `);
  msg.reply(embed).then( z => z.delete(3000)); return
};
let role = msg.guild.roles.find(`name`, roleW.name);
if(!role) {
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:x: - Could't find `${roleW.name}` role.`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
roleNew = role;
arf[msg.guild.id].role = roleNew.name
msgs.edit(`${msg.author}, ادخل النص الذي تريدة`)
const filter = response => response.author.id === msg.author.id;
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
.then( collected =>{
stringNew = collected.first().mentions._content;
let channel = msg.guild.channels.get(idC);
if(!channel) {
let embed = new Discord.RichEmbed()
.setColor("#42f4f4")
.setTitle(`:x: - Could't find `${idC}` Channel.`);
msg.reply(embed).then( msgs => msgs.delete(3000));
return
}
channel.bulkDelete(100)
channel.send(`@here || @everyone
${msg.guild.name}© :arrow_down:
 
${stringNew}
`).then( msgA =>{
msgA.react(newemoji).then(()=>{
    let rolee = arf[msg.guild.id].role
  const Ac = (reaction, user) => reaction.emoji.name === newemoji && !user.bot;
  const Acc = msgA.createReactionCollector(Ac, {time: 120000});
  Acc.on("collect", r=>{
  let member = msg.guild.members.get(r.users.last().id);
  if(!member) return;
  r.remove(member.user);
if(member.roles.find(r=>r.name == rolee)) return;
    member.addRole(roleNew);
  channel.send(`${member.user}, تم تفعيلك`).then(z => z.delete(1500));
  fs.writeFile("./arf.json", JSON.stringify(arf), function(a) {
      if (a) throw a;
  })
})})})
}).catch(e => {console.log(e.message)});  
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
}).catch(e => {console.log(e.message)});
})
///
}});
let membersjson = JSON.parse(fs.readFileSync('membersjson.json', 'utf8'))
client.on('message', message => {
if(message.content.startsWith(prefix + "smc")) {
let channel = message.content.split(" ").slice(1).join(" ")
let channelfind = message.guild.channels.find('name', `${channel}`)
if(!channel) return message.channel.send('اكتب اسم الروم مثل: !settings membuercount <Channel name>')
if(!channelfind) return message.channel.send('اكتب اسم الروم مثل:!settings membuercount <Channel name>')
membersjson[message.guild.id] = {
stats: 'enable',
chid: channelfind.id,  
guild: message.guild.id
}
message.channel.send('**Done The members counter  Is Turned On**')
}
if(message.content.startsWith(prefix + "smc off")) {
membersjson[message.guild.id] = {
stats: 'disable',
chid: ch.id,
guild: message.guild.id
}
message.channel.send('**Done The members counter Is Turned Off**')
 
}
fs.writeFile("./membersjson.json", JSON.stringify(membersjson), (err) => {
if (err) console.error(err)
})
})
 
client.on('voiceStateUpdate', (oldMember , newMember) => {
    if(!membersjson[oldMember.guild.id]) membersjson[oldMember.guild.id] = {
        stats: 'disable',
        chid: 'undefined',
        guild: 'undefined'
    }
            if (membersjson[oldMember.guild.id].stats === 'enable') {
                let ch = membersjson[oldMember.guild.id].chid
                let channel = oldMember.guild.channels.get(ch)
                let guildid = membersjson[oldMember.guild.id].guild
                channel.setName(`Members Count [${oldMember.guild.memberCount}]`)
            };
            if (membersjson[oldMember.guild.id].stats === 'disable') {
            return;
            }
});
client.on("message", message => {
  var args = message.content.split(" ");
  var command = args[0];
  if (command === prefix + "warn") {
    // Warn2 و Warn1  اصنع رتبة ب اسم
    var user = message.guild.member(message.mentions.users.first());
    var warn1 = message.guild.roles.find("name", "Warn1");
    var warn2 = message.guild.roles.find("name", "Warn2");
    if (!message.channel.guild) {
      message.channel.send("هذه الأوامر للسيرفرات فقط !!");
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("**  لا يوجد لديك صلاحية ADMINISTRATOR**");
    } else if (!warn1) {
      message.channel.send("لم يتم العثور على رتبة `Warn1`");
    } else if (!warn2) {
      message.channel.send("لم يتم العثور على رتبة `Warn2`");
    } else if (!user) {
      message.channel.send("لم تقم بوضع اسم الشخص");
    } else if (!message.guild.member(user).roles.has(warn1.id)) {
      message.channel.send("Done !");
      user.addRole(warn1);
      message.channel.send(message.member + " تم انذار");
    } else if (!message.guild.member(user).roles.has(warn2.id)) {
      message.channel.send("Done !");
      user.addRole(warn2);
      message.channel.send(message.member + " تم الإنذار رقم 2");
    } else {
      user.ban();
      message.channel.send("تم حظر الشخص بسبب الإنذارات المتكررة");
    }
  } //! .𝒜ℋℳℰ𝒟 ♪ ♥#6950
});
var cooldown = require('./cooldown.json');
function saveCoolDown(){
    fs.writeFile("./cooldown.json", JSON.stringify(cooldown), function (err) {
        if(err) throw err;
    })
}
function checkPermission(String, message){
    if(!message.guild.member(message.author).hasPermission(String))return message.reply('You dont have '+String+' Permission.');
}
client.on('message', message => {
    if(!cooldown[message.guild.id])cooldown[message.guild.id] ={
        toggled: "off",
        time: "none"
    }
    saveCoolDown();
    var command = message.content.split(" ")[0],
    args = message.content.split(" ");
    switch(command){
        case prefix+"setCoolDown":
            checkPermission("MANAGE_GUILD");
            while(args[1].startsWith("on")){
                cooldown[message.guild.id] = {
                    toggled: "on",
                    time: cooldown[message.guild.id].time
                }
                saveCoolDown();
                message.reply('done toggled cooldown to on.')
            }
            while(args[1].startsWith("off")){
                cooldown[message.guild.id] = {
                    toggled: "off",
                    time: cooldown[message.guild.id].time
                }
                saveCoolDown();
                message.reply('done toggled cooldown to off.')
            }
            while(args[1].startsWith("settime")){
                var newtime = args[2];
                if(!newtime)return message.reply('Specify a time')
                if(!newtime.match[/['0-60', 's,min,h,d]/g])return message.reply('Time formats: 1s, 1min, 1h, 1day')
                cooldown[message.guild.id] = {
                    toggled: cooldown[message.guild.id].toggled,
                    time: ms(newtime)
                }
                saveCoolDown();
                message.reply('Done you have set the time of cooldown to ``'+newtime+'``');
            }
            break;
    }
})
var cooldowntimer = new Set();
client.on('message', async message => {
    if(cooldown[message.guild.id].toggled == "off")return;
    if(cooldowntimer.has(message.author)){
        message.delete();
        message.reply('You cant send another message now, please wait.').then(m => m.delete(3000));
    }else{
        cooldowntimer.add(message.author);
        setTimeout(() => {
            cooldowntimer.delete(message.author);
        }, ms(cooldown[message.guild.id].timer));
    }
})
client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
 
  let command = args[0];
 
  let user = message.mentions.users.first();
 
  let bantime = args[2];
   
  let reasonban = message.content.split(" ").slice(3).join(" ");
   
  let timefilter;
 
  if (command == prefix + "ban") {
     
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `BAN_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `BAN_MEMBERS`**");
    }
   
    if (!user){
        message.channel.send("**يجب عليك إختيار الشخص المراد حظره**");
    }else if (!bantime){
        message.channel.send(`**
        يجب عليك اختيار وقت الحظر
        15m حظر ربع ساعه
        30m حظر نصف ساعه
        1h حظر ساعه
        3h حظر ثلاث ساعات
        1d حظر يوم كامل
        3d حظر ثلاث ايام
        1w حظر اسبوع
        1mon حظر شهر كامل
        **`);
    }else if (!reasonban){
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    }
    if (message.guild.member(user).hasPermission("BAN_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
// By Alpha Codes - AboKhalil 26/7/2019
    if (bantime = "15m") {
    timefilter = 150000;
    } else if (bantime = "30m") {
        timefilter = 300000;
    } else if (bantime = "1h") {
        timefilter = 600000;
    } else if (bantime = "3h") {
        timefilter = 1800000;
    } else if (bantime = "1d") {
        timefilter = 14400000;
    } else if (bantime = "3d") {
        timefilter = 43200000;
    } else if (bantime = "1w") {
        timefilter = 100800000;
    } else if (bantime = "1mon"){
        timefilter = 432000000;
    }
    message.guild.member(user).ban()
    message.channel.send("**The Member Was Banned **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonban + "__**");
   
    user.send("**You are Banned By** : " + message.author.tag);
    user.send("**Reason : __" + reasonban + "__**");
setTimeout(() => {
 
  message.guild.unban(bannedman);
 
        }, timefilter);
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});
client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
      // By Alpha Codes - AboKhalil 26/7/2019
  let command = args[0];
 
  let user = message.mentions.users.first();
   
  let reasonkick = message.content.split(" ").slice(2).join(" ");
 
  if (command == prefix + "kick") {
 
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `KICK_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `KICK_MEMBERS`**");
    }
    if (!user) {
        message.channel.send("**يجب عليك إختيار الشخص المراد طرده**");
    }else if (!reasonkick) {
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    } else if (message.guild.member(user).hasPermission("KICK_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
 
 
    message.guild.member(user).kick()
    message.channel.send("**The Member Was Kicked **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonkick + "__**");
   
    user.send("**You are Kicked By** : " + message.author.tag);
    user.send("**Reason : __" + reasonkick + "__**");
    }
 }
 // By Alpha Codes - AboKhalil 26/7/2019
});
const Util = require('discord.js'); //البكجات
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyDaBj_TsftdelDN2LADxonBFBmCYpAUXqI");
const queue = new Map();
const ytdl = require('ytdl-core');
 
 
 
client.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
   
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
   
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if (command === `play`) {
        const voiceChannel = msg.member.voiceChannel;
       
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
       
        const permissions = voiceChannel.permissionsFor(msg.client.user);
       
        if (!permissions.has('CONNECT')) {
 
            return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
       
        if (!permissions.has('SPEAK')) {
 
            return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
        }
 
        if (!permissions.has('EMBED_LINKS')) {
 
            return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
        }
 
        if (url.match(/^https?://(www.youtube.com|youtube.com)/playlist)) {
 
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
           
 
            for (const video of Object.values(videos)) {
               
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
        } else {
 
            try {
 
                var video = await youtube.getVideo(url);
               
            } catch (error) {
                try {
 
                    var videos = await youtube.searchVideos(searchString, 5);
                    let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('n')}`)
                   
                    .setColor("RANDOM")
                    msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
                   
/////////////////                  
                    try {
 
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 15000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('No one respone a number!!');
                    }
                   
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                   
                } catch (err) {
 
                    console.error(err);
                    return msg.channel.send("I didn't find any results!");
                }
            }
 
            return handleVideo(video, msg, voiceChannel);
           
        }
       
    } else if (command === `skip`) {
 
        if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");
 
        serverQueue.connection.dispatcher.end('Ok, skipped!');
        return undefined;
       
    } else if (command === `leave`) {
 
        if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
       
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
        return undefined;
       
    } else if (command === `vol`) {
 
        if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
       
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
       
        return msg.channel.send(`Volume Now is **${args[1]}**`);
 
    } else if (command === `np`) {
 
        if (!serverQueue) return msg.channel.send('There is no Queue!');
        const embedNP = new Discord.RichEmbed()
        .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
       
    } else if (command === `queue`) {
       
        if (!serverQueue) return msg.channel.send('There is no Queue!!');
        let index = 0;
//  //  //
        const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
        return msg.channel.sendEmbed(embedqu);
    } else if (command === `pause`) {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send('Ok, paused');
        }
        return msg.channel.send('There is no Queue to Pause!');
    } else if (command === "resume") {
 
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
           
        }
        return msg.channel.send('Queue is empty!');
    }
 
    return undefined;
});
 
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
   
 
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
 
        queueConstruct.songs.push(song);
 
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}!`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`Can't join this channel: ${error}!`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`**${song.title}**, just added to the queue! `);
    }
    return undefined;
}
 
function play(guild, song) {
    const serverQueue = queue.get(guild.id);
 
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
 
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
 
    serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
}
 
 
client.on("message" , message=>{
if(message.content.startsWith(prefix+"google")){
  let args = message.content.split(' ').slice(1).join(' ');
 
  const embed = new Discord.RichEmbed().setColor(0x00AE86);
 
  google(args, function (err, res){
    if (err) console.error(err);
 
    embed.setAuthor("Search for: " + args,
                    "https://images-ext-1.discordapp.net/external/UsMM0mPPHEKn6WMst8WWG9qMCX_A14JL6Izzr47ucOk/http/i.imgur.com/G46fm8J.png",
                    res.url);
   
   
    google.resultsPerPage = 5;
    for (var i = 0; i < 5; ++i) {
      var link = res.links[i];
     
     
      if (link === undefined || link.link === null || link.href === null) {
        continue;
      }
     
      if (link.description === "" || link.title === "")
        link.description = "None";
     
      embed.addField(link.title + "n" + link.href,
                     link.description,
                     false);
    }
    message.channel.send({embed});
  });
}
})
client.on('message', message => {
if(message.content.startsWith(prefix + "فواكه")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
const fs = require("fs")
const pics = JSON.parse(fs.readFileSync('./pics.json' , 'utf8'));
 client.on('message', message => {
         if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find('name', `${room}`)
  if(message.content.startsWith(prefix + "setMedia","sm")) {
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!room) return message.channel.send('Please Type The Channel Name')
      if(!findroom) return message.channel.send('Cant Find This Channel')
      let embed = new Discord.RichEmbed()
      .setTitle('**Done The MediaOnly Code Has Been Setup**')
      .addField('Channel:', `${room}`)
      .addField('Requested By', `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`)
      message.channel.sendEmbed(embed)
      pics[message.guild.id] = {
      channel: room,
      onoff: 'On'
      },
      fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
      if (err) console.error(err)
      
      })
    }})
       client.on('message', message => {
  
  if(message.content.startsWith(prefix + "toggleMedia","tm")) {
          if (!message.channel.guild) return;

      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**The MediaCode Is __𝐎𝐍__ !**`), pics[message.guild.id].onoff = 'On']
        if(pics[message.guild.id].onoff === 'On') return [message.channel.send(`**The MediaCode Is __𝐎𝐅𝐅__ !**`), pics[message.guild.id].onoff = 'Off']
        fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
          if (err) console.error(err)
          
          })
        }
        
      })
      
             client.on('message', message => {
                       if (!message.channel.guild) return;
  if(message.author.bot) return;
  
        if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return;

  if(message.channel.name !== `${pics[message.guild.id].channel}`) return;

   let types = [
    'jpg',
    'jpeg',
    'png',
    'http://prntscr.com/'
  ]
   if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This Channel For Media 🖼️ Only !`) 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}
   if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This Channel For Media 🖼️ Only !`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
      .catch(err => {
        console.error(err);
    });
    }
  }
 })
client.on('message', message => {
  if(message.content.startsWith(prefix + "infoMedia","im")) {
let embed = new Discord.RichEmbed()
.addField('Channel Status', `${pics[message.guild.id].onoff}`)
.addField('Media Channel', `${pics[message.guild.id].channel}`)
.addField('Requested By', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
  }})

client.login(process.env.BOT_TOKEN);
