// Gemini Gambit Module
// This file should be placed in the /gambits directory

(function() {
    // Register this gambit in the global registry
    window.ChessGambits = window.ChessGambits || {};
    
    window.ChessGambits['geminiGambit'] = {
        name: "Gemini Gambit",
        color: "black", // Which color plays this opening
        icon: "🌌",      // An icon for a cosmic, chaotic gambit
        description: "A hyper-aggressive and speculative gambit where Black, after an Albin Counter-Gambit setup, sacrifices a knight to shatter White's central control, disrupt development, and launch a lightning-fast attack.",
        
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
                move: "1... d5",
                description: "Black responds symmetrically, challenging White for the center.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'p', '.', '.', '.', '.'],
                    ['.', '.', '.', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', 'P', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "2. c4",
                description: "The Queen's Gambit. White puts pressure on Black's central d5 pawn.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', 'p', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'p', '.', '.', '.', '.'],
                    ['.', '.', 'P', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', 'P', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "2... e5",
                description: "The Albin Counter-Gambit. Black ignores the threat and strikes back in the center, setting the stage for chaos.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'p', 'p', '.', '.', '.'],
                    ['.', '.', 'P', 'P', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "3. dxe5",
                description: "White accepts the first gambit pawn, opening the d-file.",
                position: [
                    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'p', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "3... Nc6",
                description: "The Gemini Gambit! Instead of the standard d4 push, Black develops the knight, offering a shocking piece sacrifice to open lines and seize the initiative.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', 'p', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "4. exf6",
                description: "White accepts the knight sacrifice, hoping to weather the storm. The position is now incredibly sharp and unbalanced.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', 'P', '.', '.'],
                    ['.', '.', '.', 'p', '.', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "4... dxc4",
                description: "Black recaptures, opening the d-file for the queen and rook while simultaneously forcing White's hand.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', 'P', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'p', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "5. Qxd8+",
                description: "White is practically forced to trade queens, hoping to simplify into a winning endgame with an extra piece.",
                position: [
                    ['r', '.', 'b', 'Q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', 'P', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'p', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', '.', 'K', 'B', 'N', 'R']
                ]
            },
            {
                move: "5... Kxd8",
                description: "Black recaptures with the king. Though unorthodox, the king is active and supports Black's rapid development. Black's plan is to use the open files for the rooks to overwhelm White before the extra piece matters.",
                position: [
                    ['r', '.', 'b', '.', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', '.', '.', 'p', 'p', 'p'],
                    ['.', '.', '.', '.', '.', 'P', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['.', '.', 'p', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', '.', '.', '.'],
                    ['P', 'P', '.', '.', '.', '.', 'P', 'P'],
                    ['R', 'N', 'B', '.', 'K', 'B', 'N', 'R']
                ]
            }
        ]
    };
})();
