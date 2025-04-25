const Game = () => {
    return(
        <div className="main-div">
            <h1>Tic Tac Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div className="game">
            {winner ? (
            <h2>Winner: {winner}</h2>
             ) : (
          <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>
            )}
            </div>
        </div>
    )
}

export default Game