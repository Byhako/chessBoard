'use strict'

// (pawn = "P", horse = "N", bishop = "B", tower = "R", queen = "Q" and king = "K")

// The pieces can be moved
var cfg = {
  draggable: true,
  dropOffBoard: 'snapback', // this is the default
  position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
}

// Static pieces
var pos1 = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'

var board = ChessBoard('board', pos1)