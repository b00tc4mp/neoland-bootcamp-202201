function isTokenExpired(token){
    const [, payload] = token.split('.')
    
    const json = atob(payload)

    const {exp} = JSON.parse(json)

    const expStamp = exp *1000

    const expired = Date.now() > expStamp

    return expired
}

export default isTokenExpired