import './Community.js'
import { Header, ListFollowingUsers, SearchIcon, NavigationBar, Link } from '.'

export const Community = () => {

    return <>
        <Header />
        <ListFollowingUsers />
        <Link><SearchIcon /></Link>
        <NavigationBar />
    </>
}