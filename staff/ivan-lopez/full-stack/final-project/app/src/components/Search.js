import './Search.sass'

function Search({ className }) {

    return <>
        <div className={`search ${className}`}>
           <input className='search__input'/>
        </div>
    
    </>

}

export default Search