import './Icon.sass'

export const Icon = ({ className = '', children = '' }) => {
    return <>
        <figure className={`icon ${className}`}>{children}</figure>
    </>
}