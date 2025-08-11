// King's Indian Defense Module
// This file should be placed in the /gambits directory

(function() {
    // Register this gambit in the global registry
    window.ChessGambits = window.ChessGambits || {};
    
    window.ChessGambits['kingsIndianDefense'] = {
        name: "King's Indian Defense",
        color: "black", // Which color plays this opening
        icon: "🌋",      // An icon for a volcanic, building attack
        description: "A hypermodern, aggressive defense where Black allows White to build a large pawn center, only to attack it later with a ferocious kingside pawn storm and piece assault. The goal is to undermine and destroy White's central control, often leading to a direct attack on the white king.",
        
        moves: [
            {
                move: "Starting Position",
                description: "The game begins. Both sides have equal chances. White moves first!",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "1. d4",
                description: "White opens with the Queen's Pawn, aiming for solid central control.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "1... Nf6",
                description: "Black develops a knight, controlling the central e4 and d5 squares without committing a pawn. This is the start of the 'Indian Games'.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', '.', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', 'n', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "2. c4",
                description: "White challenges Black's control of the d5 square and prepares to develop the queenside knight.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', '.', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', 'n', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "2... g6",
                description: "The hallmark of the King's Indian setup. Black prepares to fianchetto the dark-squared bishop to g7, where it will become a powerful long-range piece.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', '.', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "3. Nc3",
                description: "White develops the queenside knight to its most natural square, increasing central control.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', '.', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', 'N'],
                    ['P', 'P', '.', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "3... Bg7",
                description: "The King's Indian bishop arrives. It now controls the long diagonal and puts pressure on White's center and queenside.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'b', 'p'],
                    ['.', '.', '.', '.', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', 'N'],
                    ['P', 'P', '.', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "4. e4",
                description: "White establishes a 'big' pawn center. This is exactly what Black wants, as it creates a clear target for future attacks.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'b', 'p'],
                    ['.', '.', '.', '.', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', 'N'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "4... d6",
                description: "Black solidifies the position, blunting the c4-pawn and preparing to challenge White's center with ...e5.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', '.', 'p', 'p', 'b', 'p'],
                    ['.', '.', '.', 'p', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', 'N'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "5. Nf3",
                description: "A standard developing move for White, preparing to castle kingside.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', '.', 'p', 'p', 'b', 'p'],
                    ['.', '.', '.', 'p', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', 'N'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', '.', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "5... O-O",
                description: "Black castles, getting the king to safety. Now, the stage is set for Black to launch a fearsome kingside attack, often starting with ...f5.",
                position: [
                    ['r', 'n', 'b', 'q', '.', 'r', 'k', '.'],
                    ['p', 'p', 'p', '.', 'p', 'p', 'b', 'p'],
                    ['.', '.', '.', 'p', '.', 'n', 'p', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', 'N'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', '.', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            }
        ]
    };
})();
