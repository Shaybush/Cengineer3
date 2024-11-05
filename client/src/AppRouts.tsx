import React ,{ Suspense , lazy } from "react"
import { BrowserRouter as Router , Route, Routes } from "react-router-dom"

const Login = lazy(() => import('./views/login'))
const Dashboard = lazy(() => import("./views/dashboard"))
const RoomCreate = lazy(() => import("./views/roomCreat"))
const RoomEdit = lazy(() => import("./views/roomEdit"))
const Profile = lazy(() => import("./views/profile"))
const ProfileEdit = lazy(() => import("./views/profileEdit"))

const AppRoutes:React.FC = () => {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-room" element={<RoomCreate />} />
            <Route path="/edit-room" element={<RoomEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
          </Routes>
        </Suspense>
      </Router>
    );
  };
  
  export default AppRoutes;