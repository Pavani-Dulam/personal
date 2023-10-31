import React from "react";
import "./page.css";
const Page=()=>{

  const List=[
    {
    "url":"https://i.ytimg.com/vi/Jp1SlouXJqE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAZTWvxdFzq0EZJgPDIZv98rTtiQ"
    },
    {
      "url":"https://i.ytimg.com/vi/slVa0LaGqW4/maxresdefault.jpg"
    },
    {
       "url":"https://images.indianexpress.com/2017/10/kevin-spacey-759.jpg?w=389"
    },
    {
        "url":
        "https://i.ytimg.com/vi/QdG2mrnodcw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwgJXw0V7-AidLvT8sRsTsPxW5tQ"
     },
     {
        "url":"https://deadline.com/wp-content/uploads/2022/07/The-Lord-of-the-Rings-The-Rings-of-Power-key-art-holizontal.jpg?w=681&h=383&crop=1"
     },
     {
        "url": "https://newsd.in/wp-content/uploads/2021/04/Master-of-None-1.jpg"
     },
     
     {
      url:"https://occ-0-85-3418.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdCnkdprOKuhnQ9tNbgfvgg_19O_ovx2nbfrqQfr_UOb6dZOM_ruKjpsqjEOF79VPJ6ux9UeLyn9I43gi8YH1i5H9D7A0A1yWRqRsWuz_5JrRcUnGSd7tCE7ozvEoeiHgNXmLA.jpg?r=149"
     },
     {
      url:"https://i.ytimg.com/vi/wMfoE49TCsU/maxresdefault.jpg"
     },
     {
      url:"https://pbs.twimg.com/media/Bz3R-b7CMAES6d5.png"
     },
     {
      url:"https://i.ytimg.com/vi/Di310WS8zLk/maxresdefault.jpg"
     } 
     
]
const games=[
  {
    url:"https://www.gamespot.com/a/uploads/original/1179/11799911/3178718-netflix.jpg"
  },
  {
    url:"https://downloadr2.apkmirror.com/wp-content/uploads/2021/09/22/615550b667fde.png"
  }
  ,{
    url:"https://occ-0-987-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdRPL22ib8EsNT5eS2VwkSl5KRJRrTme4dRVkzuYQ9eM3AEHw3OHZ46O5HvewEPnecp09M0_6HlruTs-4OfTcgWQPVZVm9lGQ_8zSgqMmQmKy_ZLpmLXWDz4P6hPUGzvtrWSMw.jpg?r=853"
  },
  {
    url:"https://cdn.whats-on-netflix.com/wp-content/uploads/2023/07/02190138/netflix-most-downloaded-games-jpg.webp"
  },
  {
    url:"https://deadline.com/wp-content/uploads/2022/04/Exploding-Kittens-on-Netflix.jpg?crop=64px%2C77px%2C1790px%2C1003px&resize=681%2C383"
  },
  {
    url:"https://i.ytimg.com/vi/GHsaGC4gzbU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQ_UmkrH_QnMqP8TOLE-kLXYpzUg"
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpaWlBCaM_oekQZBMBuNaaSGeEm9NXbn-vuQ&usqp=CAU"
  }
]
const only=[
  {

    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXmtmoNIOwR_nFUF-ksD5lMmC72cfjHjkISpNDX9yHbYH26Z6IsArTRNrdqJy4jds3cI&usqp=CAU"
    },
  {
    url:"https://pbs.twimg.com/media/E9RmW5kWYAAvEBl.jpg"
  },
  {
    url:"https://lehren.com/wp-content/uploads/2021/05/Everything-We-Know-So-Far-About-Lucifer-Season-6-Finale-Web.jpg"
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu7lS8h9r63_ItW8WoXztmq3EZw3WLhXbHg&usqp=CAU"

  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWElwK3jUS2XWULyn0u25HrufAosBIiVbR3g&usqp=CAU"
  },
 
  ,{
    url:"https://occ-0-987-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdRPL22ib8EsNT5eS2VwkSl5KRJRrTme4dRVkzuYQ9eM3AEHw3OHZ46O5HvewEPnecp09M0_6HlruTs-4OfTcgWQPVZVm9lGQ_8zSgqMmQmKy_ZLpmLXWDz4P6hPUGzvtrWSMw.jpg?r=853"
  },
  {
    url:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRuerRAPs3hY1gAOafS0n9-22LaiX4YFE1O9SXbqX0deFxDHLHxEoILeXYQ-Hjl6oChK18jrw84jG_zvti2lrdKOWj2sTElYUlwiUxaLz3j_oC9xMuwTqaVnBOYJdGeh6-IUmA.jpg?r=fd7"
  },
  {
    url:"https://occ-0-64-987.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdhZMjMoi-4PuSLroKC0lniMqHExitYOIvEHX2Askyf-N10CcYkV7eDQo1QFGPC5oQskJ6fxETQLwjxvACVCGy2Tk7kJLcYXn-ft6VB1XvdR3wFY-YNfadRVcskjVcZIBkSKRQ.jpg?r=7db"
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi03lEeLQ8H6zPapCORsmfeOi5j9Hdjo2XFx11tsgYgszXk3c8Ac6NvgwI73AqEfIZqo&usqp=CAU"
  },
  {
    url:"https://occ-0-1217-1722.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdqyGMpNhFYx2vC_k7k-j-nszauR5eja9kW8pK14DD3omgO5DBAThuoTpbjsZurRFVaahoygEQ1277_T8QRto3vHJaZGrf2BH9wZOLni6UzANcJghglkY0E1qZ1pAEFtzc6wEw.jpg?r=6c4"
  },
  {
    url:"https://i.ytimg.com/vi/QdG2mrnodcw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwgJXw0V7-AidLvT8sRsTsPxW5tQ"
  }
]
const award=[
  {
    url:"https://i0.wp.com/theubj.com/wp-content/uploads/2022/06/peaky.jpeg?fit=1200%2C675&ssl=1"
  },{
    url:"https://static.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time2.png"
  },{
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupPOYS7nk9-Tkr91g8QyRKfKwFzCEb41dmQ&usqp=CAU"
  },{
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRXC3Oy1IBstMEe5jgVumHTRtlgyy9G08AA&usqp=CAU"
  }
]
const comedy=[
  {
    url:"https://occ-0-33-114.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYqhMSmk5BPONPDD_h3Vrmu3dCUBFMtZVVYObuGjK4Gsvgf89I4PrPnkp0_Pz2GiF9y9hp6dr5cb07DoLNMP5XGaUOJcfwg10C8.jpg?r=a17"
  },
  {
    url:"https://occ-0-1009-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUK47yOjtIetxBgHQALiESBi-wxmu1xgffT08ELB4REOMQZ2zwuASdPuvkH_e75Gp6W9tbl9AOG2INUAWinvFoVtmABQ2qsD6w-a.jpg?r=ca2"
  },{
    url:"https://www.whats-on-netflix.com/wp-content/uploads/2015/05/grace-and-frankie-netflix.jpg"
  },{
    url:"https://gizmostory.com/wp-content/uploads/2021/10/Space-Force-Season-2-Collider.jpg"
  },
  {
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsbIOgySOzFVJ8RLaLGqlSKg9QxKIQfrwpA&usqp=CAU"
  },{
    url:"https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbtYfzz0Okpl60lt35HLrTU8DJ-BJLFBpShl-QMISVs7riurQuKLeJkgGsuj0S5dXXkUr-MjkbfLoHNlC-QwxX6q-ooJXXGzkxtsuuh7T7DekL9gqOpR6XdExyGafWicpmShbA.jpg?r=316"
  }
]
const play=[
  {
    url:"https://occ-0-33-114.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdYciiGWyrLYx9WbFDBAwuNpP47pSGMFtmB9JrgTUy-y3Zjs1sLONFpXNeoQC_chRb9jGAA3u-k2r_GQMUWJMtlo-KS236Vrut0U8FrrOX2FOTm0JsaGdsQaKGKHDaK-dAgS.jpg?r=440"
  },
  {
    url:"https://resizing.flixster.com/7tThMEnB2JxqRj3WIbZGleLdGPA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjcwMzcxOS53ZWJw"
  },{
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjIRu5z324o8p5EhJJKrnA_icZ7GpNlCInw&usqp=CAU"
  }
]
    return(
        <>
        <div className="Home">
                    <div className="side1">
                      <div className="icons"> 
                      <i class="fa-solid fa-magnifying-glass"></i>
                      <i class="fa-solid fa-house"></i>
                      <i class="fa-solid fa-calendar-days"></i>
                      <i class="fa-solid fa-tv"></i>
                      <i class="fa-solid fa-radio"></i>
                      <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="side2">
                                <div className="child1">
                                  <div className="content">
                                   <b className="bold">NETFLIX</b><span className="light">  ORIGINAL</span>
                                   <h2>STRANGER THINGS</h2>
                                   <p classNamt experimente="All"><span className="green">95% Match</span>&nbsp;&nbsp;2016&nbsp;&nbsp; 1 Season&nbsp;&nbsp;<span className="hd">4k ultra HD</span>&nbsp;&nbsp;<span className="hd"> 5.1</span></p>
                                   <p className="para">When a young boy vanishes,a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
                                   <p className="para2">Winona Ryde,David Harbour, Matthew, Modine,TV Show, TV-Sci-Fi & Fantasy,Teen TV Shows</p>
                                  </div>
                                  
                                
                                </div>
                                <div className="child2">  
                                      <h6>Trending Now</h6>
                                      <div className="cards">
                                        { List.map((item,key)=>(
                                          <img src={item.url}/>
                                        ))}
                                      </div>
                                      <br></br>
                                      <h6>All Mobile Games</h6>
                                      <div className="cards">
                                        { games.map((item,key)=>(
                                          <img src={item.url}/>
                                        ))}
                                      </div>
                                      <br></br>
                                      <h6>New Releases</h6>
                                      <div className="cards" style={{backgroundColor:"black"}}> 
                                        { play.map((item,key)=>(
                                          <img src={item.url}/>
                                        ))}
                                      </div>
                                      <br></br>
                                      <h6>Only on Netflix</h6>
                                      <div className="cards" style={{backgroundColor:"black"}}> 
                                        { only.map((item,key)=>(
                                          <img src={item.url}/>
                                        ))}
                                      </div>
                                      <br></br>
                                      <h6>Award winning TV Shows</h6>
                                      <div className="cards" style={{backgroundColor:"black"}}> 
                                        { award.map((item,key)=>(
                                          <img src={item.url}/>
                                        ))}
                                      </div>
                                      <br></br>
                                      <h6>TV Comdies</h6>
                                      <div className="cards" style={{backgroundColor:"black"}}> 
                                        { comedy.map((item,key)=>(
                                          <img src={item.url}/>
                                        ))}
                                      </div>
                                      



                                </div>
                        
                    </div>

        </div>

    
        </>
    
        
    )
}
export default Page;