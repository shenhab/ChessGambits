// King's Gambit Module
// This file should be placed in the /gambits directory

(function() {
    // Register this gambit in the global registry
    window.ChessGambits = window.ChessGambits || {};
    
    window.ChessGambits['kingsGambit'] = {
        name: "King's Gambit",
        color: "white", // Which color plays this opening
        icon: "🔥",      // Optional icon for the opening
        description: "A romantic and fiercely aggressive opening. White sacrifices a pawn on move two to open the f-file and launch a devastating attack against the Black king.",
        
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
                move: "1. e4",
                description: "White opens with the King's pawn, claiming the center.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "1... e5",
                description: "Black responds symmetrically, challenging for central control.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "2. f4",
                description: "The King's Gambit! White sacrifices the f-pawn to deflect Black's central pawn, open the f-file for the rook, and initiate a powerful kingside attack.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', 'P', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "2... exf4",
                description: "King's Gambit Accepted. Black takes the pawn, hoping to weather the storm and exploit White's slightly exposed king.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', 'p', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "3. Nf3",
                description: "White develops the knight, preventing the annoying ...Qh4+ check and preparing to control the center.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', 'p', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "3... g5",
                description: "A common response. Black aggressively holds onto the extra pawn and prepares to kick the f3 knight, challenging White's attacking plans.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', 'p', '.'],
                    ['.', '.', '.', '.', 'P', 'p', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "4. h4",
                description: "White immediately challenges Black's pawn chain, creating tension and opening more lines for attack. The position is on a knife's edge.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', 'p', '.'],
                    ['.', '.', '.', '.', 'P', 'p', '.', 'P'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "4... g4",
                description: "Black attacks the knight, forcing the issue. This is a critical moment where White must find the most active square for the knight.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', 'p', 'p', 'P'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "5. Ne5",
                description: "The 'Muzio Gambit' setup. White sacrifices the knight temporarily for a tremendous attack! The knight lands on a powerful central square, eyeing f7 and d7.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'N', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', 'p', 'p', 'P'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "5... Nf6",
                description: "Black develops a piece and ignores the hanging knight, correctly sensing that White's attack is the more immediate threat.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', 'n', '.', '.'],
                    ['.', '.', '.', '.', 'N', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', 'p', 'p', 'P'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "6. Bc4",
                description: "White develops the bishop to its strongest diagonal, putting immense pressure on Black's weakest point: the f7 pawn.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', 'n', '.', '.'],
                    ['.', '.', '.', '.', 'N', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', 'p', 'p', 'P'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "6... d5",
                description: "Black strikes back in the center, trying to blunt the attack of the c4 bishop and create space.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', 'n', '.', '.'],
                    ['.', '.', '.', 'p', 'N', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', 'p', 'p', 'P'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "7. exd5",
                description: "White captures, opening the e-file and intensifying the attack. The position is a tactical minefield!",
                position: [
                    ['r', 'n', 'b', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', '.', 'p'],
                    ['.', '.', '.', '.', '.', 'n', '.', '.'],
                    ['.', '.', '.', 'P', 'N', '.', '.', '.'],
                    ['.', '.', 'B', '.', '.', 'p', 'p', 'P'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', '.', '.', '.', 'P', '.'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            }
        ]
    };
})();
