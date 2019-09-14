console.log(`Loading...`);

//Calling packages
const Discord = require('discord.js');
const { token } = require('./config.json');
const eco = require("discord-economy");
const client = new Discord.Client();
const modRole = 'Illusion';
const modRole2 = 'Illusion';
const banRole = 'useless bitch';
const sql = require('sqlite');
sql.open('Storage/userData.sqlite');

//Initialization
client.on('ready', () => {
    console.log('TimBot v1.1.0 Launched');

    client.user.setActivity("with Sunny :)", { type: "PLAYING" });
})

//Listener
client.on('message', async message => {
    //Variables
    var msg = message.content.toUpperCase();
    var prefix = 'T!';
    var prefixAlt = '!';
    var prefix2 = 'S!';
    var sender = message.author;

    var currencyName = `SilverBux`;

    if(msg.startsWith(prefix)) {
        var args = message.content.slice(prefix.length).trim().split(/ +/g); //Creates array with content after prefix
        var command = args.shift().toUpperCase(); //Slices off the first word e.g. 'm!<this part>'
    } else if (msg.startsWith(prefixAlt)) {
        var args = message.content.slice(prefixAlt.length).trim().split(/ +/g); //Creates array with content after prefix
        var command = args.shift().toUpperCase(); //Slices off the first word e.g. 'm!<this part>'
    } else if (msg.startsWith(prefix2)) {
        var sArgs = message.content.slice(prefix2.length).trim().split(/ +/g); //Creates array with content after prefix
        var sCommand = sArgs.shift().toUpperCase(); //Slices off the first word e.g. 'm!<this part>'
    }

    //Ignore
    if (!msg.startsWith(prefix) && !msg.startsWith(prefix2) && !msg.startsWith(prefixAlt)) return;
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    //Ping
    if (command === `PING`) {
        message.channel.send('Fuck you!');
    }

    if (sCommand === `PING`) {
        message.channel.send('Fuck you too!');
    }




    //Patch Notes

    if (command === `PATCHNOTES` || command === `PATCH`) {
        const embed = new Discord.RichEmbed()
            .setTitle(`TimBot v1.1.0 Patch Notes, 9/13/19`)
            .setColor(0x2d64f1)
            .addField('!calendar', `Added new command`, true)
            .addField('!chillin', `Added new command`, true)
            .addField('!comic', `Added new command`, true)
            .addField('!dj', `Added new command`, true)
            .addField('!q', `Added 22 new quotes.`, true)
            .addField('!cael', `Added 1 new result`, true)
            .addField('!silver', `Added 1 new result`, true)
            .addField('!subf', `Added 1 new result`, true)
            .addField('!winnarly', `Added 1 new result for each part`, true)
            .addField('!wub', `Adjusted command ;)`, true)
        message.channel.send({embed});
    }



    //Help + Commands
    if (command === `HELP`) {
        const embed = new Discord.RichEmbed()
            .setTitle(`TedMT Help`)
            .setColor(0xF1C40F)
            .addField('!help', `What you're looking at right now.`, true)
            .addField('!crab', `Roll your crab to get a daily Silverbux reward.`, true)
            .addField('s!bal', `Displays your Silverbux balance.`, true)
            .addField('s!give <amount> <user>', `Gives Silverbux to another user`, true)
            .addField('!quote', 'Try it :)', true)
        message.channel.send({embed});
    }

    if (command === `COMMAND` || command === `COMMANDS`) {
        message.channel.send("**Commands List (Up-to-date):** \n \n**IMPORTANT COMMANDS** \n**!q**  - quotes \n**!sugden** - Tedcord pet pics \n**!precrab** - practice on dodging crabs, unlimited use \n**!crab** - !precrab but the real deal, roll for daily rewards depending on the crab outcome \n**!help** - Instructions on currency-based commands \n**!commands** - this command, ya dingus \n \n**TEDCORD USER-BASED COMMANDS** \n!adlp, !ahampster, !al or !animelover, !anti, !beywiz, !brio, !bubbles, !cael, !cag, !coffee, !cori, !cuck, !darsh, !dimi, !draco, !drew, !duck, !loscar, !midnight, !mmuller, !risc, !sm, !silver, !soap, !subf, !ted, !wub \n \n**NETPLAY COMMANDS** \n**!netplay - @'s anyone signed up to regions you want to play against, the summoning call of TimCord** \n**!opt-in** - signs you up for a specific netplay role, i.e. !opt-in N-NE makes it so you will be @'ed every time someone wants to netplay vs NE, and !opt-in VS-NE will make it so whenever you use !netplay, N-NE roles will be @'ed. \n**!opt-out** - akes away a specifc netplay role from you, i.e. !opt-out N-NE takes the N-NE role away from you. \n \n**MISC. COMMANDS** \n**!askgoiter** - for an accurate fortune-telling \n**!hbox** - for wise words, teachings and history from the Juan True God \n**!mango** - for teachings and history on Satan himself \n**!axe, !bbb or !bobbybigballz, !chacha, !gimr, !ibdw, !minecraft, !never**");
    }






    //General
    if (command === `QUOTE` || command === `Q`) {
        var quotes = [`What's your favorite minecraft block?`,
            `You lack a fundamental understanding of literature if you ever slightly enjoyed the character of Taylor`,
            `Puff is too high`,
            `Puff is too low`,
            `puff is too low`,
            `Instead of walking home why don't you take your cop car?`,
            `gang`,
            `I wouldn't like Fiction half as much if other people didn't hate him lol`,
            `It's time for an honest leader, Ganon 2020.`,
            `this may just be a goblin den I've been invited into`,
            `lol people like the last jedi\nthats hilarious`,
            `Cops get muted`,
            `Has anyone actually ever IRL moonwalked an entire marathon before?`,
            `I wish my gf was blue haired, tall and had a sword`,
            `DUCK. FUCKING. NUMBERS.`,
            `we need TedUniversalBasicIncome`,
            `I MADE THE FUCKING POST\nFUCK you. I **FUCKING** HATE YOU. FUCK you.\nFUCK YOU.`,
            `as always, scandenavia looks like a bunch a penis`,
            `Some of us appreciate flaccid dicks\nThey look kinder`,
            `Food is delicious, and cosplaying is for nerds.`,
            `It Darshed me up cuz I was thinking about how it'd Darsh me up.\nIt was multi-opponent conditioning.`,
            `*jumps off and nairs into the blast zone*\nIs this the Ginger nair?`,
            `I think that listening to rage against the machine is the fastest way to improve short term as pichu`,
            `ok`,
            `sploosh sploosh`,
            `The penis makes it better`,
            `lol u guys are/aren't into dick?`,
            `I mean realistically speaking, I would bang irl\nBut I wouldn't fap`,
            `I wouldn't bang in this instance\nTilted photo`,
            `Pseudobiceros hancockanus`,
            `Nah don't worry fam I'm a stem major so I'm not legally allowed to talk to g*rls`,
            `a dick should be the rough shape and texture of a brick`,
            `Karen Nanney 😍`,
            `SKELETON ORB`,
            `fuckability of a gooblin or otherwise relevant cutyamagubbin is related to 3 primary qualities\n1. personality\n2. absolute threat to your life\n3. butt`,
            `if they had dna-up bio-remodeling and i could transition into an orc i would be there in a heartbeat`,
            `I forgot that the month of May existed`,
            `lets hear it one more time\nbotched! foreskin! restoration!`,
            `Santa does exist, and I can confirm he has two dicks.`,
            `Is it better to be feared or loved for having two dicks?`,
            `Obviously the female gerudo have dicks\nIt's just that Gannon has *two* dicks`,
            `You've really gotta try making fun of black people sometime, it's a lot of fun`,
            `"But I very much enjoy just fox" - Stephen 'Darsh' McTowlie 2019`,
            `"But I very much enjoy... Stephen 'Darsh' McTowlie" -Subjective 'SubjectiveF' F, 2019`,
            `fox's aerials are more diverse than the ult roster`,
            `I like the Swastika`,
            `You think he's man enough to rape?`,
            `do your parents know that you're speaking about nazism while in the car`,
            `Feels Cael Man`,
            `you descend into the abyss that is candy corn, and then you're like OH NO...`,
            `Hot people are my type.`,
            `Who would win: 3 Vishes or 2 Chillins?`,
            `hboard`,
            `The b0xx manifesto is only like half the length of Capital volume 1`,
            `Darsh you're stupid\nRead the manual`,
            `Repent, zoomer!`,
            `don't quote me but that's a 3 frame window`,
            `If there is a God, why do good things happen to Sheik mains?`,
            `I don't get it, how do you not be loud?`,
            `Staying Up Late thinking about how mang0 definitely has more hair on his ass cheeks than me`,
            `I'm the baby being delivered`,
            `i am the quickest male\nit's not always a good thing 🙁`,
            `u deestand`,
            `I think everything in this situation is retarded, including us`,
            `SeethethingisIagreewithmostofthestuffinyourpostbutyourpostisjustadescriptionofthingsthattakeskillincs,itdoesn'treallydomuchtocomparethemtotf2orexplainwhytheytakemoreskillthanallthethingsintf2.Icouldmakeasimilarpost,talkingaboutalltheintricaciesoftf2notpresentincsgo,likethecomplexmovementtechniquesofsoldieranddemo(andevenscout),ubers,etc.butIdon'tthinkthat'sagoodwaytosumuphowmuchskillagametakesbecauseit'snotreallyabouttheNUMBERofmechanicsinthegameyoucanlistoff,it'saboutHOWdeepeachoneofthemis.Forexample,thefactthatmomentumcarriesoverwithgrenadesiscertainlyacoolfeatureincs,butinthegrandschemeofthingstheamountofskillrequiredtomasterthatisabsolutelynegligiblecomparedtothegameasawholeandnotevenreallyworthmentioning,tbh.Samegoesformostofthelittlethingsyoumentioninyourpost,eventhoughthey'realsorealthings.TF2doesn'thaveasmanyminutemechanicstolistoff,buttheonesthataretherearearguablymorecomplex.Thevarietyintroducedbythedifferentclassesisfarmoresignificantthanthatofthedifferentweaponsincsgo,theplayergenerallyhasmoreoptionsavailabletothematonetime,andthere'sjustgenerallymoregoingonatonceintf2thancsgo.Specifically,IthinkyouranalogywasreallybadwiththeLolvsDota2stuff,becauseLoLandDota2arefundamentallysimilargameswhereDotaismorecomplexmechanically,buttf2andcsgoaren'tevenfundamentallysimilargamessoyoucan'treallymakethecomparison.Onthesurface,csgodoeshavemoremechanicsthantf2,butthat'scertainlynotanywhereclosetothewholestory,regardlessofwhichgamehasahigherskillceilingoverall.`,
            `The interesting thing about FD is that it has no platforms`,
            `"I don't care if mango won"\n- Sugden`,
            `Why would anybody do drugs when you could just mow the lawn?`,
            `Why does hbox, the largest top 10 player, not simply eat the others?`,
            `It's 2019 and Hbox is still out here not knowing how to jc crab`,
            `🦀 MELEE IS DEAD 🦀`,
            `The true darsh up is the friends we made along the way.`,
            `SUGDEN MY BALLS`,
            `True story, when Hbox was in high school, a gaggle of girls dumped a barrel of live crabs on him while he was in a bathroom stall.\nThe name of those girls?\nStephen McTowlie`,
            `if you grow up around enough itals you learn to sling salami`,
            `I wish foreskins were real`,
            `Jesus goes to bed at 7:30 on fridays`,
            `I wouldn’t netplay for the same reasons that I don’t cry in front of my dad`,
            `Netplay, along with the Peking man, is a sin beacon designed to make us stop going to work and roll stop signs in mall parking lots`,
            `Asking is pointless because nobody will ever say no.`,
            `ill suck you guys again, watch me`,
            `I plan to get at least 5 belts on my 23rd birthday`,
            `How is PPMD meditating if he isn't wearing an Amazon Basics monk outfit?`,
            `linux is basically project m`,
            `I'm saving my pee till marriage`,
            `gamer boy pee - a PPMD combo video`,
            `Zen and the Art of Marth Maintenance - a PPMD Combo Video [Stream 2019]`,
            `be like water - a PPMD combo video [APEX 2015]`,
            `lmao imagine gimr actually counting something that isn't his money`,
            `cum`,
            `You can hate jews and not be a nazi.`,
            `I don't care for balls.`,
            `thinking that traps are gay is utopian`,
            `You're not much of a scientist, are you?`,
            `Dude, balls suck`,
            `just warms my cockles that someone somewhere gets the wizzrod`,
            `darsh brand dick pills`,
            `I think Sub's rubbing off on me.\nI think that's illegal.\nNo, I'm just counting friendlies.`,
            `Young Link's just like me because he's blonde and drinks milk.`,
            `Go to GOML`,
            `Susan B Anthony? More like Susan B Shopping!`,
            `You coulda cum way deeper`,
            `I sweat to god`,
            `Traps aren't gay isn't a meme`,
            `Hey, is your refrigerator running?`,
            `THEY HAVE A FLAG?`,
            `more like isn'treal`,
            `So you know, like, redheads?\nSome of them look really good, but some of them are uggos\nThey're like the Westballz of women.`,
            `Tear gas makes people cry, and laughing gas makes people laugh, what other types of gas do you wish existed?\nCum gas.`,
            `i'm feeling so attacked that you should be forced to roll a d20 for initiative`,
            `Get over here and gimme a smooch you hot piece of ass`,
            `If they put stomp knee in the louvre, I'm burning another notre dame`,
            `Beywiz only lets me vape from his stuff if he inhales first and then blows it into my mouth while we lock lips.`,
            `italians make the worst pasta`,
            `They aren't gods, they're humans.\nThey rape children just like you or me.`,
            `sometimes I entertain myself for hours just hitting t!q`,
            `Are there special dating platforms for people like us? Finding these girls in reality seems to be really challenging, whenever I chat up a girl at a bar she either seems to be only into horses (which can sometimes be a little too weird), girly tv shows or opera music. Granted my sample size isn't that big but that's my impression so far. Now I'm not looking for anything special: 18 to 21, thin, loves Melee (not just casually but plays herself and can appreciate the beauty that is PPMD's Marth), c cups, red hair (I main Fox), especially into spacies. However if only b cups are available, that will work out just fine too. These girls seem to be kind of rare though, however with the help of the internet it should be theoretically easier to find them, but I'm not sure how, maybe I'm disregarding the most obvious solutions.`,
            `there is no context for abstract questions of reality`,
            `Pornstars Without Borders was a tremendous PR success.`,
            `Stadium is like a nightmare where I'm playing melee, then all of a sudden we're in adventure mode.`,
            `getting better has made me worse`,
            `Sugden on deez nuts\nU gotta sugden on deez nuts\nGonna be Sugden on deez nuts\nDeez Nuts need a Sug\nEnough Sug? Not for Deez Nuts\nNine Eleven`,
            `Learn how to make lemons out of lemonade, come to my seminar!`,
            `they are the future\nim just here to put a lil boom in their zoom you know`,
            `Sheik mains read all the cards in Cards against Humanity but never play the game.`,
            `hey kids wanna go bomb a US military base?\nnot a fed btw`,
            `I hate how good his D is`,
            `What if Obama was a Sheik main?`,
            `ADLP: Am Dope Love Penis`,
            `If you doxx my mom I will end you`,
            `Dragon Ball Z is not an anime`,
            `I respect the attempt at Hitler, but I think your attempt is a disservice to a great man.`,
            `There's no bad kind of eugenics.`,
            `no one engages with video game content more VITALLY and AUTHENTICALLY than i do, i guarantee you that much`,
            `Iron man dies and doesn't come back\nThere's time travel bullshit\nBlack Widow dies and doesn't come back\nCaptain America travels back in time and stays there so he ages like 100 years\nThor gets fat and fortnite dances\noops did I do that?`,
            `"Pichu is slept on, man."\n -SubjectiveF`,
            `when you think about it, has humanity really ever topped yogurt covered pretzels?`,
            `It's true you don't see many dwarf women. And in fact, they are so alike in voice and appearance that they are often mistaken for dwarf men. And this in turn has given rise to the belief that there are no dwarf women, and that dwarves just spring out of holes in the ground!`,
            `What other takes did you bring back from the arctic?`,
            `KJH is black SFAT`,
            `I need to be gay for the fashion`,
            `90s kids remember when ppl liked dj`,
            `You think after Leffen jab upsmash hbox to take the set, he leaned over to hbox and said 'that was a read, by the way. You can't do that on reaction'?`,
            `You think hbox pops off after he beats his wife?`,
            `Like it or not, I am a part of this community. So when you put on your naruto shirts and your Hen-ties, you're dragging me down with you.`,
            `I misinterpreted what I meant to say`,
            `if a tree fell in the woods and no one was there to hear it, how would they burn 30000 bodies a day?`,
            `I unironically think Giorno is one of the most beautiful fictional characters, he easily surpasses a lot of girls in beauty and style. Just look at the donuts on his hair, at his chest, his magnificent lips. Love the wings on his winch, rhombus pattern on his back. He's slim yet muscular. Young and pure. \nI'm not gay, but damn he's good.`,
            `I am every living thing in britain`,
            `hmm okay kingdom hearts might be devoid of merit`,
            `Darsh is better than top players.`,
            `DJmutendo`,
            `Shroomed is white.`,
            `I'm actually two caels in a trench coat`,
            `My melee starts in my balls and runs into my fingertips without stopping by my brain.`,
            `it was me :)`,
            `Peeing would be better if the piss could go back into your bladder if it wanted.`,
            `it's a plane you move through linearly, without changing directions`,
            `Fox carries the game by making lame characters more fun to play and watch when they combo spacies. The reality is no one would play floaties if spacies didn’t exist to get combod by them so next time you play a fox or falco thank them for existing so that you can have your fun.`,
            `No matter how you try easing people in here, they're gonna meet SubF at some point.`,
            `what about instead of “worm” its “norm” and its the same book except norm macdonald is the main character`,
            `Ironic, he could roll from everyone, except himself`,
            `It's over Ganon! I have the top platform!`,
            `You underestimate my up air!`,
            `Welcome to the shit post section, Hello There! Ha! Just a little prequel meme humour for ya.\nRemember, keep it shitty, but try not to be the most gaping buttholes on the internet ;)`,
            `I killed all of them.... And not just the foxes, but the midtiers and the low tiers`,
            `hbox is a full time egamer\nwho games harder, faster, or more thoroughly than him?`,
            `Y'all a bunch of ignant doogiehousers`,
            `women my age are kinda low tier\nfucking someone so young would feel kinda pedophilic`,
            `bowser doesn't get comboed harder than fox`,
            `There’s nothing more attractive than a woman who’s okay with me being emotionally unavailable`,
            `what if u were friends with tony stark and spiderman and u went to johnny rockets 2gether`,
            `what if peter parker met black panther and told him about memes jsjksksjsjkskj\nwhat if thor sex captain marvel`,
            `"Because I am a top" -Darsh 2019`,
            `it was platonic animal abuse`,
            `I love gentlemen`,
            `can't wait for sug's girlfriend to get pregnant and for us all to react with :SugMistake:`,
            `*Silverhand Inc. The Technology Revolutionary who blesses us with modern advancements*`,
            `The balls are just adherent to the asshole`,
            `It's not that I have a huge dick, it's that I have a really small gooch`,
            `hax is just Wizzy but for delivery dates`,
            `any moderator who doesn't show intense favoritism to the notable users of this discord is wack`,
            `cyberbullying is:\n❌ great\n❌ acceptable\n❌ real`,
            `Just found out benjamin franklin was never a president`,
            `I was never used to seeing bald white people`,
            `N3z likes top players more than normal dudes`,
            `Yeah kira was dumb but who can blame him he lived in 2015 california`,
            `Never cum`,
            `If I had been raised by more abusive parents I would have probably bullied kids like Fiction`,
            `Ok, I'm gonna send a message. React to it with an emote and I'll time you.\nReady?\nGo!`,
            `rog would love to be cucked way more than midnight`,
            `the founder of Mormonism married a 14 year old\nwhat a pimp!`,
            `I, too, am the child`,
            `Undertale is such a safe space that not even the gameplay can get you.`,
            `No, I think Juiey is probably a Braziliancel`,
            `D is off the menu, my mom took it`,
            `I just learned a new spell... Spanish!`,
            `bug catcher baby driver wants to battle!`,
            `Everyone in this fucking server except for me is a beaner`,
            `Seafood sucks`,
            `Dexterito\nQuiero desnudarte a besos dexterito\nFirmo en las paredes de tu laberinto\nY hacer de tu cuerpo todo un manuscrito (sube, sube, sube)\n(Sube, sube)`,
            `I have many mid level spacie problems. The main one being I’m actually low level.`,
            `8==============D SYKE I'M A GROWER NOT A SHOWER`,
            `You should have given me head\n-gay thanos`,
            `Lesbian sex is extended foreplay.\nIt just keeps going right on into fiveplay.\nAnd sixplay.\nA lot of butt bumping, actually.`,
            `i thought lesbian sex was just bumping boobs into each other`,
            `lmao @ reading anything other than cereal boxes and ur moms diary`,
            `well whatever you do, DO NOT go to a college party and while there DEFINITELY DO NOT drink alcohol which will lower your inhibitions, and DO NOT limit yourself to exactly 1 drink so you'll still be mindful of the valuable advice you've been given here`,
            `What are you smoking them with?\nBecause if it isn't the corpse of Sweet Baby Ray himself, it just isn't good enough.`,
            `i was a fat kid for what felt like 30 min\nnever felt bad about it it was fun playing with my titties`,
            `I fuckin love klopmario`,
            `Alexa, set alarm for six thirty AM\nAlexa, set alarm for six fourty-five AM\nAlexa, set alarm for six fifty AM\n...\nAlexa, send resignation letter`,
            `The X-Files is like The Office but not funny`,
            `was there a big armada/mango rivalry?`,
            `PoE more like P(oopo)o(peepe)E`,
            `"I will happily concede that Risc is the best [...] DK on the server" - Paul "Chandy" Chanderson, August 2019`,
            `I eat the tape, but you know, that's like a fruit roll up`,
            `also, should i get this hat?\njavascript:;`,
            `your mom is gonna display in whatever language her console is set to`,
            `I'm standing naked in my bathroom chugging a pre shower brewski so I'll be right back with you kids`,
            `tread lightly, lest you get sucked off by me right now`,
            `i do all kinds of stupid and gay shit. they cant attack you if you dress up as a girl and kiss them. i dont like doing it  but it works`,
            `you play ganon for long enough, you're gonna get ganon brain`,
            `what the fuck is a rhombus?`,
            `he double stocked him!`,
            `If he was under 12 years of age, then I'll allow it.`,
            `I thought barnes and noble was the ice cream shop`,
            `I want wub to have kids so I can curbstomp his kids`,
            `people who say vaginas are good looking are psychopaths`,
            `"Never paying attention to that Gringo Mudblood again." -SubF`,
            `October sucks`,
            `I should do octo nut october\n8 times a day`,
            `wear a trench coat and a hat every day and stand in the corner\npeople like mystery`,
            `protip: everyone is gay`,
            `i've never agreed with you more\nPDA deserves jail time`,
            `like if you wanted to fuck the blue people from avatar or a klingon in public people still wouldn't like that`,
            `I still think people holding hands in public should be beaned in the gourd with tennis balls`,
            `Theres a guy near me using his outside voice while indoors\nNobody else is nearly as loud as him\nSub can you please quiet down a bit`,
            `Try\n- Using more Slurs\n- Breaking things in your home\n- Internalizing the emotions but letting your self-worth take the brunt of the negative energy`,
            `Jerking off before you respond to your crush’s text so you won’t say dumb shit was like my number one high school life hack`,
            `morning boner is basically a phone alarm for me to take my ssri now`,
            `depending on what you use reddit for, either all the posters are assholes or all the posts are assholes`,
            `My grandma owns an old timey cash register, I guess her house is a store now and people can just buy her furniture`,
            `That's because burritos are American.`,
            `I wish I would just eat shit and die`,
            `socially, im the most retarded demographic`,
            `I watched hentai before I watched porn for the first time because it got linked in youtube comments`,
            `Thats not minecraft, thats my wife!`,
            `| only type | with | because |'m a fucking hipster`,
            `not l, the gamer\nwas it an i or an L?\nwho knows\nonly I, the gamer\n- a poem by wub -`,
            `Isn't stigmatism a Terraria boss?`,
            `imagine having floaty cum \ntry to bukkake a bitch like 'just give it a second'`,
            `do muslim crossdressers wear hijabs?`,
            `Long overdue, but it's a good time for me to unsubscribe from this discord.`,
            `Not sure if calling BBB a faggot would be hilarious or just kind of unsolicited weirdness toward a top playe`,
            `you can even make them give people mosquito aids \nit's called malaria cael \noh`,
            `“was there a big armada/mango rivalry?” \n-Cael`,
            `"I will happily concede that Risc is the best [...] DK on the server" - Paul "Chandy" Chanderson, August 2019`,
            `It's wholesome because I didn't cum`,
            `Never cum`,
            `"Captain pretzel took a game from kjh once" \n"no an upset \nthat's an upgame"`,
            `Did you know that in the PAL version of Super Smash Bros. Melee, Marth, Roy, Link, and Young Link had their swords completely removed from the game?`,
            `Dam, my great grandma died \nGood run though`,
            `no no it's okay \nthis is a complaint that's allowed \ntrust`,
            `Adoptions are easier to cancel than natty kids`,
            `Just go for one that's retarded`,
            `I'm not about to adopt a kid if there's even the slightest possibility he'll want to be a Fox main.`,
            `"What's that podcast where they watch the same movie every day" \n"twitch.tv/chillendude?"`,
            `I'm going to run over a white person as reparations`,
            `Wait a minute is Norway included in the Netherlands?`,
            `apples are just potatoes with sugar in them`,
            `foreskins are legal tender in israel`,
            `women don't exist \n the goverment is lying to us`,
            `The orphanage around the corner of my house has a "do not watch the children" policy \nJust makes me want to do that more, so i just touch them, since they have no policy for that`,
            `I like seeing vro commentate because it reminds me that even if you look like a scumbag and are innately annoying you can still be successful`,
            `the whole murica 9/11 thing struc made`,
            `I'm for sure a noun and verb kind of guy`,
            `the torah, bible and quaran are all shitty seasonal anime but got a high following cause of marketing`,
            `"the only white people who deserve n word passes are the ones who wouldn't use them" - George Bush`,
            `ants are awful \nants are like IRL malware`,
            `randy pitchford asks you to return the usb stick you found asmr`,
            `the only one who can stop a bad guy with a gun isn't a good guy with a gun \nit's a good guy with a car bomb`,
            `SFAT would have had way more success in his melee career if he tried selling CutCo knives to his opponents mid game.`,
            `skedaddle skedoodle \nyour peen is now a noodle`,
            `floaties don't care about your feelings`,
            `Facts don’t care about your fall speed`,
            `>strongbad probably hired a hooker at least once \nAnd asked the hooker to dress up as Fox before beating the shit out of her`,
            `Rog was way ahead of the meta, he’s blocked me on anthers for years`,
            `Sugden is so Anti-smoking because his teeth can’t afford to get any worse`,
            `zizek really is just hegelfag lobsterman but his video where he rails against political correctness and how his black friends giving him the n word pass are useful for decoverting to be nazi imageboard users`];

        var r = Math.floor((Math.random() * quotes.length));

        message.channel.send(quotes[r]);
    }

    if (command === `CRAB`) {
        var daily = await eco.Daily(sender.id);

        if (daily.updated) {
            var c = [`the crab hits your face`,
                    `the crab hits your face`,
                    `the crab grabs onto your arm and pinches it as it flies by`,
                    `the crab grabs onto your arm and pinches it as it flies by`,
                    `the crab falling single hit uairs you`,
                    `the crab falling single hit uairs you`,
                    `the crab narrowly misses you`,
                    `the crab narrowly misses you`,
                    `the crab sails over your head`,
                    `the crab sails over your head`,
                    `the crab misses the l-cancel on his bair and you punish with upsmash`,
                    `the crab misses the l-cancel on his bair and you punish with upsmash`,
                    `you are not a puff main and your superior reflexes allow you to catch the crab`,
                    `you are not a puff main and your superior reflexes allow you to catch the crab`,
                    `the crab reverse fadeback fairs you`,
                    `you use your copious amount of tech skill practice to jc crab and escape`];

            var r = Math.floor((Math.random() * c.length));

            message.channel.send(c[r]);

            var reward = 0;

            if (r < 2) {
                reward = 10;
            } else if (r >= 2 && r < 4) {
                reward = 20;
            } else if (r >= 4 && r < 6) {
                reward = 30;
            } else if (r >= 6 && r < 8) {
                reward = 45;
            } else if (r >= 8 && r < 10) {
                reward = 55;
            } else if (r >= 10 && r < 12) {
                reward = 65;
            } else if (r >= 12 && r < 14) {
                reward = 75;
            } else if (r >= 14 && r < 15) {
                reward = 90;
            } else if (r >= 15 && r < 16) {
                reward = 100;
            }

            var results = await eco.AddToBalance(sender.id, reward);

            if (r > 5) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Congratulations! You won ${reward} ${currencyName}`)
                    .setColor(0xF1C40F)
                    .addField(`${currencyName}`, `${results.newbalance}`, true)
                message.channel.send({embed});
            } else {
                const embed = new Discord.RichEmbed()
                    .setTitle(`Congratulations..? You won ${reward} ${currencyName}`)
                    .setColor(0xF1C40F)
                    .addField(`${currencyName}`, `${results.newbalance}`, true)
                message.channel.send({embed});
            }

            var d = new Date();

            if(d.getDay() == 5) {
                var r2 = Math.floor((Math.random() * c.length));

                message.channel.send(`It's double crab friday!\n`+c[r2]);

                var reward = 0;

                if (r2 < 2) {
                    reward = 10;
                } else if (r2 >= 2 && r2 < 4) {
                    reward = 20;
                } else if (r2 >= 4 && r2 < 6) {
                    reward = 30;
                } else if (r2 >= 6 && r2 < 8) {
                    reward = 45;
                } else if (r2 >= 8 && r2 < 10) {
                    reward = 55;
                } else if (r2 >= 10 && r2 < 12) {
                    reward = 65;
                } else if (r2 >= 12 && r2 < 14) {
                    reward = 75;
                } else if (r2 >= 14 && r2 < 15) {
                    reward = 90;
                } else if (r2 >= 15 && r2 < 16) {
                    reward = 100;
                }

                var results = await eco.AddToBalance(sender.id, reward);

                if (r > 5) {
                    const embed = new Discord.RichEmbed()
                        .setTitle(`Congratulations! You won ${reward} ${currencyName}`)
                        .setColor(0xF1C40F)
                        .addField(`${currencyName}`, `${results.newbalance}`, true)
                    message.channel.send({embed});
                } else {
                    const embed = new Discord.RichEmbed()
                        .setTitle(`Congratulations..? You won ${reward} ${currencyName}`)
                        .setColor(0xF1C40F)
                        .addField(`${currencyName}`, `${results.newbalance}`, true)
                    message.channel.send({embed});
                }
            }
        } else {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: already completed')
                .setDescription('This command can be used once per day, you have ' + daily.timetowait + ' remaining.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }
    }



    //Pre-Crab

    if (command === `PRECRAB`) {
        var c = [`the crab hits your face`,
                `the crab hits your face`,
                `the crab grabs onto your arm and pinches it as it flies by`,
                `the crab grabs onto your arm and pinches it as it flies by`,
                `the crab falling single hit uairs you`,
                `the crab falling single hit uairs you`,
                `the crab narrowly misses you`,
                `the crab narrowly misses you`,
                `the crab sails over your head`,
                `the crab sails over your head`,
                `the crab misses the l-cancel on his bair and you punish with upsmash`,
                `the crab misses the l-cancel on his bair and you punish with upsmash`,
                `you are not a puff main and your superior reflexes allow you to catch the crab`,
                `you are not a puff main and your superior reflexes allow you to catch the crab`,
                `the crab reverse fadeback fairs you`,
                `you use your copious amount of tech skill practice to jc crab and escape`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    if (command === `CALENDAR` || command === `HOLIDAY` || command === `HOLIDAYS`) {
        var d = new Date();
        var m = d.getMonth();

        if (m === 0) {
            var embed = new Discord.RichEmbed()
                .setTitle(`January Calendar`)
                .setColor(0xafeeec)
                .addField('1/10', `Silverhand's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 1) {
            var embed = new Discord.RichEmbed()
                .setTitle(`February Calendar`)
                .setColor(0xe46263)
                .addField('2/02', `SubjectiveF's Birthday`, true)
                .addField('2/04', `Creation Day`, true)
                .addField('2/20', `FUCK YOU. Day`, true)
                .addField('2/24', `Sugden's Birthday`, true)
                .addField('2/26', `ADLP's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 2) {
            var embed = new Discord.RichEmbed()
                .setTitle(`March Calendar`)
                .setColor(0x33bb46)
                .addField('3/21', `Meinkraft Day`, true)
                .addField('3/26', `The Great Wormpocalypse`, true)
                .addField('3/27', `The Lost Tapes`, true)
                .addField('3/28', `Structuremole's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 3) {
            var embed = new Discord.RichEmbed()
                .setTitle(`April Calendar`)
                .setColor(0x46ff00)
                .addField('4/01', `Ted vs Cael`, true)
                .addField('4/12', `Birth of Goiter`, true)
                .addField('4/13', `Creation of TedMT`, true)
                .addField('4/13', `Winnarly's Birthday`, true)
                .addField('4/21', `Crab Day`, true)
                .addField('4/22', `Chandy Blasts In`, true)
                .addField('4/26', `Fuck GG Day`, true)
                .addField('4/29', `Brio's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 4) {
            var embed = new Discord.RichEmbed()
                .setTitle(`May Calendar`)
                .setColor(0x1fade9)
                .addField('5/10', `Cum Champ Day`, true)
                .addField('5/25', `Can't Go Backwards Day`, true)
                .addField('5/29', `Hollow Knight Day`, true)
            message.channel.send({embed});
        } else if (m === 5) {
            var embed = new Discord.RichEmbed()
                .setTitle(`June Calendar`)
                .setColor(0xfffc00)
                .addField('6/01', `Biday`, true)
                .addField('6/03', `Sugden Mod Coronation Day`, true)
                .addField('6/11', `Return of the DDT`, true)
                .addField('6/12', `Sugden Netplay Day`, true)
                .addField('6/24', `SPOTW Returns`, true)
            message.channel.send({embed});
        } else if (m === 6) {
            var embed = new Discord.RichEmbed()
                .setTitle(`July Calendar`)
                .setColor(0xecc81f)
                .addField('7/23', `WubWubWowzy's Birthday`, true)
                .addField('7/24', `Skribbl.io Day`, true)
                .addField('7/31', `UCFGate`, true)
            message.channel.send({embed});
        } else if (m === 7) {
            var embed = new Discord.RichEmbed()
                .setTitle(`August Calendar`)
                .setColor(0xf398d5)
                .addField('8/06', `Blasting of the Selfies`, true)
                .addField('8/08', `Silver Mode`, true)
                .addField('8/16', `The Tedpocalypse`, true)
                .addField('8/27', `Loscar's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 8) {
            var embed = new Discord.RichEmbed()
                .setTitle(`September Calendar`)
                .setColor(0x831ceb)
                .addField('9/06', `Merging of the Bots`, true)
                .addField('9/10', `History Day`, true)
                .addField('9/11', `The crab misses you and sails into the first tower, altering western civilization forever`, true)
                .addField('9/18', `MidnightLifter's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 9) {
            var embed = new Discord.RichEmbed()
                .setTitle(`October Calendar`)
                .setColor(0xff8000)
                .addField('10/12', `AnimeLover's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 10) {
            var embed = new Discord.RichEmbed()
                .setTitle(`November Calendar`)
                .setColor(0xa35c28)
                .addField('11/26', `Soap's Birthday`, true)
            message.channel.send({embed});
        } else if (m === 11) {
            var embed = new Discord.RichEmbed()
                .setTitle(`December Calendar`)
                .setColor(0xffffff)
                .addField('12/25', `Timsmas`, true)
            message.channel.send({embed});
        }

        if (args[0] === `FULL`) { //Display all months
            //To-do
        }
    }

    if (command === `COMIC` || command === `COMICS` || command === `FUNNY`) {
        var c = [`https://cdn.discordapp.com/attachments/612058753293877274/621812880983064627/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/621563099408891927/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/621561519729278988/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/621068752791797790/comic.png`,
                `https://cdn.discordapp.com/attachments/612061198288027796/621054984988917790/comic.png`,
                `https://cdn.discordapp.com/attachments/612061198288027796/621054982606815271/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/620817138076221440/comic.png`,
                `https://cdn.discordapp.com/attachments/612061198288027796/619291005065363466/comic.png`,
                `https://cdn.discordapp.com/attachments/612061640694824960/619253106651299850/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/617143559929462844/comic.png`,
                `https://cdn.discordapp.com/attachments/612061198288027796/616710771799228502/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616681351734624262/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616428140650299392/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616423882659987456/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616423676568535046/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616423543303045138/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616423369620848652/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616423311353839616/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616423109251170315/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616422819336814603/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616421716800831535/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616318135657693236/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616304961948745728/comic.png`,
                `https://cdn.discordapp.com/attachments/612061198288027796/616299012462739458/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616284616466366484/comic.png`,
                `https://cdn.discordapp.com/attachments/615454765886996481/615513757799677952/comic.png`,
                `https://cdn.discordapp.com/attachments/612063946643472389/615243696740368415/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/614207691740413962/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613393134143143936/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613386094255407154/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613111650098216990/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613110446895136789/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613109942987128989/comic.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613109280391954641/comic.png`,
                `https://cdn.discordapp.com/attachments/612086349960445952/613107723575492610/comic.png`,
                `https://cdn.discordapp.com/attachments/612063656036925502/613107131813462047/comic.png`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }









    //Holiday Commands
    /* 4th of July
    if (command === `FIREWORK` || command === `FIREWORKS`) {
        var c = [`the firework explodes in your face`,
                `the firework sails over your head`,
                `the firework narrowly misses you`,
                `the firework burns the hair off your arm as it flies by`,
                `you are not a puff main and your superior reflexes allow you to catch the firework and throw it at someone else`,
                `the firework flies where it's supposed to and looks pretty`,
                `the firework lands on the ground right in front of you`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    } */




    //People Commands


    //ADLP

    if (command === `ADLP`) {
        message.channel.send(`COP ALERT!\nhttp://imgs.fyi/img/7skw.jpg`);
    }


    //Ahampster

    if (command === `AHAMPSTER` || command === `HAMPSTER`) {
        message.channel.send(`??? - 2019\nBrutally murdered by a puff GIMR put on stream`);
    }


    //Animelover

    if (command === `AL` || command === `ANIMELOVER`) {
        var d1 = [`I know what you're thinking: "Do NOT lamb D1." Well guess what? According to my calculations that wasn't really calculated, I have decided that it is the appropriate time for me to make a hard read and lamb the fuck out of that person. I'm a lambing GOD, and I'm 99.9% sure this person is mafia. If not, that's okay cause I'll be dead anyways. I'm sorry if I failed you, town. 3, 2, 1.`,
                `Oh, just 🥩 succulent, tender 💦 HNG 💦 Just 🥩 Just a lil' 🥩🥩 I'm just preparing 🧂 That's it 💦 JUS'- 💦 Getting my 🐑 ready is all 🥩🥩 Oh JUST A BIT 💦 🧂🥩🥩🥩🧂 A LITTLE SAAAAAALT 🧂 SOME S-S-SPICE 🌶️🌶️ AHHHHHhhhhhh JUST 💦💦 GETTING MY 🐑🐑🐑🐑 ON 💯💯💯`,
                `rr bitch`,
                `im villi btw`,
                `♿ D1 LAMB COMING THRU ♿`,
                `eh heh.... sorry, didnt mean to fall on you and palm both of your double d sweater stretchers 😅`,
                `drop trou`,
                `you stoopid`,
                `what's nine plus ten`,
                `what's ten plus ten`,
                `oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo`,
                `br br deng br br deng`,
                `https://tenor.com/view/pakistan-mcdonalds-commercial-tails-gif-8861168`,
                `uh oh \nstinky`,
                `https://cdn.discordapp.com/attachments/566411042738143242/602660150599352320/IMG_20190715_065010.jpg`,
                `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
                `I sexually identify as the “I sexually identify as the “I sexually identify as an attack helicopter” joke” joke. Ever since u/Lazerc0bra posted 8 hours ago, I’ve dreamed of browsing reddit, shitposting on the unsuspecting comedy gods of r/copypasta. People say to me “oh for the love of god” and “please don’t let this be a thing”, but I don’t care, I’m meta as fuck. I’m having a plastic surgeon install an implant shaped like an upvote into my penis. From now on I want you guys to call me “leech” and respect my right to karma whore on a dead sub. If you can’t accept me you’re a normie and need to check your neckbeard privileges. Thank you for being so understanding.`,
                `Hello my fellow townspeople, it is me, slugbait. I regret to inform you that my role in this game is the Clown, which is actually quite ironic because it reflects how I am in real life, however it is a role belonging to the mafia. I do not wish to cause harm to the innocents in the town, so I would please ask if you would kindly lynch me on this day. Thank you for your cooperation.`];

        var r = Math.floor((Math.random() * d1.length));

        message.channel.send(d1[r]);
    }


    //Antiprompt

    if (command === `ANTI` || command === `ANTIPROMPT`) {
        var a = [`Mario`,
                `Mario`,
                `Luigi`,
                `Bowser`,
                `Peach`,
                `Princess Peach`,
                `Daisy`,
                `Wario`,
                `Toad`,
                `Yoshi`,
                `King Bob-omb`,
                `King Boo`,
                `Kamek`,
                `a goomba`,
                `Bowser Jr.`,
                `Waluigi`,
                `Donkey Kong`,
                `Toadette`,
                `Captain Toad`,
                `Birdo`,
                `Rosalina`,
                `Boom Boom`,
                `Dry Bowser`,
                `Petey Piranha`,
                `Piranha Plant`,
                `Toadsworth`];

        var r = Math.floor((Math.random() * a.length));
        var r2 = Math.floor((Math.random() * a.length));

        message.channel.send(`What if `+a[r]+` sex `+a[r2]);
    }


    //AskGoiter

    if (command === `GOITER` || command === `ASKGOITER`) {
        var g = [`It is certain.`,
                `It is decidedly so.`,
                `Without a doubt.`,
                `Yes - definitely.`,
                `You may rely on it.`,
                `As I see it, yes.`,
                `Most likely.`,
                `Outlook good.`,
                `Yes.`,
                `Signs point to yes.`,
                `Reply hazy, try again.`,
                `Ask again later.`,
                `Better not tell you now.`,
                `Cannot predict now.`,
                `Concentrate and ask again.`,
                `Don't count on it.`,
                `My reply is no.`,
                `My sources say no.`,
                `Outlook not so good.`,
                `Very doubtful.`];

        var r = Math.floor((Math.random() * g.length));

        message.channel.send(g[r]);
    }


    //Axe

    if (command === `AXE` || command === `EXA`) {
        var a = [`AXE WON SUMMIT!!`,
                `pizza time`,
                `69`];

        var r = Math.floor((Math.random() * a.length));

        message.channel.send(a[r]);
    }


    //Beywiz

    if (command === `BEYWIZ` || command === `BEY`) {
        message.channel.send(`Fuck I woulda thrown a whole ass lobster`);
    }


    //Bobby big ballz

    if (command === `BBB` || command === `BOBBY` || command === `BOBBYBIGBALLZ`) {
        var b = [`https://www.youtube.com/watch?v=_deBAhQ06zk`,
                `https://www.youtube.com/watch?v=zoSHfRDsptU`,
                `https://www.youtube.com/watch?v=36JUiqRnrXk`,
                `https://www.youtube.com/watch?v=WYnx2Ek4Prc`,
                `https://www.youtube.com/watch?v=9K5jy6kniIo`,
                `https://www.youtube.com/watch?v=xwDHs6UXgR8`,
                `https://www.youtube.com/watch?v=zYW4GuwM1uI`,
                `https://www.youtube.com/watch?v=OuiBt08DfPw`,
                `https://www.youtube.com/watch?v=ESJOMtWx6nI`,
                `https://www.youtube.com/watch?v=eKo0F67N3kI`,
                `https://www.youtube.com/watch?v=pR119f9OPho`,
                `https://www.youtube.com/watch?v=p8LVgqGtYXg`,
                `https://www.youtube.com/watch?v=mYgopUL8kk8`,
                `https://www.youtube.com/watch?v=PDNJv92TCjk`,
                `https://www.youtube.com/watch?v=4Y8rQ_0zNIg`,
                `https://www.youtube.com/watch?v=5_CvRhqzVqs`,
                `https://www.youtube.com/watch?v=27chz2nVVOY`,
                `https://www.youtube.com/watch?v=B8T_3OSUMxU`,
                `https://www.youtube.com/watch?v=LA9ZiSB3SU8`,
                `https://www.youtube.com/watch?v=QFW6gJ_PrzY`,
                `https://www.youtube.com/watch?v=Ryz1BPSzLNo`,
                `https://www.youtube.com/watch?v=tgZfCJxe6ZA`,
                `https://www.youtube.com/watch?v=OdviRuA3kQM`,
                `https://www.youtube.com/watch?v=rTkkWsy3qaE`,
                `https://www.youtube.com/watch?v=tY3hfmlbSGE`,
                `https://www.youtube.com/watch?v=ustkY-WRVYM`,
                `https://www.youtube.com/watch?v=YDQN7VB6NJM`,
                `https://www.youtube.com/watch?v=GTmk1lBemUQ`,
                `https://www.youtube.com/watch?v=oLQnyNRXMhw`,
                `https://www.youtube.com/watch?v=ujEBPu8zx7I`,
                `https://www.youtube.com/watch?v=rCTtDic8-Tw`,
                `https://www.youtube.com/watch?v=J-QQQz1gx5s`,
                `https://www.youtube.com/watch?v=G8g5RLhOA80`,
                `https://www.youtube.com/watch?v=hfmlb70RWmg`,
                `https://www.youtube.com/watch?v=reMz-Ya51XM`,
                `https://www.youtube.com/watch?v=ifdMF2eSSgQ`,
                `https://www.youtube.com/watch?v=c5zOpByvDZk`,
                `https://www.youtube.com/watch?v=Kg465SHnEG8`,
                `https://www.youtube.com/watch?v=ubHXS81Ylks`,
                `https://www.youtube.com/watch?v=5QOHPCDmqH8`,
                `https://www.youtube.com/watch?v=QWeFofvgVb8`,
                `https://www.youtube.com/watch?v=4G6fhb6IBS0`,
                `https://www.youtube.com/watch?v=RyBYSSsuWUo`];

        var r = Math.floor((Math.random() * b.length));

        message.channel.send(b[r]);
    }


    //Brio

    if (command === `BRIO` || command === `BRANDON`) {
        var b = [`You know what this reminds me of? TF2 rocket jumping...`,
                `BRANDON IS CRAZY! \n(brandon is brio btw, i can use his first name because we are tight like that. yeah i know top players but its whatever to me lol`,
                `BRANDON IS CRAZY! \n(brandon is brio btw, i can use his first name because we are tight like that. yeah i know top players but its whatever to me lol`,
                `You stupid bitch, you stupid fucking bitch, you stupid fucking bitch`];

        var r = Math.floor((Math.random() * b.length));

        message.channel.send(b[r]);
    }


    //Bubbles

    if (command === `BUBBLES`) {
        message.channel.send(`Best known for dying to a DBZ charge shot`);
    }


    //Cael

    if (command === `CAEL` || command === `KALE`) {
        var c = [`~~Still waiting on his b0xx. He'll be so good once he starts playing on it, you'll see.~~ \nNEVERMIND HE GOT IT WOOOOOOOOOOOOOOOO`,
                `The b0xx manifesto is only like half the length of Capital volume 1`,
                `Has switched mains 37 times this year and counting`,
                `thinks Kirby's Dream Course should've won the video game tournament`,
                `women my age are kinda low tier\nfucking someone so young would feel kinda pedophilic`,
                `was there a big armada/mango rivalry?`,
                `I think that listening to rage against the machine is the fastest way to improve short term as pichu`,
                `zizek really is just hegelfag lobsterman but his video where he rails against political correctness and how his black friends giving him the n word pass are useful for decoverting to be nazi imageboard users`,
                `ok`,
                `Doesn't know who Milkman is, despite Milkman being the 4th best player in his region`,
                `https://cdn.discordapp.com/attachments/612063946643472389/620757496352604202/unknown.png`,
                `I should do octo nut october\n8 times a day`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Cagliostro

    if (command === `CAG` || command === `CAGLIOSTRO` || command === `CAGLIO`) {
        var c = [`https://docs.google.com/document/d/13i9BclOxbtFM4yWVTI3vHBvlgBGyhTEVATd-B7hbLZ0/edit?usp=sharing`,
                `https://docs.google.com/document/d/1FHU80Z9xMjJxrXcx95V7Q3LCkU3Syt2CWLLyQYQN4qk`,
                `https://cdn.discordapp.com/attachments/598336899010003015/599294726817972231/image0.jpg`,
                `bug catcher baby driver wants to battle!`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Cha Cha Slide

    if (command === `CHA` || command === `CHACHA` || command === `CHACHASLIDE`) {
        var c = [`Yeah, do that stuff`,
                `I'm out here y'all, peace!`,
                `Aw yeah`,
                `Cha cha now y'all`,
                `Charlie Brown`,
                `Two hops, Two hops`,
                `Cha cha again`,
                `Reverse Reverse`,
                `Reverse`,
                `Left foot now y'all`,
                `Right foot now`,
                `One hop`,
                `Like it never never stop`,
                `Can you bring it to the top`,
                `All the way to the floor`,
                `Can you go down low`,
                `How low can you go`,
                `Come on y'all, check it out`,
                `FREEZE! Everybody clap your hands`,
                `Left foot again`,
                `Right foot again`,
                `Five hops this time`,
                `Let's go to work`,
                `Cris-cross!`,
                `Slide to the right`,
                `Slide to the left`,
                `Left foot two stomps`,
                `Right foot two stomps`,
                `To the left`,
                `Take it back now y'all`,
                `One hop this time`,
                `Right foot let's stomp`,
                `Left foot let's stomp`,
                `Cha cha real smooth`,
                `Turn it out`,
                `Now it's time to get funky`,
                `To the right now`,
                `Hop it out now`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Chandy

    if (command === `CHANDY` || command === `CHANMAN` || command === `CHANDYMAN` || command === `CHANCORE` || command === `CHANSTER` || command === `CHANDLER` || command === `CHANBLASTER` || command === `CHANBLASTERS`|| command === `CHANDYBLASTER` || command === `CHANDYBLASTERS` || command === `BLASTERS` || command === `MT64` || command === `TENNIS`) {
        var c = [`so yeah it's a tricky mix-up, but there are characters with the tools to mitigate its effectiveness and courts that invalidate bowser completely based on the match-up`,
                `again, the fact that there's no color trail on some of those top spin chance balls means that (against a human player), judging the right amount of charge to apply can be a total crapshoot`,
                `when he doesn't charge it enough, it goes out of bounds. if he charges too much, he'll hit the net. if he had better control and power, the sweetspot would be bigger, and there would be more semi-charge returns that would clear the net`,
                `and this is on a normal bounce strength court, bowser's best courts very on the match-up but he always wants high bounce. sometimes he wants a high speed court if he's playing against a weaker opponent like a speed type, but against a fellow power character he wants a slow court so that he's not totally incapable of chasing down angled shots`,
                `but if you give bowser the opportunity to move forward, he will just dismantle you at the net. all of the power characters have great reach but bowser is the second tallest character in the game, so getting around him if he manages to push up on the net is near impossible`,
                `if you don't constantly keep them moving around the court, they can set their feet and charge unreturnable smashes. it's much easier to do that if you're not on the backstep though, so you might be tempted to slice a lot to give yourself more time to recover and get back in the center of the court`,
                `even his medium strength shots have so much power that you can never be sure how to return them\nyour best bet is to play conservatively and that requires a technique character with mobility (like waluigi)\nbut more likely toad or shyguy in the current meta\nif the power character catches you out of position, it's really hard to take control of the pace of the volley from them`,
                `there's a very specific sweetspot for smashing a heavy topspin shot. uncharged or minimally charged and you'll get across the net, but it'll have too much hangtime and go OB\ntoo much charge and you'll muscle it down into the net`,
                `if it bounces with high spin, returning it with an overhead smash will result in a super shallow angle unless you have high control and power, and an even shallower return angle if you try a passing shot instead of volleying across`,
                `on a weak bounce court, this won't have as much of an impact, but on any other court,  you have to be super careful about how you receive a power character's topspin`,
                `this makes them very risky to return on courts with high bounce. bowser can hit a chance ball that looks like a perfect meatball jammed lob ("chance ball"), but lands with absurd spin.`,
                `in practice, this graphical quirk is mostly helpful for the extremely powerful characters on the cast\nbowser has to really swing on a fool to get a power trail, so a lot of his topspin volleys won't get a trail even though they're still travelling and spinning extremely fast`,
                `that's a nice serve that doesn't crack 60 mph, and his overhead smash is basically a drop shot disguised as a purple smash shot\nthat smash shot trail only appears because this boy is hitting close to his peak potential, even though in an absolute sense it's laughably weak`,
                `all that matters is that mario hits a powerful shot relative to what mario's potential power is\nhere's my meme character's stat loadout\ni don't know what's more disgusting, this build or the condition of my gba screen so you've been warned\nhttps://media.discordapp.net/attachments/542219115696226304/599760577258192897/image0.jpg?width=853&height=640`,
                `the particle trails do not appear at an absolute threshold of speed across the cast\nit's not like "if a shot is returned with slice and it exceeds 70 mph on the volley, then there's a blue trail"\nrather, the trail threshold is PROPORTIONAL to your character's maximum possible speed when returning a shot of that nature with the stroke they chose`,
                `Parents’ money\nWho the fuck else is going to a tennis academy run by Mario?\nIt’s canon in Power Tour’s storyline that your character is from the snobby rich kid academy\nSass, the working man’s tennis hunk, is from the Factory academy. Basically a technical school for dummies and COOLIES`,
                `The core mechanics of the “simple” rules have remained the same throughout pretty much every installment of the series and aces is no different.\nMy problem with Aces is that the roster is way too big and has too many tricky characters\n2 Tricky characters was the right amount. Boo and Paratroopa have tolerable, skill intensive gimmicks that still require you to have a grasp of the fundamentals.\nRosalina can frig right off with her dumb bull hockey.`,
                `https://www.youtube.com/playlist?list=PLV04ijEs_dq1hJCJXH1xmUV_WNJat5uQa`,
                `What makes the technique archetype hard to deal with is that they are very low power across the board, so they can often hit non-trailed weaker shots with tons of spin that are very visually indistinct`,
                `Just because you know what spin is on the ball, however, does not mean you’ll be able to anticipate where it bounces after the volley. The bounce happens right before your return shot, so characters with great spin stats (like Boo) will make you wait until the very last second to react appropriately.`,
                `Depending on where you’re positioned and whether or not it will be a forehand or backhand return, the optimal spin choice varies wildly`,
                `Overhead flat shots become smash shots with a particle trail\nOnce a stroke reaches a certain strength level (attained by charging, overhead positioning, or returning a stroke with a complementary spin type), it will gain the bright particle trail\nShots below this threshold only have a quick burst of particles`,
                `Topspin is orange, slice is blue, and flat shots are purple`,
                `You’ll see. I’ll upload some of the tennis lessons from the GBA game, they’re really quite interesting.`,
                `You guys just need to listen better and more\nAnd yknow, we USED to have a Mario sports channel\nIt wasn’t my choice to remove it`,
                `IT’S NOT RAMBLING\nIt’s not my fault I’m so good at explaining the core concepts of the game in great detail`,
                `That’s why handedness counterpicking is usually done double blind at the top of the set`,
                `Topspin serve is only optimal for 1/4 court positions\nFor the 3/4 others you need to mix up smash and slice`,
                `Now Sass... that boy’s a power factory\nHe’s got the second strongest smash serve in the game behind Bowser\nBut his slice serve is actually a bit faster than Bowser’s\nIf you’re playing righty then slice serves are the real workhorse`,
                `Y’know, Marth is actually in the Mario Tennis GBA game`,
                `IT’S A GREAT GAME WITH TONS OF NUANCE`,
                `cagliostro9 Last Friday at 12:15 PM: Chan we all know it’s real it’s just a good 60% of the chat doesn’t give a shit\nChandy Last Friday at 12:15 PM: Well I’m just going to have to keep explaining it until that 60% goes down to 0%`,
                `You guys act like I’m just making this shit up but it’s almost all supported by canon`,
                `I’m serious, the GBA and GBC games do an excellent job about teaching you good tennis stratagems`,
                `the GBA game is heavier on the instructional content and plot, so it's better as a self contained game. GBC is closest to N64 mechanically, but only very slightly. both are good introductions.`,
                `Wii VC is the most modern faithful release of the game. Wii U VC is more recent, but Wii U VC was significantly worse than Wii\nlaggy and bad color reproduction, like all Wii U N64 VC games`,
                `these guys really hate it when i talk about MT64 in huge walls of text, so you're always welcome to DM me if questions arise`,
                `and even then, my edited save is customized to polarize the lvl99 characters according to min/max instead of highest overall stats\nso alex is the speediest possible speedster, harry is the strongest he can possibly be etc`,
                `there would have to be a standardized stat and equipment loadout and everyone would have to download that special edited save\nthey're great for practice because you can customize them to have any set of broken stats though, so if there's a particular playstyle you struggle against you can optimize them towards that\nkind of like early amiibos in a way, since they gain EXP from being used in both games`,
                `after the top tiers, there are certain characters who can kind of hang and are soft counters on counterpick courts\nParatroopa is probably the worst character you can solo main on any court\nParatroopa, Toad, Shyguy, and Bowser are viable in certain match-ups with the right court`,
                `Waluigi is considered unviable against any speed character and baby mario and yoshi are some of the most popular, so RIP me`,
                `Mario, Luigi and the Princesses are too unspecialized to be worth using, mostly just good beginners characters`,
                `some people like to argue birdo is close to viable but she's the "technique" favored speed character so she's kind of saddled with the worst set of attributes\ni think she's the worst in the game because her niche isn't really good against anyone, but some people think speed is everything`,
                `DK runs into the same problem where he's the technique favored power character, but he's not as hopeless as birdo`,
                `the problem is that power characters get most of their mileage off the serve and early strokes so if you wanted a really good serving character with great shot placement, you'd just use boo and make up for a lack of raw power with broken serve gimmicks`,
                `playing the GBC game is actually a really good introduction to the core concepts of the meta and how it differs from IRL tennis in its unique and quirky ways`,
                `SS tier characters are wario and baby mario\nthe fastest power character and the strongest speed character, respectively\nS tier characters are boo, yoshi and DK Jr`,
                `the curse of bowser is that you're slicing all the god damn time to slow down the pace of the volley\nsince you have no mobility, you need the most time to get into a good position to anticipate a return\nso you have all the power in the world but you only really get to use it on the serve and the killstroke`,
                `i don't mean to imply that they are unga bunga, that's just a meme\nyou have to be really smart about spin choice as power characters`,
                `shy guy is sick. he's my secondary but he and waluigi play super different`,
                `i prefer technique as an archetype though, since the baits are my favorite part`,
                `honestly the secondary that would help me most is DK Jr, but i don't want to pick up an unga bunga power character`,
                `too many gimmick characters in aces\nthe two tricky characters in MT64 are very cool at top level\nshy guy should be considered a tricky character, although his gimmick is more like a core concept of his character\nrather than just a weird attribute or two like boo and paratroopa`,
                `it's a semi popular speedrunning game too, so mostly we congregate in the in the series wide mario tennis discord`,
                `they're legitimately good practice\nthey hit reactions that human players almost never do\nthat's why it's super hard to beat them at the net`,
                `it would have been a much more dominant performance if i had used the best technique character`,
                `i had to make several reads in that match\nseveral of them were unsuccessful reads too\nthe return game does not start off pretty`,
                `get overpowered on a top spin serve that forces me out of the flank, then i have to scramble back to midcourt but position myself somewhere to react to his return on the meatball i just gave him`,
                `i stopped my dash short so that i could react to the trajectory of where it would go if he had top spin smashed it, but then he hit a flat shot down the diagonal. if i had kept running i could have returned it but I had to guess\ntextbook unsuccessful read`,
                `the exact same situation happens at 2:08, and i don't cover that same angle down the diagonal\nthis time i run in that direction but decide to snake back to the left in case he goes for the mix-up and hits a straight shot down the left sideline\nagain, i guess wrong but this time i get lucky and he smashes it out of bounds`,
                `i wanted to show why waluigi conceptually struggles with speed characters`,
                `he's a max CPU on the best speed character in the entire game\nhe can read my controller inputs!!!`,
                `there are 50/50s i just have to take`,
                `of course not\nyou're fighting for your life in this match-up\ndid you not notice how conservatively i had to play on the returns?`,
                `when i saw that he didn't react well and push up on that slice, i knew i could put in the drop shot and push to the net`,
                `technique as an archetype is supposed to lose to speed anyway but i'll be damned if it isn't the paper in this rock paper scissors conundrum`,
                `i just realized that's an indirect endorsement of netplay\nlet me just clarify that this is not the position i hold whatsoever.`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Chillindude

    if (command === `CHILLIN` || command === `BIGCHILLIN` || command === `CHILLINDUDE` || command === `MYB` || command === `CHILLINDUDE829` || command === `CHILLINDUDE82MUCH`) {
        var c = [`I'm not lawful, make this pussy stop talking`,
                `You're not one of the gods, you're one of the god-awfuls`,
                `We all gawkin' when looking at your Fox`,
                `Bitch, stick to Smash 4 and losing by four stocks`,
                `Not a fan of your style`,
                `You ain't standing your ground`,
                `Get wins while kicking a man when he's down`,
                `Like, "I beat Mango, I'm the favorite if he chokes! As far as Armada goes, I'll just wait 'til he's a host."`,
                `Ain't no telling how foolish you'll be lookin'`,
                `Evidence.zip can't contain the ass whooping`,
                `Right when we realize the money match is over`,
                `That'll be your cue to throw your controller`,
                `Expose you as a fraud yeah I'll be blowing you up`,
                `Who said you were a god?`,
                `I know it wasn't Plup`,
                `Been here ten years and you know I'm showing up`,
                `For a man of many words, I think you've said enough`,
                `But, the only way to make you hush`,
                `First I'll body bag your Fox then .zip it shut`,
                `'Imma put you in your place kid, you a disgrace`,
                `Get killed quick like that missile hit you in the face`,
                `After all of this you'll be watching your mouth`,
                `Ain't no telling who'll be calling you out`,
                `Salty Suite goes down, you better come correct`,
                `Until you win a major show your elders some respect`,
                `P.S. Leffen, I ain't done yet`,
                `I'm the underdog so place your bets`,
                `Whoever want to see Leffen looking dumb`,
                `Throw your money on the line cause I'm making some`,
                `Gotta say bro you're looking awfully weak`,
                `Wait and see what happens at the Salty Suite`,
                `Vanilla Fox don't suit you so go find another`,
                `Teach you a lesson and take back my color`,
                `Stepping to Mike, repping it right`,
                `Killing in dubs like Leffen and Ice`,
                `Losing to Eikelmann, guessing you aight`,
                `Talking to Hugo, you stepped in the fight`,
                `Yo, Mike's not even ready for that though. Check it.`,
                `Your boy, Liquid Chillin, flows smooth as ice`,
                `I smell bullshitting, that must be Mike`,
                `When I start spitting, why, it sounds so nice`,
                `Your frees prewritten, that's that shit I don't like`,
                `Mike always having trouble staying on the beat`,
                `And he having trouble playing Connor's Sheik`,
                `Damn, gotta say you looking awfully weak`,
                `Screaming getting wobbled, only time I hear you speak`,
                `I guess they sponsor people now for being a choker`,
                `You went from Brawl to Melee, still mediocre`,
                `FatGoku ain't the the hard part, took your ass to game 5`,
                `Maybe with a smart Marth, you could have beaten BladeWise`,
                `Gotta keep it real, you know it's all love, bro`,
                `No way you can beat me if you're dropping sets to Spud though`,
                `Trying different angles, man, stick to one`,
                `Yeah I got 5-0'd, you lost 6 to n0ne`,
                `P.S. Mike, I ain't done yet`,
                `Why we still waiting on your top 8 set?`,
                `Yep, it looks like you got a nice stream`,
                `But why I get more viewers on my BRB screen?`,
                `Please keep it fresh man, 9th getting old`,
                `No one catching on like when Ice read your roll`,
                `This the only time that you get to be on stage`,
                `And I don't play Jiggs, but I rest my case`,
                `Yo Hugo? That's my dog... But I gotta hit a sub goal tho`,
                `It's been a while, it's time for a new flow`,
                `I'm Chillin, that's too cold, I'm taking a shot at Hugo`,
                `How in the fuck you still losing to Drephen`,
                `It's truly upsettin', I've been stomping that dude since '07`,
                `And we got Faceroll, HAT, Alex and ChuDat`,
                `I'm leavin' them dudes flat, you can't even do that`,
                `Don't get me wrong we ain't talking bad players`,
                `But you can't even sleep without nightmares of YAYUHZZ`,
                `Pull it back, hit you with the slow flow`,
                `Make the comeback like two stocks with SoPo`,
                `Get back to labbing if you spent some time playing it`,
                `You might stop losing to Falcon and maybe even to Ganon`,
                `I still have faith, get back to the big stage`,
                `Before that you gotta learn to beat KJH`,
                `Why you out here making cakes of my face`,
                `Try beating Tafo, that's a piece of cake`,
                `Kira and Reno, why they still bop you`,
                `My man still out here losing to Gahtzu`,
                `HugS this year looking real shaky son`,
                `How many Ganons you beat lately? n0ne`,
                `You need to reflect like Alex19`,
                `Maybe even need to practice on your stream`,
                `I think all that BrainGear's bad for your head`,
                `Why the fuck you on camera shavin' your legs?`,
                `Shit gettin' heavy man, I feel kinda bad`,
                `Maybe I should stop... Nah, fuck that`,
                `Ready to go in, man, gimme the drop`,
                `HugS whole year been getting bibbity bopped`,
                `Can't say I expected it, it's really a shock`,
                `That Samus so sloppy, man gimme a mop`,
                `Guess you can't teach an old dog new tricks`,
                `Who hasn't whoopedu hugs86?`,
                `Placing 9th at locals, he must be feeling free`,
                `But HugS will be fine, he got Social Security`,
                `At this point, I guess it's pretty clear`,
                `HugS really wishin' it was back to last year`,
                `Maryland-Virginia, we fill his heart with fear`,
                `Might be bad at Smash but at least he knows his beer`,
                `P.S. Hugo, I find it kinda odd`,
                `Got swept by SmashG0D, got swept by lloD`,
                `Couple bad losses, maybe coulda shook it off`,
                `Unranked Falco? That's Far from a good loss`,
                `20th rank, but your skills might be fadin'`,
                `My man lost to Plank, yeah that rank is outdated`,
                `Might be top 50 but I'm tryna be nice \nAccurately speaking maybe 129th`,
                `Das my dawwwwwg`,
                `Dag mah, the heck?`,
                `https://cdn.discordapp.com/attachments/611202965558132747/622237508276584458/local_man_claims_to_have_evidence_of_The_Sasquatch.jpg`,
                `https://cdn.discordapp.com/attachments/611202965558132747/622237622206464030/oh_i_am_leffin.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236526742601729/1545247849891.png`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236598150365193/B_L_A_C_K_E_D.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236644153491524/big_chillin_breaks_the_stream.webm`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236737002799124/chillin_buttstomps_the_stream.webm`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236804178771968/chillin_dab.webm`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236874987143208/chillin_is_hungry.webm`,
                `https://cdn.discordapp.com/attachments/608818247877525526/622236900312350760/Chillstar_Depths.jpg`,
                `My B`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Coffee

    if (command === `COFFEE` || command === `SDDL`) {
        var c = [`you hate to see it`,
                `you love to see it`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Coriamon

    if (command === `CORI` || command === `CORIAMON`) {
        message.channel.send(`Go to GOML.`);
    }


    //Cuck Daddy

    if (command === `CUCK` || command === `CUCKDADDY`) {
        var c = [`I *told* you to stop drinking alone, Ciaran!`,
                `Go get some friends, Ciaran!`,
                `Get off Grailed and go outside, Ciaran!`,
                `Stop wobbling people, Ciaran, that's mean!`,
                `Pick a cooler character, Ciaran!`,
                `https://tenor.com/view/ariana-grande-gif-10730095`,
                `https://tenor.com/view/applause-clapping-gif-5833390`,
                `https://tenor.com/view/clapping-batman-joker-heathledger-clap-gif-5026817`,
                `https://tenor.com/view/minion-minions-clap-clapping-gif-5135454`,
                `https://tenor.com/view/eyeroll-annoyed-ugh-whatever-stanley-gif-4305664`,
                `https://tenor.com/view/antm-americas-next-top-model-miss-j-jalexander-omg-gif-3720930`,
                `https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866`,
                `https://tenor.com/view/mario-luigi-peach-melee-smashbros-gif-9370432`,
                `https://tenor.com/view/clapping-gif-5898697`,
                `https://tenor.com/view/drake-clap-fan-cheer-basketball-gif-4893625`,
                `https://cdn.discordapp.com/attachments/612325624203182085/613169424601448485/IMG_20190819_173556.jpg`,
                `https://tenor.com/view/iwould-like-to-see-it-smug-meme-monique-gif-13196153`,
                `https://tenor.com/view/kermit-tea-sip-gif-4973668`,
                `https://tenor.com/view/hmm-oops-dang-okaythen-kandi-gif-4596607`,
                `https://tenor.com/view/girl-sure-jan-sarcastic-brady-bunch-gif-11590179`,
                `PM is for weiners, Ciaran, play Melee!`];

        var r = Math.floor((Math.random() * c.length));

        message.channel.send(c[r]);
    }


    //Darsh/Stephen

    if (command === `DARSH` || command === `GANON` || command === `GANONDORF`) {
        message.channel.send(`My advice?\nGo to the gym.`);
    }

    if (command === `STEPHEN`) {
        var d = [`navigating a shitty maze slowly.`,
                `playing a game just to be able to argue about it with your friends.`,
                `a big maze of right angles instead of levels.`,
                `The Hollow Knight being gay the whole time.`,
                `being a slightly worse Metroid.`,
                `not moving in the Z-axis.`,
                `regressing from Dark Souls by removing an entire dimension.`,
                `everything Darsh says being right.`,
                `not having any control over the way you play.`,
                `going through a place that actually exists and has a history.`,
                `exploration that isn't even exploration.`,
                `all the rooms looking the same.`,
                `checking your map for open doors and going to them.`,
                `no one being online to play netplay with you instead.`,
                `dinosaurs.`,
                `polish and mechanical innovations still not making metroidvanias any better.`,
                `metroidvanias sucking my dick.`,
                `being the literal best game of all time, as decided by some group of nerds.`,
                `telling your friends your enlightened opinions.`,
                `wasting your money and time.`,
                `convincing all of your friends to play a shitty game.`,
                `being a metroidvania for marth mains.`,
                `being such a safe space that not even the gameplay can get you.`];

        var r = Math.floor((Math.random() * d.length));

        message.channel.send(`Hollow Knight's a game about `+d[r]);
    }


    //Diminnuendo

    if (command === `DIMI` || command === `DIMINNUENDO`) {
        var d = [`Who knew New Jersey had a botched foreskin problem?`,
                `im gay`,
                `im gay`,
                `im;gay`,
                `FUck youj`,
                `h`,
                `hhhhhhhhhhhhhhhh`,
                `im going to kiss timcord! \nmwah`,
                `hellyeahj,`,
                `/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////`,
                `im gay`,
                `**diminnuendo** is typing...`,
                `https://media.discordapp.net/attachments/612058753293877274/614814529641250816/ezgif-4-3e8037e6fc2f.gif`,
                `im@gay`];

        var r = Math.floor((Math.random() * d.length));

        message.channel.send(d[r]);
    }


    //DJ Nintendo

    if (command === `DJ` || command === `DJNINTENDO` || command === `DJMUTENDO`) {
        var d = [`KICKS`,
                `SCHLICE`,
                `Yup! That's a thing!`,
                `NOOOOOOOOOO DEEEEE EEEEEEYYYYEEEE`,
                `YO he hit him the Papaya Smack`,
                `Yo so he could've opted for a downsmash and covered everyhting there`,
                `Yo Mango is SCHMOOVIN right now`,
                `Yo Hax is OD right now`,
                `Yo Hax is SCHMOOOOOVIN`,
                `You know docs nair is stronger the longer it's out`,
                `*amsa DJ armor's through a Fox nair* \nGreat parry by amsa there`,
                `Yo what's cool about FD is that there's no platforms`];

        var r = Math.floor((Math.random() * d.length));

        message.channel.send(d[r]);
    }


    //Draconitix

    if (command === `DRACO` || command === `DRACONITIX`) {
        message.channel.send(`wanna do netplay`);
    }


    //Drew

    if (command === `DREW` || command === `ZMWIVD`) {
        var d = [`SubF`,
                `SubjectiveF`,
                `Sub`,
                `ADLP`,
                `anime lover`,
                `Antiprompt`,
                `Brio`,
                `Cagliostro`,
                `Chandy`,
                `Coffee`,
                `Cuck Daddy`,
                `Darsh`,
                `dimi`,
                `Drew`,
                `Zimmy`,
                `Zmwivd`,
                `Zimwit`,
                `Draco`,
                `DuckNumbers`,
                `Cael`,
                `Loscar`,
                `midnight`,
                `Rognut`,
                `Silver`,
                `Struc`,
                `Sugden`,
                `Winnarly`,
                `Wub`,
                `Risc`];

        var r = Math.floor((Math.random() * d.length));

        message.channel.send(`No matter how you try easing people in here, they're gonna meet `+d[r]+` at some point.`);
    }


    //Duck fucking numbers

    if (command === `DUCK`) {
        message.channel.send(`*Watch this.*`);
    }

    if (command === `DUCKNUMBERS`) {
        message.channel.send(`quack`);
    }

    if (command === `DUCKFUCKINGNUMBERS`) {
        message.channel.send(`**DUCK** \n**FUCKING** \n**NUMBERS**`);
    }


    //GIMR

    if (command === `GIMR`) {
        var g = [`Greed Is My Reason`,
                `offline`,
                `offline`,
                `still offline`,
                `https://cdn.discordapp.com/attachments/612058753293877274/612091314770673675/gimr_lol.jpg`,
                `GIMR Is My Rock`,
                `GIMR Is Melee's Richardnixon`,
                `Glock In My Rari`,
                `Gayness In My Rectum`,
                `Get Ingots, Melee RIP`,
                `Garbage Idiot Making Ruin`,
                `Goal: Invalidate Melee's Relevance`,
                `Get In My Rump`,
                `Gold Is My Reward`,
                `Gosh, I'm Mad Retarded`,
                `Gets Impotent Meleestream Routers`,
                `God's In My Rectum`,
                `GIMR Instinctively Murders Rats`];

        var r = Math.floor((Math.random() * g.length));

        message.channel.send(g[r]);
    }


    //hungrybox

    if (command === `HBOX` || command === `HGOD` || command === `HUNGRYBOX` || command === `HJESUS` || command === `CLUTCHBOX` || command === `CLUTCHGOD` || command === `JUANTRUEGOD` || command === `HGAWD` || command === `HLEGEND` || command === `HBITCH`) {
        var h = [`I was really disappointed to see everyone in the chat and the crowd at CEO yelling “fuck hbox”. Say what you want about his character, hbox is a smart player. You don’t achieve the title of #1 by being a braindead player who sticks to one gimmick. There needs to be more respect for Hbox as a person. Right after the Axe vs. Wizzy grand finals at Smash Summit 8, when Hbox presented Axe the 1st place award, Hbox begins a heartfelt speech to Axe by saying “you know, I won this award last summit..” and starts breaking up. Immediately, Twitch chat starts saying “wow typical hungrybox making it all about himself.” Its absolutely amazing how everyone automatically assumes the worst and has never bothered to give the benefit of the doubt. If you go back and read /u/iamhungrybox comment on the Mango ama from 5 years ago, it’s really very awful how he’s been vilified in the community. Reminds me of Ken when he decided he wanted to retire. Everyone was rooting against him because he was the best, and he couldn’t handle the pressure. It’d be a fucking shame to see a talent like Hbox do the same. \nHbox if you see this, you’re fuckin sick at melee. Play the game for as long as you want to, but never feel pressured to keep going if its unhealthy. The internet and these communities suck ass when it comes to recognizing the pressure people in your position are in and the shit you’ve had to endure to get to where you are. \nYou’re great, man. Keep it up, proud of you.`,
                `Puff fucking sucks. I never wanna hear any shit again from any Fox player complaining about Puff. Like suck my fucking dick if you think - no, honest to god - if you think, if you think, if you think, if you ever complain, if you're a Fox player and you ever complain about Puff, you need to reevaluate where you fucking stand. Because like, come on dude. That shit is not easy. Are you kidding me? I die from a grab up-throw up-air at like what, 45 on Yoshi's? If I land a rest on a platform, on a side-platform, at 32 percent I'm fucking dead? And people are giving me shit? Come on now, dude. No! No dude. I just got like wobbled. If you're gonna play this character with this infuriating infinite and I'm so done with ICs, oh dude, I just want, I hope every single game from here on out goes to 8 minutes. I hope every single time. And I'll taunt the fuck out of Sopo, every single time. I'm just, I'm so done with it, you know.`,
                `Fuck this community man. All you guys ever do is look for ways to give me shit over any tiny thing. All 12 years of me playing Melee has been full of it. \nI’m literally mocked by my peers, my competitors, and community figureheads on a daily basis. \nLike what’s the point anymore`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613460838740787200/image0.jpg`,
                `For being the best player in the world, you're pretty immature. I think it's dumb you didn't even shake my hand after I beat you at NCR or even opt to take a picture with me and PPU for the results thread. \nMaybe I'm just bitter that you single-handedly turned an entire community against me and used your popularity to defame me and give people a completely wrong idea of me. It's weird that people on facebook still message me saying, "Dude you're actually a really nice person, everyone told me you were an asshole or something lawl". \nNow you've got the community in an even greater hold with your cult-esque fervor we call Mango Nation. You're the only person who can literally ride his own dick and people encourage you even more when you do it. If I was to even say a tenth of the self-promoting claims you make online, I'd have a brigade of hate lined up on top of the massive amount I already do. \nI don't have to go into how you treated me when I housed you and picked you up from the airport and the degrading and disgusting stuff you did and said about my mom. You think I don't remember? Not to mention saying similar things about my now ex-girlfriend. I really wanted to sock you in the fucking face so many times. \nBut I wouldn't stoop to that level. \nThe reality is, and the worst part is, that I have too much respect for you as a player. You've taken my favorite game and past-time to new levels and you constantly awe me with your advancing of the Melee meta-game. It keeps me on my feet and encourages me and countless others to keep playing. Everyone knows that, and no one can take that away from you.`,
                `I have applauded your victories at EVERY tournament we've both been at. Every last once. I've shaken your hand and applauded you even after our sets. Even after Genesis 2, when you taunted me Game 3 as you were approaching a 4-stock on me. Even EVO, with the world watching. I took the approach of the bigger man, in hopes that maybe it would inspire you to do the same. And I was very wrong. \nThe thing is, now that the entire fighting game community knows of you, you have all the leverage you need to get your points across. You're the end-all for knowledge of the game and community. \nYou've gotten better about your attitude towards me, at least subtly. With Armada retired and with our tournament records in full display, I'm ranked #2 or #3 in the world behind you. Even still, you make it seem like I'm a joke for ever playing this game. \nAll I'd like is for you to just stop this nonsense and have at least an ounce of sportsmanship towards me. It's the least you could do after some of the things you've put me through that I won't mention. And don't just label off your actions as jokes. Yeah, you're a funny guy. But it's not nice being on the end of the stick for four years. \nMan up and be the representative this community actually needs.`,
                `https://cdn.discordapp.com/attachments/612058753293877274/612090137337397319/traitorcheck.png`,
                `https://cdn.discordapp.com/attachments/567417652331413544/610957102453751809/unknown.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/610566498137800747/JPEG_20190812_131107.jpg`,
                `I was gonna do celebration stream, but uh, I thought it would be funnier if I created a new category on Twitch, called "DAN". So, "Doing Absolutely Nothing". So, if I was to go on Twitch on Tuesday, sit in front of my TV screen and literally absolutely nothing except stare in the webcam, for 3 hours, I wonder how many viewers that would get? Can we make a, new catgory? Can we make it uh, DAN? So if anyone wants to see me- if anyone wants to see me DAN on Tuesday, I think I'm gonna do it`,
                `Y'know my goal here wasn't actually to win. It was for me to, uh, try, making friends again, with the top players in the community. It was like, for me to stop being the guy to talk so often and actually listen a little more. Honestly the best thing you can do for yourself I don't care what you do, just let go of your damn ego.`,
                `hbox hit my car and laughed and when i tryed to call triple a he snapped my phone in half and yelled "LETS FUCKING GO"`,
                `Someone asked me "like, great win, but why do you get so angry when that happens?" And I said "It's probably unhealthy, but I treat eveery single game here like life or death". Like I treat it like there's a revolver behind my head, and I have to win.`,
                `Also this whole "ban wobbling" argument, w-when's the last time ICs won a supernational? I-I'lll wait. I can't think of one actually. It's weird that we wanna ban the 8th best character's number 1 tool to actually win, it's kind of strange to me. No-one likes getting wobbled - I hate getting wobbled, but if you are that salty that where everytime you get wobbled, if- every time you get wobbled, maybe don't get grabbed, don't get set up, maybe just get good for once in your life and actually stop blaming the fucking character.`,
                `I'll tell the story. I was just a fan who was excited to meet and challenge Hbox to a $5 puff ditto best of 5 on dreamland. In the middle of game 1 he punched me in the liver and walked off with my wallet and JP White controller. Now I have to play melee through a straw.`,
                `I told hbox it was nice to meet one of the best players in melee. He said "one of the best"? and started crying and popping off for some reason.`,
                `PC is a \_\_\_\_\_\_\_\_\_\_`,
                `hbox is p cool honestly. the last time i asked him for an autograph he didnt even spit on me like all the other times. i was discreetly escorted out of the venue by the security detail in his liquid entourage and given a coupon for 10% off liquid merch(pretty sweet!!)`,
                `I was actually a mod on Hbox's twitch for a while- I met him at the Evo pool party and offered to buy him a drink, after I handed him the drink he turned his back on me mid-sentence and started talking to crunch instead`,
                `I saw Hungrybox at a grocery store in Los Angeles yesterday. I told him how cool it was to meet him in person, but I didn’t want to be a douche and bother him and ask him for photos or anything. \nHe said, “Oh, like you’re doing now?” \nI was taken aback, and all I could say was “Huh?” but he kept cutting me off and going “huh? huh? huh?” and closing his hand shut in front of my face. I walked away and continued with my shopping, and I heard him chuckle as I walked off. When I came to pay for my stuff up front I saw him trying to walk out the doors with like fifteen Milky Ways in his hands without paying. \nThe girl at the counter was very nice about it and professional, and was like “Sir, you need to pay for those first.” At first he kept pretending to be tired and not hear her, but eventually turned back around and brought them to the counter. \nWhen she took one of the bars and started scanning it multiple times, he stopped her and told her to scan them each individually “to prevent any electrical infetterence,” and then turned around and winked at me. I don’t even think that’s a word. After she scanned each bar and put them in a bag and started to say the price, he kept interrupting her by yawning really loudly.`,
                `I used to work at a sears and hbox came in to buy a memory foam mattress and he paid for it entirely in dimes and twitch bits that only work on his channel`,
                `i read a rumor that hbox went to a cfl local with the flu once just so he could shake colbol's hands and infect him`,
                `at smash n splash i went in the bathroom and someone was taking forever and it smelled AWFUL and who else comes out of the stall but hbox. his shit smelled so bad i legit went in another bathroom instead`,
                `heard Hbox literally sees Jiggs backair as a metaphor for his penis and imagines himself pounding furry fox buttholes for days`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284515256041492/1522006502236.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284791014883329/HGOD_DABS_ON_THE_FOX_MAINS.jpg`,
                `Hbox was behind me in line at Chick-Fil-A a few months ago. I was just waiting to be served when I heard some commotion behind me. I turn around to see Hbox walking in the door. "Hey, do y'all mind if I cut to the front of the line? I'm kind of in a hurry." Of course everyone agrees and he walks up to the counter. He orders 20 fucking chicken sandwiches. 20. I was still in shock from seeing him, but I try and strike up a conversation while he waits for his food. \"S- so, how do you feel about Chick-Fil-A and the gay rights controversy.\" He turns to me and says \"motherfucker, I come here BECAUSE I hate the gays!\" I'm stunned as the cashier brings Hbox his food. He picks up the tray, slams it on the ground, yells \"CLEAN IT UP\" at the cashier and walked out.`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284902365003776/who_will_stand_up_to_this_man.png`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284756407681046/dedbox.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284717492928532/hbox_gets_redpilled.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284695912972328/hbox_boomer.png`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284654594883586/hbox_daberoni.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610283520522190861/maxresdefault.png`,
                `The "H" in Hbox stands for Harvey Weinstein`,
                `I use a B0XX so hbox doesnt meta read my DI`,
                `https://cdn.discordapp.com/attachments/542142763693768731/610270280685977613/EBuoEXdXoAEJXdF.png`,
                `Every single tournament Hbox wins, I always immediately check these threads to read every angry post. It's like crack to me. I can not get enough of this. \nIt's like you people don't realise just how amazing HungryBox really is at this game. \nYou are so simple-minded that you can't fathom that ''muh tech skill'' isn't all that Melee has to offer. Hbox has a deeper understanding of the game than any other player. His spacing and mindgames are simply off the chart when it comes to pure depth. \nAll these people playing literally the most OP character in the game can't do shit against Hbox's smart play. He's literally picking all of them apart and doing so much mental damage that they start second doubting themselves and throwing games. That's some powerful play. \nI love watching Melee. Not only do I get to see my all-time favourite player destroy everyone, but I also get to see you faggots bitch and whine about what's essentially a mid tier. Keep crying though, but it won't change anything. \nGood games, Hbox! Will be rooting for you next time as well. Not that you'll need it. Wouldn't expect anything less from the #1 ranked Melee player!`,
                `And this weekend a miracle happened. I sat down to play Armada, I blinked, and my goal was suddenly behind me. A glass trophy in my hand with the official title written on it. Cameras flashing. Overwhelming emotion, disbelief, euphoria, and relief. Out of nowhere I played the best I have in my life while coming from losers. \nThe outpouring of congratulations I received was more than I ever would have imagined. It was a very beautiful experience to get to have that. And for that I'm very thankful. \nHowever, as expected there were some communities that don't see eye to eye on things. Like this subreddit, half of CFL Melee (my home community), and many others. And that's alright. That's reality. \nI'll never really understand why certain people don't realize what I put into this game. It might be the character I play. It might be my polarizing personality. But what I've learned is that you really can't focus on these things if you want to win. When I was on that stage I fell in love with Melee all over again. Just like I did when I attended my first very tournament in Florida and got 2nd to last place out of 40. \nI've had very difficult times reading things on this subreddit about me, but after this weekend I'm ready to move on from it. I proved to the world what I wanted to prove. I know I won't be able to change minds now or ever of that many people. But I respect your opinions and I encourage you to have them. I simply think it would be healthier for me to distance myself from it to continue performing at the level I want to. \nKeep playing Melee, keep cheering on your favorite player. Just love this game always. It's the best thing that's happened to me in a lot of ways, and I hope it's the same for you. \n-hungrybox`,
                `Every time Hbox pulls through, and he does every time, I always make sure to check these threads immediately. You virgins are the source of some premium salt. \n \nKeep in mind that Hbox is playing Jigglypuff, essentially a mid tier character, in a meta where 50% of all top 100 players are maining Fox, which is Puff's absolutely worst MU sitting at 70-30 in Fox's favour. You're all just fucking scrubs who can't accept that HungryBox is the single best player to ever have touched a GC controller. This is undeniable facts at this point. \n \nNo one else has managed to prove again and again that my skill reigns supreme. Year after year of consistent wins over every single opponent. Taking tourney after tourney. \n \nStay mad, bitches. He'll keep winning.`,
                `Hello /r/ssbm, \n \n I've read many, many, many things on this subreddit. A lot of them make me wonder about the backgrounds you all have had in competitive melee. My assumption is that most of you have at least attended/participated in one tournament and that you know a good bit about the history of the game. \n \nIf you have competed in the game, you're aware of what it's like to be in a hot seat. To have to think on the spot, adapt on the fly, cope with horrible losses, deal with salt, etc. \n \nMost of you (I think) understand what Melee is at its core. A phenomenal, unfathomably deep fighting game unlike any that's been created. It's why we love it and analyze it and have it as our passion. \n \nI've been competing for 10 years now. A lot of things have changed in this community. We almost didn't exist at one point when Brawl came out. We all had to pull a lot of weight to make sure we weren't forgotten and it's beautiful to see where we've gotten today. \n \nOnce Melee became a thriving, living community again it was a good time for me to focus on my own gameplay and not just the growth of the community. From 2013 to 2016 was probably my biggest era of growth both as a person maturing and as a Melee player. I obtained some much-needed discipline and learned more about myself from every event I attended. \n \nI yearned for the World Title. A massive goal for myself. And goals are something everyone here has - whether it's in Melee or outside of it. So I did everything I could to obtain that goal as soon as possible. I prioritized Melee for a summer, I got my best friend to be a sponsored coach for me, I became active in the Netplay community; Hell, I even took any chance to spread memes or information on social media about Smash. Because I love the community and I love what its given me.`,
                `You know what, I admit it: I don't like HBox. At a fundamental level, I know it's not rational, but let me tell you what I do know: I don't like it when his slow, broken character dunks on my favorite players and kills my excitement. I don't like it when he grandstands during interviews and looks so fake and disingenuous. I don't like it when I have to watch everything I find awesome about this game get back-aired off stage or up-tilt rested time an time again until I don't feel anything anymore`,
                `Yeah hfam we did it XD I'm literally DABBING on ALL the hbox haters in chat with my HFam right now LOL!`];

        var r = Math.floor((Math.random() * h.length));

        message.channel.send(h[r]);
    }


    //iBDW

    if (command === `IBDW` || command === `CODY`) {
        var i = [`i Be Destroying Waterclosets`,
                `i Blow Dude Weiners`,
                `i Binge Drink Weekly`,
                `i Bang Dudes Weekly`,
                `i Be a Devil Worshiper`,
                `i Be Defeating William`,
                `i Be Doin Weed`,
                `i Be Doin Weeeeeeeeeeeeeeeeeeeeeeeeeeed`,
                `i Be Drinkin Water`,
                `i've Been Defeated. Wack`,
                `i Butcher Dirty Whores`,
                `i Bone Dopey Women`,
                `i Beat Defenseless Women`,
                `i Bully Defenseless Whiteboys`,
                `i Be Destroying Weebs`,
                `i Be Dunkin Wobblers`,
                `i Buy Double Wides`,
                `i Bring Disgusting Water`,
                `idolise Boring Dair Walls`,
                `if Bob Doesn't, Why?`,
                `i Bomb Da World`,
                `i Be Double Wholesome 😇`,
                `incels Be Dick Wanking`,
                `i Been Doing Work`,
                `idiot Box Does Wavedrop`,
                `immigrants Banned, DonaldW`,
                `i'll Ban Deez Wobblas`,
                `iV Bag Didn't Win`,
                `i Bought DiscordNitro, Why?`,
                `iodine Boron Deuterium Tungsten`,
                `insert Big Dongs Warily`,
                `i Been Doing WubWubWowzy`,
                `itchy Balls! Damn Whore!`,
                `ironically Blame Desirable Women`,
                `internet Bozo's Download Webm's`,
                `i Believe Drash Wins`,
                `infinite Boomers Defend Wackery`,
                `if Boomer, Drown Well`,
                `ionic Bonding Destroys Walls`,
                `i Be Docking Weiners`];

        var r = Math.floor((Math.random() * i.length));

        message.channel.send(i[r]);
    }


    //Loscar

    if (command === `LOSCAR`) {
        var l = [`a bar`,
                `a bar`,
                `a bar`,
                `his boss's wife's house`,
                `a wedding`,
                `a funeral`,
                `a party`,
                `home\n\n...just kidding, he could be anywhere`,
                `work`,
                `work`,
                `a gas station`,
                `a bus stop`,
                `church`,
                `his parents' house`,
                `a mexican gang meeting`,
                `a bachelor's party`,
                `the Canary Island Hard Vaginas vs Hong Kong Sexy Bitches game`,
                `an airport`,
                `a Les Schwab Tire Center`,
                `a local`,
                `his good friend Mr. Ratburn's wedding`,
                `the Beerlympics`,
                `an open house`,
                `the driving seat of his car`,
                `a local, eating Pop tarts on stream`,
                `a trafffic jam`,
                `the MarbleLympics`,
                `the L'oscar Hotel in London`,
                `Chandy's Tacos`];

        var r = Math.floor((Math.random() * l.length));

        message.channel.send(`Currently on discord at `+l[r]);
    }


    //Mango

    if (command === `MANGO` || command === `MANG0`) {
        var m = [`LMAOOOOOOOOOOOOO \ni can say that i have grown up a lot in the last 2 years .. and i waited to shake ur hand at ncr but you were crying or whatever and i was gonna wait till you were finished \nAnd ive been more civil to you outside of smash for sure but when it comes to the game itself i have 0 respect for ur " skill " . I think ur a disgrace to the game and i think ur god awful. You learned 1 gimmick and abused it .. You never adapt to anything .. Ur just bad at the game and if you wanna shut me up. Beat me consistently dude and it will change .. Until then get off of reddit and go practice`,
                `I won pound three =D \n \nim cocky so what \nEAT A \\*\\*\\*\\* PEOPLE \ncept the community <333`,
                `Just post what ud rather do then play/watch brawl \n=D \n \nId Rather watch mikehaze run around shirtless in slowmotion ( mike <33 ) \nId rather tear off my own hands just so theres no chance i ever have \n2 play brawl .... but then get metal ones that only allow me 2 play melee =D \nId rather have lost pound three then brawl being made =/ lol \nId rather have pyschomidget ACTUALLY eat a \\*\\*\\*\\* then him play brawl lololol \n( socal melee community joke <33 ) \n!!!! \n\\*\\*\\*\\* thread`,
                `https://cdn.discordapp.com/attachments/611202965558132747/613475440505389067/unknown.png`,
                `**USA** \n**USA** \n**USA**`,
                `https://cdn.discordapp.com/attachments/611202965558132747/613476344361123867/unknown.png`,
                `https://cdn.discordapp.com/attachments/611202965558132747/613475625574989936/unknown.png`,
                `https://cdn.discordapp.com/attachments/611202965558132747/613472979082543134/unknown.png`,
                `1. My iq is as probably as high as your smash skill \nwhich probably isnt VERY HIGH \n2. You can suck my \\*\\*\\*\\* \n3 You can suck my \\*\\*\\*\\* \n4. Ima pro roulette player i came to gamble \n5. ummmmmmmmmmm i dunno \n6. Sup \n=D<3`,
                `god ur sooooooo \\*\\*\\*\\* gay`,
                `............ i really hate that \n\\*\\*\\*\\*\\*\\* \\*\\*\\* \\*\\*\\*\\*\\* peice of \\*\\*\\*\\* \n \nedit - im cool as \\*\\*\\*\\* in person \nsuck it`,
                `=(((((((((((((((((((((((((((((((((((((((`,
                `**silent wolf rapes** \n \nsilent wolf rapes`,
                `loooooooooooooooooooooooooooooooooool`,
                `Also the \\*\\*\\*\\* american version is wayyyy better \nand the \\*\\*\\*\\*ty euro version is a peice of \\*\\*\\*\\* \ni would \\*\\*\\*\\* that game also \nit wouldnt change ne thing cept \nlife looks alot easier in the euro version \nalot less gay \\*\\*\\*\\* \nWHICH U GUYS NEED \nIF U HAVE NE CHANCE OF BEATING ME \n \nAmerica baby`,
                `your black \n \ngg`,
                `what a black joke \n \n\\*\\*\\*\\* black mother fukers`,
                `i agree lets ban puff`,
                `america rapes \neveryone else sucks \n \nso much \\*\\*\\*\\*`,
                `coming again to save the mother \\*\\*\\*\\*n day \narmada ur game is thru \ncause now u have to answer to \n \namerIIiIIcCcaAaaAA \n \nso lick my fox's \\*\\*\\* suck my falcons ballllllllllls`,
                `*dances \n \n..... \ni pop a hoes cherry then i pop ma colllar`,
                `\\*\\*\\* so big i told her look back at itttttttttttttttt`,
                `noob mentality \n \ntrue champs wanna beat people at their best... \nI never feel good when I beat someone when they OBVIOUSLY do not play NOT UP 2 PAR \n \nnvm \n*FRANCE MENTALITY \nLMAOAO \nfreedom fries motha \\*\\*\\*\\*er`,
                `SupPPpPpPPp`,
                `^^^^^^ my point EXACTLY \nk im done posting here \nCYA GUYS <3 <--- for my fans everyone else can fall in a hole`,
                `Suppppppppppppppppppppppppppppppppppppppppppp : 3`,
                `ajp deeeeeeeeeeeeeeeeeeez nuttttts ROFLLL`,
                `i never did homework in high school too busy winning pound 3 and such \n:)`,
                `LMAOO \n=]`,
                `id deff say im old school and new school mixed \n \nme and m2k had our first set/1 match at evo LMAOOO in 07 ( i won : 3 )\n \nPRETTY OLD SCHOOL IF U ASK ME \n \n \nand if this happens id rather be on the old school team\n \n\\*\\*\\*\\* the new school`,
                `havent even said a word to hbox the last like 3 tourneys ROFLL`,
                `<<<<<<<< #1 \n \nin case u were wondering \n \n \n \nLMAOOO`,
                `whos tryna money match THE KID \n<--- the kid`];

        var r = Math.floor((Math.random() * m.length));

        message.channel.send(m[r]);
    }


    //Me, you and SPOTW

    if (command === `ME`) {
        message.delete(100);
        message.channel.send(`it was me :)`);
    }

    if (command === `YOU`) {
        message.delete(100);
        message.channel.send(`it was you :)`);
    }

    if (command === `SPOTW`) {
        message.channel.send(`haha yo check out this post bro it's really funny haha its a good post bro pls look at it haha\n<@!337284886039625728>`);
    }


    //Midnight

    if (command === `MIDNIGHT` || command === `MIDNIGHTLIFTER`) {
        var m = [`*fadeback upsmashes*`,
                `*reverse fadeback upsmashes*`,
                `*just stands there and upsmashes*`,
                `*triple upsmashes*`,
                `*quad upsmashes*`,
                `*disrespects women*`,
                `*disrespects women*`,
                `*uptilts instead of upsmash*\n\n*then upsmashes anyways*`,
                `shield pivot upsmashes`,
                `*runs at you and upsmashes*`];

        var r = Math.floor((Math.random() * m.length));

        message.channel.send(m[r]);
    }


    //Minecraft

    if (command === `MINECRAFT` || command === `MC`) {
        var m = [`That's not Minecraft, that's my wife!`,
                `GET THE FUCK OUT OF MY ROOM I'M PLAYING MINECRAAAFT`,
                `https://cdn.discordapp.com/attachments/612058753293877274/615589309411753991/emoji.png`,
                `What's you're favourite Minecraft block? :)`,
                `What's you're favourite Minecraft block?`,
                `What's your favourite Minecraft block? :)`,
                `What's you're favorite Minecraft block?`,
                `GET THE FUCK OUT OF MY ROOM I'M PLAYING MINECRAAAFT`,
                `What's your favorite Minecraft block?`,
                `What's your favourite Minecraft block?`,
                `So we back in the mine, got our pick axe swinging from side to side, side side to side,\nThis task a grueling one, hope to find some diamonds tonight, diamonds tonight \nHeads up, you hear a sound, turn around and look up, total shock fills your body, \nOh no it's you again, \nI could never forget those eyes eyes eyes, eyes eyes eyes eyes \n \n'Cause baby tonight, the creeper's trying to steal all our stuff again, \n'Cause baby tonight, you grab your pick, shovel and bolt again, \nAnd run, run until it's done, done, done, until the sun comes up in the morn' \n'Cause baby tonight, the creeper's trying to steal all our stuff again, \n \nJust when you think you're safe, overhear some hissing from right behind, \nThat's a nice life you have, shame it's gotta end at this time, \nBlows up, then your health bar drops, you could use a 1-up, get inside \nDon't be tardy, \nSo now you're stuck in there, half a heart is left but don't die \n \n'Cause baby tonight, the creeper's trying to steal all your stuff again, \n'Cause baby tonight, you grab your pick, shovel and bolt again, \nAnd run, run until it's done, done, until the sun comes up in the morn' \n'Cause baby tonight, the creeper's trying to steal all your stuff again, \n \nCreepers, you're mine \n \nDig up diamonds, and craft those diamonds and make some armor, \nGet it baby, go and forge that like you so, mlg pro, \nThe sword's made of diamonds, so come at me bro \n \nTraining in your room under the torch light, \nHone that form to get you ready for the big fight, \nEvery single day and the whole night, \nCreeper's out prowlin' - alright \n \nLook at me, look at you, \nTake my revenge that's what I'm gonna do, \nI'm a warrior baby, what else is new, \nAnd my blade's gonna tear through you \n \nBring it`,
                `Creeper? Aww man`];

        var r = Math.floor((Math.random() * m.length));

        message.channel.send(m[r]);
    }


    //Mmuller87

    if (command === `MMULLER` || command === `MMUELLER` || command === `MMU`) {
        var m = [`https://cdn.discordapp.com/attachments/608818247877525526/610284791014883329/HGOD_DABS_ON_THE_FOX_MAINS.jpg`,
                `https://cdn.discordapp.com/attachments/608818247877525526/610284654594883586/hbox_daberoni.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/615589309411753991/emoji.png`,
                `Dab on em`,
                `Dab on em`,
                `Dab on em`,
                `Dab on em`,
                `Dab on em`,
                `https://cdn.discordapp.com/attachments/612063946643472389/615231847688962049/sugden.png`];

        var r = Math.floor((Math.random() * m.length));

        message.channel.send(m[r]);
    }



    //Nanchoman

    if (command === `NANCH` || command === `NANCHOMAN`) {
        message.channel.send(`Hello there! Ha! Just a little prequel meme humor for ya`);
    }


    //Never Cum

    if (command === `NEVER` || command === `NEVERCUM`) {
        var n = [`Never cum`,
                `Never cum`,
                `Never cum`,
                `Never cum`,
                `Never cum`,
                `Never cum`,
                `Never cum`,
                `Never cum \n \n \n \n \nNever cum`,
                `https://cdn.discordapp.com/attachments/612063946643472389/615231847688962049/sugden.png`];

        var r = Math.floor((Math.random() * n.length));

        message.channel.send(n[r]);
    }


    //Risc

    if (command === `RISC` || command === `BESTDK`) {
        message.channel.send(`Creeper? Aww man`);
    }


    //Rognut

    if (command === `ROGNUT` || command === `ROG` || command === `ROGCHAMP`) {
        message.channel.send(`rog would love to be cucked way more than midnight`);
    }


    //Sailormercury

    if (command === `REPLYGUY` || command === `:REPLYGUY:` || command === `SM` || command === `MERCURY` || command === `SAILOR` || command === `SAILORMERCURY` || command === `REDSHEIK`) {
        message.channel.send(`I MADE THE FUCKING POST\nFUCK you. I **FUCKING** HATE YOU. FUCK you.\nFUCK YOU.`);
    }


    //Silverhand

    if (command === `SILVER` || command === `SILVERHAND`) {
        var s = [`wanna play guilty gear`,
                `wanna play melty`,
                `wanna play unist`,
                `https://i.imgur.com/VBB57cT.png`,
                `https://i.imgur.com/U5RNamy.png`,
                `OK I'm starting an Ultra Fight Da! Kyanta 2 league. You guys should join in \ntype in \` t!ultrafightdakyanta2league \` to join`,
                `**\*Loud typing noises\***`,
                `**\*Loud Fightstick noises\***`,
                `Nooo don't shut down the bot your so sexy aha`,
                `Long overdue, but I think it's time for me to unsubscribe from this server.`,
                `What if Silver sex Ky Kiske from the new Guilty Gear trailer`,
                `Hi, at the time of you reading this I am taking an indefinite break from the scene and taking this puff along with me. I'll get straight to the point, Leffen has been an asshole to me and my character countless times, and shows no remorse or effort to change. I'm sure he or someone else will try to spin my absence as being about what happened right before I got eliminated, or some other small thing, but that was just the straw that broke the clutchgod's back. He is a hurtful person to be around, and has gone so far as blatantly saying so. A point he made the day I'm writing this that really pushed me towards leaving is that he doesn't single me out, he's just like this to everyone. I don't think any of you deserve to be around people like that. Leaving was a very hard decision to make, as I've spent a lot of my time with this scene the past decade, and if it were just the rest of you I'd love to continue to do so. However, people defending someone who is that awful to be around outweighs the other benefits of being in this community, at least to me. I hope that something can change, whether that is Leffen showing real effort to change as a person and be nicer to people, or him leaving the server. If not, it's been nice knowing the rest of you, and my DMs are open if anyone wants to get in touch with me. \n \n-Hungrybox`,
                `Hi, at the time of you reading this I am taking an indefinite break from the server and taking this bot along with me. I'll get straight to the point, SubjectiveF has been an asshole to me and my friends countless times, and shows no remorse or effort to change. I'm sure he or someone else will try to spin my absence as being about what happened right before I left, or some other small thing, but that was just the straw that broke the camel's back. He is a hurtful person to be around, and has gone so far as blatantly saying so. A point he made the day I'm writing this that really pushed me towards leaving is that he doesn't single me out, he's just like this to everyone. I don't think any of you deserve to be around people like that. Leaving was a very hard decision to make, as I've spent a lot of my time with this server the past few months, and if it were just the rest of you I'd love to continue to do so. However, people defending someone who is that awful to be around outweighs the other benefits of being in this community, at least to me. I hope that something can change, whether that is Subjective showing real effort to change as a person and be nicer to people, or him leaving the server. If not, it's been nice knowing the rest of you, and my DMs are open if anyone wants to get in touch with me. \n \n-I'm gay`,
                `wanna play tekken`];

        var r = Math.floor((Math.random() * s.length));

        message.channel.send(s[r]);
    }

    if (command === `ULTRAFIGHTDAKYANTA2LEAGUE`) {
        message.channel.send("if ur reading this ur gay lol");
    }


    //Soap

    if (command === `SOAP`) {
        message.channel.send(`though he is better, its some dummy high apm dumb shit`);
    }


    //structuremole

    if (command === `STRUC` || command === `STRUCTURE` || command === `STRUCTUREMOLE` || command === `MOLE`) {
        var s = [`J.D. from scrubs`,
                `Dr. House from House`,
                `Bones from StarTrek`,
                `Doc from Back to the Future`,
                `Dr. Frankenstein from Frankenstein`,
                `Dr. Wu from Jurassic Park`,
                `Dr. Jekyll from The Strange Case of Dr. Jekyll and Mr. Hyde`,
                `Dr. Rumack from Airplane!`,
                `Doc Ock from Spider-Man`,
                `Dr. Evil from Austin Powers`,
                `Dr. Strangelove from Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb`,
                `The Doctor from Doctor Who`,
                `Dr. Griffin from The Invisible Man`,
                `Dr. Lecter from Silence of the Lambs`,
                `Dr. Huxtable from The Cosby Show`,
                `Dr. Zoidberg from Futurama`,
                `Dr. Spaceman from 30 Rock`,
                `Dr. Mario from Melee`,
                `Dr. Freeman from Half-Life`,
                `Dr. Zhivago from Doctor Zhivago`,
                `Dr. Acula from Dr. Acula`,
                `Dr. Oz from The Dr. Oz Show`,
                `Dr. Eggman from Sonic the Hedgehog`,
                `The Medic from Mafia.gg`,
                `The Doctor from Mafia.gg`];

        var r = Math.floor((Math.random() * s.length))

        message.channel.send(`Became a doctor to be like `+s[r]);
    }


    //SubF

    if (command === `SUBF` || command === `SUBJECTIVE` || command === `SUBJECTIVEF`) {
        var f = [`Fox`,
            `Fun`,
            `Fucking stop tagging me on reddit dot com`,
            `counts Friendlies`,
            `FUCKING FUCK`,
            `https://cdn.discordapp.com/attachments/611202965558132747/620398820844503052/Fuck_you.gif`,
            `Fuck`,
            `Fucker`,
            `Forgetful`,
            `Faggetful`,
            `Fascist`,
            `Fag`,
            `FungaBunga`,
            `Fiction`,
            `Fountain of Dreams`,
            `Faggot`,
            `Funeral`,
            `Falco`,
            `Fungus`,
            `Fashion`,
            `Finance`,
            `Feisty`,
            `Flower`,
            `Fraud`,
            `Frick`,
            `Frigg`,
            `Freak`,
            `Fisches for grabs`,
            `puFf`,
            `Falcon`,
            `Free`,
            `Floaty`,
            `Fastfaller`,
            `Fast fall`,
            `Fish`,
            `Floaty mid tier`,
            `Forward over-B`,
            `F-air`,
            `Fighter`,
            `Forward aerial`,
            `Fucking hates balls`,
            `Phenomenal`,
            `pufF`,
            `FOXY`,
            `Franchise`,
            `Frankenstein`,
            `Forensics`,
            `F-smash`,
            `F-tilt`,
            `Foxtrot`,
            `Full hop`,
            `Final Destination`,
            `Frame`,
            `Frame perfect`,
            `Future`,
            `FMT`,
            `Feminine penis`,
            `Fucking love penis`,
            `Fuck engineers`,
            `Fuck floaties`,
            `Fuck mini sentries`,
            `Fuck puff`,
            `Fuck Peach`,
            `Fuck ICs`,
            `Fuck Luigi`,
            `Fuck Mario`,
            `Fuck Doc`,
            `Fuck Samus`,
            `Fuck me 😳`,
            `Fruit`,
            `Full blown retard`,
            `Freedom of speech`,
            `Fuck cael`,
            `Fuck coffee`,
            `Fuck wobbling`,
            `FUCK 12`,
            `Fucking idiot`,
            `Fuck my tiny ass`,
            `Fuck hbox`,
            `Feel`,
            `Felt`,
            `Feelings`,
            `Feet`,
            `Fête`,
            `Fate`,
            `Fat`,
            `Faring`,
            `Farting`,
            `Fart`,
            `Fill in the blank`,
            `you to Find out`,
            `Footsies`,
            `Feetsies`,
            `Friend`,
            `Friend :)`,
            `Fiend`,
            `Fiction`,
            `Faker`,
            `Faker? I think you're the fake hedgehog around here. You're comparing yourself to me? Ha! You're not even good enough to be my fake.`,
            `Friend`,
            `Fool`,
            `Flame`,
            `Flaming homosexual`,
            `Firefox`,
            `Facts don't care about your feelings`,
            `can'tgobackwardsinstarFox64`,
            `you stupid bitch, you stupid fucking bitch, you stupid Fucking bitch`];

        var r = Math.floor((Math.random() * f.length));

        message.channel.send(`The F stands for `+f[r]);
    }


    //Ted

    if (command === `TED` || command === `EMPTY` || command === `TEDEMPTY`) {
        var t = [`Traitor.`,
                  `Fuckboi.`,
                  `Bitch.`,
                  `Shitlord.`,
                  `Incel.`,
                  `Loser.`,
                  `Virgin.`,
                  `Scumbag.`,
                  `Troll.`];

        var r = Math.floor((Math.random() * t.length));

        message.channel.send(t[r]);
    }


    //Winnarly

    if (command === `WINNARLY` || command === `WINNAR`) {
        var w = [`Final Destination has no platforms?`,
                `cum sounds like come?`,
                `it's meaningless to factor in how long a win streak lasted since it doesn't reveal how many tournaments the player went to in that time period?`,
                `hbox had a 6 month win streak before he lost come to papa 3 to Zain?`,
                `some synagogues sell tickets to their service on high holidays when attendance is expected to be high?`,
                `pichu can now officially dab to escape falco shield pressure?`,
                `having money is unethical?`,
                `you can now pet the dog thanks to the new update?`,
                `brawl's dankest meme was stolen from melee?`,
                `shine's a 1 frame move?`,
                `I'm making a video game?`,
                `before drew became a subreddit roy stan, he was the inspiration for one of the most ambitious cinematic accomplishments in the history of schmelee?`,
                `we all die someday and nobody has time for your chicken shit bull shit?`,
                `doc’s nair gets stronger the longer the hitbox is out?`,
                `humans thousands of years ago literally did not feel stress?`,
                `Helium is an actual atom? It's not just in balloons!`,
                `mango is in grand finals winners side of pound 2019?`,
                `under night is going to be at melee instead of evo?`,
                `giga bowser has a shorter jumpsquat than bowser?`,
                `2 dicks are better than 1?`,
                `the first mbmbam podcast was don on a rockband controller?`,
                `dr pp got rainbow cruise banned?`,
                `ganondorf has a frame 3 down b?`,
                `bowser loses to puff?`,
                `melee was invinted before color?`,
                `worm was originally a fox main?`,
                `marth has a down air that can't be meteor canceled?`,
                `Roy can OHKO Puff with his up b?`,
                `rog is druggedfox?`,
                `you only like this game because it activates pleasure receptors in your brain? Fucking sheep.`,
                `JK Rowling came out and said that the reader was gay?`,
                `literally the only reason people still play melee is because Fox is so fucking sick?`,
                `Buffalo NY actually stole Buffalo Wings from Montpelier, VT?`,
                `you can reach side platforms with Fox usmash on yoshis?`,
                `DuckNumbers has his own subreddit for all his shitposts?`,
                `borp and pannenkoek are brothers?`,
                `puff dies early?`,
                `pannenkoek's brother is rognut?`,
                `Fiction's a little bitch?`,
                `you can't go backwards in the OG Mario, I'm pretty sure?`,
                `Dark Souls 2 is a completely different game in Japan! It was released in the rest of the world as "Dark Souls: The Lost Levels" and the Dark Souls 2 you know and love was originally a game called "Doki Doki Literature Club"`,
                `on no DI, upthrow rest works on fox from anywhere between 0 and 104%?`,
                `gamefreak ripped off sceptile's mega from a fangame?`,
                `Mewtwo can just roll away from Kirby and there's literally nothing Kirby can do to stop it?`,
                `a picture is worth a thousand words?`,
                `Falco's downsmash hits below battlefield?`,
                `ganon is the highest tier zelda character on the css?`,
                `bowser's NICE top spin serve is only 6 mph faster than baby mario's due to a programming error?`,
                `you can see the decline of civilization is directly correlated to how prominent final fantasy is in popular media`,
                `you could say the n word on discord and delete it before anyone sees\nwatch`,
                `you can delete cortana altogether`,
                `lgl will actually hurt amsa and ultimate2king too? we should only be trying to target hbox here, ok?`,
                `sub is african american?`,
                `in addition to playing melee over the internet, you can also hold a conversation over the internet!`,
                `Osama Bin Laden had emulators, pokemon roms and naruto episodes downloaded onto his laptop?`,
                `I don't eat any vegetables whatsoever?`,
                `shine turnaround firefox to grab ledge is actually shit?`,
                `Philly cheesesteaks were actually invented in New Hampshire?`,
                `Ganon plays much more like Sheik than like Falcon?`,
                `Borp's brother is Aniolas?`,
                `you can't go backwards in the OG Mario, I'm pretty sure?`,
                `Marth is actually in the Mario Tennis GBA game?`,
                `The X-Files is like The Office but not funny`,
                `Darsh once held the world record for Luigi Downward Angled Forward Tilt Only Home Run Contest?`,
                `The Falcon Punch, while a very famous and iconic move, sees little use in competitive play, mainly due to its relatively lackluster start-up window.`,
                `armada and mango used to have a rivalry?`,
                `Mario says "yahoo!" when he does a tornado, but Doc remains silent during his?`,
                `Dr. Mario's neutral aerial does more damage and knockback the longer it's out, while it does less damage and knockback when it first comes out. Overall, Mario's sweetspotted neutral is in between Dr. Mario's neutral aerial's sweet and sour spots.`,
                `Eddie Vedder was the Goatest Guitarist?`,
                `red moroccan salt can center your chakras?`,
                `there was a set with amsa vs hbox I think where he's doing ECE's and dies for it\nand scar is like HOW DID HE DIE`,
                `bowser's NICE top spin serve is only 6 mph faster than baby mario's due to a programming error?`,
                `you can see the decline of civilization is directly correlated to how prominent final fantasy is in popular media`,
                `lgl will actually hurt amsa and ultimate2king too? we should only be trying to target hbox here, ok?`,
                `78% of black people live underground and only come up after sundown.`,
                `in the PAL version of Super Smash Bros. Melee, Marth, Roy, Link, and Young Link had their swords completely removed from the game?`];

        var t = [`Wow!`,
                `It's true!`,
                `Wow!`,
                `It's true!`,
                `The more you know!`,
                `I wouldn't lie to you!`,
                `Simply... wow.`,
                `Isn't the world amazing?`,
                `How interesting!`,
                `Yeah, that's right!`,
                `I said it.`,
                `Facts don't care about your feelings.`,
                `Where's the lie?`,
                `It explains everything!`];

        var r = Math.floor((Math.random() * w.length));
        var r2 = Math.floor((Math.random() * t.length));

        message.channel.send(`Did you know... that `+w[r]+`\n`+t[r2]);
    }


    //Sugden / Cum

    if (command === `SUGDEN` || command === `SUG` || command === `CHAZZ` || command === `CHAZ` || command === `CHAZZDEN` || command === `SUGDEEZY` || command === `SUGDEB` || command === `DOG` || command === `CUM`) {
        var s = [`https://i.imgur.com/YtYweuz.png`,
                `https://cdn.discordapp.com/attachments/608818247877525526/615577924783046656/unknown.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/619592892234858516/1567789137645.png`,
                `https://cdn.discordapp.com/attachments/612063946643472389/618975820156764173/corn.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/618344161225211936/69473515_10219276880943119_7832993335324180480_n.png`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616846521392168974/received_780188335732851.jpeg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/617558724898324657/JPEG_20190831_201749.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/617443605983920215/JPEG_20190831_124022.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/615952645609357332/JPEG_20190827_175534.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/617397856029900800/IMG_20190831_173826.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/617101653388296278/JPEG_20190830_220100.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/616925518025064481/JPEG_20190830_102128.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/619100351013847040/JPEG_20190905_102330.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/619087599876833280/JPEG_20190905_093240.jpg`,
                `https://cdn.discordapp.com/attachments/612063946643472389/618913601851228171/JPEG_20190904_220124.jpg`,
                `https://media.discordapp.net/attachments/612061198288027796/614471733197668388/IMG-20190812-WA0005.jpg?width=507&height=676`,
                `https://cdn.discordapp.com/attachments/612058753293877274/615560160676675595/IMG_20190826_1055292.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/614471173492703242/JPEG_20190823_154853.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/614471100491104286/JPEG_20190823_154829.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613779410809651213/JPEG_20190821_175958.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613779172455743525/JPEG_20190821_175842.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613415798572056597/IMG_20190820_175249.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/613034163418824922/JPEG_20190819_163804.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/612978436817813554/JPEG_20190819_125658.jpg`,
                `https://cdn.discordapp.com/attachments/612063946643472389/612338727749943297/JPEG_20190817_183511.jpg`,
                `https://cdn.discordapp.com/attachments/612063946643472389/612338128161734734/JPEG_20190817_183246.jpg`,
                `https://cdn.discordapp.com/attachments/612058753293877274/612253861364629514/JPEG_20190817_125800.jpg`,
                `https://cdn.discordapp.com/attachments/612063946643472389/615248249481199748/emoji.gif`,
                `https://cdn.discordapp.com/attachments/612063946643472389/615244724504231988/Z.png`,
                `https://cdn.discordapp.com/attachments/612063946643472389/615231847688962049/sugden.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/611563402283712552/IMG_20190815_151426.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/611506900852277248/JPEG_20190815_112939.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/610835186329845810/IMG_20190813_150028.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/588448339566002195/image0.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/588442510062256139/image2.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/588442509248692259/image0.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/588442508812615680/image1.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/609224595832307722/IMG_20190808_232043359.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/609223357166256147/received_687242161793112.jpeg`,
                `https://i.imgur.com/Tf9QJaA.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/605540736271777831/Screenshot_20190729-172231_Instagram.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/604435328610336778/timmy.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/605540868459593748/Screenshot_20190729-172303_Instagram.jpg`,
                `https://media.discordapp.net/attachments/555176988562948116/600003486087905281/unknown.png?width=934&height=640`,
                `https://cdn.discordapp.com/attachments/542142763693768731/603256016632676362/JPEG_20190723_170352.jpg`,
                `https://i.imgur.com/dqdUUZt.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/603428017863131164/JPEG_20190724_042706.jpg`,
                `https://i.imgur.com/BvXGg7I.png`,
                `https://media.discordapp.net/attachments/566411042738143242/600061732135764003/D-RI0IdW4AQg5Oj.png?width=640&height=640`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600003058323423233/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600003345767202818/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600003486087905281/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600067265987346432/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600067494463406090/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600067651313729546/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600067685019156518/IMG_20181001_122428.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600069530353532948/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600069573932351496/20190508_173330.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/600070030293467136/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602172803609001994/JPEG_20190720_103000.jpg`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602172885888663552/IMG_20190718_193205.jpg`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602172886807085087/IMG_20190718_193115.jpg`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602172966729416735/JPEG_20190720_163446.jpg`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602207672137285633/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602207713757364233/20180429_191241.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602207743058771975/FullSizeR.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602207763224985600/red_and_blue.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602207790387298311/1449118552328.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602208807552024577/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602209495325737006/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602209552989159424/Snapchat-825518123.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602209741372129280/unknown.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/602210191877865502/unknown.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/596392410913832970/JPEG_20190704_103028.jpg`,
                `https://cdn.discordapp.com/attachments/567417652331413544/601222330865156097/IMG_20190622_142738926.jpg`,
                `https://cdn.discordapp.com/attachments/555176988562948116/605898887491878956/dog.png`,
                `https://cdn.discordapp.com/attachments/555176988562948116/605898903086170147/dog_2.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/605539691571314718/JPEG_20190728_090311.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/605540018982748172/mq8eny9u3da31.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/604802387756056707/image0.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/604682716482633758/JPEG_20190727_153253.jpg`,
                `https://cdn.discordapp.com/attachments/555176988562948116/606140681353691166/unknown.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/606138286091665451/image.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/606113989956730901/JPEG_20190731_142006.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/606095855841443850/JPEG_20190731_130813.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/607189046015426560/JPEG_20190803_133207.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/607188105207873537/JPEG_20190803_132820.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/606559419605581834/IMG-20180831-WA0002.jpg`,
                `https://cdn.discordapp.com/attachments/598336899010003015/606270930641223693/IMG_20190731_194403770.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/606138286091665451/image.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/607210695876149248/image0.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/607210812594978826/image0.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/607211749984174110/image0.jpg`,
                `https://cdn.discordapp.com/attachments/542142763693768731/607222944317571073/Screenshot_20190803-164652.png`,
                `https://cdn.discordapp.com/attachments/542142763693768731/605540431043756033/20190729_172103.jpg`,
                `https://cdn.discordapp.com/attachments/542494706932645918/598248990638735370/image0.jpg`,
                `https://i.imgur.com/vnY6qBY.jpg`,
                `https://cdn.discordapp.com/attachments/542494706932645918/598248832144375959/image0.jpg`,
                `Never cum`,
                `PSA: Don't do drugs`,
                `https://cdn.discordapp.com/attachments/608818247877525526/615578318540111922/unknown.png`];

        var r = Math.floor((Math.random() * s.length));

        message.channel.send(s[r]);
    }


    //Wub Wub Wowzy

    if (command === `WUB` || command === `WUBWUB` || command === `WUBWUBWOWZY`) {
        var r = Math.random() * 100;

        if (r <= 40) {
            var b = [`purchased Borderlands 3 for the PS4, Google Stadia, Xbox One and PC (Pedophile Courtcase)`,
                    `purchased a USB drive containing suspicious files`,
                    `gave Randy Pitchford $60`,
                    `purchased a lifesize body pillow of Randy Pitchford`,
                    `purchased a photo album of Randy Pitchford seflies`,
                    `sculpted a statue depicting his idol and role model, Randy Pitchford`,
                    `purchased Borderlands 3 for the PS4, Google Stadia, Xbox One and PC`,
                    `purchased Borderlands 3 for the PS4, Google Stadia, Xbox One and PC`,
                    `purchased Borderlands 3 for the PS4, Google Stadia, Xbox One and PC`,
                    `made a cum tribute of Randy Pitchford's Twitter profile pic`,
                    `purchased Borderlands 3 on the Epic Games Store, selling out all of his information to the Chinese`,
                    `cried himself to sleep because he realised he will never hold Randy Pitchford in his arms`,
                    `returned a lost USB stick to his good friend Randy Pitchford`,
                    `Snitched on a mall that had a Super Mario Bros. ROM in an attempt to be more like Randy Pitchford`];

            var r = Math.floor((Math.random() * w.length));

            message.channel.send(`Recently `+w[r]+`.`);
        } else {
            var w = [`101 Dalmations`,
                    `Aladdin`,
                    `Indiana Jones and the Fate of Atlantis for the Amiga, FM Towns, PC and Wii`,
                    `Indiana Jones and the Infernal Machine for the PC, N64 and GBC`,
                    `Instruments of Chaos starring Young Indiana Jones for the Genesis`,
                    `Indiana Jones in the Lost Kingdom for the Commodore 64`,
                    `the Indiana Jones and the Last Crusade video game for the NES`,
                    `Indiana Jones and the Last Crusade: The Action Game for the Amiga, Amstrad CPC, Atari ST, Commodore 64, Master System, Mega Drive, NES, Game Gear, MSX, PC and ZX Spectrum`,
                    `Indiana Jones and the Last Crusade: The Graphic Adventure for DOS, Amiga, Atari ST and Macintosh`,
                    `the Raiders of the Lost Ark video game for the Atari 2600`,
                    `Indiana Jones in Revenge of the Ancients for the Apple II and MS-DOS`,
                    `Indiana Jones and the Staff of Kings for the Wii, PS2, DS and PSP`,
                    `the Indiana Jones and the Temple of Doom video game for the Arcade, Amiga, Amstrad CPC, Apple II, Atari ST, Commodore 64, MS-DOS, MSX, NES and ZX Spectrum`,
                    `The Young Indiana Jones Chronicles video game for the NES`,
                    `Indiana Jones and His Desktop Adventures for the PC`,
                    `Disney Sing It! – High School Musical 3: Senior Year for the PS2, PS3, Wii and Xbox 360`,
                    `High School Musical: Makin' the Cut! for the DS`,
                    `the High School Musical 3: Senior Year video game for the DS`,
                    `High School Musical 3: Senior Year Dance for the PC, PS2, Wii and Xbox 360`,
                    `Disney Sing It for the PC, Wii, PS2, PS3 and Xbox 360`,
                    `Disney Sing It: Family Hits for the PS3 and Wii`,
                    `Disney Sing It: Pop Hits for the PS2, PS3 and Wii`,
                    `High School Musical: Sing It! for the PS2 and Wii`,
                    `High School Musical 2: Work This Out! for the DS`,
                    `The Haunted Mansion video game for the Xbox, Gamecube and PS2`,
                    `Kinect: Disneyland Adventures for the Xbox Kinect`,
                    `Mickey no Tokyo Disneyland Daibōken for the Super Famicom`,
                    `The Walt Disney World Explorer for the PC`,
                    `Walt Disney World Quest: Magical Racing Tour for the Dreamcast, GBC, PC and PS1`,
                    `Virtual Magic Kingdom for the PC`,
                    `The Cheetah Girls video game for the GBA`,
                    `The Cheetah Girls: Passport to Stardom for the DS`,
                    `The Cheetah Girls: Pop Star Sensations for the DS`,
                    `Adventures in the Magic Kingdom for the NES`,
                    `the Chip 'n Dale Rescue Rangers video game for the NES and PlayChoice-10`,
                    `Chip 'n Dale Rescue Rangers 2 for the NES`,
                    `the Darkwing Duck video game for the NES and GB`,
                    `The Disney Afternoon Collection for the PC, Xbox One and PS4`,
                    `Disney's Aladdin for the SNES and GBA`,
                    `Disney's Hide and Sneak for the Gamecube`,
                    `Disney's Magical Mirror Starring Mickey Mouse for the Gamecube`,
                    `The Magical Quest Starring Mickey Mouse for the SNES and GBA`,
                    `Disney's Magical Quest 2: The Great Circus Mystery Starring Mickey & Minnie for the SNES, Genesis and GBA`,
                    `Disney's Magical Quest 3 Starring Mickey & Donald for the Super Famicom and GBA`,
                    `the DuckTales video game for the NES and GBA`,
                    `Deep Duck Trouble Starring Donald Duck for the Sega Master System and Game Gear`,
                    `Disney Golf for the PS2`,
                    `Disney Magicboard Online for the PC`,
                    `Disney Think Fast for the PS2 and Wii`,
                    `Disney's Party for the GBA and Gamecube`,
                    `Donald Duck: Goin' Quackers for the GBC, GBA, PC, N64, PS1, Dreamcast, PS2 and Gamecube`,
                    `Donald Duck's Playground for the Amiga, Atari ST, Apple II, Commodore 64, IBM PCjr and MS-DOS`,
                    `Donald's Alphabet Chase for the Amiga, Amstrad CPC, Apple II, Commodore 64, ZX Spectrum and DOS`,
                    `Castle of Illusion Starring Mickey Mouse for the MEga Drive, Master System and Game Gear`,
                    `Land of Illusion Starring Mickey Mouse for the Master System and Game Gear`,
                    `World of Illusion Starring Mickey Mouse and Donald Duck for the Mega Drive`,
                    `Legend of Illusion Starring Mickey Mouse for the Game Gear`,
                    `The Disney Collection: Castle of Illusion Starring Mickey Mouse & Quackshot Starring Donald Duck for the Mega Drive`,
                    `Sega Ages: I Love Mickey Mouse for the Sega Saturn`,
                    `Castle of Illusion Starring Mickey Mouse (2013) for the PC, PSN and Xbox Live Arcade`,
                    `The Lucky Dime Caper starring Donald Duck for the Game Gear and Master System`,
                    `Maui Mallard in Cold Shadow for the Genesis, SNES, GB and PC`,
                    `Mickey's Speedway USA for the N64 and GBC`,
                    `PK: Out of the Shadows for the Gamecube and PS2`,
                    `QuackShot Starring Donald Duck for the Genesis and Saturn`,
                    `Disney's Extremely Goofy Skateboarding for the PC`,
                    `the Goof Troop video game for the SNES`,
                    `Goofy's Fun House for the PS1`,
                    `Goofy's Hysterical History Tour for the Genesis`,
                    `Epic Mickey for the Wii`,
                    `Epic Mickey 2: The Power of Two for the PS3, Wii, Wii U, Xbox 360, PC and PS Vita`,
                    `Epic Mickey: Power of Illusion for the 3DS`,
                    `DuckTales: Remastered for the PS3, Xbox 360, Wii U and PC`,
                    `DuckTales 2 for the NES and GB`,
                    `DuckTales: The Quest for Gold for the Amiga, Apple II, Commodore 64, DOS and PC`,
                    `The Nightmare Before Christmas: Oogie's Revenge for the PS2 and Xbox`,
                    `TaleSpin for the NES and GB`,
                    `the Who Framed Roger Rabbit video game for the Game Boy`,
                    `The Little Mermaid video game for the NES and GB`,
                    `Mickey Mousecapade for the NES`,
                    `Mickey's Dangerous Chase for the Game Boy`,
                    `Indiana Jones and the Emperor's Tomb for the Xbox, PS2 and PC`,
                    `Buzz Lightyear of Star Command for the PS1, Dreamcast, GBC and PC`,
                    `Disney's Extreme Skate Adventure for the GBA, Gamecube, PS2 and Xbox`,
                    `the Toy Story video game for the SNES, Genesis, GB and PC`,
                    `Toy Story 2: Buzz Lightyear to the Rescue! for the PS1, N64, GBC, Dreamcast and PC`,
                    `Toy Story 3: The Video Game for the DS, PS2, PS3, PSP, Wii, Xbox 360, PC, Leapster and V.Reader`,
                    `Toy Story Mania! for the Wii, PS3, Xbox 360 and PC`,
                    `Toy Story Racer for the GBC and PS1`,
                    `the Cars video game for the GameCube, PS2, Xbox, PC, GBA, DS, PSP, Xbox 360 and Wii`,
                    `the Cars 2 video game for the Wii, PS3, Xbox 360, PC, DS, 3DS PSP and Arcade`,
                    `Cars 3: Driven to Win for the Switch, PS3, PS4, Wii U, Xbox 360 and Xbox One`,
                    `Cars Mater-National Championship for the Xbox 360, PC, DS, PS2, PS3, GBA and Wii`,
                    `Cars Race-O-Rama for the PS3, PS2, Wii, Xbox 360, PSP and DS`,
                    `Cars: Radiator Springs Adventures for the PC`,
                    `the Brave video game for the PC, DS, PS3, Wii and Xbox 360`,
                    `the Ratatouille video game for Gamecube, GBA, J2ME, PC, Mobile Phone, DS, PS2, PS3, PSP, Wii, Xbox and Xbox 360`,
                    `the Up video game for Xbox 360, Wii, iOS, PS3, PS2, PSP, DS, PC, Mobile Phone, Leapster and V.Smile`,
                    `the A Bug's Life video game for the PS1, PC, GBC, N64, Game.com, Sega Saturn and Dreamcast`,
                    `the Monsters, Inc. video game for the PS2, GBC and GBA`,
                    `Monsters, Inc. Scream Team for the PS1, PS2 and PC`,
                    `Monsters, Inc. Scream Arena for the Gamecube`,
                    `the Finding Nemo video game for GBA, Gamecube, PC, OS X, PS2 and Xbox`,
                    `The Incredibles video game for Gamecube, PS2, Xbox, PC, OS X and GBA`,
                    `The Incredibles: Rise of the Underminer for the PS2, Gamecube, Xbox, GBA, DS and PC`,
                    `The Incredibles: When Danger Calls for the PC`,
                    `the WALL-E video game for PC, DS, PS2, PS3, PSP, Wii, Xbox 360, V.Smile, J2ME and Leapster`,
                    `Kinect Rush: A Disney-Pixar Adventure for the Xbox 360`,
                    `Kamen Rider: Battride War for the PS3`,
                    `Kamen Rider: Battride War II for the PS3 and Wii U`,
                    `Kamen Rider: Battride War Genesis for the PS3, PS4 and PS Vita`,
                    `All Kamen Rider: Rider Generation for the DS`,
                    `All Kamen Rider: Rider Generation 2 for the DS`,
                    `All Kamen Rider: Rider Revolution for the 3DS`,
                    `Kamen Rider: Climax Fighters for the PS4`,
                    `Kamen Rider: Climax Scramble for the Switch`,
                    `Kamen Rider: Super Climax Heroes for the PSP and Wii`,
                    `Kamen Rider: Climax Heroes W for the Wii`,
                    `Kamen Rider: Climax Heroes OOO for the PSP and Wii`,
                    `Kamen Rider: Climax Heroes for the PS2`,
                    `Kamen Rider: Climax Heroes Fourze for the PSP and Wii`,
                    `the Hotel Transylvania video game for the DS and 3DS`,
                    `The Smurfs video game for the DS`,
                    `The Smurfs Dance Party for the Wii`,
                    `The Smurfs 2 video game for the Xbox 360, PS3, Wii, Wii U and DS`,
                    `the Open Season video game for the GBA, Gamecube, PC, DS, PS2, PSP, Wii, Xbox and Xbox 360`,
                    `the Cloudy with a Chance of Meatballs 2 video game for the DS and 3DS`,
                    `the Cloudy with a Chance of Meatballs video game for the PS3, Xbox 360, Wii, DS, PSP and PC`,
                    `the Over the Hedge video game for the Nintendo DS`,
                    `the Over the Hedge video game for the GBA, Gamecube, Xbox, PS2 and PC`,
                    `Over the Hedge: Hammy Goes Nuts! for the GBA, DS and PSP`,
                    `Antz Racing for the GBC`,
                    `the Antz video game for the GBC`,
                    `Antz Extreme Racing for the Xbox, PS2, GBA, PC`,
                    `Antz World Sportz for the GBC`,
                    `Gold and Glory: The Road to El Dorado for the PS1, GBC and PC`,
                    `the Chicken Run video game for the GBC, Dreamcast, PS1 and PC`,
                    `the Shrek video game for the Xbox`,
                    `the Shrek 2 video game for the Gamecube, PS2, Xbox, GBA and PC`,
                    `the Shrek the Third video game for the Xbox 360, PC, Wii, PS2, PSP, DS, GBA and iOS`,
                    `the Shrek forever After video game for the Xbox 360, PC, Wii, PS3, DS and iOS`,
                    `Shrek Swamp Kart Speedway for the GBA`,
                    `Shrek Smash n' Crash Racing for the Gamecube, PS2, PSP, DS and GBA`,
                    `DreamWorks Super Star Kartz for Xbox 360, Wii, PS3 and DS`,
                    `Shrek: Treasure Hunt for the PS1`,
                    `Shrek Super Party for Xbox, PS2 and Gamecube`,
                    `Shrek's Carnival Craze Party Games for PS2, PC, Wii and DS`,
                    `Shrek: Fairy Tale Freakdown for GBC`,
                    `Shrek Game Land Activity Center for PC`,
                    `Shrek: Hassle at the Castle for GBA`,
                    `Shrek Extra Large for the Gamecube`,
                    `Shrek: Reekin' Havoc for the GBA`,
                    `Shrek 2 Activity Center: Twisted Fairy Tale Fun for the PC`,
                    `Shrek 2: Team Action for the PC`,
                    `Shrek 2: Beg for Mercy for GBA`,
                    `Shrek SuperSlam for the PS2, Xbox, Gamecube, DS, PC and GBA`,
                    `Shrek n' Roll for Xbox Live Arcade`,
                    `Shrek: Ogres & Dronkeys for the DS`,
                    `the Puss in Boots video game for the Xbox 360, Wii, PS3 and DS`,
                    `Shrek: Dragon's Tale for the V.Smile`,
                    `Shrek the Third: Arthur's School Day Adventure for the V.Smile`,
                    `Shrek the Third: the Search for Arthur for the V.Smile`,
                    `Spirit: Stallion of the Cimarron — Forever Free for the PC`,
                    `Spirit: Stallion of the Cimarron — Search For Homeland for the GBA`,
                    `the Sinbad: Legend of the Seven Seas video game for the PC`,
                    `the Shark Tale video game for the PS2, PC, Xbox, Gamecube and GBA`,
                    `the Madagascar video game for the PS2, Xbox, PC, DS, GBA and Gamecube`,
                    `Madagascar: Operation Penguin for the GBA`,
                    `the Madagascar: Escape 2 Africa video game for Xbox 360, PS2, PS2, Wii, PC and DS`,
                    `Madagascar Kartz for Wii, PS3, Xbox 360 and DS`,
                    `The Penguins of Madagascar for the DS`,
                    `The Penguins of Madagascar: Dr. Blowhole Returns - Again! for the DS, Wii, Xbox 360 and PS3`,
                    `Madagascar: Join the Circus! for iOS`,
                    `Madagascar 3: The Video Game for the Wii, 3DS, DS, Xbox 360 and PS3`,
                    `Madagascar Preschool Surf n' Slide for iOS`,
                    `the Penguins of Madagascar video game for 3DS, Wii and Wii U`,
                    `Wallace & Gromit Fun Pack for PC`,
                    `Wallace & Gromit in Project Zoo for the PS2, Xbox, Gamecube and PC`,
                    `the Wallace & Gromit: Curse of the Were-Rabbit game for the PS2 and Xbox`,
                    `the Flushed Away video game for the PS2, Gamecube, GBA and DS`,
                    `Bee Movie Game for PC, Xbox 360, Wii, PS2 and DS`,
                    `the Kung Fu Panda video game for PC, DS, PS2, PS3, Wii and Xbox 360`,
                    `Kung Fu Panda: Legendary Warriors for the DS and Wii`,
                    `the Kung Fu Panda 2 video game for the DS, PS3, Wii and Xbox 360`,
                    `Kung Fu Panda: Showdown of Legendary Legends for PC, Xbox One, PS3, PS4, 3DS and Wii U`,
                    `the Monsters vs. Aliens game for PC, PS3, Xbox 360, DS, Wii and PS2`,
                    `the How to Train Your Dragon video game for Wii, Xbox 360, PS3 and DS`,
                    `the How to Train Your Dragon video game for Wii, Wii U, Xbox 360, PS3 and 3DS`,
                    `Megamind: Ultimate Showdown for the PS3 and Xbox 360`,
                    `Megamind: Mega Team Unite for the Wii`,
                    `Megamind: The Blue Defender for the DS and PSP`,
                    `Rise of the Guardians: The Video Game for the PS3, Xbox 360, Wii, Wii U, DS and 3DS`,
                    `The Croods: Prehistoric Party! for the Wii U, Wii, DS and 3DS`,
                    `Turbo: Super Stunt Squad for the Wii, Wii U, DS, 3DS, PS3 and Xbox 360`,
                    `Casper the Friendly Ghost video game for the PS1, Sega Saturn, SNES, GB, 3DO, GBC, GBA and PC`,
                    `Casper: A Spirited Beginning Activity Center for the PC`,
                    `Casper: Friends Around the World for the PS1`,
                    `Casper: Spirit Dimensions for the PS2 and Gamecube`,
                    `Casper and the Ghostly Trio for the PS2`,
                    `the Casper's Scare School video game for the PS2, DS and Wii`,
                    `The Chronicles of Narnia: The Lion, the Witch and the Wardrobe video game for the Xbox, PS2, PC, GBA, Gamecube and DS`,
                    `E.T. the Extra-Terrestrial for the Atari 2600`,
                    `E.T. the Extra-Terrestrial for the TI-99/4A`,
                    `E.T. the Extra-Terrestrial for the GBA`,
                    `E.T. Go Home (UFI und sein gefährlicher Einsatz) for the Atari 2600`,
                    `E.T.: Digital Companion for the GBC`,
                    `E.T.: Escape from Planet Earth for the GBC`,
                    `E.T.: Interplanetary Mission for the PC and PS1`,
                    `E.T. and the Cosmic Garden`,
                    `E.T.: Away from Home for the PC`,
                    `E.T.: Phone Home Adventure for the PC`,
                    `E.T.: The Green Planet`,
                    `the Ghostbusters video game for the Atari 800, Commodore 64, MSX, ZX Spectrum, Amstrad CPC, Atari 2600 and Apple II`,
                    `The Real Ghostbusters for the Arcade`,
                    `the Ghostbusters video game for the NES, Sega Master System and Genesis`,
                    `Ghostbusters II for the NES, Atari 2600, Amiga, Commodore 64, MSX, PC, ZX Spectrum and Amstrad CPC`,
                    `New Ghostbusters II for the GB and NES`,
                    `the Real Ghostbusters for the GBA`,
                    `Ghostbusters: The Video Game for the PlayStation 3, PlayStation 2, PlayStation Portable, Xbox 360, Nintendo DS, Wii and PC`,
                    `Ghostbusters: Sanctum of Slime for PSN, Xbox Live and PC`,
                    `the Ghostbusters (2016) video game for the PS4, Xbox One and PC`,
                    `the Harry Potter and the Philosopher's Stone video game for the PS1, PS2, Xbox, Gamecube, GBC, GBA and PC`,
                    `the Harry Potter and the Chaber of Secrets video game for the PS1, PS2, Xbox, Gamecube, GBC, GBA and PC`,
                    `the Harry Potter and the Prisoner of Azkaban video game for the PS2, Xbox, Gamecube, GBA and PC`,
                    `the Harry Potter and the Goblet of Fire video game for the PS2, Xbox, Gamecube, DS, PSP, GBA and PC`,
                    `the Harry Potter and the Order of the Phoenix video game for the PS2, PS3, Xbox, Wii, GBA, PSP, DS and PC`,
                    `the Harry Potter and the Half-Blood Prince video game for the PS2, PS3, Xbox, Wii, PSP, DS and PC`,
                    `the Harry Potter and the Deathly Hallows - Part 1 video game for the PS3, Xbox 360, Wii, DS, and PC`,
                    `the Harry Potter and the Deathly Hallows - Part 2 video game for the PS3, Xbox 360, Wii, DS, and PC`,
                    `Harry Potter Quidditch World Cup for the PS2, Xbox, Gamecube, GBA and PC`,
                    `the Harry Potter video game for the Kinect`,
                    `the Jurassic Park video game for the NES, GB, SNES, Genesis, Game Gear, MAster System, Sega CD, Amiga and Arcade`,
                    `Jurassic Park 2: the Chaos Continues for the SNES and Game Boy`,
                    `Jurassic Park: Rampage Edition for the Sega Genesis`,
                    `The Lost World: Jurassic Park for the PS1, Sega Saturn and Arcade`,
                    `Warpath: Jurassic Park for the PS1`,
                    `Jurassic Park III: Dino Defender for the PC`,
                    `Jurassic Park III: Danger Zone! for the PC`,
                    `Jurassic Park III: Island Attack for the GBA`,
                    `Jurassic Park III: The DNA Factor for the GBA`,
                    `Jurassic Park III: Park Builder for the GBA`,
                    `Scan Command: Jurassic Park for the PC`,
                    `Jurassic Park: Dinosaur Battles for the PC`,
                    `Jurassic Park: Operation Genesis for the PS2, Xbox and PC`,
                    `Jurassic Park Institute Tour: Dinosaur Rescue for the GBA`,
                    `Jurassic Park: The Game for the PS3, Xbox 360 and PC`,
                    `Jurassic World Evolution for PSN, Xbox Live and PC`,
                    `the Disney's Lilo & Stitch video game for the GBA`,
                    `Motto! Stitch! DS: Rhythm de Rakugaki Daisakusen for the DS`,
                    `Disney's Lilo & Stitch: Trouble in Paradise for the PS1 and PC`,
                    `Disney's Stitch: Experiment 626 for the PS2`,
                    `Lilo & Stitch: Hawaiian Adventure for the PC`,
                    `Lilo & Stitch Pinball for the PC`,
                    `Lilo & Stitch 2: Hämsterviel Havoc for the GBA`,
                    `Disney Stitch Jam for the DS`,
                    `The Lion King video game for the Genesis, SNES, NES, GB, Amiga, PC, Game Gear and Master System`,
                    `The Lion King: Simba's Mighty Adventure for the GBC and PS1`,
                    `Timon & Pumbaa's Jungle Games for the SNES and PC`,
                    `The Lion King 1½ for the GBA`,
                    `Disney's Adventures in Typing With Timon and Pumbaa for the PC`,
                    `Pink Panther in Pink Goes To Hollywood for the SNES and Genesis`,
                    `The Pink Panther: Passport to Peril for the PC`,
                    `The Pink Panther: Hokus Pokus Pink for the PC`,
                    `the Pirates of the Caribbean: The Curse of the Black Pearl video game for the GBA`,
                    `Pirates of the Caribbean: The Game for the Xbox and PC`,
                    `Pirates of the Caribbean: Dead Man's Chest for the PSP, GBA and DS`,
                    `Pirates of the Caribbean: The Legend of Jack Sparrow for the PS2 and PC`,
                    `Pirates of the Caribbean: At World's End for the Wii, DS, Xbox 360, PSP, PS2, PS3 and PC`,
                    `the Spider-Man video game for the PS1, GBC, N64, Dreamcast and PC`,
                    `the Spider-Man 2 video game for the PS2, GBA, Gamecube, Xbox, DS, PSP, N-Gage and PC`,
                    `the Spider-Man 3 video game for the GBA, PC, DS, PS2, Wii, Xbox 360, Ps3 and PSP`,
                    `the Star Wars video game for the NES, GB, Master System, Game Gear, Arcade and Famicom`,
                    `the Disney's Tarzan video game for the PS1`,
                    `Tarzan: Untamed for the PS2 and Gamecube`,
                    `Tarzan Jungle Tumble for the PC`,
                    `Disney's Tarzan: Return to the Jungle for the PC`,
                    `The Wizard of Oz video game for the SNES`];

            var r = Math.floor((Math.random() * w.length));

            message.channel.send(`Recently purchased `+w[r]+`.`);
        }
    }


    //Netplay

    if(command === `NETPLAY`) {
        var netplayMessage = `${sender.username} would like to play! `;

        if (message.member.roles.find(`name`, `VS-NW`)) {
            let role = message.guild.roles.find(`name`, `N-NW`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-CT`)) {
            let role = message.guild.roles.find(`name`, `N-CT`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-NE`)) {
            let role = message.guild.roles.find(`name`, `N-NE`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-SW`)) {
            let role = message.guild.roles.find(`name`, `N-SW`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-MW`)) {
            let role = message.guild.roles.find(`name`, `N-MW`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-SE`)) {
            let role = message.guild.roles.find(`name`, `N-SE`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-S`)) {
            let role = message.guild.roles.find(`name`, `N-S`);
            netplayMessage += `${role} `;
        }
        if (message.member.roles.find(`name`, `VS-EU`)) {
            let role = message.guild.roles.find(`name`, `N-EU`);
            netplayMessage += `${role} `;
        }

        message.channel.send(netplayMessage);
    }

    if(command === `OPTIN` || command === `OPT-IN`) {
        if(!args[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle(`Netplay Roles`)
                .setColor(0x00BECC)
                .setDescription(`Add an N-XX role to be notified when someone is searching for players in your region. Add a VS-XX role to search for that region when you use t!netplay`)
                .addField(`Northwest`, `N-NW | VS-NW`, true)
                .addField(`Central`, `N-CT | VS-CT`, true)
                .addField(`Northeast`, `N-NE | VS-NE`, true)
                .addField(`Southwest`, `N-SW | VS-SW`, true)
                .addField(`Midwest`, `N-MW | VS-MW`, true)
                .addField(`Southeast`, `N-SE | VS-SE`, true)
                .addField(`South`, `N-S | VS-S`, true)
                .addField(`Europe`, `N-EU | VS-EU`, true)
            message.channel.send({embed});
        } else if (args[0] === `N-NW` || args[0] === `VS-NW` || args[0] === `N-CT` || args[0] === `VS-CT` || args[0] === `N-NE` || args[0] === `VS-NE` || args[0] === `N-SW` || args[0] === `VS-SW` || args[0] === `N-MW` || args[0] === `VS-MW` || args[0] === `N-SE` || args[0] === `VS-SE` || args[0] === `N-S` || args[0] === `VS-S` || args[0] === `N-EU` || args[0] === `VS-EU`) {
            var role = message.guild.roles.find(`name`, args[0]);

            message.member.addRole(role);

            message.channel.send(`Successfully added the `+args[0]+` role.`);
        } else {
            message.channel.send(`Error: invalid role`);
        }
    }

    if(command === `OPTOUT` || command === `OPT-OUT`) {
        if (args[0] === `N-NW` || args[0] === `VS-NW` || args[0] === `N-CT` || args[0] === `VS-CT` || args[0] === `N-NE` || args[0] === `VS-NE` || args[0] === `N-SW` || args[0] === `VS-SW` || args[0] === `N-MW` || args[0] === `VS-MW` || args[0] === `N-SE` || args[0] === `VS-SE` || args[0] === `N-S` || args[0] === `VS-S` || args[0] === `N-EU` || args[0] === `VS-EU`) {
            var role = message.guild.roles.find(`name`, args[0]);

            message.member.removeRole(role);

            message.channel.send(`Successfully removed the `+args[0]+` role.`);
        } else {
            message.channel.send(`Error: invalid role`);
        }
    }

    //Silverbux

    if (sCommand === `BALANCE` || sCommand === `BAL` || sCommand === `MONEY` || sCommand === `SILVERBUX` || sCommand === `SBUX` || sCommand === `BUX`) {
        var results = await eco.FetchBalance(sender.id);

        const embed = new Discord.RichEmbed()
            .setTitle(`${sender.username}\'s Balance`)
            .setColor(0xF1C40F)
            .addField(currencyName, `${results.balance}`, true)
        message.channel.send({embed});
    }

    if (sCommand === `CHECKBAL`) {
        if (!message.member.roles.find("name", modRole2)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: incorrect permissions')
                .setDescription('This command requires the ' + modRole2 + ' role.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        var results = await eco.FetchBalance(message.mentions.users.first().id);

        message.channel.send(results.balance);
    }

    if (sCommand === `INIT`) {
        if (!message.member.roles.find("name", modRole2)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: incorrect permissions')
                .setDescription('This command requires the ' + modRole2 + ' role.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        var defineduser = '';
        if (!sArgs[1]) { //If they didn't define anyone, add it to their own balance
            defineduser = sender;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

        var output = await eco.FetchBalance(defineduser.id);

        if (output.balance == 0) { //User does not have a balance
            var results = await eco.SetBalance(defineduser.id, 100);

            const embed = new Discord.RichEmbed()
                .setTitle(`${defineduser.username}\'s Balance`)
                .setColor(0xF1C40F)
                .addField('SilverBux', `${results.balance}`, true)
            message.channel.send({embed});
        } else { //User already has a balance
            message.channel.send(`Error: This user already has a balance`);
        }
    }

    if (sCommand === `ADD`) {
        //Check for better mod
        if (!message.member.roles.find("name", modRole2)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: incorrect permissions')
                .setDescription('This command requires the ' + modRole2 + ' role.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined an amount
        if (!sArgs[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of ${currencyName} to add. \nExample: \`${prefix2}add <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Make sure args[0] is a number
        if (isNaN(sArgs[0])) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: not a number')
                .setDescription(`This command requires an amount of ${currencyName} to add. Example: \`${prefix2}add <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        var defineduser = '';
        if (!sArgs[1]) { //If they didn't define anyone, add it to their own balance
            defineduser = sender;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

        var results = await eco.AddToBalance(defineduser.id, sArgs[0]);

        const embed = new Discord.RichEmbed()
            .setTitle(`${defineduser.username}\'s Balance`)
            .setColor(0xF1C40F)
            .addField('SilverBux', `${results.newbalance}`, true)
        message.channel.send({embed});
    }

    if (sCommand === `SUB` || sCommand === `SUBTRACT`) {
        //Check for better mod
        if (!message.member.roles.find("name", modRole2)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: incorrect permissions')
                .setDescription('This command requires the ' + modRole2 + ' role.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined an amount
        if (!sArgs[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of ${currencyName} to subtract. \nExample: \`${prefix2}sub <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Make sure args[0] is a number
        if (isNaN(sArgs[0])) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: not a number')
                .setDescription(`This command requires an amount of ${currencyName} to subtract. Example: \`${prefix2}sub <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        var defineduser = '';
        if (!sArgs[1]) { //If they didn't define anyone, add it to their own balance
            defineduser = sender;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

        var results = await eco.SubstractFromBalance(defineduser.id, sArgs[0]);

        const embed = new Discord.RichEmbed()
            .setTitle(`${defineduser.username}\'s Balance`)
            .setColor(0xF1C40F)
            .addField('SilverBux', `${results.newbalance}`, true)
        message.channel.send({embed});
    }

    if (sCommand === `GIVE` || sCommand === `PAY` || sCommand === `TIP` || sCommand === `TAKEMYMONEYBITCH`) {
        //Check if they defined an amount
        if (!sArgs[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of ${currencyName} to give. \nExample: \`${prefix2}sub <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Make sure args[0] is a number
        if (isNaN(sArgs[0])) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: not a number')
                .setDescription(`This command requires an amount of ${currencyName} to give. Example: \`${prefix2}sub <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        if (Math.sign(sArgs[0]) == -1) {
            message.channel.send(`fuck you`);
            return;
        }

        //Check for defined user
        var defineduser = '';
        if (!sArgs[1]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no user defined')
                .setDescription(`This command requires a user to give ${currencyName} to. Example: \`${prefix2}give <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

        var amount = sArgs[0];
        var senderBalance = await eco.FetchBalance(sender.id);

        //Check if sender has enough money
        if (senderBalance.balance < amount) {
            const embed = new Discord.RichEmbed()
                .setTitle(`Error: not enough ${currencyName}`)
                .setDescription(`You do not have enough ${currencyName} to perform this action.`)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        var transfer = await eco.Transfer(sender.id, defineduser.id, amount);

        var senderNewBalance = await eco.FetchBalance(sender.id);
        var recipientNewBalance = await eco.FetchBalance(defineduser.id);

        const embed = new Discord.RichEmbed()
            .setTitle(`${sArgs[0]} ${currencyName} added to ${defineduser.username}\'s Balance`)
            .setColor(0xF1C40F)
            .addField(`${defineduser.username}'s Balance'`, `${recipientNewBalance.balance}`, true)
            .addField(`${sender.username}'s Balance'`, `${senderNewBalance.balance}`, true)
        message.channel.send({embed});
    }

    //TedCoin

    //SQL Initialization
    sql.get(`SELECT * FROM bank WHERE userID = "${message.author.id}"`).then(row => {
        if (!row) {
            sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [message.author.id, 0]);
        }
    }).catch(() => {
        console.error; //Log errors to console
        sql.run(`CREATE TABLE IF NOT EXISTS bank (userID TEXT, balance INTEGER)`).then( () => {
            sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [message.author.id, 0]);
        })
    })

    //Balance
    if (command === `BALANCE` || command === `BAL` || command === `MONEY`) {
        //Fetch balance from table
        sql.get(`SELECT * FROM bank WHERE userID ="${message.author.id}"`).then(row => {
            if (!row) return message.reply("Error: Unfortunately you do not have any TedCoin yet!");

            //Format embed and send
            const embed = new Discord.RichEmbed()
                .setTitle(`${message.author.username}\'s Balance`)
                .setColor(0xF1C40F)
                .addField('TedCoin', `${row.balance}`, true)
            message.channel.send({embed});
        })
    }

    //Add to balance
    if (command === `ADD`) {
        //Check for admin
        if (!message.member.roles.find("name", modRole) && !message.member.roles.find("name", modRole2)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: incorrect permissions')
                .setDescription('This command requires the ' + modRole + ' role.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined an amount
        if (!args[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of TedCoin to add. \nExample: \`${prefix}add <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Make sure args[0] is a number
        if (isNaN(args[0])) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: not a number')
                .setDescription(`This command requires an amount of TedCoin to add. Example: \`${prefix}add <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined a user
        let defineduser = '';
        if (!args[1]) { //If they didn't define anyone, add it to their own balance
            defineduser = message.author.id;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

        sql.get(`SELECT * FROM bank WHERE userID ="${defineduser}"`).then(row => {
            if(!row) {
                sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [defineduser, 0]);
            } else {
                //Add the points
                sql.run(`UPDATE bank SET balance =${row.balance + parseInt(args[0])} WHERE userID ="${defineduser}"`);

                //Let the user know
                var mentioned = client.users.get(defineduser);
                mentioned = mentioned.username;
                const embed = new Discord.RichEmbed()
                    .setTitle(`${args[0]} TedCoin added to ${mentioned}\'s Balance`)
                    .setColor(0xF1C40F)
                    .addField(`New Balance`, `${row.balance + parseInt(args[0])}`, true)
                message.channel.send({embed});
            }
        }).catch(() => {
            console.error;
            sql.run(`CREATE TABLE IF NOT EXISTS bank (userID TEXT, balance INTEGER)`).then( () => {
                sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [defineduser, 0]);
            })
        })
    }

    //Subtract from balance
    if (command === `SUB` || command === `SUBTRACT`) {
        //Check for admin
        if (!message.member.roles.find("name", modRole) && !message.member.roles.find("name", modRole2)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: incorrect permissions')
                .setDescription('This command requires the ' + modRole + ' role.')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined an amount
        if (!args[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of TedCoin to subtract. \nExample: \`${prefix}sub <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Make sure args[0] is a number
        if (isNaN(args[0])) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of TedCoin to subtract. Example: \`${prefix}sub <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined a user
        let defineduser = '';
        if (!args[1]) { //If they didn't define anyone, add it to their own balance
            defineduser = message.author.id;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

        sql.get(`SELECT * FROM bank WHERE userID ="${defineduser}"`).then(row => {
            if(!row) {
                sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [defineduser, 0]);
            } else {
                //Subtract the points
                sql.run(`UPDATE bank SET balance =${row.balance - parseInt(args[0])} WHERE userID ="${defineduser}"`);

                //Let the user know
                var mentioned = client.users.get(defineduser);
                mentioned = mentioned.username;
                const embed = new Discord.RichEmbed()
                    .setTitle(`${args[0]} TedCoin subtracted from ${mentioned}\'s Balance`)
                    .setColor(0xF1C40F)
                    .addField(`New Balance`, `${row.balance - parseInt(args[0])}`, true)
                message.channel.send({embed});
            }
        }).catch(() => {
            console.error;
            sql.run(`CREATE TABLE IF NOT EXISTS bank (userID TEXT, balance INTEGER)`).then( () => {
                sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [defineduser, 0]);
            })
        })
    }

    if (command === 'GIVE' || command === 'PAY' || command === 'TIP') {
        //Check if they defined an amount
        if (!args[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of TedCoin to give. \nExample: \`${prefix}give <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Make sure args[0] is a number
        if (isNaN(args[0])) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no amount provided')
                .setDescription(`This command requires an amount of TedCoin to give. Example: \`${prefix}give <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        //Check if they defined a user
        let defineduser = '';
        if (!args[1]) { //If they didn't define anyone, give an error
            const embed = new Discord.RichEmbed()
                .setTitle('Error: no user defined')
                .setDescription(`This command requires a user to give TedCoin to. Example: \`${prefix}give <amount> <user>\``)
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        } else { //If they define someone, run this
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

        if (message.member.roles.find("name", banRole)) {
            const embed = new Discord.RichEmbed()
                .setTitle('Error: banned user')
                .setDescription('You are banned from using the !give command')
                .setColor(0xFF0000)
            message.channel.send({embed});
            return;
        }

        sql.get(`SELECT * FROM bank WHERE userID ="${defineduser}"`).then(row => {
            if(!row) {
                sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [defineduser, 0]);
            } else {
                //Subtract from sender
                sql.get(`SELECT * FROM bank WHERE userID="${message.author.id}"`).then(row => {
                    if(!row) {
                        sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [message.author.id, 0]);
                    }  if (args[0] > row.balance) {
                        const embed = new Discord.RichEmbed()
                            .setTitle('Error: balance too low')
                            .setDescription(`You do not have enough TedCoin to complete this transaction. Use \`${prefix}bal\` to check your balance.`)
                            .setColor(0xFF0000)
                        message.channel.send({embed});
                        args[0] = 0;
                        return;
                    } else {
                        //Remove points from sender
                        sql.run(`UPDATE bank SET balance =${row.balance - parseInt(args[0])} WHERE userID = "${message.author.id}"`);

                        //Get receiver's info again
                        sql.get(`SELECT * FROM bank WHERE userID ="${defineduser}"`).then(row=> {
                            //Add points
                            sql.run(`UPDATE bank SET balance =${row.balance + parseInt(args[0])} WHERE userID ="${defineduser}"`);
                        })
                    }
                })

                //Let the user know
                var mentioned = client.users.get(defineduser);
                mentioned = mentioned.username;
                const embed = new Discord.RichEmbed()
                    .setTitle(`${args[0]} TedCoin added to ${mentioned}\'s Balance`)
                    .setColor(0xF1C40F)
                    .addField(`New Balance`, `${row.balance + parseInt(args[0])}`, true)
                message.channel.send({embed});
            }
        }).catch(() => {
            console.error;
            sql.run(`CREATE TABLE IF NOT EXISTS bank (userID TEXT, balance INTEGER)`).then( () => {
                sql.run(`INSERT INTO bank (userID, balance) VALUES (?, ?)`, [defineduser, 0]);
            })
        })
    }





})

client.login(token);
