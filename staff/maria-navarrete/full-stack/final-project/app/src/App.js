import './App.sass'
import {
  //Icons
  HeartIcon,
  CalendarIcon,
  CheckIcon,
  CommunityIcon,
  DeleteIcon,
  EditIcon,
  FavoriteIcon,
  GoIcon,
  HomeIcon,
  PlusIcon,
  XIcon,

  //Buttons
  ToggleFavoriteButton,
  ToggleFollowButton,

  //Views
  Login,
  Register,
  CreateAction,
  UpdateAction,
  CreateSchedule,
  ActionCard,
  OwnerActionCard,
  ListFavoriteActions,
  ListActions,
  ListSearchActionsResults,
  ListFollowingUsers,
  ListSearchUsersResults,
  ListUserPublicActions,
  Search,
  NavigationBar,
  ActsNavigationBar,
  CreatedActions,
  ScheduleCard,
  ListSchedules,
  Schedules,
  Header,
  Home,
  Modal
} from './components'


const App = () => {

  return <>
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <Search /> */}
    {/* <NavigationBar/> */}
    {/* <ActsNavigationBar /> */}
    {/* <Header /> */}
    {/* <Home /> */}
    {/* <CreateAction /> */}
    <UpdateAction actionId="623d95304b270f1ae13b4a67"/>
    {/* <OwnerActionCard action={{ description: 'hola', authorUsername: 'lolo', requiredBudget: '10', requiredTime: '0', public: true }} isFavorite={true} /> */}
    {/* <CreateSchedule actionId="623988d11fea1b6db352373d"/> */}
    {/* <ListFavoriteActions /> */}
    {/* <Modal text='helloWorld' success={() => console.log('succes')} closeModal={() => console.log('close')} /> */}
    {/* <ListSearchActionsResults /> */}
    {/* <ListFollowingUsers/> */}
    {/* <ListSearchUsersResults query='' /> */}
    {/* <ListUserPublicActions userId='62336a0e5da2be05a8fa0c5e' /> */}
    {/* <ScheduleCard schedule={
      {
        date: "2020-03-10T13:00:00.000Z",
        repeat: "weekly",
        completed: [],
        id: "62336a0f5da2be05a8fa0c99",
        actionId: "62336a0f5da2be05a8fa0c6d",
        actionDescription: "Recoge la basura que veas en la calle hoy",
        actionRequiredTime: 10,
        actionRequiredBudget: 0
      }}/> */}
    {/* <ListSchedules /> */}
    {/* <Schedules /> */}
    {/* <CreatedActions/> */}

    {/* <ToggleFavoriteButton actionId='62336a0f5da2be05a8fa0c7e' isFavorite={false} />
    <ToggleFollowButton followId='62336a0e5da2be05a8fa0c62' isFollow={false} /> */}

    {/* <HeartIcon />
    <CalendarIcon />
    <CheckIcon />
    <CommunityIcon />
    <DeleteIcon />
    <EditIcon />
    <FavoriteIcon />
    <GoIcon />
    <HomeIcon />
    <PlusIcon />
    <XIcon /> */}

  </>

}



export default App