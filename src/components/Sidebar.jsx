import { IoHomeOutline } from "react-icons/io5";
import { Analyticsimg, Appearancesimg, Audienceimg, Deliveryimg, Discountsimg, Dropdownimg, Homeimg, Marketingimg , Ordersimg, Payoutsimg, Pluginsimg, Productimg, Walletimg } from "./Images/AllImages";
import Nishyanimg from '../assets/nishyan.png';


export const Sidebar = () => {
    return (
        <div className="flex flex-col gap-7"> 
        <div> <Navtop /> </div>
        <div> <Pages /> </div>
        <div> <Basenav  /> </div>
        </div>
    )
}

export const Basenav = () => {
  return ( 
    <div className="grid grid-cols-[2fr,6fr]  gap-[10px] bg-[#353C53] pt-[6px] pb-[6px] pl-3 pr-4 rounded-[4px] ">

        <div className="flex justify-center items-center"> <Walletimg /> </div>
        
        <div className="grid grid-rows-2">
            <span> Available credits  </span>
            <span> 222.10 </span>
        </div>

    </div>
  )
}



export const Navtop = () => {
  return (
    <div className="grid grid-cols-[6fr,2fr] gap-3">

        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center"> <img src = {Nishyanimg} className="w-10 h-9 rounded-[4px]" />  </div>

          <div className="flex flex-col gap-1">
            <div className="text-[15px]"> Nishyan </div>
            <div className="text-[12px]"> <a href = "#"> Visit store </a> </div>
          </div>

        </div>

         <div className="flex flex-col justify-center">
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
   { id : 7 ,  icon : <Payoutsimg /> , maintext : 'Payouts' , bgcolor : '#ffffff1a' },
   { id : 8 ,  icon : <Discountsimg /> , maintext : 'Discounts' },
   { id : 9 ,  icon : <Audienceimg /> , maintext : 'Audience' },
   { id : 10 ,  icon : <Appearancesimg /> , maintext : 'Appearances' },
   { id : 11 ,  icon : <Pluginsimg /> , maintext : 'Plugins' },
]


const Pages = () => {
  return (
    <>
          <ul>
          {AllIcons?.map(i => {
             return(   
               <li key = {i?.id}> 
               <div className = "grid grid-cols-[1fr,3fr] pl-2 pr-3 pt-2 pb-2 rounded-[4px]  gap-3 hover:bg-[#ffffff1a] cursor-pointer text-[14px]"
               style = {{backgroundColor:`${i?.bgcolor}`}}
               >
                  <div className="flex justify-center "> {i?.icon} </div>
                  <div> {i?.maintext} </div>
               </div>
               </li>
            )
            })}
          </ul> 
    </>
  )
}