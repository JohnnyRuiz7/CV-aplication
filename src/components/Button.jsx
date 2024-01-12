function Button({title, onClick, type, backgroundColor, border, padding, }) {
    return (
        <>
            <button onClick={onClick} type={type}>{title}</button>
        </>
    )
}