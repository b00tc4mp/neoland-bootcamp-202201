import './Link.sass'

function Link({ children, className = '', onClick }) {

     const onClicked = (event) => {
         event.preventDefault()
         onClick && onClick(event)
     }

    return <>
        <a onClick={onClicked} className={className} href="">{children}</a>
    
    </>

}

export default Link