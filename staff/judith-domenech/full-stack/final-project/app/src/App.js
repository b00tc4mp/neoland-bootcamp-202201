import './App.sass'
import {
  Register,
  Login,
  Home,
  Profile,
  RacketDetails,
  CreateComment,
  UpdatePassword,
  Favorites,
  ListSearchRackets,
  Search,
  MenuBar,
  HeaderBar,
  CommentCard,
  ListComments,
  ToggleFavoriteRackets,
  SearchUserRacket

} from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'
import {
  FavoriteIcon,
  TrashIcon,
  CommentIcon,
  ProfileIcon,
  ToggleFavorite,
  RacketsCard
} from './components'
import Link from './components/elements/Link'
import { ListFavoritesRackets } from './components/ListFavoritesRackets'

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

  const keepTokenNShowHome = token => {
    sessionStorage.token = token
    navigate('/')
  }

  const deleteTokenNShowLanding = () => {
    delete sessionStorage.token
    navigate('/')
  }

  return <div>
    {/* <ToggleFavoriteRackets racket={"6232266e2b6b26aac836b9a2"} /> */}
    {/* <Register />  */}
    {/* <Login />  */}
    {/* <CreateComment racketId={"6232266e2b6b26aac836b9a2"}/> */}
    {/* <RacketDetails racketId="6232266e2b6b26aac836b9a2" /> */}
    {/* <Favorites></Favorites>  */}
    {/* <Profile /> */} 
    {/* < FavoriteIcon />
    < TrashIcon />
    < CommentIcon />
    < ProfileIcon />  */}
    {/* <RacketsCard racket={{brand:'adidas', model: 'metalbone', price: 123}} ></RacketsCard> */}
    {/* <ListFavoritesRackets></ListFavoritesRackets>  */}
    {/* <ListSearchRackets ></ListSearchRackets>  */}
    {/* <Search></Search>  */}
    {/* <RacketIcon></RacketIcon> */}
    {/* <MenuBar></MenuBar> */}
    {/* <HeaderBar />  */}
    {/* <Home />  */}
    {/* <CommentCard 	comment= {{user: "Agua Cate", text: "Magnifica pala, se la regale a mi amigo y esta encantado", date: "2022-03-21T21:45:26.323Z",
		id: "6238f1f6e8c21a76a564bd3b",
		userId: "6232266e2b6b26aac836b980"}} />  */}
    {/*  <ListComments racketId={"6232266e2b6b26aac836b9a2"} /> */}
    <SearchUserRacket></SearchUserRacket>

    <Routes>
      {/* <Route path="/*" element={ <Home onLogOut={deleteTokenNShowLanding} onRegister={showLogin} onLogin={showLogin}/> } />
      <Route path="register" element={ <Register onRegistered={showLogin} onLogin={showLogin} /> } />
      <Route path="login" element={<Login onLoggedIn={keepTokenNShowHome} onRegister={showRegister} /> } /> 
      <Route path="profile" element={<Profile />}></Route>
      <Route path="*" element={!sessionStorage.token ? <h1>Sorry, this path does not exist :/</h1> : <Navigate replace to="/" />} /> */}
    </Routes>
  </div>

}

export default App
