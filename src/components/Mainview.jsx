import { Dropdownimg, Questionimg } from "./Images/AllImages"



export const Mainview = () => {
    return (
        <div className="pt-3 pl-8 pr-8 pb-3 flex flex-col gap-8 bg-slate-400 ">

            <div className="grid grid-cols-[7fr,1fr] justify-between">
           
                <div> Overview </div>
                
                <div className="flex bg-white justify-evenly rounded-sm "> 
                    <div className="text-[15px] p-1">  Last Month  </div>
                    <div className="flex justify-center items-center"> 
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z" fill="#4D4D4D"/>
                        </svg>
                     </div>   
                </div>

            </div>

            <div className="grid grid-cols-3">
                <CardsLayout /> 
            </div>

            <div>
                 Payouts 
            </div>

        </div>
    )
}

export const CardsData = [
    { text: "NEXT PAYOUT",price  : "₹2,312.23" , orderscount : 23, date : 'by Today.04:00 PM' , bgcolor : '#146EB4' ,color : 'white' },
    { text: "PENDING PAYOUTS",price  : "₹92,312.20" , orderscount : 13,},
    { text: "COMPLETED PAYOUT",price  : "₹23,92,312.19" },
] 


export const CardsLayout = () => {
    return (
        <>
        
            {CardsData?.map(i => {
                return (
                    <div key = {i?.text} className="grid grid-rows-2 gap-3 p-5" style = {{backgroundColor : `${i?.bgcolor}` ,color : `${i?.color}` }}> 
                       
                        <div className="grid grid-cols-2 justify-between"> 
                          <div>  {i?.text}  <Questionimg /> </div>    
                          <div>    {i?.date}  </div>
                        </div>

                        <div className="grid grid-cols-2 justify-between"> 
                          <div>  {i?.price} </div>    
                          <div>   {i?.orderscount} orders </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}