import './Link.sass'


export const Link = ({ children, className = '', onClick: _onClick }) => {

    const onClick = (event) => {
        event.preventDefault()
        _onClick && _onClick(event)
    }

    return <>
        <a onClick={onClick} className={className} href=''>{children}</a>
    </>
}
