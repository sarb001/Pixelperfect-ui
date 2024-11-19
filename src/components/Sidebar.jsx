import { IoHomeOutline } from "react-icons/io5";
import { Analyticsimg, Appearancesimg, Audienceimg, Deliveryimg, Discountsimg, Homeimg, Marketingimg, Ordersimg, Payoutsimg, Pluginsimg, Productimg } from "./Images/AllImages";


export const Sidebar = () => {
    return (
        <>
          <Pages />
        </>
    )
}


const Pages = () => {
  return (
    <>
        <div> 
          <ul>
            <li> <Homeimg />  Home </li>
            <li> <Ordersimg />   Orders </li>
            <li> <Productimg  />  Products </li>
            <li> <Deliveryimg  />  Delivery </li>
            <li> <Marketingimg />  Marketing </li>
            <li> <Analyticsimg />  Analysis </li>
            <li> <Payoutsimg />  Payouts </li>
            <li> <Discountsimg />  Discounts </li>
            <li> <Audienceimg />  Audience </li>
            <li> <Appearancesimg />  Appearances </li>
            <li> <Pluginsimg />  Plugins </li>
          </ul> 
        </div>
    </>
  )
}