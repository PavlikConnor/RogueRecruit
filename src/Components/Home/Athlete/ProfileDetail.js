import React, { useState, useEffect } from 'react';
// import Partnerimg1 from '../../../assets/Web_assets/img/brands/z1.png'
// import Profileimg from '../../../assets/Web_assets/img/photos/about5.jpg'
// import Infobg from '../../../assets/Web_assets/img/photos/bg3.jpg'
import axios from 'axios';
import ProfileImg from '../../../assets/Web_assets/img/avatars/athleteimg1.webp'
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Loader from '../../Loader';
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';

import Logo from '../../../assets/Web_assets/img/logo.png';

var Spinner = require('react-spinkit');

let sports = []
let sportSelected
let mediaLinks=[]
let idselected
let eventOrSeason
let events=[]
let season
let filter = []
let final = []
let seasonSelected
let teamSelected
let eventNameSelected

const ProfileDetail = () => {
   const location = useLocation();
   const { state } = location;
   const [Isloading, setIsLoading] = useState(true);
   const [show, setShow] = useState(false);
   const [alldata, setAlldata] = useState({});
   const [sportcode, setSportcode] = useState([]);
   const [showYears, setShowYears] = useState(true);
   const [seasons, setSeasons] = useState([])
   const [teams, setTeams] = useState([])
   const [stats, setStats] = useState([])
   const [EventsLoader,setEventsLoader]=useState(false)
   // const [mediaLinks, setMediaLinks] = useState([])
   // const [events, setEvents] = useState([])
 const [fieldData, setFieldData] = useState([])

   const [StatsEmpty, setStatsEmpty] = useState(true)
   const [teamsEmpty, setTeamsEmpty] = useState(true)



   useEffect(() => {

      sportSelected="VB"
      try {
         axios({
            method: 'GET',
            // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/profile/GetProfileBySportAndID?id=${state.Content.athleteId}`,
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",

            }
         }).then((response) => {
            // console.log("responbse for detail" ,response.data)
            setAlldata(response.data.result);
             // console.log("Media detail" ,response.data.mediaLinks)
            sports = response.data.result.sports
            if (sports.length != 0) {
               setSeasons(sports[0].seasons);
               // console.log("responbse for all data" ,sports)
            }
            setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }, []);

   $('.nav-tabs-basic-1 li a').on('click', function(){
    $('.nav-tabs-2 li a').removeClass('active');
    $('.nav-tabs-3 li a').removeClass('active');
   
});

   $('.nav-tabs-2 li a').on('click', function(){
    $('.nav-tabs-3 li a').removeClass('active');
   
});
  

   const getSeason = (code) => {
      events=[]
      sportSelected = code
     
      // setMediaLinks([])
      setTeams([])
      setStats([])
      let filteredResponse = sports.filter(data => data.sportCode == code);
      setSeasons(filteredResponse[0].seasons)
      // console.log("filtered seasons are",filteredResponse[0].seasons)
    
      // setTeams(filteredResponse[0].seasons[0].teams)
   }

   const getTeams = (seasonYear) => {
       seasonSelected=seasonYear

      events=[]
      // setMediaLinks([])
      setStats([])
      let filteredResponse = seasons.filter(data => data.seasonYear == seasonYear);
      setTeamsEmpty(false)
      setTeams(filteredResponse[0].teams)
      console.log("filtered teams are",filteredResponse[0].teams)
   }

   const getStats = (seasonID,team) => {
       teamSelected=team
       setEventsLoader(true)
      // setStats([])
      // let filteredResponse = teams.filter(data => data.seasonID == seasonID);
      // setStats(filteredResponse[0].stats)
      getSeasonDetails(seasonID)
      setStatsEmpty(false)
      // console.log("filtered teams are",filteredResponse[0].stats)
   }


 const getUIFieldsVB=()=>{
   final=[]
   filter=[]
        if(eventOrSeason == "G")
          {
             season=false
          }
          else{
            season=true
          }
      try {
         axios({
            method: 'GET',
            // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
            url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/volleyball/GetUIFieldsVB?season=${season}`,
            headers: {
               "Content-type": "application/json",
               'Access-Control-Allow-Origins': '*',
               "CORS": "Access-Control-Allow-Origin",

            }
         }).then((response) => {
            console.log("responbse for detail for ui field" ,JSON.stringify(response.data))
            setFieldData(response.data.result)
            setIsLoading(false)
         });
      }
      catch (error) {
         console.log(error)
      }
   }


 const getUIFieldsFB=()=>{
   final=[]
   filter=[]
   if(eventOrSeason == "G")
     {
        season=false
     }
     else{
       season=true
     }
  
 try {
    axios({
       method: 'GET',
       // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
       url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/football/GetUIFieldsFB?season=${season}`,
       headers: {
          "Content-type": "application/json",
          'Access-Control-Allow-Origins': '*',
          "CORS": "Access-Control-Allow-Origin",

       }
    }).then((response) => {
       console.log("responbse for detail for ui field football" ,JSON.stringify(response.data))
       setFieldData(response.data.result)
       setIsLoading(false)
    });
 }
 catch (error) {
    console.log(error)
 }


}


const getUIFieldsBB=()=>{
  
   final=[]
   filter=[]
   if(eventOrSeason == "G")
     {
        season=false
     }
     else{
       season=true
     }
 
 try {
    axios({
       method: 'GET',
       // url: 'https://rogue-mobileappservice03052022.azurewebsites.net/api/admin/user/GetUsers?page=1&pageSize=50',
       url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/basketball/GetUIFieldsBB?season=${season}`,
       headers: {
          "Content-type": "application/json",
          'Access-Control-Allow-Origins': '*',
          "CORS": "Access-Control-Allow-Origin",

       }
    }).then((response) => {
       console.log("responbse for detail for ui field basketball" ,JSON.stringify(response.data))
       setFieldData(response.data.result)
       setIsLoading(false)
    });
 }
 catch (error) {
    console.log(error)
 }


}


const getSeasonDetails=(id)=>{
   
   
  
      if(sportSelected=="VB")
            { 

                     try {
                        axios({
                           method: 'GET',
                           
                           url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/volleyball/GetVBSeason?seasonId=${id}`,
                           headers: {
                              "Content-type": "application/json",
                              'Access-Control-Allow-Origins': '*',
                              "CORS": "Access-Control-Allow-Origin",

                           }
                        }).then((response) => {
                           // console.log(JSON.stringify(response.data.result))
                        
                        //  mediaLinks=response.data.result.sportTeam.season[0].mediaLinks
                        //    console.log("Media",mediaLinks)
                           events=response.data.result.events
                           
                           if (response.data.result.sportTeam.season[0].volleyballStat.length != 0) {
                              eventOrSeason = response.data.result.sportTeam.season[0].volleyballStat[0].seasonOrGame
                            }
                          
                           console.log("events",JSON.stringify(events))
                           getUIFieldsVB()
                           setEventsLoader(false)
                        
                        });
                     }
                     catch (error) {
                        console.log(error)
                     }

            }
      else if(sportSelected=="FB")

      {
         try {
            axios({
               method: 'GET',
               url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/football/GetSeason?seasonId=${id}`,
               headers: {
                  "Content-type": "application/json",
                  'Access-Control-Allow-Origins': '*',
                  "CORS": "Access-Control-Allow-Origin",

               }
            }).then((response) => {
            
               // mediaLinks=response.data.result.sportTeam.season[0].mediaLinks

               events=response.data.result.events
             

                 // console.log(seasonInfo);
                  if (response.data.result.sportTeam.season[0].footballStat.length != 0) {
                     eventOrSeason = response.data.result.sportTeam.season[0].footballStat[0].seasonOrGame

                  }

               getUIFieldsFB()
               setEventsLoader(false)
            });
         }
         catch (error) {
            console.log(error)
         }
      }
      else if(sportSelected=="BB")
      {
 
         try {
            axios({
               method: 'GET',
               
               url: `https://rogue-mobileappservice03052022.azurewebsites.net/api/basketball/GetBBSeason?seasonId=${id}`,
               headers: {
                  "Content-type": "application/json",
                  'Access-Control-Allow-Origins': '*',
                  "CORS": "Access-Control-Allow-Origin",

               }
            }).then((response) => {

               console.log("baskertball",JSON.stringify(response.data.result))
            
               // mediaLinks=response.data.result.sportTeam.season[0].mediaLinks

               events=response.data.result.events
               

               if (response.data.result.sportTeam.season[0].basketballStat.length != 0) {
                  eventOrSeason = response.data.result.sportTeam.season[0].basketballStat[0].seasonOrGame
                }
                getUIFieldsBB()
                setEventsLoader(false)
            });
         }
         catch (error) {
            console.log(error)
         }
      }

   }


   const getData=(eventID,event)=>{
      eventNameSelected=event==null  ? "Event": event 

       idselected=eventID

       let filteredEvents = events.filter(response => response.eventID == eventID)
      setShow(true)
  
      fieldData.map((item, index) => {



         let filteredResponse = fieldData.filter(response => response.group == item.group)

         filteredResponse.forEach((value, key) => {

           let idS = value.id.charAt(0).toLowerCase() + value.id.slice(1)
        
           let test = Object.entries(filteredEvents[0].stats).find(([id, value]) => idS === id)
           filteredResponse[key].valuesStored = test[1]
          
   
         })
         filter.push({ "groupName": item.group, "data": filteredResponse })
   
       })
       final = getUnique(filter, 'groupName');
       console.log("sorted array------------------>", JSON.stringify(final))
   
   }
   

   function getUnique(array, key) {
      if (typeof key !== "function") {
        const property = key;
        key = function (item) {
          return item[property];
        };
      }
      return Array.from(
        array
          .reduce(function (map, item) {
            const k = key(item);
            if (!map.has(k)) map.set(k, item);
            return map;
          }, new Map())
          .values()
      );
    }
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   if (Isloading) {
      return (<Loader />
        
      )
   }


   // if (EventsLoader) {
   //    return (
   //       <div class="spinner-border" role="status">
   //       <span class="visually-hidden">Loading...</span>
   //     </div>
        
   //    )
   // }
   return (
      <>


<Modal show={show} onHide={handleClose} animation={false} className="modal-lg stat-modal">
   <Modal.Header className=" py-4 align-items-start" >
      
      <Modal.Title>
      <h3 className="h3 fs-26"><span className="sub-text">Event</span> </h3>
      
      </Modal.Title>
      <div>
         <h4  className="fs-18 text-primary mb-0">{eventNameSelected}</h4>
         <p  className="fs-12 mb-1">{teamSelected}/<span>{seasonSelected}</span></p>
      </div>
      {/* <div className='card p-4 background-red card_width'>
      <div className='d-flex justify-content-between'>
                  {/* <p class="fs-15 mb-0 text-white">Event name</p> 
                                 <h4  class="fs-22 mb-1 text-white">{eventNameSelected}</h4>
                                 </div>
                                 <div className='card-body row px-0 py-0 mt-0 '>
                                    <div className='col-md-6'>
                                    <p class="fs-12 mb-0 text-white">Season</p>
                                    <h4  class="fs-16 mb-1 text-white">{seasonSelected}</h4>
                                    </div>
                                    <div className='col-md-6'>
                                    <p class="fs-12 mb-0 text-white">Team</p>
                                    <h4  class="fs-16 mb-1 text-white">{teamSelected}</h4>
                                    </div>
                                 </div>
                            </div> */}
      <Button className=
         "btn-close z-index" variant="secondary" onClick={handleClose}>
      </Button>
   </Modal.Header>
   
   <Modal.Body className="overflow-hidden pt-0">

                  
   {final.map((item, index) => {                        

                        return(
                           <div>

                                 <h4 className='mt-0 text-primary'>{item.groupName}</h4>
                                 <div className='card mb-2'>
                                 <div className='card-body row px-4 pt-2 pb-0'>
                                 {item.data.map((item, index) => {

                              return(
                                    <div className="col-md-4 mb-2">
                                       
                                       <p class="fs-13 mb-0">{item.friendlyName}</p>

                                       {item.friendlyName == "Home or Away" ?

                                         <h4 class="fs-14 mb-1"> {item.valuesStored == "H" ? "Home" : "Away"}</h4>

                                         :

                                        
                                         
                                    <h4 class="fs-14 mb-1">{item.valuesStored==null ? 0 :item.valuesStored}</h4>
                              }
                                    </div>
                                    )

                                 })}
                                 </div>
</div>
</div>
                        )})
}


   </Modal.Body>
</Modal>
         <div className="right_sec">
            <h2 className="h1 mb-3">Sport Detail</h2>
            {sports.length == 0 ?
               <div>
                  <h2 className="text-center py-10"> No Data Available</h2>
               </div>
               :
               <div>
                  <ul className="nav nav-tabs nav-tabs-basic nav-tabs-basic-1">
                     {sports.map((item, index) =>
                        <li key={index} className="nav-item">
                           <a className={index == 0 ? "nav-link active" : "nav-link"} data-bs-toggle="tab" href={`#tab3-${index}`} onClick
                              ={() => getSeason(item.sportCode)}>{item.sportCode == "VB" ? "Volleyball" : item.sportCode == "FB" ? "Football" : "Basketball"}
                           </a>
                        </li>
                     )}
                  </ul>
                  <div className="tab-content mt-4 mt-md-8 " >
                     <ul className="nav nav-tabs-2 justify-space-between mb-8">
                        {seasons.map((item, index) =>
                           <li className="nav-item px-1" key={index}>
                              <a data-bs-toggle="tab" className="d-inline-block w-100 py-2 px-3 rounded back-red text-white text-center fw-bold  border line-height"
                                 href="#" onClick={() =>
                                    getTeams(item.seasonYear)}>
                                 <span className="mb-0 fs-12 text-body">Season</span>
                                 <p className="mb-0 fs-14 text-body">{item.seasonYear}</p>
                              </a>
                           </li>
                        )}
                     </ul>
                     {teamsEmpty == true ?
                        null :
                        <div>
                           {teams.length == 0 ?
                              <div>
                                 {/*// <h2 className="text-center py-10"> No Teams Available</h2>
                              */}</div>
                              :
                              <div>
                                 <h3 className="h3 mb-3"><span className="sub-text">Teams</span> </h3>
                                 <ul className="nav nav-tabs-3 nav-tabs-basic justify-space-between mb-4">
                                    {teams.map((item, index) =>
                                       <li className="nav-item px-1 mb-4" key={index}>
                                          <a data-bs-toggle="tab" className="d-inline-block w-100 p-2 px-4 rounded back-red text-body text-center fw-bold fs-15 border"
                                             onClick={() => getStats(item.seasonID,item.teamName)}>{item.teamName}
                                          </a>
                                       </li>
                                    )}
                                 </ul>
                              </div>
                           }
                        </div>
                     }

         
{/* 
             {mediaLinks.length ==0  ?
             null :
                    <Accordion>
                       <Accordion.Item eventKey="0">
                         <Accordion.Header className="text-primary bg-transparent media_header p-0">
                           Media Links
                         </Accordion.Header>
                         <Accordion.Body className="p-0 border-none">
                         {mediaLinks.map((data,id)=>{
                           return(
                              <div className="card mb-2 mt-4" key={id}>
                                 <div className="card-body py-2 px-2">
                                    <div className="row">
                                       <h3 className="fs-16 mb-0 col-md-6">{data.title}</h3>
                                       <span className="col-md-4">{data.dateTaken.split('T')[0]}</span>
                                       <a className="col-md-2" href={data.url} target="_blank"><i className="uil uil-eye text-primary"></i></a>
                                      
                                    </div>
                                 </div>
                              </div>
                              )
                         })

                         }
                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>


                        } */}

{EventsLoader ?<div className='text-center'>
                  <div class="spinner-border" role="status">
                     <span class="visually-hidden">Loading ...</span>
                 </div>
                 </div>
           :
           events.length ==0  ?
                
               null
      
                   :
                    <Accordion >
                       <Accordion.Item eventKey="0">
                         <Accordion.Header className="text-primary bg-transparent media_header p-0 right_accordion">
                         <span>Events</span>
                           <i className="uil uil-angle-right fs-26"></i>
                         </Accordion.Header>
                         <Accordion.Body className="p-0 border-none">
                         {events.map((item, index) => {
                        

                              return(
                                 <a onClick={()=>getData(item.eventID,item.eventName)}>
                                 <div className='card lift mb-4'>
                                    <div className="card-body py-2 px-5">                                             <div className="row">
                                          <div className='col-md-8'>
                                                <b>{item.eventName==null ? "Event" :item.eventName}</b>
                                          </div>
                                          <div className='col-md-4 text-end'>
                                             <span className=" text-center text-body"><i className="uil uil-angle-right-b"></i></span>
                                    </div>                              
                                             </div>                    
                                         </div>
                              </div>
                                 </a>


                                 
                                 )
                               
                                    
                              })}
                         </Accordion.Body>
                       </Accordion.Item>
                     </Accordion>


                        }



              

                     {/* {StatsEmpty ?
                        null
                        :
                        <div>
                           {stats.length == 0 ?
                              <div>
                               </div>
                              :
                              <div>
                                 <h3 className="h3 mb-3"><span className="sub-text">Stats</span> </h3>
                                 <div className="row rounded box-shadow py-4 px-4">
                                    <h4 className="mb-2">Summary Stats</h4>
                                    {stats.map((item, index) => {
                                       return (
                                          <div className="col-md-4 mb-4" key={index}>
                                             <p className="mb-0  fs-15">{item.statName}</p>
                                             <p className="mb-0 fs-16 fw-bold">{item.statValue}</p>
                                          </div>
                                       )
                                    })}
                                 </div>
                              </div>
                           }
                        </div>
                     } */}

                     
                  </div>
                  
              
               </div>
            }
         </div>
      </>
   );
}
export default ProfileDetail;
