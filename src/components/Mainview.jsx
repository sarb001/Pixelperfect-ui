import { Downloadimg, Dropdownimg, Greensuccessimg, Magnifyglassicon, Processingimg, Questionimg, TwosidedArrowimg, Whitequestionlogo } from "./Images/AllImages"



export const Mainview = () => {
    return (
        <div className="pt-3 pl-8 pr-8 pb-2 flex flex-col gap-4 bg-slate-100 ">

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

            <div className="grid grid-cols-3 gap-4">
                <CardsLayout /> 
            </div>

            <div className="grid gap-5">
                <div>  Payouts  </div>

                <div className="pt-3 pr-3 pb-24 pl-3 bg-white rounded-lg ">

                    <div className="flex justify-between">
                        
                        <div className="grid grid-cols-[1fr,7fr] items-center bg-[#F2F2F2] border-[#d9d9d9] border-[1px] rounded-md pt-[9px] pb-[9px] pl-4 pr-4">
                            <div> <Magnifyglassicon /> </div> 
                            <input type = "text" placeholder="Order ID or transaction ID" style = {{backgroundColor:'#F2F2F2'}} />
                        </div>

                        <div className="grid grid-cols-2 gap-4 justify-center items-end ">
                            <div className="grid grid-cols-2 bg-white border-[#d9d9d9] border-[1px] rounded-[4px] " > 
                                    <div className="text-[15px] p-1">  Sort  </div>   
                                    <div className="flex justify-center items-center">  <TwosidedArrowimg /> </div>  
                                </div>
                                <div className="bg-white border-[#d9d9d9] border-[1px] flex h-3/4 w-2/5 justify-center items-center rounded-sm ">  <Downloadimg />  </div>
                        </div>


                    </div>

                    <div className="pt-3  w-full"> 
                    
                        <thead>
                            <tr className="bg-gray-300 grid grid-cols-5">  
                                <th className="py-[10px] px-3">  OrderID </th>
                                <th className="py-[10px] px-3">  Status </th>
                                <th className="py-[10px] px-3">  TransactionID </th>
                                <th className="py-[10px] px-3">  Refund date </th>
                                <th className="py-[10px] px-3">  Order amount </th>
                            </tr>
                        </thead>
                
                        <tbody>
                            {TableData?.map(i => {
                                        return (
                                            <tr className="grid grid-cols-5">
                                                <td className="p-[14px] flex justify-center"> {i?.Ordervalue} </td>
                                                <td className="p-[14px] flex  justify-center items-center gap-2"> 
                                                    <div>
                                                    {i?.status === "Successful" ? <Greensuccessimg /> : <Processingimg /> }
                                                    </div>
                                                    <div className="flex justify-center"> 
                                                     {i?.status} 
                                                    </div>
                                                     </td>
                                                <td className="p-[14px] flex justify-center"> {i?.transid} </td>
                                                <td className="p-[14px] flex justify-center"> {i?.rfdate} </td>
                                                <td className="p-[14px] flex justify-center"> ₹{i?.Orderamount} </td>
                                            </tr>
                                        )
                            })}
                        </tbody>
            
                    </div>

                </div>
            </div>

        </div>
    )
}

export const TableData = [
    { Ordervalue : "#281209" ,status : 'Successful', transid : "13163445747", rfdate : "Today,08:45 PM", Orderamount : "1125.00" },
    { Ordervalue : "#281209" ,status : 'Processing', transid : "13163445747", rfdate : "Yesterday,3:00 PM", Orderamount : "1125.00" },
    { Ordervalue : "#281209" , status : 'Successful', transid : "13163445747", rfdate : "12 Jul 2023,03:00 PM", Orderamount : "1125.00" },
    { Ordervalue : "#281209" ,status : 'Successful', transid : "13163445747", rfdate : "12 Jul 2023,03:00 PM", Orderamount : "1125.00" },
    { Ordervalue : "#281209" ,status : 'Successful', transid : "13163445747", rfdate : "12 Jul 2023,03:00 PM", Orderamount : "1125.00" },
    { Ordervalue : "#281209" ,status : 'Successful', transid : "13163445747", rfdate : "12 Jul 2023,03:00 PM", Orderamount : "1125.00" },
]



export const CardsData = [
    { text: "NEXT PAYOUT",price  : "₹2,312.23" , orderscount : '23orders' ,  date : 'by Today.04:00 PM' , bgcolor : '#146EB4' ,color : 'white' },
    { text: "PENDING PAYOUTS",price  : "₹92,312.20" , orderscount : '13orders' , bgcolor : 'white' ,color : 'black' },
    { text: "COMPLETED PAYOUT",price  : "₹23,92,312.19"  , bgcolor : 'white' ,color : 'black', },
] 


export const CardsLayout = () => {
    return (
        <>
        
            {CardsData?.map(i => {
                return (
                    <div key = {i?.text} className="grid grid-rows-2 gap-3 p-3 pt-0  rounded-md " style = {{backgroundColor : `${i?.bgcolor}` ,color : `${i?.color}` }}> 
                       
                        <div className="grid grid-cols-2 justify-between">

                         <div className="flex items-center gap-3">
                           <div className="text-[12px] flex items-center ">  {i?.text} </div>    
                           <div>   
                                 {i?.color === 'white' ? <Whitequestionlogo /> : <Questionimg /> }
                            </div>
                         </div> 

                          <div className="flex items-center justify-end pr-4 text-[13px]">    {i?.date}  </div>
                        </div>

                        <div className="grid grid-cols-2 justify-between items-center"> 
                          <div className="text-2xl">  {i?.price} </div>    
                          <div className="flex justify-end items-center pr-5"> {i?.orderscount ? `${i?.orderscount}>` : ""}  </div>
                        </div>

                    </div>
                )
            })}
        </>
    )
}