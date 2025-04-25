function Sqaure ({value, onclick}) {
    return(
        <button className="square" onclick={onclick}>
            {value}
        </button>
    )
}

export default Sqaure