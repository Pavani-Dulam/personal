import Tags from "./Tags";
import "./sidebar.css";


const Body=()=>{
    return(
        <div className="w-full relative "  style={{zIndex:"-1"}}>
            <div className="fixed  tags top-14 " style={{backgroundColor:"white"}}>
              <Tags/>
             </div>
             <div class="flex mt-10 flex-wrap pavani ">
                

                 <div class="max-w-sm w-80 cards py-2" >
                    <img src="https://i.ytimg.com/vi/SZ6dkMpjqrc/maxresdefault.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im "src="https://content.jdmagicbox.com/comp/ahmedabad/q1/079pxx79.xx79.101211103900.d9q1/catalogue/etv-network-bodakdev-ahmedabad-tv-channel-receiver-3ow4e2g-250.jpg"/>
                        <div class="font-bold text-sm hd mt-1">7 AM - ETV Telugu News | 6 September 2023</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">ETV Telugu</p>
                        <p class="text-gray-500 text-base">4.4M views . 2 days ago</p>
                    </div>
                 </div>

                 <div class="max-w-sm w-80 cards py-2 " >
                    <img src="https://assets.telegraphindia.com/telegraph/2023/Aug/1693285174_kushi.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im  "src="https://yt3.googleusercontent.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s900-c-k-c0x00ffffff-no-rj"/>
                        <div class="font-bold text-sm mt-1 hd">Aradya - Lyrical | Kushi | Vijay Devarakonda | Samantha | Kushi Title..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Saregama Telugu</p>
                        <p class="text-gray-500 text-base">29M views . 1month ago</p>
                    </div>
                 </div>


             <div class="max-w-sm w-80 cards py-2 " >
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7720/847720-h" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im"src="https://yt3.googleusercontent.com/YGmCb8GilIy2oDdvP8IMnE6kCEOmptqSmtLT-9CRASWFdC4ZBJxM7X23IkTBjKvF0jhXZyHYHw=s900-c-k-c0x00ffffff-no-rj"/>
                        <div class="font-bold text-sm mt-1 hd">Guppedantha Manasu - Episode 857 | (Telugu) | Serial| Star Maa | Serials..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Star Maa</p>
                        <p class="text-gray-500 text-base">4.4k views . 19 hours ago</p>
                    </div>
                 </div>

                 


                 <div class="max-w-sm w-80 cards py-2 " >
                    <img src="https://www.zoomnews.in/uploads_2019/newses/salaar_91883891_sm.webp" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im "src="https://upload.wikimedia.org/wikipedia/commons/5/58/Honevale_Films.jpg"/>
                        <div class="font-bold text-sm mt-1 hd">Salaar - Teaser | Prabhas | Prasanth Neel | Vijay Kiragandur | Hombale Films..</div>
                    </div>
                    <div class="px-12 py-0 pp ">
                        <p class="text-gray-500 text-base">Hombale Films</p>
                        <p class="text-gray-500 text-base">130M views . 2months ago</p>
                    </div>
                 </div>


                 <div class="max-w-sm w-80 cards mt-3 py-2" >
                    <img src="https://www.livemint.com/lm-img/img/2023/09/04/1600x900/Jawan_1693838179781_1693838180036.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im"src="https://upload.wikimedia.org/wikipedia/en/2/21/Red_Chillies_Entertainment_logo.png"/>
                        <div class="font-bold text-sm mt-1 hd">Jawaan | Hindi | Official Hini Trailer | Shah Rukh Khan | NayanaThara | Anirudh..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Red Chillies Entertainment</p>
                        <p class="text-gray-500 text-base">44M views . 6 days ago</p>
                    </div>
                 </div>


                 <div class="max-w-sm w-80 mt-3  cards py-2" >
                    <img src="https://img6.fresherslive.com/latestnews/2023/09/bigg-boss-7-telugu-elimination-list-2023-64f6ca685375a18794146-900.webp" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im "src="https://yt3.googleusercontent.com/YGmCb8GilIy2oDdvP8IMnE6kCEOmptqSmtLT-9CRASWFdC4ZBJxM7X23IkTBjKvF0jhXZyHYHw=s900-c-k-c0x00ffffff-no-rj"/>
                        <div class="font-bold text-sm mt-1 hd">Big Boss 7- Telugu  Day 2 Troll| BB7 DAY 2 | bb7 nominations | Pallavi prasanth|starma..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Star Maa</p>
                        <p class="text-gray-500 text-base">1.5M views . 7 hours ago</p>
                    </div>
                 </div>

                 <div class="max-w-sm w-80  mt-3 cards py-2" >
                    <img src="https://www.cinejosh.com/reviewsimg/big/bedurulanka-2012-review_b_2508231227.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im"src="https://yt3.googleusercontent.com/ytc/AOPolaTX9oy0CzPZm0ztNU-r7lt7ElpCflGGPwqMynSj8w=s900-c-k-c0x00ffffff-no-rj"/>
                        <div class="font-bold text-sm mt-1 hd">Bedurulanka - 2012 | Official Trailer | Karthikeya | Neha Shetty | Mani Sharma..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Sony Music South</p>
                        <p class="text-gray-500 text-base">7M views . 2 weeks ago</p>
                    </div>
                 </div>

                 <div class="max-w-sm w-80 mt-3 cards py-2 " >
                    <img src="https://cdn.123telugu.com/content/wp-content/uploads/2023/09/Chandramukhi-2.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im "src="https://upload.wikimedia.org/wikipedia/en/6/63/Gemini_TV_Logo.png"/>
                        <div class="font-bold text-sm mt-1 hd">Chandramukhi 2 - Trailer | (Telugu) | Raghava| Kangana | Thriller..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Gemini Tv</p>
                        <p class="text-gray-500 text-base">4.4M views . 2 days ago</p>
                    </div>
                 </div>


                 <div class="max-w-sm w-80 mt-3 cards py-2 " >
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00355947-hymcerwqub-landscape.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im"src="https://yt3.googleusercontent.com/9V21v6ZBVBSxfK0LMK3YgLatb4JRnw01RUmMbaFikIxUsDfn7juW2DwTTtvPKC0XhFBdu_EUXw=s900-c-k-c0x00ffffff-no-rj"/>
                        <div class="font-bold text-sm mt-1 hd">Skandha Trailer (Telugu) |Ram Pothineni | Sree Leela| Boyapati Sreenu | Thaman..</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Jungle Music Telugu</p>
                        <p class="text-gray-500 text-base">33M views . 10 days ago</p>
                    </div>
                 </div>


                 <div class="max-w-sm w-80 mt-3 cards py-2 " >
                    <img src="https://i0.wp.com/filmbunch.in/wp-content/uploads/2023/03/RC15-1.jpg?resize=1140%2C641&ssl=1" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im"src="https://pbs.twimg.com/profile_images/1603747263846977537/OA25gOw4_400x400.jpg"/>
                        <div class="font-bold text-sm mt-1 hd">Game Changer - Ram Charan  | Shankar | Shirish | Thaman | </div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">Dil Raju</p>
                        <p class="text-gray-500 text-base">2.7M views . 5months ago</p>
                    </div>
                 </div>

                 

                 <div class="max-w-sm w-80 mt-3 cards py-2 " >
                    <img src="https://i.ytimg.com/vi/lzgD_1mPKcA/sddefault.jpg?v=64915871" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im "src="https://cdn.gulte.com/wp-content/uploads/2022/01/New-Project-2022-01-30T202413.298.jpg"/>
                        <div class="font-bold text-sm mt-1 hd">Dhee Premier Leauge Latest Promo| 6th September 2023 | Deepika Pilli | Sekhar...</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">ETV Dhee</p>
                        <p class="text-gray-500 text-base">1M views . 5 days ago</p>
                    </div>
                 </div>


                 <div class="max-w-sm w-80 mt-3 cards py-2 " >
                    <img src="https://i.ytimg.com/vi/7Y5q41D8_hs/hqdefault.jpg" class="w-72 h-36 pic rounded-2xl"/>
                    <div class="px-1 py-1 flex gap-2 w-80 ">
                        <img className="w-10 h-10 rounded-3xl mt-1 im "src="https://i.ytimg.com/vi/4o87q5mYb8Y/maxresdefault.jpg"/>
                        <div class="font-bold flex text-sm mt-1 hd">Hungry Cheetah - OG Glimpse | Pawan Kalyan | Sujeeth | Thaman</div>
                    </div>
                    <div class="px-12 py-0 pp">
                        <p class="text-gray-500 text-base">DVV Entertainment</p>
                        <p class="text-gray-500 text-base">2M views . 4 days ago</p>
                    </div>
                 </div>

                 



              </div>

            
            
        </div>
    )

}
export default Body;