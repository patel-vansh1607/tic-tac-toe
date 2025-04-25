function Game ({value, onclick}) {
    return(
        <button className="square" onclick={onclick}>
            {value}
        </button>
    )
}