export const BtnIcon = ({children})=> {
    return (
        <div className="btn_icon">
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

