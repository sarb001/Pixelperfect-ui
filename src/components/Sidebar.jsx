import { IoHomeOutline } from "react-icons/io5";
import { Analyticsimg, Appearancesimg, Audienceimg, Deliveryimg, Discountsimg, Dropdownimg, Homeimg, Marketingimg , Ordersimg, Payoutsimg, Pluginsimg, Productimg } from "./Images/AllImages";
import Nishyanimg from '../assets/nishyan.png';


export const Sidebar = () => {
    return (
        <>
        <div> <Navtop /> </div>
        <div> <Pages /> </div>
        </>
    )
}

export const Navtop = () => {
  return (
    <div className="grid grid-cols-3">
        <div> <img src = {Nishyanimg} className="w-8 h-8 rounded-[4px]" />  </div>

         <div>
          <div> Nishyan </div>
           <div> <a href = "#"> Visit store </a> </div>
         </div>

         <div>
           <Dropdownimg />
         </div>
    </div>
  )
}



const AllIcons = [
   { id : 1 ,  icon : <Homeimg /> , maintext : 'Home' },
   { id : 2 ,  icon : <Ordersimg /> , maintext : 'Orders' },
   { id : 3 ,  icon : <Productimg /> , maintext : 'Products' },
   { id : 4 ,  icon : <Deliveryimg /> , maintext : 'Delivery' },
   { id : 5 ,  icon : <Marketingimg /> , maintext : 'Marketing' },
   { id : 6 ,  icon : <Analyticsimg /> , maintext : 'Analysis' },
   { id : 7 ,  icon : <Payoutsimg /> , maintext : 'Payouts' },
   { id : 8 ,  icon : <Discountsimg /> , maintext : 'Discounts' },
   { id : 9 ,  icon : <Audienceimg /> , maintext : 'Audience' },
   { id : 10 ,  icon : <Appearancesimg /> , maintext : 'Appearances' },
   { id : 11 ,  icon : <Pluginsimg /> , maintext : 'Plugins' },
]


const Pages = () => {
  return (
    <>
        <div> 
          <ul>
          {AllIcons?.map(i => {
             return(   
               <li key = {i?.id} className="flex flex-row justify-evenly"> 
                  <div> {i?.icon} </div>
                  <div> {i?.maintext} </div>
               </li>
            )
            })}
          </ul> 
        </div>
    </>
  )
}