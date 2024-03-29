import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Login from './components/login.jsx'
import Chat from './components/chat.jsx';
import './components/login.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path = '/' element = {<Login/>}/>
      <Route path = '/chat' element = {<Chat/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
