import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useAuth } from "../hooks/useAuth";

export default function AdminLayout() {

    useAuth({ middleware: 'admin' });

    return (
        <>
            <div className="md:flex">
                <AdminSidebar />

                <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
                    <Outlet />
                </main>
            </div>

            <ToastContainer />
        </>
    )
}
