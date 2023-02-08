import Board from "./modules/board"

document.addEventListener("DOMContentLoaded", () => {
	const board = new Board(".wrapper")

	board.create()

	board.addHeadRandom()

	board.transitHead()
})
