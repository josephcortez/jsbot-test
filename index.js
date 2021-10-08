const path = require('path');
const fs = require('fs');
const {Client, Intents, MessageEmbed} = require('discord.js');
const config = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

var pollID = '';

var mondayDD = '';
var tuesdayDD = '';
var wednesdayDD = '';
var thursdayDD = '';
var fridayDD = '';
var saturdayDD = '';
var sundayDD = '';

/*const command = require('./command');
const firstMessage = require('./first-message');
const privateMessage = require('./private-message');*/


client.on('ready', (message) => {
	console.log("TTB up and running");
});

client.on('message', async message => {
	if(message.content.startsWith('!poll')) {

		const args = message.content.slice(5).trim().split(' ');
		const title = args.join(' ');

		var ddEmbed = new MessageEmbed()
		.setColor('#BE0000')
		.setTitle(title)
		.setDescription('React to this message to sign up for a day to DD!')
		.addFields(
			{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
			{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
			{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
			{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
			{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
			{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
			{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
		);
		message.channel.send(ddEmbed)
			.then(async function(message) {
				await message.react('🟠');
    			await message.react('🟣');
    			await message.react('🔵');
    			await message.react('🟤');
    			await message.react('🟡');
    			await message.react('🟢');
				await message.react('⚪');

				const filter = (reaction, user) => {
     				return ['🟠', '🟣', '🔵', '🟤', '🟡', '🟢', '⚪'].includes(reaction.emoji.name) && !user.bot;
    			}

    			const collector = message.createReactionCollector(filter)

    			collector.on('collect', (reaction, user) => {
     				async function collect() {
        				if (!user.bot) {
										let guild = client.guilds.cache.get('872974797720649768'); //TODO Change to TT Server once launched (changed, change back for testing)
										let person = guild.members.cache.get(user.id);
										let dispName = person.nickname;
										if(dispName == null) {
											dispName = user.username;
										}
										//console.log(dispName);

										//Monday
          					if (reaction.emoji.name === '🟠') {
          						if(!mondayDD.includes(dispName)){
          							mondayDD = mondayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}

										//Tuesday
          					if (reaction.emoji.name === '🟣') {
          						if(!tuesdayDD.includes(dispName)){
          							tuesdayDD = tuesdayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}

										//Wednesday
          					if (reaction.emoji.name === '🔵') {
          						if(!wednesdayDD.includes(dispName)){
          							wednesdayDD = wednesdayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}

										//Thursday
          					if (reaction.emoji.name === '🟤') {
          						if(!thursdayDD.includes(dispName)){
          							thursdayDD = thursdayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}

										//Friday
          					if (reaction.emoji.name === '🟡') {
          						if(!fridayDD.includes(dispName)){
          							fridayDD = fridayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}

										//Saturday
          					if (reaction.emoji.name === '🟢') {
          						if(!saturdayDD.includes(dispName)){
          							saturdayDD = saturdayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}

										//Sunday
          					if (reaction.emoji.name === '⚪') {
          						if(!sundayDD.includes(dispName)){
          							sundayDD = sundayDD + ' ' + dispName;
            						var newDDEmbed = new MessageEmbed()
										.setColor('#BE0000')
										.setTitle(title)
										.setDescription('React to this message to sign up for a day to DD!')
										.addFields(
											{name: 'Monday (🟠)', value: mondayDD ? mondayDD : 'None'},
											{name: 'Tuesday (🟣)', value: tuesdayDD ? tuesdayDD : 'None'},
											{name: 'Wednesday (🔵)', value: wednesdayDD ? wednesdayDD : 'None'},
											{name: 'Thursday (🟤)', value: thursdayDD ? thursdayDD : 'None'},
											{name: 'Friday (🟡)', value: fridayDD ? fridayDD : 'None'},
											{name: 'Saturday (🟢)', value: saturdayDD ? saturdayDD : 'None'},
											{name: 'Sunday (⚪)', value: sundayDD ? sundayDD : 'None'},
										);
            						await message.edit(newDDEmbed);
            					}
          					}
          					reaction.users.remove(user.id); //you can remove the reaction once they react to it and their name is added.
        				}
      				}
      				collect()
    			});
			});
	}
});

//last line, starts bot after setup
client.login(config.TOKEN);
