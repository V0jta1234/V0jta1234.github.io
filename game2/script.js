let outputDiv, textSpan, cursorSpan, fullOutput;
let nextFunction;

let battlecruisers = 5;
let destroyers = 10;
let battleships = 1;
let fighters = 10000;
let bombers = 7000;
let groundDivisions = 100;
let spaceKnightsBrigades = 2;

let destroyedKX42A = false;
let securedKX42A = false;
let securedHiveCities = false;
let securedCropPlanets = false;
let securedReasourcePlanets = false;
let destroyedRebelFleet = false;

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
                                            typeLine("\t\t - 100x Ground divisions", () => {
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
        case "1"://dodělat - rozpravovánno
            nextFunction = "planetKX42A";
            screenClear();
            break;
        case "2"://dodělat
            nextFunction = "rebelFleet";
            screenClear();
            break;
        case "3"://dodělat
            nextFunction = "cropPlanets";
            screenClear();
            break;
        case "4"://dodělat
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
        case "1"://dodělat
            nextFunction = "planetKX42A_divisions";
            screenClear();
            break;
        case "2"://dodělat
            nextFunction = "planetKX42A_spaceKnights";
            screenClear();
            break;
        case "3"://dodělat
            nextFunction = "planetKX42A_bombardment";
            screenClear();
            break;
        case "4"://dodělat
            nextFunction = "planetKX42A_destruction";
            screenClear();
            break;
        default:
            typeLine("Invalid choice.", () => {
                firstActionDecision();
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
                        // Dynamická aktualizace tasklogu podle podmínek
                        const tasks = [];
                        tasks.push("Secure order in solar system");
                        if (!destroyedKX42A && !securedKX42A) {
                            tasks.push("Regain control over the main planet(KX-42A)");
                        } else if (destroyedKX42A || securedKX42A) {
                            tasks.push("<s>Regain control over the main planet(KX-42A)</s>");
                        }
                        if (!securedReasourcePlanets) {
                            tasks.push("Reestablish mining operations on all resource-rich planets");
                        }
                        else{
                            tasks.push("<s>Reestablish mining operations on all resource-rich planets</s>");
                        }
                        if (!destroyedRebelFleet) {
                            tasks.push("Destroy the rebels");
                        }
                        else
                        {
                            tasks.push("<s>Destroy the rebels</s>");
                        }
                        updateTaskLogOverlay(tasks);
                        nextFunction = "main_decision";
                        screenClear();
                    });
                });
            });
        });
    });
}

function main_decision(){
    var main_decision = [];
    if(!destroyedKX42A&& !securedKX42A) main_decision.push("1.Regain control over the main planet(KX-42A)");
    if(!destroyedRebelFleet) main_decision.push("2.Eliminate the remaining rebel fleet");
    if(!securedHiveCities) main_decision.push("3.Secure the hive cities");
    if(!securedCropPlanets) main_decision.push("4.Secure the crop planets");
    if(securedCropPlanets && destroyedRebelFleet && (securedKX42A || destroyedKX42A)&&securedHiveCities) main_decision.push("5.Secure the resource planets");
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
        case "4"&&(!securedCropPlanets):
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
