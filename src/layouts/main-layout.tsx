import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <div className="w-full">
       
        <Header/>

        <Outlet/>
        
        <Footer/>


    </div>
  )
}
