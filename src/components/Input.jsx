function Input({label, type, id, name}) {
    return (
        <div>
            
            <label 
            htmlFor={id}>
            {label}
            </label>

            <input
            type={type}
            id={id}
            name={name}
            />

        </div>
    )
}

export default Input