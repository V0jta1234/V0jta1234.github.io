let outputDiv, textSpan, cursorSpan, fullOutput;
let nextFunction;

let battlecruisers = 5;
let destroyers = 10;
let battleships = 1;
let fighters = 10000;
let bombers = 7000;
let groundDivisions = 100;
let spaceKnightsBrigades = 2;

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
            listItem.textContent = taskText;
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
        case "1":
            typeLine("You chose to secure the main planet KX-42A.", () => {
                nextFunction = "planetKX42A";
                screenClear();
            });
            break;
        case "2":
            typeLine("You chose to attack the main rebel fleet.", () => {
                nextFunction = "rebelFleet";
                screenClear();
            });
            break;
        case "3":
            typeLine("You chose to regain control of the crop planets.", () => {
                nextFunction = "cropPlanets";
                screenClear();
            });
            break;
        case "4":
            typeLine("You chose to regain control of the hive cities.", () => {
                nextFunction = "hiveCities";
                screenClear();
            });
            break;
        default:
            typeLine("Invalid choice.", () => {
                firstActionDecision();
            });
    }
}
