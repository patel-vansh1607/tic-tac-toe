const Game = () => {
    return(
        <div className="main-div">
            <h1>Tic Tac Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div className="game">

            </div>
        </div>
    )
}

export default Game