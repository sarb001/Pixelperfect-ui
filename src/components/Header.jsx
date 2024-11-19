import { Dropdownimg, Magnifyglassicon, Questionimg, SpeakerIcon } from "./Images/AllImages"

export const Header = () => {
    return (
        <div className="grid grid-cols-3 gap-4 pt-3 pl-8 pr-8 pb-3 bg-white text-black">

            <div className="grid grid-cols-[2fr,4fr] justify-start">
                <div className="flex items-center text-xl"> Payouts  </div>
                <div className="flex gap-3"> 
                    <div className="flex justify-center items-center">  <Questionimg />  </div>
                    <div className="pt-2 text-[14px] flex justify-center">   How it works   </div>
                </div>
            </div>

            <div>
                 <Magnifyglassicon />
                <input type = "text" placeholder="Search features,tutorials,etc." />
            </div>

            <div className="grid grid-cols-2">
                <SpeakerIcon />
                <Dropdownimg />
            </div>
        </div>
    )
}