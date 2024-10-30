import React ,{ Suspense , lazy } from "react"
import { BrowserRouter , Route, Routes } from "react-router-dom"


const Login = lazy(() => import('../views/login/Login'))
const Dashboard = lazy(() => import("../views/dashboard/Dashboard"))
const RoomCreate = lazy(() => import("../views/roomCreat/RoomCreate"))
const RoomEdit = lazy(() => import("../views/roomEdit/RoomEdit"))
const Profile = lazy(() => import("../views/profile/Profile"))
const ProfileEdit = lazy(() => import("../views/profileEdit/ProfileEdit"))

const AppRoutes:React.FC = () => {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-room" element={<RoomCreate />} />
            <Route path="/edit-room" element={<RoomEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-edit" element={<ProfileEdit />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;