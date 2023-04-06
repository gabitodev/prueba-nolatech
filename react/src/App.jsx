import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/chats';
import Profile from './pages/profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
    </>
  )
);

export default router;