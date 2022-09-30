export const BtnIcon = ({children, clicked})=> {
    return (
        <div className="btn_icon" onClick={clicked}>
            {children}
        </div>
    )
}

export const BtnPrimary = ({title})=> {
    return (
        <button type="submit"  className="btn_primary">
            <span>{title}</span>
        </button>
    )
}

