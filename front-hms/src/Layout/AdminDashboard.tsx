import SideBar from "../Components/Doctor/SideBar/SideBar"
import Header from "../Components/Header/Header"
import { Outlet } from 'react-router-dom'


const AdminDashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full flex flex-col">
        <Header />
       <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard