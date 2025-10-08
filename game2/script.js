let outputDiv, textSpan, cursorSpan, fullOutput;
let nextFunction;

let battlecruisers = 5;
let destroyers = 10;
let battleships = 1;
let fighters = 10000;
let bombers = 7000;
let groundDivisions = 50;
let spaceKnightsBrigades = 2;

let destroyedKX42A = false;
let securedKX42A = false;
let securedHiveCities = false;
let securedCropPlanets = false;
let destroyedCropPlanets = false;
let startedBlockade = false;
let securedResourcePlanets = false;
let destroyedRebelFleet = false;

let points = 0;

function typeLine(line, callback) {
    let charIndex = 0;
    let currentLineText = "";

    function typeChar() {
        if (charIndex < line.length) {
            currentLineText += line[charIndex];
            textSpan.textContent = fullOutput + currentLineText;
            charIndex++;
            setTimeout(typeChar, 30);
        } else {
            fullOutput += currentLineText + "\n";
            textSpan.textContent = fullOutput;
            if (callback) setTimeout(callback, 300);
        }
    }
    typeChar();
}
function gameStart() {
    const startButton = document.getElementById("startButton");
    outputDiv = document.getElementById("output"); 

    startButton.style.display = "none";
    document.querySelector('.center').style.display = "none";
    outputDiv.style.display = "block";

    textSpan = document.createElement("span");
    textSpan.style.whiteSpace = "pre-wrap";

    cursorSpan = document.createElement("span");
    cursorSpan.className = "blinking";
    cursorSpan.textContent = "_";

    outputDiv.innerHTML = '';
    outputDiv.appendChild(textSpan);
    outputDiv.appendChild(cursorSpan);

    fullOutput = "";
    typeLine("System loading...", () => {
        typeLine("ExoCore Systems terminal online", () => {
            typeLine("Loading mainframe...", () => {
                typeLine("Mainframe load successful", () => {
                    typeLine("Press any button to continue...", () => {
                        nextFunction = "mainFrameLoad";
                        // Přidání event listeneru na klávesu
                        function onKeyDown() {
                            screenClear();
                            window.removeEventListener("keydown", onKeyDown);
                        }
                        window.addEventListener("keydown", onKeyDown);
                    });
                });
            });
        });
    });
}

function pressAnyToContinue(){
    typeLine("Press any button to continue...", () => {
        // Přidání event listeneru na klávesu
        function onKeyDown() {
            screenClear();
            window.removeEventListener("keydown", onKeyDown);
        }
        window.addEventListener("keydown", onKeyDown);
        });
}

function screenClear() {
    outputDiv.innerHTML = '';
    fullOutput = "";

    textSpan = document.createElement("span");
    textSpan.style.whiteSpace = "pre-wrap";

    cursorSpan = document.createElement("span");
    cursorSpan.className = "blinking";
    cursorSpan.textContent = "_";

    outputDiv.appendChild(textSpan);
    outputDiv.appendChild(cursorSpan);

    if (typeof window[nextFunction] === "function") {
        window[nextFunction]();
    }
}

function mainFrameLoad() {
    typeLine("Welcome Admiral", () => {
        typeLine("You have been in a cryosleep for 20 standart Terran years.", () => {
            typeLine("Your mission is to restore order in the KX-42 solar system by any means necessary.",() =>{
                typeLine("Also secure it's iron and uranium rich planets for ExoCore Systems.", () => {
                    typeLine("For ExoCore!", () => {
                        typeLine("Press any button to continue...", () => {
                            taskLogCreation();
                            nextFunction = "fleetStatus";
                            // Přidání event listeneru na klávesu
                            function onKeyDown() {
                                screenClear();
                                window.removeEventListener("keydown", onKeyDown);
                            }
                            window.addEventListener("keydown", onKeyDown);
                        });
                    });
                });
            });
        });
    });
}
function taskLogCreation(){
    const taskButton = document.createElement('button');
    taskButton.id = 'taskLogButton';
    taskButton.textContent = 'Task Log';
    document.body.appendChild(taskButton);

    const overlay = document.createElement('div');
    overlay.id = 'taskOverlay';
    const overlayContent = document.createElement('div');
    overlayContent.id = 'taskOverlayContent';
    const closeButton = document.createElement('button');
    closeButton.id = 'taskOverlayClose';
    closeButton.innerHTML = '&times;';
    const title = document.createElement('h2');
    title.textContent = 'Current Tasks';
    const taskListUl = document.createElement('ul');
    const tasks = [ // Úkoly by se měly aktualizovat dynamicky
        "Secure order in solar system",
        "Regain control over the main planet(KX-42A)",
        "Reestablish mining operations on all resource-rich planets",
        "Destroy the rebels"
    ];
    // Funkce pro aktualizaci task listu v overlayi
    window.updateTaskLogOverlay = (newTasks) => {
        taskListUl.innerHTML = ''; // Vyčistí staré tasky
        newTasks.forEach(taskText => {
            const listItem = document.createElement('li');
            listItem.innerHTML = taskText; // Použij innerHTML pro podporu HTML tagů
            taskListUl.appendChild(listItem);
        });
    };
    updateTaskLogOverlay(tasks); // Počáteční naplnění

    overlayContent.appendChild(closeButton);
    overlayContent.appendChild(title);
    overlayContent.appendChild(taskListUl);
    overlay.appendChild(overlayContent);
    document.body.appendChild(overlay);

    taskButton.addEventListener('click', () => { overlay.style.display = 'flex'; });
    closeButton.addEventListener('click', () => { overlay.style.display = 'none'; });
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) { overlay.style.display = 'none'; }
    });
}
function taskLogUpdate(){
    const tasks = [];
    tasks.push("Secure order in solar system");
    if (!destroyedKX42A && !securedKX42A) {
        tasks.push("Regain control over the main planet(KX-42A)");
    } else if (destroyedKX42A || securedKX42A) {
        tasks.push("<s>Regain control over the main planet(KX-42A)</s>");
    }
    if (!securedReasourcePlanets) {
         tasks.push("Reestablish mining operations on all resource-rich planets");
    } else {
        tasks.push("<s>Reestablish mining operations on all resource-rich planets</s>");
    }
    if (!destroyedRebelFleet) {
        tasks.push("Destroy the rebels");
    } else {
        tasks.push("<s>Destroy the rebels</s>");
    }
    updateTaskLogOverlay(tasks);
    nextFunction = "main_decision";
    pressAnyToContinue();
}

function gameRestart(){
    typeLine("What do you want to do?", () => {
        typeLine("1. Start a new game", () => {
            typeLine("2. Retreat with tail between your legs", () => {
                typeLine("Please enter the number of your choice:", () => {
                    // Přidání event listeneru na klávesu
                    function onKeyDown(event) {
                        const choice = event.key;
                        if (choice === "1") {
                            Location.reload();
                        } else if (choice === "2") {
                            window.close();
                        }
                    }
                    onKeyDown();
                });
            });
        });
    });
}

function fleetStatus() {
    typeLine("Fleet status:", () => {
        typeLine("\tAll ships are in full working order", () => {
            typeLine("\tAll personnel awakened.", () => {
                typeLine("\tAll weapons systems operational.", () => {
                    typeLine("\tStreght overview:", () => {
                        typeLine("\t\t - 5x Battlecruisers", () => {
                            typeLine("\t\t - 10x Destroyers", () => {
                                typeLine("\t\t - 1x Admiral-class Battleship", () => {
                                    typeLine("\t\t - 10000x Fighters", () => {
                                        typeLine("\t\t - 7000x Bombers", () => {
                                            typeLine("\t\t - 50x Ground divisions", () => {
                                                typeLine("\t\t - 2x Space knights brigades", () => {
                                                    typeLine("Press any button to continue...", () => { 
                                                        nextFunction = "solarSystemMap";
                                                        // Přidání event listeneru na klávesu
                                                        function onKeyDown() {
                                                            screenClear();
                                                            window.removeEventListener("keydown", onKeyDown);
                                                        }
                                                        window.addEventListener("keydown", onKeyDown);
                                                    });
                                                });
                                            });
                                        });
                                    });    
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function solarSystemMap() {
    typeLine("Displaying solar system map...", () => {
        //tady bude mapa
        typeLine("Press any button to continue...", () => { 
            nextFunction = "firstActionDecision";
            // Přidání event listeneru na klávesu
            function onKeyDown() {
                screenClear();
                window.removeEventListener("keydown", onKeyDown);
            }
            window.addEventListener("keydown", onKeyDown);
        });
    });
}

function firstActionDecision() {
    typeLine("What is your first action, Admiral?", () => {
        typeLine("1. Secure the main planet KX-42A", () => {
            typeLine("2. Attack the main rebel fleet at the outskirts of the system", () => {
                typeLine("3. Regain control of the crop planets(3 - planets)", () => {
                    typeLine("4. Regain control of the hive cities(2 - planets)", () => {
                        typeLine("Please enter the number of your choice:", () => {
                            // Přidání event listeneru na klávesu
                            function onKeyDown(event) {
                                const choice = event.key;
                                if (["1", "2", "3", "4"].includes(choice)) {
                                    window.removeEventListener("keydown", onKeyDown);
                                    handleFirstActionChoice(choice);
                                }
                            }
                            window.addEventListener("keydown", onKeyDown);
                        });
                    });
                });
            });
        });
    });
}

// Logika pro zpracování volby
//7.10-tady sem skončil
function handleFirstActionChoice(choice) {
    switch (choice) {
        case "1"://hotovo - dokončeno 8.10.
            nextFunction = "planetKX42A";
            screenClear();
            break;
        case "2"://hotovo - dokončeno 8.10.
            nextFunction = "rebelFleet";
            screenClear();
            break;
        case "3"://hotovo - dokončeno 8.10.
            nextFunction = "cropPlanets";
            screenClear();
            break;
        case "4"://hotovo - dokončeno 8.10.
            nextFunction = "hiveCities";
            screenClear();
            break;
        default:
            typeLine("Invalid choice.", () => {
                firstActionDecision();
            });
    }
}

function planetKX42A() {
    typeLine("You chose to secure the main planet KX-42A.", () => {
        typeLine("This planet is the political and economic center of the KX-42 system.", () => {
            typeLine("It is currently under rebel control, and retaking it will be a significant challenge.", () => {
                typeLine("The planet is protected by orbital defense system and a small rebel fleet.", () => {
                    typeLine("To destroy the orbital defense system, you will have to destroy the shield generators first.\nThey are located on the surface of the planet.", () => {
                        planetKX42A_decision();
                    });
                });    
            });  
        });
    });
}

function planetKX42A_decision() {
    typeLine("What will you do, Admiral?", () => {
        typeLine("1. Dispatch 2 divisions to the surface", () => {
            typeLine("2. Dispatch 1 brigade of the Space Knights", () => {
                typeLine("3. Try to overwhelm the shield generators with orbital bombardment and attacks from the ships's guns.", () => {
                    typeLine("4. Blowup the planet using the railgun on the flagship", () => {
                        typeLine("Please enter the number of your choice:", () => {
                            // Přidání event listeneru na klávesu
                            function onKeyDown(event) {
                                const choice = event.key;
                                if (["1", "2", "3", "4"].includes(choice)) {
                                    window.removeEventListener("keydown", onKeyDown);
                                    handlePlanetKX42AFirstChoice(choice);
                                }
                            }
                            window.addEventListener("keydown", onKeyDown);
                        });
                    });
                });
            });
        });
    });
}

function handlePlanetKX42AFirstChoice(choice) {
    switch (choice) {
        case "1"://hotovo
            nextFunction = "planetKX42A_divisions";
            screenClear();
            break;
        case "2"://hotovo
            nextFunction = "planetKX42A_spaceKnights";
            screenClear();
            break;
        case "3"://hotovo
            nextFunction = "planetKX42A_bombardment";
            screenClear();
            break;
        case "4"://hotovo
            nextFunction = "planetKX42A_destruction";
            screenClear();
            break;
        default:
            typeLine("Invalid choice.", () => {
                firstActionDecision();
            });
    }               
}

function planetKX42A_divisions() {
    var randomNumber = Math.random(0,11);
    if (groundDivisions >= 2) {
        typeLine("You chose to dispatch 2 divisions to the surface of KX-42A.", () => {
            if (randomNumber != 1) {
                typeLine("The divisions successfully land on the planet and begin their assault on the shield generators.", () => {
                    nextFunction = "planetKX42A_divisions_success";
                    pressAnyToContinue();
                });
            } else {
                typeLine("The transport ships are destroyed by the orbital defense system before they can land.", () => {
                    typeLine("You have lost 2 divisions.", () => {
                        groundDivisions -= 2;
                        nextFunction = "planetKX42A_decision";
                        pressAnyToContinue();
                    });
                });
            }
        });
    }
    else{
        typeLine("You do not have enough ground divisions to carry out this operation.", () => {
            nextFunction = "planetKX42A_decision";
            pressAnyToContinue();
        });
    }
}

function planetKX42A_divisions_success() {
    typeLine("The divisions landed on the surface and began their assault on the shield generators.",() => {
        typeLine("After a fierce battle, they successfully destroy the shield generators.", () => {
            typeLine("With the shield generators destroyed, the orbital defense system is now vulnerable to attack.", () => {
                typeLine("Your destroyers and battlecruisers took care of it and connected space stations. Your main force regained control over the planet.", () => {
                    typeLine("Thanks to the number and technological superiority of your forces you took the planet with minimal losses.", () => {
                        typeLine("Losses:\n\t - 3x Ground divisions\n\t -2x Destroyers", () => {
                            groundDivisions -= 3;
                            destroyers -= 2;
                            securedKX42A = true;
                            taskLogUpdate();
                            
                        });   
                    });
                });
            });
        });
    });
}

function planetKX42A_spaceKnights() {
    if (spaceKnightsBrigades >= 1) {
        typeLine("You chose to dispatch 1 brigade of the Space Knights to the surface of KX-42A.", () => {
            typeLine("The deployment shuttle is too fast for the orbital defense system to target it effectively.", () => {
                typeLine("The brigade successfully lands on the planet and begins their assault on the shield generators.", () => {
                    typeLine("Thanks to their superior training and equipment, the Space Knights are able to quickly destroy the shield generators.", () => {
                        typeLine("With the shield generators destroyed, the orbital defense system is now vulnerable to attack.", () => {
                            typeLine("Your destroyers and battlecruisers took care of it and connected space stations. Your main force regained control over the planet.", () => {
                                typeLine("Thanks to the number and technological superiority of your forces you took the planet with minimal losses.", () => {
                                    typeLine("Losses:\n\t - 2x Ground divisions\n\t -1x Destroyer", () => {
                                        destroyers -= 1;
                                        groundDivisions -= 2;
                                        securedKX42A = true;
                                        taskLogUpdate();

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    else{
        typeLine("You do not have enough Space Knights brigades to carry out this operation.", () => {
            nextFunction = "planetKX42A_decision";
           pressAnyToContinue();
        });
    }
}

function planetKX42A_bombardment(){
    if(bombers>=3500)
    {
        typeLine("You chose to overwhelm the shield generators with orbital bombardment and attacks from the ships's guns.", () => {
            typeLine("After a few hours of bombardment, the shield generators are destroyed.", () => {
                typeLine("With the shield generators destroyed, the orbital defense system is now vulnerable to attack.", () => {
                    typeLine("Your destroyers and battlecruisers took care of it and connected space stations. Your main force regained control over the planet.", () => {
                        typeLine("You successfully took the planet, but suffered heavy losses in the process. The planet is also heavily damaged by the bombardment.", () => {
                            typeLine("Losses:\n\t - 3500x Bombers\n\t - 3000x Fighters\n\t - 5x Destroyers\n\t - 1x Battlecruisers", () => {
                                bombers -= 3500;
                                fighters -= 3000;
                                destroyers -= 5;
                                battlecruisers -= 1;
                                securedKX42A = true;
                                taskLogUpdate();
                            });
                        });
                    });
                });
            });
        });
    }else{
        typeLine("You do not have enough bombers to carry out this operation.", () => {
            nextFunction = "planetKX42A_decision";
           pressAnyToContinue();
        });
    }
}

function planetKX42A_destruction() {
    typeLine("You chose to destroy the planet using the railgun on the flagship.", () => {
        typeLine("This is a drastic measure, but it will eliminate the rebel threat on the planet once and for all.", () => {
            typeLine("The railgun fires a massive projectile that impacts the planet's surface, causing a catastrophic explosion.", () => {
                typeLine("The explosion is visible from space, and the planet is split into many pieces.", () => {
                    typeLine("You have successfully eliminated the rebel presence on KX-42A.", () => {
                        destroyedKX42A = true;
                        taskLogUpdate();
                    });
                });
            });
        });
    });
}

function rebelFleet() {
    var randomNumber = Math.random(0,11);
    typeLine("You chose to attack the main rebel fleet at the outskirts of the system.", () => {
        typeLine("The main rebel fleet consists of several battlecruisers, destroyers, and a large number of fighters.", () => {
            if(randomNumber != 1){
                if(randomNumber <= 4){
                    if(battlecruisers>=2 && destroyers>=4&& fighters>=3000 && battleships>=1){
                        typeLine("Your fleet engages the rebel fleet in a fierce battle.", () => {
                            typeLine("Thanks to your superior numbers and technology, you are able to decisively defeat the rebel fleet.", () => {
                                typeLine("Losses:\n\t - 2x Battlecruisers\n\t - 4x Destroyers\n\t - 2500x Fighters", () => {
                                    battlecruisers -= 2;
                                    destroyers -= 4;
                                    fighters -= 2500;
                                    destroyedRebelFleet = true;
                                    taskLogUpdate();
                                });
                            });
                        });    
                    }
                    else{
                        typeLine("Your fleet is outnumbered and outgunned. You die in the fire of the battleship", () => {
                            typeLine("GAME OVER", () => {
                                nextFunction = "gameRestart";
                                pressAnyToContinue();
                            });
                        });
                    }
                }
                else{
                    if(battlecruisers>=5 && destroyers>=8&& fighters>=5000 && battleships>=1){
                    typeLine("Your fleet engages the rebel fleet in a fierce battle.", () => {
                        typeLine("Thanks to your superior numbers and technology, you are able to decisively defeat the rebel fleet.", () => {
                            typeLine("Losses:\n\t - 3x Battlecruisers\n\t - 5x Destroyers\n\t - 4500 Fighters", () => {
                                battlecruisers -= 3;
                                destroyers -= 5;
                                fighters -= 4500;
                                destroyedRebelFleet = true;
                                taskLogUpdate();
                            });
                        });
                    });    
                }
                else{
                    typeLine("Your fleet is outnumbered and outgunned. You die in the fire of the battleship", () => {
                        typeLine("GAME OVER", () => {
                            nextFunction = "gameRestart";
                            pressAnyToContinue();
                        });
                    });
                }
                }
            }
            else if(randomNumber == 1){
                typeLine("The rebel fleet ambushes your fleet and destroys it.", () => {
                    typeLine("You are captured in escape pod, taken before rebel trial and sentenced to death.", () => {
                        typeLine("GAME OVER", () => {
                            nextFunction = "gameRestart";
                            pressAnyToContinue();
                        });
                    });
                });
            }
        });
    });
}

function cropPlanets() {
    typeLine("You chose to regain control of the crop planets.", () => {
        typeLine("The crop planets are vital to the KX-42 system's food supply.", () => {
            typeLine("Without them the system will face severe food shortages.", () => {
                typeLine("What will you do, Admiral?", () => {
                    typeLine("1. Take the planets by force", () => {
                        typeLine("2. Start a blockade to cut off supplies to the rest of the rebels in the system", () => {
                            typeLine("3. Destroy the planets", () => {
                                typeLine("Please enter the number of your choice:", () => {
                                    // Přidání event listeneru na klávesu
                                    function onKeyDown(event) {
                                        const choice = event.key;
                                        if (["1", "2", "3"].includes(choice)) {
                                            window.removeEventListener("keydown", onKeyDown);
                                            handleCropPlanetsFirstChoice(choice);
                                        }
                                    }
                                    window.addEventListener("keydown", onKeyDown);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function handleCropPlanetsFirstChoice(choice) {
    switch (choice) {
        case "1"://hotovo
            nextFunction = "cropPlanetsForce";
            screenClear();
            break;
        case "2"://hotovo
            nextFunction = "cropPlanetsBlockade";
            screenClear();
            break;
        case "3"://hotovo
            nextFunction = "cropPlanetsDestroy";
            screenClear();
            break;
        default:
            typeLine("Invalid choice.", () => {
                nextFunction = "cropPlanets";
                pressAnyToContinue();
            });
    }
}

function cropPlanetsForce() {
    typeLine("You chose to take the crop planets by force.", () => {
        typeLine("They are protected only by a small rebel fleet made mostly of frigathes and one destroyer.", () => {
            typeLine("Your fleet easily defeats the rebel forces and regains control over the crop planets.", () => {
                typeLine("Losses:\n\t - 1x Destroyer\n\t - 1000x Fighters", () => {
                    destroyers -= 1;
                    fighters -= 1000;
                    securedCropPlanets = true;
                    taskLogUpdate();
                });
            });
        });
    });
}

function cropPlanetsBlockade() {
    startedBlockade = true;
    typeLine("You chose to start a blockade to cut off supplies to the rest of the rebels in the system.", () => {
        typeLine("The blockade is on for several weeks, during which the rest of the rebels in the system are unable to resupply their forces.", () => {
            typeLine("After several weeks, the rebels on the crop planets surrender due to lack of supplies.", () => {
                typeLine("You have successfully regained control over the crop planets without any losses.", () => {
                    securedCropPlanets = true;
                    taskLogUpdate();
                });
            });
        });
    });
}

function cropPlanetsDestroy() {
    typeLine("You chose to destroy the crop planets.", () => {
        typeLine("This is a drastic measure.",()=>{
            typeLine("You begin by orbital bombardment of the crop planets using the nuclear torpedoes. The planets are devastated and rendered uninhabitable.", () => {
                typeLine("Unlike you, the rebels cannot supply from outside the system. On the planets in the system still occupied by the rebels, there are mass starvations.", () => {
                    typeLine("Losses:\n\t - 1000x Bombers\n\t - 2000x Fighters", () => {
                        destroyedCropPlanets = true;
                        bombers -= 1000;
                        fighters -= 2000;
                        taskLogUpdate();
                    });
                });
            });    
        });
    });
}

function hiveCities() {
    typeLine("You chose to regain control of the hive cities.", () => {
        if(startedBlockade)
        {
            typeLine("Due to the blockade, the hive cities had a shortage of supplies.", () => {
                typeLine("When you arrive, you find the cities empty of life. Full of decaying corpses", () => {
                    typeLine("You easily regain control over the hive cities with no losses.", () => {
                        typeLine("The loss of workers will be a problem when reinstating the mining operations in the system.", () => {
                            securedHiveCities = true;
                            taskLogUpdate();
                        });
                    });
                });
            });
        }
        else if(destroyedCropPlanets)
        {
            typeLine("Due to the destruction of the crop planets, the hive cities had a shortage of supplies.", () => {
                typeLine("About 80 million people died on each planet died due to the shortage.", () => {
                    typeLine("You easily regain control over the hive cities with minimal losses.", () => {
                        typeLine("Losses:\n\t - 10x Ground divisions", () => {
                            groundDivisions -= 10;
                            securedHiveCities = true;
                            taskLogUpdate();
                        });
                    });
                });
            });
        }
        else
        {
            typeLine("The hive cities are heavily fortified and defended by a large rebel garrison.", () => {
                typeLine("You launch a full-scale assault on the cities, using your ground divisions and Space Knights to lead the charge.", () => {
                    typeLine("On some ocasions you have to burn whole levels of the cities or bombard parts of them. About 300 million civilians die due to these actions.", () => {
                        typeLine("Althou you suffer heavy losses you eventualy regain controll over the cities.", () => {
                            typeLine("Losses:\n\t - 30x Ground divisions\n\t - 1x Brigade of Space Knights\n\t - 3x Destroyers\n\t - 4000x Fighters\n\t - 3000x Bombers", () => {
                                groundDivisions -= 30;
                                spaceKnightsBrigades -= 1;
                                destroyers -= 3;
                                fighters -= 4000;
                                bombers -= 3000;
                                securedHiveCities = true;
                                taskLogUpdate();
                            });
                        });
                    });
                });
            });
        }
    });
}

function main_decision(){
    var main_decision = [];
    if(!destroyedKX42A&& !securedKX42A) main_decision.push("1.Regain control over the main planet(KX-42A)");
    if(!destroyedRebelFleet) main_decision.push("2.Eliminate the remaining rebel fleet");
    if(!securedHiveCities) main_decision.push("3.Secure the hive cities");
    if(!securedCropPlanets&&!destroyedCropPlanets) main_decision.push("4.Secure the crop planets");
    if((securedCropPlanets || destroyedCropPlanets) && destroyedRebelFleet && (securedKX42A || destroyedKX42A)&&securedHiveCities) main_decision.push("5.Secure the resource planets");
    typeLine("What is your next action, Admiral?", () => {
        main_decision.forEach((decision, index) => {
            typeLine(`${decision}`, () => {
                if (index === main_decision.length - 1) {
                    function onKeyDown(event) {
                                const choice = event.key;
                                if (["1", "2", "3", "4", "5"].includes(choice)) {
                                    window.removeEventListener("keydown", onKeyDown);
                                    handleFirstActionChoice(choice);
                                }
                    }
                    window.addEventListener("keydown", onKeyDown);
                }
            });
        });
    });
}

function resourcePlanets() {
    typeLine("After you finished all your tasks, you turn your attention to the resource planets.", () => {
        typeLine("These planets are rich in iron and uranium, which are vital for ExoCore Systems' operations.", () => {
            typeLine("You launch a series of mining operations on the resource planets, using your ground divisions to secure the mining sites and protect them from any potential rebel attacks.", () => {
                if(startedBlockade){
                    typeLine("Thanks to the blockade, there are almost no miners left and you ExoCore has to import workers from elsewhere.", () => {
                    });
                }
                else if(destroyedCropPlanets){
                    typeLine("Thanks to the destruction of the crop planets, almost half of the miners is gone. This only slows the operation down a little but still.", () => {
                    });
                }
                else{
                    typeLine("The mining operations are successful, and you are able to secure a steady supply of iron and uranium for ExoCore Systems.", () => {
                    });
                }
                returnHome();
            });
        });
    });
}


function handleMainDecision(decision) {
    switch(decision){
        case "1"&&(!destroyedKX42A || !securedKX42A):
            nextFunction = "planetKX42A";
            screenClear();
            break;
        case "2"&&(!destroyedRebelFleet):
            nextFunction = "rebelFleet";
            screenClear();
            break;
        case "3"&&(!securedHiveCities):
            nextFunction = "hiveCities";
            screenClear();
            break;
        case "4"&&(!securedCropPlanets || !destroyedCropPlanets):
            nextFunction = "cropPlanets";
            screenClear();
            break;
        case "5"&&(!securedResourcePlanets):
            nextFunction = "resourcePlanets";
            screenClear();
            break;
        default:
            typeLine("Invalid choice.", () => {
                main_decision();
            });
    }
}

function returnHome() {
    typeLine("With all tasks completed, you set course for ExoCore Systems headquarters. There you report on the mission and you are evaluated by the commanders.", () => {
        if(destroyedCropPlanets){
            points -= 10;
        }
        if(startedBlockade) points -= 50;
        if(destroyedKX42A) points -= 10;
        if(securedKX42A) points += 20;
        if(securedCropPlanets) points += 10;
        if(securedHiveCities) points += 10;

        if(points >= 40){
            typeLine("You have completed the mission with great success. You are rewarded with a position in the ExoCore System's Mining sub-division Command.", () => {
                typeLine("WIN. 1/5 - The ExoCore Mining System Command", () => {
                    nextFunction = "gameRestart";
                    pressAnyToContinue();
                });
            });
        }
        else if(points >= 20){
            typeLine("You have completed the mission successfully. You are rewarded with a promotion to a Super Admiral.", () => {
                typeLine("WIN. 2/5 - Super Admiral", () => {
                    nextFunction = "gameRestart";
                    pressAnyToContinue();
                });
            });
        }
        else if(points >= 0){
            typeLine("You have completed the mission, but with significant losses and collateral damage. But you still reinstagitated the mining operation. So you are given a next task.", () => {
                typeLine("WIN. 3/5 - Admiral", () => {
                    nextFunction = "gameRestart";
                    pressAnyToContinue();
                });
            });
        }
        else if(points < 0){
            if(destroyedKX42A){
                typeLine("You are invited infront of the board of directors.", () => {});
                if(startedBlockade){
                    typeLine("Board Director:Even thou you caused great losses of life and the mining operations will not be reinstageted in near future, you acually saved the company a lot of money by destorying the main byrocratic centers of the sysetm.", () => {
                        typeLine("Board Director: We offer you a promotion to the rank of Grand Admiral and possiton on this board. Do you accept?", () => {
                            typeLine("1. Yes", () => {
                                typeLine("2. No", () => {
                                    typeLine("Please enter the number of your choice:", () => {
                                    function onKeyDown(event) {
                                        const choice = event.key;
                                        if (["1", "2"].includes(choice)) {
                                            window.removeEventListener("keydown", onKeyDown);
                                            handleLastChoise(choice);
                                        }
                                    }
                                    window.addEventListener("keydown", onKeyDown);
                                    });
                                });
                            });
                        });
                    });
                }
                else
                {
                    typeLine("For you great failures and losses, you are relieved of your command and sentenced to death.", () => {
                    typeLine("GAME OVER. 4/5 - Death by firing squad", () => {
                        nextFunction = "gameRestart";
                        pressAnyToContinue();
                    });
                });
                }
            }
            else{
                typeLine("For you great failures and losses, you are relieved of your command and sentenced to death.", () => {
                    typeLine("GAME OVER. 4/5 - Death by firing squad", () => {
                        nextFunction = "gameRestart";
                        pressAnyToContinue();
                    });
                });
            }
        }
    });    
}        

function handleLastChoise(choice) {
    switch(choise){
        case "1":
            typeLine("Board Director: Good choise.",() =>{
                typeLine("You are promoted to the rank of Grand Admiral and granted a seat at the Board of Directors. Nobody ever questions the loss of billions of lives.",() =>{
                    typeLine("WIN. 5/5 - For ExoCore!",()=>{
                        nextFunction = "gameRestart";
                        pressAnyToContinue();
                    });
                });
            });
        case "2":
            typeLine("Board Director: Bad choise", () => {
                    typeLine("GAME OVER. 4/5 - Death by firing squad", () => {
                        nextFunction = "gameRestart";
                        pressAnyToContinue();
                    });
                });    
    }
}