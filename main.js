

const Discord = require('discord.js');
const fs = require ('fs');



const client = new Discord.Client();



const prefix = '-';

var month_json;

client.once('ready', () => {
    fs.readFile("months.json", (err, data) => {
        if (err) throw err;
        month_json = JSON.parse(data);
    });
    console.log('SchoolBot is online!');

});





client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;



    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();



    if(command === 'ping'){

        message.channel.send('pong!');
    }   else if (command == 'day'){
            var d = new Date();
            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            var n = month[d.getMonth()];

            if (month_json.hasOwnProperty(n)) {
                let even_odd_str = month_json[n];

                var d = new Date();
                var dayOfMonth = d.getDate();
                var dayLetter = even_odd_str[dayOfMonth - 1];
                if (dayLetter == "E") {
                    message.channel.send ('Today is an even day');
                }
                if (dayLetter == "O") {
                    message.channel.send ('Today is an odd day');
                }
                if (dayLetter == "N") {
                    message.channel.send ('There\'s no school today.');
                }
            }
            
       
    } else if(command === 'beep') {
        messsage.channel.send('boop. This bot is version 1.0.0');
    }

    if (command === 'connor')
    message.channel.send('sucks');



});
