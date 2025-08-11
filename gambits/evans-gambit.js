// Evans Gambit Module
// This file should be placed in the /gambits directory

(function() {
    // Register this gambit in the global registry
    window.ChessGambits = window.ChessGambits || {};
    
    window.ChessGambits['evansGambit'] = {
        name: "Evans Gambit",
        color: "white", // Which color plays this opening
        icon: "⚔️",      // An icon for a sharp, romantic gambit
        description: "A sharp and aggressive gambit in the Italian Game. White sacrifices the b-pawn to gain time, build a powerful pawn center, and launch a swift attack against Black's king.",
        
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
                description: "White opens with the King's Pawn, aiming for rapid development and control of the center.",
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
                description: "Black responds symmetrically, leading to an open game where tactical possibilities abound.",
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
                move: "2. Nf3",
                description: "White develops the king's knight, attacking Black's e5 pawn.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "2... Nc6",
                description: "Black develops the queen's knight, defending the e5 pawn and controlling the d4 square.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', '.', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "3. Bc4",
                description: "The Italian Game. White's bishop takes aim at Black's weak f7 pawn.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "3... Bc5",
                description: "The Giuoco Piano variation. Black develops symmetrically, creating a solid and balanced position.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', 'b', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "4. b4",
                description: "The Evans Gambit! White sacrifices a pawn to deflect Black's powerful bishop, gain time, and prepare to seize the center with c3 and d4.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', 'b', '.', 'p', '.', '.', '.'],
                    ['.', 'P', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', '.', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "4... Bxb4",
                description: "Black accepts the gambit, capturing the pawn. This is the most common and critical test of White's idea.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', 'b', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', '.', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "5. c3",
                description: "White attacks the bishop, gaining a crucial tempo to support the advance of the d-pawn.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', 'b', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', '.', '.', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "5... Ba5",
                description: "A common retreat for the bishop. It stays active on the a5-e1 diagonal and keeps an eye on White's queenside.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['b', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', '.', '.', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            },
            {
                move: "6. d4",
                description: "White achieves the immediate goal of the gambit: building a strong pawn center and opening lines for attack. The battle truly begins!",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['b', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', 'P', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', '.', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', '.', 'Q', 'K', 'B', '.', 'R']
                ]
            }
        ]
    };
})();
