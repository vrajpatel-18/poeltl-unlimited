const playerList = [
    "Precious Achiuwa",
    "Steven Adams",
    "Bam Adebayo",
    "Santi Aldama",
    "LaMarcus Aldridge",
    "Nickeil Alexander-Walker",
    "Grayson Allen",
    "Jarrett Allen",
    "Jose Alvarado",
    "Kyle Anderson",
    "Giannis Antetokounmpo",
    "Thanasis Antetokounmpo",
    "Carmelo Anthony",
    "Cole Anthony",
    "OG Anunoby",
    "Ryan Arcidiacono",
    "Trevor Ariza",
    "D.J. Augustin",
    "Deni Avdija",
    "Deandre Ayton",
    "Udoka Azubuike",
    "Marvin Bagley III",
    "LaMelo Ball",
    "Lonzo Ball",
    "Mo Bamba",
    "Desmond Bane",
    "Dalano Banton",
    "Harrison Barnes",
    "Scottie Barnes",
    "RJ Barrett",
    "Will Barton",
    "Charles Bassey",
    "Keita Bates-Diop",
    "Nicolas Batum",
    "Kent Bazemore",
    "Darius Bazley",
    "Bradley Beal",
    "Malik Beasley",
    "DeAndre' Bembry",
    "Davis Bertans",
    "Patrick Beverley",
    "Saddiq Bey",
    "Khem Birch",
    "Goga Bitadze",
    "Bismack Biyombo",
    "Nemanja Bjelica",
    "Eric Bledsoe",
    "Keljin Blevins",
    "Bogdan Bogdanovic",
    "Bojan Bogdanovic",
    "Bol Bol",
    "Leandro Bolmaro",
    "Isaac Bonga",
    "Devin Booker",
    "Brandon Boston Jr.",
    "Chris Boucher",
    "James Bouknight",
    "Avery Bradley",
    "Tony Bradley",
    "Ignas Brazdeikis",
    "Mikal Bridges",
    "Miles Bridges",
    "Oshae Brissett",
    "Malcolm Brogdon",
    "Armoni Brooks",
    "Dillon Brooks",
    "Bruce Brown",
    "Jaylen Brown",
    "Sterling Brown",
    "Greg Brown III",
    "Charlie Brown Jr.",
    "Troy Brown Jr.",
    "Jalen Brunson",
    "Thomas Bryant",
    "Reggie Bullock",
    "Trey Burke",
    "Alec Burks",
    "Jared Butler",
    "Jimmy Butler",
    "Devontae Cacok",
    "Kentavious Caldwell-Pope",
    "Facundo Campazzo",
    "Vlatko Cancar",
    "Clint Capela",
    "Vernon Carey Jr.",
    "Jevon Carter",
    "Wendell Carter Jr.",
    "Alex Caruso",
    "Justin Champagnie",
    "Chris Chiozza",
    "Marquese Chriss",
    "Josh Christopher",
    "Gary Clark",
    "Brandon Clarke",
    "Jordan Clarkson",
    "Nic Claxton",
    "Amir Coffey",
    "John Collins",
    "Zach Collins",
    "Mike Conley",
    "Pat Connaughton",
    "Tyler Cook",
    "Sharife Cooper",
    "DeMarcus Cousins",
    "Robert Covington",
    "Torrey Craig",
    "Jae Crowder",
    "Jarrett Culver",
    "Cade Cunningham",
    "Seth Curry",
    "Stephen Curry",
    "Anthony Davis",
    "Ed Davis",
    "Terence Davis",
    "DeMar DeRozan",
    "Dewayne Dedmon",
    "Donte DiVincenzo",
    "Hamidou Diallo",
    "Gorgui Dieng",
    "Spencer Dinwiddie",
    "Luka Doncic",
    "Luguentz Dort",
    "Ayo Dosunmu",
    "Goran Dragic",
    "Andre Drummond",
    "Chris Duarte",
    "David Duke Jr.",
    "Kevin Durant",
    "Anthony Edwards",
    "Kessler Edwards",
    "CJ Elleby",
    "Wayne Ellington",
    "Joel Embiid",
    "Drew Eubanks",
    "Derrick Favors",
    "Bruno Fernando",
    "Dorian Finney-Smith",
    "Malik Fitts",
    "Malachi Flynn",
    "Bryn Forbes",
    "Trent Forrest",
    "Evan Fournier",
    "De'Aaron Fox",
    "Markelle Fultz",
    "Wenyen Gabriel",
    "Daniel Gafford",
    "Danilo Gallinari",
    "Darius Garland",
    "Usman Garuba",
    "Luka Garza",
    "Rudy Gay",
    "Paul George",
    "Taj Gibson",
    "Josh Giddey",
    "Shai Gilgeous-Alexander",
    "Anthony Gill",
    "Rudy Gobert",
    "Brandon Goodwin",
    "Aaron Gordon",
    "Eric Gordon",
    "Devonte' Graham",
    "Jerami Grant",
    "Danny Green",
    "Draymond Green",
    "JaMychal Green",
    "Jalen Green",
    "Javonte Green",
    "Jeff Green",
    "Josh Green",
    "Blake Griffin",
    "Quentin Grimes",
    "Kyle Guy",
    "Rui Hachimura",
    "Tyrese Haliburton",
    "R.J. Hampton",
    "Tim Hardaway Jr.",
    "James Harden",
    "Maurice Harkless",
    "Montrezl Harrell",
    "Gary Harris",
    "Joe Harris",
    "Tobias Harris",
    "Josh Hart",
    "Isaiah Hartenstein",
    "Udonis Haslem",
    "Sam Hauser",
    "Jaxson Hayes",
    "Killian Hayes",
    "Gordon Hayward",
    "Juancho Hernangomez",
    "Willy Hernangomez",
    "Tyler Herro",
    "Buddy Hield",
    "Haywood Highsmith",
    "George Hill",
    "Malcolm Hill",
    "Aaron Holiday",
    "Jrue Holiday",
    "Justin Holiday",
    "Richaun Holmes",
    "Rodney Hood",
    "Al Horford",
    "Talen Horton-Tucker",
    "Danuel House Jr.",
    "Dwight Howard",
    "Markus Howard",
    "Kevin Huerter",
    "Elijah Hughes",
    "De'Andre Hunter",
    "Bones Hyland",
    "Serge Ibaka",
    "Andre Iguodala",
    "Joe Ingles",
    "Brandon Ingram",
    "Kyrie Irving",
    "Jonathan Isaac",
    "Frank Jackson",
    "Isaiah Jackson",
    "Josh Jackson",
    "Reggie Jackson",
    "Jaren Jackson Jr.",
    "LeBron James",
    "Ty Jerome",
    "Isaiah Joe",
    "Alize Johnson",
    "Cameron Johnson",
    "David Johnson",
    "Jalen Johnson",
    "Keldon Johnson",
    "Keon Johnson",
    "Stanley Johnson",
    "Nikola Jokic",
    "Damian Jones",
    "Herbert Jones",
    "Kai Jones",
    "Mason Jones",
    "Tre Jones",
    "Tyus Jones",
    "Derrick Jones Jr.",
    "DeAndre Jordan",
    "Cory Joseph",
    "Frank Kaminsky",
    "Luke Kennard",
    "Corey Kispert",
    "Maxi Kleber",
    "Nathan Knight",
    "Kevin Knox II",
    "John Konchar",
    "Furkan Korkmaz",
    "Luke Kornet",
    "Vit Krejci",
    "Arnoldas Kulboka",
    "Jonathan Kuminga",
    "Kyle Kuzma",
    "Zach LaVine",
    "Jeremy Lamb",
    "Jock Landale",
    "Romeo Langford",
    "Jake Layman",
    "Caris LeVert",
    "Damion Lee",
    "Saben Lee",
    "Alex Len",
    "Kawhi Leonard",
    "Scottie Lewis",
    "Kira Lewis Jr.",
    "Damian Lillard",
    "Nassir Little",
    "Isaiah Livers",
    "Kevon Looney",
    "Brook Lopez",
    "Robin Lopez",
    "Didi Louzada",
    "Kevin Love",
    "Kyle Lowry",
    "Timothe Luwawu-Cabarrot",
    "Trey Lyles",
    "Theo Maledon",
    "Sandro Mamukelashvili",
    "Terance Mann",
    "Tre Mann",
    "Boban Marjanovic",
    "Lauri Markkanen",
    "Naji Marshall",
    "Caleb Martin",
    "Cody Martin",
    "Kelan Martin",
    "Kenyon Martin Jr.",
    "Garrison Mathews",
    "Wesley Matthews",
    "Tyrese Maxey",
    "Skylar Mays",
    "Miles McBride",
    "CJ McCollum",
    "T.J. McConnell",
    "Jaden McDaniels",
    "Jalen McDaniels",
    "Doug McDermott",
    "JaVale McGee",
    "Rodney McGruder",
    "Jordan McLaughlin",
    "Ben McLemore",
    "De'Anthony Melton",
    "Chimezie Metu",
    "Khris Middleton",
    "Patty Mills",
    "Paul Millsap",
    "Shake Milton",
    "Davion Mitchell",
    "Donovan Mitchell",
    "Evan Mobley",
    "Malik Monk",
    "Moses Moody",
    "Ja Morant",
    "Markieff Morris",
    "Monte Morris",
    "Marcus Morris Sr.",
    "Trey Murphy III",
    "Dejounte Murray",
    "Jamal Murray",
    "Mike Muscala",
    "Svi Mykhailiuk",
    "Larry Nance Jr.",
    "RJ Nembhard Jr.",
    "Aaron Nesmith",
    "Raul Neto",
    "Georges Niang",
    "Daishen Nix",
    "Zeke Nnaji",
    "Nerlens Noel",
    "Jaylen Nowell",
    "Frank Ntilikina",
    "Kendrick Nunn",
    "Jusuf Nurkic",
    "David Nwaba",
    "Jordan Nwora",
    "Royce O'Neale",
    "Semi Ojeleye",
    "Chuma Okeke",
    "Josh Okogie",
    "Onyeka Okongwu",
    "Isaac Okoro",
    "Victor Oladipo",
    "Kelly Olynyk",
    "Cedi Osman",
    "Kelly Oubre Jr.",
    "Eric Paschall",
    "Chris Paul",
    "Cameron Payne",
    "Elfrid Payton",
    "Gary Payton II",
    "Jamorko Pickett",
    "Theo Pinson",
    "Mason Plumlee",
    "Jakob Poeltl",
    "Aleksej Pokusevski",
    "Yves Pons",
    "Jordan Poole",
    "Kevin Porter Jr.",
    "Michael Porter Jr.",
    "Otto Porter Jr.",
    "Bobby Portis",
    "Kristaps Porzingis",
    "Dwight Powell",
    "Myles Powell",
    "Norman Powell",
    "Jason Preston",
    "Joshua Primo",
    "Taurean Prince",
    "Payton Pritchard",
    "Trevelin Queen",
    "Neemias Queta",
    "Immanuel Quickley",
    "Julius Randle",
    "Austin Reaves",
    "Cam Reddish",
    "Davon Reed",
    "Paul Reed",
    "Naz Reid",
    "Nick Richards",
    "Josh Richardson",
    "Austin Rivers",
    "Duncan Robinson",
    "Mitchell Robinson",
    "Jeremiah Robinson-Earl",
    "Isaiah Roby",
    "Rajon Rondo",
    "Derrick Rose",
    "Terrence Ross",
    "Terry Rozier",
    "Ricky Rubio",
    "D'Angelo Russell",
    "Matt Ryan",
    "Domantas Sabonis",
    "Luka Samanic",
    "Dario Saric",
    "Olivier Sarr",
    "Tomas Satoransky",
    "Admiral Schofield",
    "Dennis Schroder",
    "Jay Scrubb",
    "Alperen Sengun",
    "Collin Sexton",
    "Landry Shamet",
    "Day'Ron Sharpe",
    "Pascal Siakam",
    "Ben Simmons",
    "Marko Simonovic",
    "Anfernee Simons",
    "Jericho Sims",
    "Javonte Smart",
    "Marcus Smart",
    "Chris Smith",
    "Ish Smith",
    "Jalen Smith",
    "Xavier Sneed",
    "Tony Snell",
    "Jaden Springer",
    "Nik Stauskas",
    "Lance Stephenson",
    "Lamar Stevens",
    "DJ Stewart",
    "Isaiah Stewart",
    "Max Strus",
    "Jalen Suggs",
    "Keifer Sykes",
    "Jae'Sean Tate",
    "Jayson Tatum",
    "Terry Taylor",
    "Garrett Temple",
    "Tyrell Terry",
    "Daniel Theis",
    "Brodric Thomas",
    "Cam Thomas",
    "Isaiah Thomas",
    "Matt Thomas",
    "Klay Thompson",
    "Tristan Thompson",
    "JT Thor",
    "Matisse Thybulle",
    "Killian Tillie",
    "Xavier Tillman",
    "Isaiah Todd",
    "Obi Toppin",
    "Juan Toscano-Anderson",
    "Karl-Anthony Towns",
    "Gary Trent Jr.",
    "P.J. Tucker",
    "Myles Turner",
    "Jonas Valanciunas",
    "Fred VanVleet",
    "Jarred Vanderbilt",
    "Devin Vassell",
    "Gabe Vincent",
    "Nikola Vucevic",
    "Dean Wade",
    "Franz Wagner",
    "Moritz Wagner",
    "Ish Wainright",
    "Kemba Walker",
    "Lonnie Walker IV",
    "John Wall",
    "T.J. Warren",
    "P.J. Washington",
    "Duane Washington Jr.",
    "Yuta Watanabe",
    "Lindy Waters III",
    "Trendon Watford",
    "Quinndary Weatherspoon",
    "Russell Westbrook",
    "Coby White",
    "Derrick White",
    "Hassan Whiteside",
    "Joe Wieskamp",
    "Aaron Wiggins",
    "Andrew Wiggins",
    "Lindell Wigginton",
    "Brandon Williams",
    "Grant Williams",
    "Kenrich Williams",
    "Lou Williams",
    "Patrick Williams",
    "Ziaire Williams",
    "Robert Williams III",
    "Zion Williamson",
    "Dylan Windler",
    "Justise Winslow",
    "Cassius Winston",
    "James Wiseman",
    "Christian Wood",
    "Robert Woodard II",
    "Delon Wright",
    "Moses Wright",
    "McKinley Wright IV",
    "Thaddeus Young",
    "Trae Young",
    "Omer Yurtseven",
    "Ivica Zubac"
]

function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
}

function getRandomTeamId() {
    const teamIds = [1,2,4,5,6,7,8,9,10,11,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,38,40,41];
    let id = 3;
    while(!teamIds.includes(id)){
        min = Math.ceil(1);
        max = Math.floor(41);
        id = Math.floor(Math.random() * (41 - 1) + 1);
    }
    return id;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function closeModal(){
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
}

function openModal(){
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
}

function fetchRandomPlayer(callback){
    const randomTeamId = getRandomTeamId();
    //console.log(randomTeamId);
    fetch(`https://api-nba-v1.p.rapidapi.com/players?team=${randomTeamId}&season=2021`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
        }
    })
        .then(response => response.json())
        .then(data => {
            let randomPlayerId = (getRandomInt(0,data.response.length - 1)).toString();
            //console.log(randomPlayerId);
            let d = data.response[randomPlayerId];
            if(d.leagues.standard !== undefined)
                if(d.leagues.standard.active === false || d.height.feets === null || d.leagues.standard.pos === null || d.leagues.standard.jersey === null || d.nba.start + d.nba.pro !== 2021) fetchRandomPlayer(callback);
                else{
                    actual["firstName"] = d.firstname;
                    actual["lastName"] = d.lastname;
                    actual["name"] = `${d.firstname} ${d.lastname}`;
                    actual["position"] = d.leagues.standard.pos;
                    actual["height"] = `${d.height.feets}'${d.height.inches}"`
                    actual["heightInches"] = 12 * Number(d.height.feets) + Number(d.height.inches);
                    actual["age"] = getAge(d.birth.date);
                    actual["number"] = d.leagues.standard.jersey;

                    fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=${actual.firstName}_${actual.lastName}`, {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Host': 'nba-player-individual-stats.p.rapidapi.com',
                            'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                        }
                    })
                        .then(response => {
                            if(response.ok) return response.json();
                            else fetchRandomPlayer(callback);
                        })
                        .then(data => {
                            if(data.team === null || data.careerPoints < 10.0) fetchRandomPlayer(callback);
                            else{
                                actual["fullTeamName"] = data.team;
                                actual["img"] = data.headShotUrl;

                                let tName = data.team;
                                let numWords = 1;
                                let spacePos = [];
                                for(let x = 0; x < tName.length; x++){
                                    if(tName.charAt(x) === " "){
                                        numWords++;
                                        spacePos.push(x);
                                    }
                                }
                                let urlEnd = numWords == 2 ? `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, tName.length)}` : `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, spacePos[1])}%20${tName.slice(spacePos[1] + 1, tName.length)}`;
                                fetch(`https://api-nba-v1.p.rapidapi.com/teams?name=${urlEnd}`, {
                                    method: 'GET',
                                    headers: {
                                        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                                        'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                                    }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        let d2 = data.response["0"];
                                        actual["team"] = d2.code;
                                        actual["conference"] = d2.leagues.standard.conference;
                                        let div = d2.leagues.standard.division;
                                        actual["division"] = div.length <= 8 ? div.slice(0,3) + "." : div.charAt(0) + div.charAt(5).toUpperCase();

                                        //console.log("done");
                                        callback();
                                    });
                            }
                    });
                }
            else fetchRandomPlayer(callback);
        });
}

function fetchPlayer(name, callback){
    finishedFetching = false;
    let fname = name.slice(0,name.indexOf(" "));
    let lname = name.slice(name.indexOf(" ") + 1, name.length);
    if(lname.includes(".")) lname = lname.slice(0,lname.indexOf("."));
    if(lname.includes("-")) lname = lname.slice(0,lname.indexOf("-"));
    fetch(`https://api-nba-v1.p.rapidapi.com/players?search=${lname}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
        }
    })
        .then(response => {
            if(response.ok) return response.json();
            else callback();
        })
        .then(data => {
            let d;
            if(data.response.length >= 2){
                for(let x = 0; x < data.response.length; x++)
                    if(data.response[x.toString()].firstname === fname) d = data.response[x.toString()];
            }
            else{
                d = data.response["0"];
            }
            if(d.leagues.standard.active === false || d.height.feets === null || d.leagues.standard.pos === null) callback();
            else{
                player["firstName"] = d.firstname;
                player["lastName"] = d.lastname;
                player["name"] = `${d.firstname} ${d.lastname}`;
                player["position"] = d.leagues.standard.pos;
                player["height"] = `${d.height.feets}'${d.height.inches}"`
                player["heightInches"] = 12 * Number(d.height.feets) + Number(d.height.inches);
                player["age"] = getAge(d.birth.date);

                fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/fullname?name=${player.firstName}_${player.lastName}`, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'nba-player-individual-stats.p.rapidapi.com',
                        'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        if(data.team === null) callback();
                        else{
                            player["fullTeamName"] = data.team;
                            player["number"] = data.jerseyNumber.slice(1,data.jerseyNumber.length);

                            let tName = data.team;
                            let numWords = 1;
                            let spacePos = [];
                            for(let x = 0; x < tName.length; x++){
                                if(tName.charAt(x) === " "){
                                    numWords++;
                                    spacePos.push(x);
                                }
                            }
                            let urlEnd = numWords == 2 ? `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, tName.length)}` : `${tName.slice(0,spacePos[0])}%20${tName.slice(spacePos[0] + 1, spacePos[1])}%20${tName.slice(spacePos[1] + 1, tName.length)}`;
                            fetch(`https://api-nba-v1.p.rapidapi.com/teams?name=${urlEnd}`, {
                                method: 'GET',
                                headers: {
                                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                                    'X-RapidAPI-Key': 'f5f820ed34msh2bf494adbbe1e15p1a4929jsn9b4f3d210f92'
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    let d2 = data.response["0"];
                                    player["team"] = d2.code;
                                    player["conference"] = d2.leagues.standard.conference;
                                    let div = d2.leagues.standard.division;
                                    player["division"] = div.length <= 8 ? div.slice(0,3) + "." : div.charAt(0) + div.charAt(5).toUpperCase();

                                    finishedFetching = true;
                                    guesses.push(player);
                                    player = {};
                                    callback();
                                });
                            }
                });
            }
        });
}

function createLabel(){
    for(let c = 0; c < 8; c++){
        let tile = document.createElement("span");
        if(c == 0){
            tile.classList.add("label-tile-first");
        }
        else{
            tile.classList.add("label-tile");
            if(c == 1) tile.innerText = "TEAM";
            else if(c == 2) tile.innerText = "CONF";
            else if(c == 3) tile.innerText = "DIV";
            else if(c == 4) tile.innerText = "POS";
            else if(c == 5) tile.innerText = "HT";
            else if(c == 6) tile.innerText = "AGE";
            else if(c == 7) tile.innerText = "#";
        }
        document.getElementById("label").appendChild(tile);
    }
}

function createRow(rowNum){
    document.getElementById("board").style.height += 100;
    let r = rowNum;
    for(let c = 0; c < 8; c++){
        let tile = document.createElement("span");
        tile.id = r.toString() + "-" + c.toString();
        if(c == 0){
            tile.classList.add("name-tile");
        }
        else{
            tile.classList.add("tile");
        }
        tile.innerText = "";
        document.getElementById("board").appendChild(tile);
    }
}

const actual = {};
let player = {};
const guesses = [];
let canPlay = true;
let currGuess = 0;
let playersArray = [];
let finishedFetching = false;


window.onload = function(){
    init();
}

function init(){
    document.getElementById("message").innerText = "Generating random player...";
    fetchRandomPlayer(function(){
        document.getElementById("message").innerText = "Done!";
        document.getElementById("modalHeader").innerText = "Who is this mystery player?";
        document.getElementById("playerImage").style.filter = "brightness(0%)";
        document.getElementById("playerImage").src = actual.img;
        console.log(actual);
        setTimeout(function(){
            document.getElementById("message").style.opacity = "0";
            setTimeout(() => document.getElementById("message").remove(), 500);
            setTimeout(() => {
                document.querySelector(".guess").classList.remove("hidden");
                document.querySelector(".btn").classList.remove("hidden");
                createLabel();
            }, 500);
        }, 500);

        document.querySelector(".guess").addEventListener("keydown", (e) => {
            processInput(e);
        });

        document.querySelector(".close-modal").addEventListener("click",closeModal);
        document.querySelector(".overlay").addEventListener("click", closeModal);
        document.querySelector(".btn").addEventListener("click", openModal);

        document.querySelector(".guess").addEventListener("input", (e) => {
            playersArray = [];
            if(e.target.value){
                playersArray = playerList.filter(p => p.toLowerCase().includes(e.target.value.toLowerCase()));
                playersArray = playersArray.map(p => `<li><button class="option" onclick="clickGuess('${p}')">${p}</button></li>`);
            }
            showPlayersArray(playersArray.slice(0,5));
        });
    });
}

function clickGuess(desired){
    let guessedName = desired;
    showPlayersArray([]);
    document.querySelector(".guess").value = "";
    document.querySelector(".guess").classList.add("locked");
    document.querySelector(".guess").value = "Guessing...";
    document.querySelector(".guess").readOnly = true;
    fetchPlayer(guessedName, function(){
        if(finishedFetching){
            guess();
            if(canPlay){
                document.querySelector(".guess").classList.remove("locked");
                document.querySelector(".guess").value = "";
                document.querySelector(".guess").readOnly = false;
            }
        }
        else{
            document.querySelector(".guess").classList.add("locked");
            document.querySelector(".guess").value = "Invalid guess!";
            document.querySelector(".guess").readOnly = true;
            setTimeout(function(){
                document.querySelector(".guess").classList.remove("locked");
                document.querySelector(".guess").value = "";
                document.querySelector(".guess").readOnly = false;
            }, 1000);
        }
    });
}

function showPlayersArray(playersArray){
    const html = !playersArray.length ? "" : playersArray.join("");
    document.getElementById("results").innerHTML = html;
}

function processInput(e){
    if(canPlay === false) return;

    if(e.code == "Enter" && document.querySelector(".guess").value != "" && playersArray.length !== 0){ 
        let guessedName = playersArray[0].slice(playersArray[0].indexOf(">",6) + 1, playersArray[0].indexOf("<",6));
        showPlayersArray([]);
        document.querySelector(".guess").value = "";
        document.querySelector(".guess").classList.add("locked");
        document.querySelector(".guess").value = "Guessing...";
        document.querySelector(".guess").readOnly = true;
        fetchPlayer(guessedName, function(){
            if(finishedFetching){
                guess();
                if(canPlay){
                    document.querySelector(".guess").classList.remove("locked");
                    document.querySelector(".guess").value = "";
                    document.querySelector(".guess").readOnly = false;
                }
            }
            else{
                document.querySelector(".guess").classList.add("locked");
                document.querySelector(".guess").value = "Invalid guess!";
                document.querySelector(".guess").readOnly = true;
                setTimeout(function(){
                    document.querySelector(".guess").classList.remove("locked");
                    document.querySelector(".guess").value = "";
                    document.querySelector(".guess").readOnly = false;
                }, 1000);
            }
        });
    }
}

function guess(){
    if(currGuess <= 7){
        let guessed = guesses[currGuess];
        createRow(currGuess);
        
        //DISPLAY NAME
        document.getElementById(`${currGuess}-0`).innerText = guessed.name;
        if(guessed.name === actual.name) {
            document.getElementById(`${currGuess}-0`).classList.add("correct");
            win();
        }

        //TEAM
        document.getElementById(`${currGuess}-1`).innerText = guessed.team;
        if(guessed.team === actual.team) document.getElementById(`${currGuess}-1`).classList.add("correct");

        //CONFERENCE
        document.getElementById(`${currGuess}-2`).innerText = guessed.conference;
        if(guessed.conference === actual.conference) document.getElementById(`${currGuess}-2`).classList.add("correct");

        //DIVISION
        document.getElementById(`${currGuess}-3`).innerText = guessed.division;
        if(guessed.division === actual.division) document.getElementById(`${currGuess}-3`).classList.add("correct");

        //POSITION
        document.getElementById(`${currGuess}-4`).innerText = guessed.position;
        if(guessed.position === actual.position) document.getElementById(`${currGuess}-4`).classList.add("correct");
        else if(actual.position.includes(guessed.position) || guessed.position.includes(actual.position)) document.getElementById(`${currGuess}-4`).classList.add("present");

        //HEIGHT
        let heightDif = guessed.heightInches - actual.heightInches;
        if(guessed.heightInches === actual.heightInches){ //if height is correct
            document.getElementById(`${currGuess}-5`).innerText = guessed.height;
            document.getElementById(`${currGuess}-5`).classList.add("correct");
        }
        else if(Math.abs(heightDif) <= 2){ //if height is close
            if(heightDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↓";
                document.getElementById(`${currGuess}-5`).classList.add("present");
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↑";
                document.getElementById(`${currGuess}-5`).classList.add("present");
            }
        }
        else{ //if height is not close
            if(heightDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↓";
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-5`).innerText = guessed.height + "\n↑";
            }
        }

        //AGE
        let ageDif = guessed.age - actual.age;
        if(guessed.age === actual.age){ //if height is correct
            document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString();
            document.getElementById(`${currGuess}-6`).classList.add("correct");
        }
        else if(Math.abs(ageDif) <= 2){ //if height is close
            if(ageDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↓";
                document.getElementById(`${currGuess}-6`).classList.add("present");
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↑";
                document.getElementById(`${currGuess}-6`).classList.add("present");
            }
        }
        else{ //if height is not close
            if(ageDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↓";
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-6`).innerText = guessed.age.toString() + "\n↑";
            }
        }

        //NUMBER
        let numberDif = Number(guessed.number) - actual.number;
        if(guessed.number == actual.number){ //if height is correct
            document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString();
            document.getElementById(`${currGuess}-7`).classList.add("correct");
        }
        else if(Math.abs(numberDif) <= 2){ //if height is close
            if(numberDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↓";
                document.getElementById(`${currGuess}-7`).classList.add("present");
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↑";
                document.getElementById(`${currGuess}-7`).classList.add("present");
            }
        }
        else{ //if height is not close
            if(numberDif > 0){ //if guess is higher than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↓";
            }
            else{ //if guess is lower than actual
                document.getElementById(`${currGuess}-7`).innerText = guessed.number.toString() + "\n↑";
            }
        }
        
        currGuess++;
    }
    else{
        //SHOW ACTUAL PLAYER AND FILL RED
        createRow(8);
        document.getElementById("8-0").innerText = actual.name;
        document.getElementById("8-0").classList.add("incorrect");
        document.getElementById("8-1").innerText = actual.team;
        document.getElementById("8-1").classList.add("incorrect");
        document.getElementById("8-2").innerText = actual.conference;
        document.getElementById("8-2").classList.add("incorrect");
        document.getElementById("8-3").innerText = actual.division;
        document.getElementById("8-3").classList.add("incorrect");
        document.getElementById("8-4").innerText = actual.position;
        document.getElementById("8-4").classList.add("incorrect");
        document.getElementById("8-5").innerText = actual.height;
        document.getElementById("8-5").classList.add("incorrect");
        document.getElementById("8-6").innerText = actual.age.toString();
        document.getElementById("8-6").classList.add("incorrect");
        document.getElementById("8-7").innerText = actual.number.toString();
        document.getElementById("8-7").classList.add("incorrect");

        lose();
    }
}


function win(){
    canPlay = false;
    document.getElementById("playerImage").style.filter = "brightness(100%)";
    document.getElementById("modalName").innerText = actual.name;
    document.getElementById("modalHeader").innerText = "You Guessed Correctly!";
    document.querySelector(".btn").innerText = "VIEW RESULT";
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".guess").classList.add("locked");
    document.querySelector(".guess").value = `You guessed it in ${currGuess+1} tries!`;
    document.querySelector(".guess").readOnly = true;
}

function lose(){
    canPlay = false;
    document.getElementById("playerImage").style.filter = "brightness(100%)";
    document.getElementById("modalName").innerText = actual.name;
    document.getElementById("modalHeader").innerText = "Sorry, the correct player was";
    document.querySelector(".btn").innerText = "VIEW RESULT";
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
    document.querySelector(".guess").classList.add("locked");
    document.querySelector(".guess").value = "Game Over";
    document.querySelector(".guess").readOnly = true;
}