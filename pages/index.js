import { HomeSvg, GiftSvg, GridSvg, HelpSvg, SettingsVg, PortfolioSvg, SecuritySvg, WalletSvg, RingBellSvg, MessageSvg, SearchSvg, RingingBellSvg, SmallLeftArrowSvg, UpDownArrowSvg, PlusSvg, RightArrowSvg, LeftArrowSvg, PakistaniRupeeSvg, ArrowUpSvg, ArrowDownSvg } from "@/components/svg/AllSvg"
import SwitchButton from "@/components/ui/SwitchButton"

function Home() {
  return (
    <>
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-green-500 to-blue-800">
      {/* sidebar */}
      <div className="relative w-[1300px] h-[630px] ml-5 bg-white border border-gray-50 rounded-3xl">
        <div className="absolute -left-7 z-20 w-12 bg-[#52469C] rounded-full h-[420px] mt-24 shadow-gray-600 shadow-xl">
           <div className="flex flex-col space-y-3 items-center justify-center pt-5">
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><HomeSvg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><GridSvg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><PortfolioSvg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><SecuritySvg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><WalletSvg color={"#fff"}/></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><HomeSvg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><GiftSvg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><SettingsVg /></button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-900 hover:scale-110 transition-all ease-in-out"><HelpSvg /></button>
           </div>
        </div>
          {/* mainframe */}
        <div className="flex w-full h-full">
            <div className="w-full h-full pt-6">
              <div className="flex items-center pl-20 justify-between">
                  <h1 className="text-lg font-bold">Good Evening Briant !</h1> 
                  <div className="flex items-center pr-10 gap-4">
                    <div className="flex">
                      <input type="text" disabled className="text-xs font-bold bg-[#EFECFF] w-32 rounded-s-lg h-8 py-1 px-3" placeholder="Personal Account"/>
                      <button className="hover:bg-[#7a74a156] bg-[#EFECFF] w-8 h-8 rounded-e-lg flex items-center justify-center hover:scale-105 transition-all ease-in-out">
                        <UpDownArrowSvg />
                      </button> 
                    </div>
                   <button className="flex items-center justify-center bg-[#52469C] h-8 w-8 shadow-xl hover:scale-110 transition-all ease-in-out rounded-lg "><WalletSvg color={"#fff"}/></button>
                  </div>
              </div>
              {/* main section */}
              <div className="w-full flex gap-4 mt-12 pl-[42px]">
                {/* credit card section */}
                <div className="h-80 w-96 flex flex-col space-y-5 items-center">
                  {/* credit cards */}
                  <div className="relative h-[140px] w-48 rounded-2xl overflow-hidden">
                    <img className="absolute h-full w-full object-cover" src="./img/back_img.jpg" alt="My image" />
                    <div className="absolute flex flex-col space-y-2 p-2">
                      <div className="pb-1 pl-1 pt-2">
                      <SwitchButton trending={false}/>
                      </div>
                      <div className="pl-1 pt-1">
                        <h1 className="text-[8px] font-semibold text-gray-300">Platinum</h1>
                        <h1 className="font-semibold text-gray-300">9224 0699 1547 8975</h1>
                      </div>
                      <div className="flex items-start justify-between pt-3 pl-1">
                        <div>
                          <h1 className="text-[8px] font-semibold text-gray-300">Name Surname</h1>
                          <h1 className="text-[10px] font-semibold text-gray-300">Briant Robert</h1>
                        </div>
                        <div>
                          <h1 className="text-[8px] font-semibold text-gray-300">Mounth/Year</h1>
                          <h1 className="text-[10px] font-semibold text-gray-300">12/89</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* botton add new card */}
                  <button className="h-[132px] w-48 bg-gray-100 border-2 border-gray-400 border-dashed rounded-2xl flex items-center justify-center hover:scale-105 transition-all ease-in-out">
                    <div className="flex flex-col items-center">
                      <PlusSvg />
                      <h1 className="text-sm font-semibold text-gray-400">Add New Card</h1>
                    </div>
                  </button>
                </div>
                {/* graphic center section */}
                <div className="flex flex-col w-full mr-5 ml-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-lg font-semibold">All Transactions</h1>
                      </div>
                    <div className="flex justify-between items-center space-x-7 pr-5">
                      <button className="h-8 w-8 hover:border border-gray-300 flex justify-center items-center rounded-lg hover:shadow-xl hover:scale-110 transition-all ease-in-out">
                        <LeftArrowSvg />
                      </button>
                      <button className="h-8 w-8 hover:border border-gray-300 flex justify-center items-center rounded-lg hover:shadow-xl hover:scale-110 transition-all ease-in-out">
                         <RightArrowSvg />
                      </button>
                    </div>
                   
                    </div>

                    <div className="pt-4">
                      <h1 className="text-sm text-gray-400">This Week Summary</h1>
                    </div>
                    <div className="pt-4">
                       <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center space-x-3">
                          <PakistaniRupeeSvg />
                          <h1 className="text-lg font-bold">113,650<span className="text-gray-300 pl-1">PKR</span></h1>
                        </div>
                        <div className="pl-10 flex items-center justify-center">
                          <ArrowUpSvg />
                         <h1 className="text-base font-semibold">24,000<span className="text-gray-300 pl-1">PKR</span></h1>
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowDownSvg />
                         <h1 className="text-base font-semibold pr-5">5,324<span className="text-gray-300 pl-1">PKR</span></h1>
                        </div>

                       </div>
                       {/* pumping cards */}
                       <div className="pt-6 h-65">
                      <div className="flex items-center justify-between w-full hover:border hover:border-dashed hover:bg-gray-200 hover:border-gray-500 h-16 rounded-xl transition-all ease-in-out">
                        <div className="bg-white w-full ml-1 mr-1 p-1 rounded-xl flex items-center justify-between border border-gray-300 hover:translate-x-2 hover:shadow-2xl hover:-translate-y-5 transition-all ease-in-out">
                          <div className="flex items-center justify-center space-x-2 p-1 pl-2 pr-1">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                              <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                            </div>
                            <div>
                              <h1>Online Shopping</h1>
                              <h1 className="text-xs text-gray-400">Online Shopping</h1>
                            </div>
                          </div>
                          <div className="pl-10">
                            <h1 className="text-sm font-bold">-3,000<span className="text-gray-200 pl-1">PKR</span></h1>
                          </div>
                          <div className="pr-5">
                            <SwitchButton trending size={"normal"}/>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full hover:border hover:border-dashed hover:bg-gray-200 hover:border-gray-500 h-16 rounded-xl transition-all ease-in-out">
                        <div className="bg-white w-full ml-1 mr-1 p-1 rounded-xl flex items-center justify-between border border-gray-300 hover:translate-x-2 hover:shadow-2xl hover:-translate-y-5 transition-all ease-in-out">
                          <div className="flex items-center justify-center space-x-2 p-1 pl-2 pr-1">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                              <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                            </div>
                            <div>
                              <h1>Online Shopping</h1>
                              <h1 className="text-xs text-gray-400">Online Shopping</h1>
                            </div>
                          </div>
                          <div className="pl-10">
                            <h1 className="text-sm font-bold">-3,000<span className="text-gray-200 pl-1">PKR</span></h1>
                          </div>
                          <div className="pr-5">
                            <SwitchButton trending size={"normal"}/>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full hover:border hover:border-dashed hover:bg-gray-200 hover:border-gray-500 h-16 rounded-xl transition-all ease-in-out">
                        <div className="bg-white w-full ml-1 mr-1 p-1 rounded-xl flex items-center justify-between border border-gray-300 hover:translate-x-2 hover:shadow-2xl hover:-translate-y-5 transition-all ease-in-out">
                          <div className="flex items-center justify-center space-x-2 p-1 pl-2 pr-1">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                              <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                            </div>
                            <div>
                              <h1>Online Shopping</h1>
                              <h1 className="text-xs text-gray-400">Online Shopping</h1>
                            </div>
                          </div>
                          <div className="pl-10">
                            <h1 className="text-sm font-bold">-3,000<span className="text-gray-200 pl-1">PKR</span></h1>
                          </div>
                          <div className="pr-5">
                            <SwitchButton trending size={"normal"}/>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 pl-[75px]">
                <div className="">
                  <h1 className="font-semibold">Quick Summary On Your Account</h1>
                </div>
                <div className="pr-5">
                  <button className="text-sm text-gray-400 hover:scale-110 hover:shadow-xl transition-all ease-in-out ">View All</button>
                </div>
              </div>
            </div>
            {/* contact session */}
            <div className="h-full w-96 bg-[#EFECFF] rounded-e-3xl">
              <div className="w-full">
                <div className="pt-4 flex items-center gap-2 justify-end">
                   <button className="border px-2 py-2 shadow-lg hover:scale-110 transition-all ease-in-out rounded-lg bg-white"><MessageSvg /></button>
                   <button className="border px-2 py-2 shadow-lg hover:scale-110 transition-all ease-in-out rounded-lg bg-white"><RingBellSvg /></button>
                   <button className="mr-8 ml-4 w-8 h-8 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all ease-in-out">
                   <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image"/>
                   </button>
                </div>
                <div className="w-full mt-10 pl-7 pr-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold">Contacts</h1>
                    </div>
                    <div>
                    <button className="border px-1 py-1 shadow-lg hover:scale-110 transition-all ease-in-out rounded-lg bg-white"><SearchSvg /></button>
                    </div>
                  </div>
                  <h1 className="text-xs font-semibold mt-3">Last Payment Sent 2 days ago </h1>
                  </div>
                    {/* cards contacts */}
                  <div className="mt-4 p-2 ml-4 mr-5 h-72 overflow-y-scroll scrollbar-thumb-[#52469C] scrollbar-thin scrollbar-rounded-md scrollbar-track-gray-200">
                    {/* single card begins here */}
                    <div className="flex flex-col h-80 gap-4">

                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                      </div>
                      <div className="-space-y-1">
                        <h1 className="text-base font-semibold">Briant Robert</h1>
                        <h1 className="text-sm text-gray-500 ml-1">Tampa, NY</h1>
                      </div>
                    </div>
                    {/* single card ends here */}
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                      </div>
                      <div className="-space-y-1">
                        <h1 className="text-base font-semibold">Briant Robert</h1>
                        <h1 className="text-sm text-gray-500 ml-1">Tampa, NY</h1>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                      </div>
                      <div className="-space-y-1">
                        <h1 className="text-base font-semibold">Briant Robert</h1>
                        <h1 className="text-sm text-gray-500 ml-1">Tampa, NY</h1>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                      </div>
                      <div className="-space-y-1">
                        <h1 className="text-base font-semibold">Briant Robert</h1>
                        <h1 className="text-sm text-gray-500 ml-1">Tampa, NY</h1>
                      </div>
                    </div>

                    {/* <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                      </div>
                      <div className="-space-y-1">
                        <h1 className="text-base font-semibold">Briant Robert</h1>
                        <h1 className="text-sm text-gray-500 ml-1">Tampa, NY</h1>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
                        <img className="h-full w-full object-cover" src="./img/my.jpg" alt="My image" />
                      </div>
                      <div className="-space-y-1">
                        <h1 className="text-base font-semibold">Briant Robert</h1>
                        <h1 className="text-sm text-gray-500 ml-1">Tampa, NY</h1>
                      </div>
                    </div> */}
                    </div>
                  </div>
                    {/* gift section */}
                  <div className="mt-8 ml-6 mr-7 font-semibold">
                     <RingingBellSvg />
                     <h1>It's Your Wife's Birthday</h1>
                     <h1>after 2 days</h1>
                     <div className="flex justify-between items-center -mt-2">
                      <h1>Let's Plan for a big gift!</h1>
                      <div className="h-11 w-11 bg-[#746caa69] rounded-full flex items-center justify-center">
                        <button className="bg-[#52469C] h-8 w-8 rounded-full flex items-center justify-center hover:scale-110 transition-all ease-in-out"><SmallLeftArrowSvg /></button>
                      </div>
                     </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
       
      
    </>
  )
}

export default Home
