import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/HoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/friend/:friendId" element={<FriendDetail />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
