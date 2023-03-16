import React, { useState, useEffect } from 'react';
// import Partnerimg1 from '../../../assets/Web_assets/img/brands/z1.png'
// import Profileimg from '../../../assets/Web_assets/img/photos/about5.jpg'
// import Infobg from '../../../assets/Web_assets/img/photos/bg3.jpg'
import axios from 'axios';
import ProfileImg from '../../../assets/Web_assets/img/avatars/athleteimg1.webp'
import { useLocation } from "react-router-dom";

import Loader from '../../Loader';
import $ from 'jquery';


var Spinner = require('react-spinkit');

let sports = []
const ProfileDetail = () => {
   const location = useLocation();
   const { state } = location;
   const [Isloading, setIsLoading] = useState(true);

   const [alldata, setAlldata] = useState({});
   const [sportcode, setSportcode] = useState([]);
   const [showYears, setShowYears] = useState(true);
   const [seasons, setSeasons] = useState([])
   const [teams, setTeams] = useState([])
   const [stats, setStats] = useState([])
   const [StatsEmpty, setStatsEmpty] = useState(true)
   const [teamsEmpty, setTeamsEmpty] = useState(true)


   useEffect(() => {
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
      setTeams([])
      setStats([])
      let filteredResponse = sports.filter(data => data.sportCode == code);
      setSeasons(filteredResponse[0].seasons)
      // setTeams(filteredResponse[0].seasons[0].teams)
      // console.log("filtered teams are",filteredResponse[0].seasons[0].teams)
   }
   const getTeams = (seasonYear) => {
      setStats([])
      let filteredResponse = seasons.filter(data => data.seasonYear == seasonYear);
      setTeamsEmpty(false)
      setTeams(filteredResponse[0].teams)
      // console.log("filtered teams are",filteredResponse[0].teams)
   }
   const getStats = (seasonID) => {
      setStats([])
      let filteredResponse = teams.filter(data => data.seasonID == seasonID);
      setStats(filteredResponse[0].stats)
      setStatsEmpty(false)
      // console.log("filtered teams are",filteredResponse[0].stats)
   }
   if (Isloading) {
      return (<Loader />
        
      )
   }
   return (
      <>
         <div className="right_sec">
            <h2 className="h1 mb-3">Sports Teams History</h2>
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
                              <a data-bs-toggle="tab" className="d-inline-block w-100 py-2 px-4 rounded back-red text-white text-center fw-bold  border line-height"
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
                                             onClick={() => getStats(item.seasonID)}>{item.teamName}
                                          </a>
                                       </li>
                                    )}
                                 </ul>
                              </div>
                           }
                        </div>
                     }
                     {StatsEmpty ?
                        null
                        :
                        <div>
                           {stats.length == 0 ?
                              <div>
                                {/*// <h2 className="text-center py-10"> No Stats Available</h2>
                              */}</div>
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
                     }
                  </div>
               </div>
            }
         </div>
      </>
   );
}
export default ProfileDetail;
