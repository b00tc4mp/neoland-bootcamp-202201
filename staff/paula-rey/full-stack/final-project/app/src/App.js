import './App.sass'
import {
  Routes,
  Route, useNavigate, Navigate
} from 'react-router-dom'
import { validators } from 'commons'

import {
  Landing,
  Register,
  Login,
  Home,
  Details,
  AddLocation,
  UpdateLocation,
  AddComment,
  Favorites,
  ListFavorites,
  CommentIcon,
  DeleteIcon,
  EditIcon,
  FavoriteIcon,
  FollowIcon,
  LocationIcon,
  PlusIcon,
  ProfileIcon,
  LocationCard,
  OwnerLocationCard,
  ListLocations,
  ListSearchResults,
  Search,
  NavigationMenu,
  Header,
  CommentCard,
  ListComments,
  Profile,

  FollowButton,
  FavoriteButton

} from './components'

const { validateToken } = validators

function App() {
  let tokenValid = true

  try {
    validateToken(sessionStorage.token)
  } catch (error) {
    tokenValid = false
  }

  const navigate = useNavigate()

  const showLogin = () => navigate('login')

  const showRegister = () => navigate('register')

  const keepTokenNShowHome = token => { // and = N
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }


  return <div>
    <Profile/>
    {/* <FavoriteButton location={"62336941e973046272784a53"}/> */}
    {/* <Details locationId="62336941e973046272784a53"/> */}
    {/* <Home/> */}
    {/* <Search/> */}
    {/* <ListSearchResults /> */}
  </div>

}

export default App


// <Routes>
// <Route path="/*" element={sessionStorage.token ? <Home onLogOut={deleteTokenNShowLanding} /> : <Landing onLogin={showLogin} onRegistered={showRegister} />} />
// <Route path="register" element={!sessionStorage.token ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
// <Route path="/login" element={!sessionStorage.token ? <Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
// <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} />
// </Routes>

