function play (player1, npc) {
    switch (true) {
        case (player1 === "Piedra" && npc === "Papel"):
            console.log("NPC wins.");
            break;
        case (player1 === "Papel" && npc === "Piedra"):
            console.log("Player1 wins.");
            break;
        case (player1 === "Tijeras" && npc === "Piedra"):
            console.log("NPC wins..");
            break;
        case (player1 === "Piedra" && npc === "Tijeras"):
            console.log("Player1 wins..");
            break;
        case (player1 === "Papel" && npc === "Tijeras"):
            console.log("NPC wins...");
            break;
        case (player1 === "Tijeras" && npc === "Papel"):
            console.log("Player1 wins...");
            break;
        default :
            console.log("Draw");
    }
}

play("Tijeras", "Papel");
