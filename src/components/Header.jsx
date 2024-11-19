import { Dropdownimg, Magnifyglassicon, Questionimg, RoundedDropdown, SpeakerIcon } from "./Images/AllImages"

export const Header = () => {
    return (
        <div className="grid grid-cols-3 gap-4 pt-3 pl-8 pr-8 pb-3 bg-white text-black">

            <div className="grid grid-cols-[2fr,4fr] justify-start">
                <div className="flex items-center text-xl"> Payouts  </div>
                <div className="flex gap-3"> 
                    <div className="pt-1 flex justify-center items-center">  <Questionimg />  </div>
                    <div className="pt-3 text-[14px] flex justify-center">   How it works   </div>
                </div>
            </div>

            <div className="grid grid-cols-[1fr,7fr] items-center bg-[#F2F2F2] rounded-md pt-[9px] pb-[9px] pl-4 pr-4">
                 <div> <Magnifyglassicon /> </div> 
                <input type = "text" placeholder="Search features,tutorials,etc." style = {{backgroundColor:'#F2F2F2'}} />
            </div>

            <div className="flex gap-3 justify-end">
                <div>    <SpeakerIcon /> </div>
                <div>    <RoundedDropdown /> </div>
            </div>
        </div>
    )
}