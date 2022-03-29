import './Link.sass'

export function Link({ children, className = '', onClick }) {

     const onClicked = (event) => {
         event.preventDefault()
         onClick()
     }

    return <>
        <a onClick={onClicked} className={className} href="">{children}</a>
    
    </>

}
