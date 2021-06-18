import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAuthed = useSelector(state => state.auth.isAuthed)

  console.log(isAuthed)

  return (
    <Fragment>
      <Header></Header>
      {isAuthed && <UserProfile></UserProfile>}
      {!isAuthed && <Auth></Auth>}
      <Counter />
    </Fragment>
  );
}

export default App;
