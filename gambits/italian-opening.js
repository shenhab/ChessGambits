// Italian Opening Module
// This file should be placed in the /gambits directory

(function() {
    // Register this gambit in the global registry
    window.ChessGambits = window.ChessGambits || {};
    
    window.ChessGambits['italian'] = {
        name: "Italian Opening - Classical",
        color: "white",  // Which color plays this opening
        icon: "🏛️",      // Optional icon for the opening
        description: "A classical opening focusing on rapid development and control of the center. The Italian Opening leads to rich middlegame positions with chances for both sides.",
        
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
                description: "White opens with the King's pawn, immediately controlling the center squares d5 and f5. This is one of the most fundamental chess principles - control the center early!",
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
                description: "Black responds symmetrically, also claiming central space. This classical response leads to open, tactical games where both sides fight for the initiative.",
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
                description: "White develops the knight with tempo, attacking Black's e5 pawn. This follows the opening principle: 'Knights before bishops' and puts immediate pressure on Black.",
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
                description: "Black defends the e5 pawn with the knight, completing the symmetrical development. Both sides now have equal control of the center.",
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
                description: "The Italian Opening signature move! White develops the bishop to its most active square, targeting the weak f7 pawn. This square is Black's Achilles' heel in the opening.",
                position: [
                    ['r', '.', 'b', 'q', 'k', 'b', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', '.', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "3... Bc5",
                description: "Black develops symmetrically with the Italian Game proper. Both bishops eye their opponent's weak points, creating rich tactical possibilities.",
                position: [
                    ['r', '.', '.', 'q', 'k', '.', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', 'b', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', 'P', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "4. c3",
                description: "Classical continuation: White prepares d4 to challenge the center. This solid approach prioritizes central control over immediate tactics.",
                position: [
                    ['r', '.', '.', 'q', 'k', '.', 'n', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', '.', '.', '.'],
                    ['.', '.', 'b', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', 'P', '.', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "4... Nf6",
                description: "Black develops the knight, attacking White's e4 pawn. The position is balanced with rich play ahead!",
                position: [
                    ['r', '.', '.', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', 'n', '.', '.'],
                    ['.', '.', 'b', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', '.', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', 'P', '.', 'P', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "5. d4",
                description: "White strikes in the center! This is the main idea behind c3 - supporting the d4 advance to gain space.",
                position: [
                    ['r', '.', '.', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', 'n', '.', '.'],
                    ['.', '.', 'b', '.', 'p', '.', '.', '.'],
                    ['.', '.', 'B', 'P', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "5... exd4",
                description: "Black captures the pawn. The center opens up, leading to tactical play.",
                position: [
                    ['r', '.', '.', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', 'n', '.', '.'],
                    ['.', '.', 'b', '.', '.', '.', '.', '.'],
                    ['.', '.', 'B', 'p', 'P', '.', '.', '.'],
                    ['.', '.', 'P', '.', '.', 'N', '.', '.'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            },
            {
                move: "6. cxd4",
                description: "White recaptures with the c-pawn, maintaining central control. Both sides have chances in this classical position.",
                position: [
                    ['r', '.', '.', 'q', 'k', '.', '.', 'r'],
                    ['p', 'p', 'p', 'p', '.', 'p', 'p', 'p'],
                    ['.', '.', 'n', '.', '.', 'n', '.', '.'],
                    ['.', '.', 'b', '.', '.', '.', '.', '.'],
                    ['.', '.', 'B', 'P', 'P', '.', '.', '.'],
                    ['.', '.', '.', '.', '.', 'N', '.', '.'],
                    ['P', 'P', '.', '.', '.', 'P', 'P', 'P'],
                    ['R', 'N', 'B', 'Q', 'K', '.', '.', 'R']
                ]
            }
        ]
    };
})();
