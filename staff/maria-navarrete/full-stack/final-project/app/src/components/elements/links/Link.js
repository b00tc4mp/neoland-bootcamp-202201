import './Link.sass'


export const Link = ({ children, className = '', onClick }) => {


    return <>
        <a onClick={onClick} className={className} href=''>{children}</a>
    </>
}
