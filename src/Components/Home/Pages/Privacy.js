import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Animated} from "react-animated-css";

const Privacy = () => {
 

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
    <section className="wrapper bg-soft-primary">    
      <div className="container pt-17 pb-19 pt-md-20 pb-md-20 text-center">
        <div className="row">
          <div className="col-md-10 col-xl-8 mx-auto">
            <div className="post-header">
              <h1 className="display-1 mb-5">Privacy Policy</h1>
              <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb text-black">
                <li className="breadcrumb-item"><NavLink to='/' className='hover_color fs-15'>Home</NavLink></li>
                <li className="breadcrumb-item active fs-15" aria-current="page">Privacy Policy</li>
              </ol>
              </nav>
            </div>  
          </div>   
        </div>
      </div>
    </section>

    <section className="wrapper bg-white privacy_sec">
      <div className="container pb-14 pb-md-16">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="blog single mt-n17">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h2 className="display-2 mb-3">Privacy Policy</h2>
                  <p className="fs-13">Last updated: November 21, 2021</p>
                  <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. </p>
                  <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. </p>
                  
                  <h3 className="display-5 mb-3 mt-9">Interpretation and Definitions</h3>
                  <h4 className="display-7 mb-4">Interpretation</h4>
                  <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural. </p>
                  <h5 className="display-7 mb-4">Definitions</h5>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="icon-list bullet-bg bullet-soft-primary ">
                    <li><span><i className="uil uil-check"></i></span> <b>Account</b> means a unique account created for You to access our Service or parts of our Service.
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Affiliate</b> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Application</b> means the software program provided by the Company downloaded by You on any electronic device, named Rogue Recruit.
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Business,</b> for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Rogue Innovations, 5602 Jones St, Omaha, NE 68106. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Consumer,</b> for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Cookies</b> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Country</b> refers to: Nebraska, United States 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Do Not Track</b> (DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Personal Data</b>is any information that relates to an identified or identifiable individual. 
                        <p>For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You. </p>
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Sale,</b> for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.           </li>
                    <li><span><i className="uil uil-check"></i></span><b>Service</b>  refers to the Application or the Website or both. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Service Provider </b> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Third-party Social Media Service</b> refers to any website or any social network website through which a User can log in or create an account to use the Service. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Usage Data</b> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit). 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Website</b> refers to Rogue Recruit, accessible from {"{' '}"}
                      <a target="_blank" className="text-primary" href="https://www.roguerecruit.com/www.roguerecruit.com">
                        www.roguerecruit.com 
                      </a>
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. 
                    </li>
                  </ul> 


                  <h3 className="display-5 mb-3 mt-9">Collecting and Using Your Personal Data</h3>
                  <h4 className="display-7 mb-4 fw-normal">Types of Data Collected</h4>
                  <h5 className="display-7 mb-4">Personal Data</h5>
                  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: </p>
                  
                  <ul className="icon-list bullet-bg bullet-soft-primary ">
                    <li><span><i className="uil uil-check"></i></span> Email address
                    </li>
                    <li><span><i className="uil uil-check"></i></span>  First name and last name
                    </li>
                    <li><span><i className="uil uil-check"></i></span>Phone number
                    </li>
                    <li><span><i className="uil uil-check"></i></span>  Address, State, Province, ZIP/Postal code, City
                    </li>
                    <li><span><i className="uil uil-check"></i></span>  Usage Data
                    </li>
                  </ul>
                  
                  <h5 className="display-7 mb-4 mt-2">Usage Data</h5>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. </p>
                  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                  <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device. </p>

                  <h5 className="display-7 mb-4 mt-2">Information from Third-Party Social Media Services</h5>
                  <p>Information from Third-Party Social Media Services:</p>
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li><span><i className="uil uil-check"></i></span>Google
                    </li>
                    <li><span><i className="uil uil-check"></i></span>Facebook
                    </li>
                    <li><span><i className="uil uil-check"></i></span> Twitter
                    </li>
                  </ul>
                  <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account. </p>
                  <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy. </p>
                  
                  <h5 className="display-7 mb-4 mt-2">Information Collected while Using the Application</h5>
                  <p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission: </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li><span><i className="uil uil-check"></i></span>Information regarding your location
                    </li>
                    <li><span><i className="uil uil-check"></i></span>Pictures and other information from your Device's camera and photo library
                    </li>
                  </ul>
                  <p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device. </p>
                  <p>You can enable or disable access to this information at any time, through Your Device settings.</p>

                  <h5 className="display-7 mb-4 mt-2">Tracking Technologies and Cookies</h5>
                  <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li><span><i className="uil uil-check"></i></span> <b>Cookies or Browser Cookies. </b> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Flash Cookies.</b> Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared objects?" available at{"{' '}"}
                      <a target="_blank" className="text-primary" href="https://www.adobe.com/products/flashplayer/end-of-life.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_ ">
                        https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_  
                      </a>
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>Web Beacons.</b> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity). 
                    </li>
                  </ul>
                  <p>
                  Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies:{"{' '}"}
                  <a className="text-primary" target="_blank" href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking">
                         Cookies by PrivacyPolicies Generator.  
                  </a>
                  </p>

                  <p>
                  We use both Session and Persistent Cookies for the purposes set out below:
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary">
                    <li><span><i className="uil uil-check"></i></span> <b>Necessary / Essential Cookies </b> 
                      <p className="mt-4 mb-2">Type: Session Cookies</p> 
                      <p className="mb-2">Administered by: Us</p>
                      <p>
                        Purpose: These Cookies are essential to provide You with services available through the Website
                        and to enable You to use some of its features. They help to authenticate users and prevent
                        fraudulent use of user accounts. Without these Cookies, the services that You have asked for
                        cannot be provided, and We only use these Cookies to provide You with those services.
                      </p>
                    </li>
                    <li><span><i className="uil uil-check"></i></span> <b>Cookies Policy / Notice Acceptance Cookies </b> 
                      <p className="mt-4 mb-2">Type: Persistent Cookies</p> 
                      <p className="mb-2">Administered by: Us</p>
                      <p>
                        Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                      </p>
                    </li>
                     <li><span><i className="uil uil-check"></i></span> <b>Functionality Cookies </b> 
                      <p className="mt-4 mb-2">Type: Persistent Cookies</p> 
                      <p className="mb-2">Administered by: Us</p>
                      <p>
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website. 
                      </p>
                    </li>
                    <li><span><i className="uil uil-check"></i></span> <b>Tracking and Performance Cookies </b> 
                      <p className="mt-4 mb-2">Type: Persistent Cookies</p> 
                      <p className="mb-2">Administered by: Third-Parties</p>
                      <p>
                        Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new pages, features or new functionality of the Website to see how our users react to them. 
                      </p>
                    </li>
                    <li><span><i className="uil uil-check"></i></span> <b>Targeting and Advertising Cookies </b> 
                      <p className="mt-4 mb-2">Type: Persistent Cookies</p> 
                      <p className="mb-2">Administered by: Third-Parties</p>
                      <p>
                        Purpose: These Cookies track your browsing habits to enable Us to show advertising which is more likely to be of interest to You. These Cookies use information about your browsing history to group You with other users who have similar interests. Based on that information, and with Our permission, third party advertisers can place Cookies to enable them to show adverts which We think will be relevant to your interests while You are on third party websites.
                      </p>
                    </li>
                  </ul>
                  <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy. </p>

                  <h4 className="display-6 mb-4 ">Use of Your Personal Data</h4>
                  <p>
                  The Company may use Personal Data for the following purposes:</p>
                  <ul className="icon-list bullet-bg bullet-soft-primary ">
                    <li><span><i className="uil uil-check"></i></span> <b>To provide and maintain our Service,</b> including to monitor the usage of our Service. 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>To manage Your Account:</b> 
                    to manage Your registration as a user of the Service.
                    The Personal Data You provide can give You access to different functionalities of the Service
                    that are available to You as a registered user.
 
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>To contact You:</b> 
                     To contact You by email, telephone calls, SMS, or other
                      equivalent forms of electronic communication, such as a mobile application's push notifications
                      regarding updates or informative communications related to the functionalities, products or
                      contracted services, including the security updates, when necessary or reasonable for their
                      implementation.
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>To provide You</b> 
                      with news, special offers and general information about other
                      goods, services and events which we offer that are similar to those that you have already
                      purchased or enquired about unless You have opted not to receive such information.
                    </li>
                    <li><span><i className="uil uil-check"></i></span><b>To manage Your requests:</b>
                    To attend and manage Your requests to Us.
                      </li>
                    <li><span><i className="uil uil-check"></i></span><b>For business transfers:,</b> 
                      We may use Your information to evaluate or conduct a
                      merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of
                      some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or
                      similar proceeding, in which Personal Data held by Us about our Service users is among the
                      assets transferred.
                     </li>
                    <li><span><i className="uil uil-check"></i></span><b>For other purposes</b> 
                     : We may use Your information for other purposes, such as
                      data analysis, identifying usage trends, determining the effectiveness of our promotional
                      campaigns and to evaluate and improve our Service, products, services, marketing and your
                      experience. 
                    </li>
                  </ul>
                  <p>
                  We may share Your personal information in the following situations:
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary ">
                    <li><span><i className="uil uil-check"></i></span> 
                      <b>With Service Providers:</b> We may share Your personal information with Service
                      Providers to monitor and analyze the use of our Service, to show advertisements to You to help
                      support and maintain Our Service, for payment processing, to contact You.
                    </li>

                    <li><span><i className="uil uil-check"></i></span> 
                      <b>For business transfers:</b> We may share or transfer Your personal information in
                      connection with, or during negotiations of, any merger, sale of Company assets, financing, or
                      acquisition of all or a portion of Our business to another company.
                    </li>

                    <li><span><i className="uil uil-check"></i></span> 
                      <b>With Affiliates:</b> We may share Your information with Our affiliates, in which case
                      we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent
                      company and any other subsidiaries, joint venture partners or other companies that We control or
                      that are under common control with Us.
                    </li>

                    <li><span><i className="uil uil-check"></i></span> 
                      <b>With business partners:</b> We may share Your information with Our business partners
                      to offer You certain products, services or promotions.
                    </li>

                    <li><span><i className="uil uil-check"></i></span> 
                      <b>With other users:</b> when You share personal information or otherwise interact in
                      the public areas with other users, such information may be viewed by all users and may be publicly
                      distributed outside. If You interact with other users or register through a Third-Party Social
                      Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile,
                      pictures and description of Your activity. Similarly, other users will be able to view
                      descriptions of Your activity, communicate with You and view Your profile.
                    </li>

                    <li><span><i className="uil uil-check"></i></span> 
                      <b>With Your consent</b>: We may disclose Your personal information for any other
                      purpose with Your consent.
                    </li>
                  </ul>
                  <h4 className="display-6 mb-4 ">Retention of Your Personal Data</h4>
                    <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out
                    in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply
                    with our legal obligations (for example, if we are required to retain your data to comply with
                    applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>

                  <p>
                    The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally
                    retained for a shorter period of time, except when this data is used to strengthen the security or
                    to improve the functionality of Our Service, or We are legally obligated to retain this data for
                    longer time periods.
                  </p>

                  <h4 className="display-6 mb-4 ">Transfer of Your Personal Data</h4>
                    <p>
                    Your information, including Personal Data, is processed at the Company's operating offices and in
                    any other places where the parties involved in the processing are located. It means that this
                    information may be transferred to — and maintained on — computers located outside of Your state,
                    province, country or other governmental jurisdiction where the data protection laws may differ than
                    those from Your jurisdiction.
                  </p>

                  <p>
                    Your consent to this Privacy Policy followed by Your submission of such information represents Your
                    agreement to that transfer.
                  </p>
                  <p>
                    The Company will take all steps reasonably necessary to ensure that Your data is treated securely
                    and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to
                    an organization or a country unless there are adequate controls in place including the security of
                    Your data and other personal information.
                  </p>

                  <h4 className="display-6 mb-4 ">Disclosure of Your Personal Data</h4>
                  <h5 className="display-7 mb-4">Business Transactions</h5>
                  <p>
                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be
                    transferred. We will provide notice before Your Personal Data is transferred and becomes subject to
                    a different Privacy Policy.
                  </p>

                  <h5 className="display-7 mb-4">Law enforcement</h5>
                  <p>
                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required
                    to do so by law or in response to valid requests by public authorities (e.g. a court or a government
                    agency).
                  </p>
                  <h5 className="display-7 mb-4">Other legal requirements</h5>
                  <p>
                    The Company may disclose Your Personal Data in the good faith belief that such action is necessary
                    to:
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary ">
                    <li><span><i className="uil uil-check"></i></span> Comply with a legal obligation</li>

                    <li><span><i className="uil uil-check"></i></span> Protect and defend the rights or property of the Company</li>

                    <li><span><i className="uil uil-check"></i></span> Prevent or investigate possible wrongdoing in connection with the Service</li>

                    <li><span><i className="uil uil-check"></i></span> Protect the personal safety of Users of the Service or the public</li>

                    <li><span><i className="uil uil-check"></i></span> Protect against legal liability</li>
                  </ul>

                  <h4 className="display-6 mb-4 ">Security of Your Personal Data</h4>
                  <p>
                    The security of Your Personal Data is important to Us, but remember that no method of transmission
                    over the Internet, or method of electronic storage is 100% secure. While We strive to use
                    commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute
                    security.
                  </p>

                  <h3 className="display-5 mb-3 mt-9">Detailed Information on the Processing of Your Personal Data</h3>
                  <p>
                  The Service Providers We use may have access to Your Personal Data. These third-party vendors
                  collect, store, use, process and transfer information about Your activity on Our Service in
                  accordance with their Privacy Policies.
                  </p>

                  <h4 className="display-7 mb-4 ">Analytics</h4>
                  <p>
                  We may use third-party Service providers to monitor and analyze the use of our Service.
                  </p>
                  <ul className="icon-list bullet-bg bullet-soft-primary ">
                  <li><p>
                  <span><i className="uil uil-check"></i></span> <b>Google Analytics</b>
                  </p>
                  <p >
                      Google Analytics is a web analytics service offered by Google that tracks and reports website
                      traffic. Google uses the data collected to track and monitor the use of our Service. This data
                      is shared with other Google services. Google may use the collected data to contextualize and
                      personalize the ads of its own advertising network.
                    </p>

                    <p>
                      You can opt-out of having made your activity on the Service available to Google Analytics by
                      installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics
                      JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about
                      visits activity.
                    </p>

                    <p>
                      You may opt-out of certain Google Analytics features through your mobile device settings, such
                      as your device advertising settings or by following the instructions provided by Google in their
                      Privacy Policy: {"{' '}"}
                      <a className="text-primary"
                        href="https://policies.google.com/privacy" rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </p>

                    <p>
                      For more information on the privacy practices of Google, please visit the Google Privacy &amp;
                      Terms web page:{"{' '}"}
                      <a className="text-primary"
                        href="https://policies.google.com/privacy"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </li>

                </ul>

                <h4 className="display-7 mb-4 ">Advertising</h4>
                <p>
                  We may use Service Providers to show advertisements to You to help support and maintain Our Service.
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Google AdSense &amp; DoubleClick Cookie</b>
                    </p>

                    <p>
                      Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the
                      DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to
                      our Service or other websites on the Internet.
                    </p>

                    <p>
                      You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting
                      the Google Ads Settings web page:{"{' '}"}
                      <a className="text-primary"
                        href="http://www.google.com/ads/preferences/"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        http://www.google.com/ads/preferences/
                      </a>
                    </p>
                  </li>

                  <li>
                    <p> <span><i className="uil uil-check"></i></span> 
                      <b>AdMob by Google</b>
                    </p>

                    <p>AdMob by Google is provided by Google Inc.</p>

                    <p>
                      You can opt-out from the AdMob by Google service by following the instructions described by
                      Google:{"{' '}"}
                      <a className="text-primary"
                        href="https://support.google.com/ads/answer/2662922?hl=en"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://support.google.com/ads/answer/2662922?hl=en
                      </a>
                    </p>

                    <p>
                      For more information on how Google uses the collected information, please visit the &quot;How
                      Google uses data when you use our partners' sites or app&quot; page:{"{' '}"}
                      <a className="text-primary"
                        href="https://policies.google.com/technologies/partner-sites"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://policies.google.com/technologies/partner-sites
                      </a>{" "}
                      or visit the Privacy Policy of Google:{"{' '}"}
                      <a className="text-primary"
                        href="https://policies.google.com/privacy"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </li>
                </ul>

                <h4 className="display-7 mb-4 ">Payments</h4>
                <p>
                  We may provide paid products and/or services within the Service. In that case, we may use
                  third-party services for payment processing (e.g. payment processors).
                </p>

                <p>
                  We will not store or collect Your payment card details. That information is provided directly to Our
                  third-party payment processors whose use of Your personal information is governed by their Privacy
                  Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI
                  Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American
                  Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Apple Store In-App Payments</b>
                    </p>

                    <p>
                      Their Privacy Policy can be viewed at{"{' '}"}
                      <a className="text-primary"
                        href="https://www.apple.com/legal/privacy/en-ww/"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://www.apple.com/legal/privacy/en-ww/
                      </a>
                    </p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Google Play In-App Payments</b>
                    </p>

                    <p>
                      Their Privacy Policy can be viewed at{"{' '}"}
                      <a className="text-primary"
                        href="https://www.google.com/policies/privacy/"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://www.google.com/policies/privacy/
                      </a>
                    </p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>PayPal</b>
                    </p>

                    <p>
                      Their Privacy Policy can be viewed at{"{' '}"}
                      <a className="text-primary"
                        href="https://www.paypal.com/webapps/mpp/ua/privacy-full"
                        rel="external nofollow noopener noreferrer"
                        target="_blank"
                      >
                        https://www.paypal.com/webapps/mpp/ua/privacy-full
                      </a>
                    </p>
                  </li>
                </ul>

                <h3 className="display-5 mb-3 mt-9">CCPA Privacy</h3>
                <p>
                  This privacy notice section for California residents supplements the information contained in Our
                  Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of
                  California.
                </p>

                <h4 className="display-6 mb-4 ">Categories of Personal Information Collected</h4>
                <p>
                  We collect information that identifies, relates to, describes, references, is capable of being
                  associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer
                  or Device. The following is a list of categories of personal information which we may collect or may
                  have been collected from California residents within the last twelve (12) months.
                </p>

                <p>
                  Please note that the categories and examples provided in the list below are those defined in the
                  CCPA. This does not mean that all examples of that category of personal information were in fact
                  collected by Us, but reflects our good faith belief to the best of our knowledge that some of that
                  information from the applicable category may be and may have been collected. For example, certain
                  categories of personal information would only be collected if You provided such personal information
                  directly to Us.
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category A: Identifiers.</b>
                    </p>

                    <p>
                      Examples: A real name, alias, postal address, unique personal identifier, online identifier,
                      Internet Protocol address, email address, account name, driver's license number, passport
                      number, or other similar identifiers.
                    </p>

                    <p>Collected: Yes.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>
                        Category B: Personal information categories listed in the California Customer Records statute
                        (Cal. Civ. Code § 1798.80(e)).
                      </b>
                    </p>

                    <p>
                      Examples: A name, signature, Social Security number, physical characteristics or description,
                      address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number,
                      credit card number, debit card number, or any other financial information, medical information,
                      or health insurance information. Some personal information included in this category may overlap
                      with other categories.
                    </p>

                    <p>Collected: Yes.</p>
                  </li>
                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>
                        Category C: Protected classification characteristics under California or federal law.
                      </b>
                    </p>
                    <p>
                      Examples: Age (40 years or older), race, color, ancestry, national origin, citizenship, religion
                      or creed, marital status, medical condition, physical or mental disability, sex (including
                      gender, gender identity, gender expression, pregnancy or childbirth and related medical
                      conditions), sexual orientation, veteran or military status, genetic information (including
                      familial genetic information).
                    </p>

                    <p>Collected: No.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category D: Commercial information.</b>
                    </p>

                    <p>Examples: Records and history of products or services purchased or considered.</p>

                    <p>Collected: Yes.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category E: Biometric information.</b>
                    </p>

                    <p>
                      Examples: Genetic, physiological, behavioral, and biological characteristics, or activity
                      patterns used to extract a template or other identifier or identifying information, such as,
                      fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other
                      physical patterns, and sleep, health, or exercise data.
                    </p>

                    <p>Collected: No.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category F: Internet or other similar network activity.</b>
                    </p>

                    <p>Examples: Interaction with our Service or advertisement.</p>

                    <p>Collected: Yes.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category G: Geolocation data.</b>
                    </p>

                    <p>Examples: Approximate physical location.</p>

                    <p>Collected: Yes.</p>
                  </li>

                  <li>
                    <p>
                      <b>Category H: Sensory data.</b>
                    </p>

                    <p>Examples: Audio, electronic, visual, thermal, olfactory, or similar information.</p>

                    <p>Collected: No.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category I: Professional or employment-related information.</b>
                    </p>

                    <p>Examples: Current or past job history or performance evaluations.</p>

                    <p>Collected: No.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>
                        Category J: Non-public education information (per the Family Educational Rights and Privacy
                        Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).
                      </b>
                    </p>

                    <p>
                      Examples: Education records directly related to a student maintained by an educational
                      institution or party acting on its behalf, such as grades, transcripts, {'class'} lists, student
                      schedules, student identification codes, student financial information, or student disciplinary
                      records.
                    </p>

                    <p>Collected: No.</p>
                  </li>

                  <li>
                    <p><span><i className="uil uil-check"></i></span> 
                      <b>Category K: Inferences drawn from other personal information.</b>
                    </p>

                    <p>
                      Examples: Profile reflecting a person's preferences, characteristics, psychological trends,
                      predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
                    </p>

                    <p>Collected: No.</p>
                  </li>
                </ul>
                <p>Under CCPA, personal information does not include:</p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                  <li><span><i className="uil uil-check"></i></span>  Publicly available information from government records</li>

                  <li><span><i className="uil uil-check"></i></span>  Deidentified or aggregated consumer information</li>

                  <li><span><i className="uil uil-check"></i></span> 
                    Information excluded from the CCPA's scope, such as:
                    <ul>
                      <li className="ps-0">
                        Health or medical information covered by the Health Insurance Portability and Accountability
                        Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or
                        clinical trial data
                      </li>

                      <li className="ps-0">
                        Personal Information covered by certain sector-specific privacy laws, including the Fair
                        Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial
                        Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994
                      </li>
                    </ul>
                  </li>
                </ul>
                <h4 className="display-6 mb-4">Sources of Personal Information</h4>
                <p>
                  We obtain the categories of personal information listed above from the following categories of
                  sources:
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                <li><span><i className="uil uil-check"></i></span> 
                  <b>Directly from You</b>. For example, from the forms You complete on our Service,
                  preferences You express or provide through our Service, or from Your purchases on our Service.
                </li>

                <li><span><i className="uil uil-check"></i></span> 
                  <b>Indirectly from You</b>. For example, from observing Your activity on our Service.
                </li>

                <li><span><i className="uil uil-check"></i></span> 
                  <b>Automatically from You</b>. For example, through cookies We or our Service Providers
                  set on Your Device as You navigate through our Service.
                </li>

                <li><span><i className="uil uil-check"></i></span> 
                  <b>From Service Providers</b>. For example, third-party vendors to monitor and analyze
                  the use of our Service, third-party vendors to provide advertising on our Service, third-party
                  vendors for payment processing, or other third-party vendors that We use to provide the Service to
                  You.
                </li>
                </ul>

                <h4 className="display-6 mb-4">Use of Personal Information for Business Purposes or Commercial Purposes</h4>
                <p>
                  We may use or disclose personal information We collect for &quot;business purposes&quot; or
                  &quot;commercial purposes&quot; (as defined under the CCPA), which may include the following
                  examples:
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                  <li><span><i className="uil uil-check"></i></span> To operate our Service and provide You with our Service.</li>

                  <li><span><i className="uil uil-check"></i></span> 
                    To provide You with support and to respond to Your inquiries, including to investigate and address
                    Your concerns and monitor and improve our Service.
                  </li>

                  <li><span><i className="uil uil-check"></i></span> 
                    To fulfill or meet the reason You provided the information. For example, if You share Your contact
                    information to ask a question about our Service, We will use that personal information to respond
                    to Your inquiry. If You provide Your personal information to purchase a product or service, We
                    will use that information to process Your payment and facilitate delivery.
                  </li>

                  <li><span><i className="uil uil-check"></i></span> 
                    To respond to law enforcement requests and as required by applicable law, court order, or
                    governmental regulations.
                  </li>

                  <li><span><i className="uil uil-check"></i></span> 
                    As described to You when collecting Your personal information or as otherwise set forth in the
                    CCPA.
                  </li>

                  <li><span><i className="uil uil-check"></i></span> For internal administrative and auditing purposes.</li>

                  <li><span><i className="uil uil-check"></i></span> 
                    To detect security incidents and protect against malicious, deceptive, fraudulent or illegal
                    activity, including, when necessary, to prosecute those responsible for such activities.
                  </li>
                </ul>
                 <p>
                  Please note that the examples provided above are illustrative and not intended to be exhaustive. For
                  more details on how we use this information, please refer to the &quot;Use of Your Personal
                  Data&quot; section.
                </p>

                <p>
                  If We decide to collect additional categories of personal information or use the personal
                  information We collected for materially different, unrelated, or incompatible purposes We will
                  update this Privacy Policy.
                </p>
                <h4 className="display-6 mb-4">Disclosure of Personal Information for Business Purposes or Commercial Purposes</h4>
                <p>
                  We may use or disclose and may have used or disclosed in the last twelve (12) months the following
                  categories of personal information for business or commercial purposes:
                </p>
                <ul className="icon-list bullet-bg bullet-soft-primary ">
                <li><span><i className="uil uil-check"></i></span>Category A: Identifiers</li>

                <li><span><i className="uil uil-check"></i></span>
                  Category B: Personal information categories listed in the California Customer Records statute
                  (Cal. Civ. Code § 1798.80(e))
                </li>

                <li><span><i className="uil uil-check"></i></span>Category D: Commercial information</li>

                <li><span><i className="uil uil-check"></i></span>Category F: Internet or other similar network activity</li>

                <li><span><i className="uil uil-check"></i></span>Category G: Geolocation data</li>
              </ul>
              <p>
                Please note that the categories listed above are those defined in the CCPA. This does not mean that
                all examples of that category of personal information were in fact disclosed, but reflects our good
                faith belief to the best of our knowledge that some of that information from the applicable category
                may be and may have been disclosed.
              </p>

              <p>
                When We disclose personal information for a business purpose or a commercial purpose, We enter a
                contract that describes the purpose and requires the recipient to both keep that personal
                information confidential and not use it for any purpose except performing the contract.
              </p>


              <h4 className="display-6 mb-4">Sale of Personal Information</h4>
              <p>
                As defined in the CCPA, &quot;sell&quot; and &quot;sale&quot; mean selling, renting, releasing,
                disclosing, disseminating, making available, transferring, or otherwise communicating orally, in
                writing, or by electronic or other means, a consumer's personal information by the business to a
                third party for valuable consideration. This means that We may have received some kind of benefit in
                return for sharing personal information, but not necessarily a monetary benefit.
              </p>

              <p>
                Please note that the categories listed below are those defined in the CCPA. This does not mean that
                all examples of that category of personal information were in fact sold, but reflects our good faith
                belief to the best of our knowledge that some of that information from the applicable category may
                be and may have been shared for value in return.
              </p>

              <p>
                We may sell and may have sold in the last twelve (12) months the following categories of personal
                information:
              </p>

              <ul className="icon-list bullet-bg bullet-soft-primary ">
                <li><span><i className="uil uil-check"></i></span> Category A: Identifiers</li>

                <li><span><i className="uil uil-check"></i></span>
                  Category B: Personal information categories listed in the California Customer Records statute
                  (Cal. Civ. Code § 1798.80(e))
                </li>

                <li><span><i className="uil uil-check"></i></span> Category D: Commercial information</li>

                <li><span><i className="uil uil-check"></i></span> Category F: Internet or other similar network activity</li>

                <li><span><i className="uil uil-check"></i></span> Category G: Geolocation data</li>
              </ul>

              <h4 className="display-6 mb-4">Share of Personal Information</h4>
               <p>
                We may share Your personal information identified in the above categories with the following
                categories of third parties:
              </p>

              <ul className="icon-list bullet-bg bullet-soft-primary ">
                <li><span><i className="uil uil-check"></i></span> Service Providers</li>

                <li><span><i className="uil uil-check"></i></span> Payment processors</li>

                <li><span><i className="uil uil-check"></i></span>Our affiliates</li>

                <li><span><i className="uil uil-check"></i></span> Our business partners</li>

                <li><span><i className="uil uil-check"></i></span>
                  Third party vendors to whom You or Your agents authorize Us to disclose Your personal information
                  in connection with products or services We provide to You
                </li>
              </ul>

              <h4 className="display-6 mb-4">Sale of Personal Information of Minors Under 16 Years of Age  </h4>
              <p>
                We do not knowingly collect personal information from minors under the age of 16 through our
                Service, although certain third party websites that we link to may do so. These third-party websites
                have their own terms of use and privacy policies and we encourage parents and legal guardians to
                monitor their children's Internet usage and instruct their children to never provide information on
                other websites without their permission.
              </p>

              <p>
                We do not sell the personal information of Consumers We actually know are less than 16 years of age,
                unless We receive affirmative authorization (the &quot;right to opt-in&quot;) from either the
                Consumer who is between 13 and 16 years of age, or the parent or guardian of a Consumer less than 13
                years of age. Consumers who opt-in to the sale of personal information may opt-out of future sales
                at any time. To exercise the right to opt-out, You (or Your authorized representative) may submit a
                request to Us by contacting Us.
              </p>

              <p>
                If You have reason to believe that a child under the age of 13 (or 16) has provided Us with personal
                information, please contact Us with sufficient detail to enable Us to delete that information.
              </p>
              <h4 className="display-6 mb-4">Your Rights under th e CCPA </h4>
              <p>
              The CCPA provides California residents with specific rights regarding their personal information. If
              You are a resident of California, You have the following rights:
              </p>

              <ul className="icon-list bullet-bg bullet-soft-primary ">
                <li> <span><i className="uil uil-check"></i></span>
                  <b>The right to notice.</b> You have the right to be notified which categories of
                  Personal Data are being collected and the purposes for which the Personal Data is being used.
                </li>

                <li><span><i className="uil uil-check"></i></span>
                  <b>The right to request.</b> Under CCPA, You have the right to request that We disclose
                  information to You about Our collection, use, sale, disclosure for business purposes and share of
                  personal information. Once We receive and confirm Your request, We will disclose to You:
                  <ul>
                    <li className="ps-0">The categories of personal information We collected about You</li>

                    <li className="ps-0">The categories of sources for the personal information We collected about You</li>

                    <li className="ps-0">Our business or commercial purpose for collecting or selling that personal information</li>

                    <li className="ps-0">The categories of third parties with whom We share that personal information</li>

                    <li className="ps-0">The specific pieces of personal information We collected about You</li>

                    <li className="ps-0">
                      If we sold Your personal information or disclosed Your personal information for a business
                      purpose, We will disclose to You:
                      <ul>
                        <li className="ps-0">The categories of personal information categories sold</li>

                        <li className="ps-0">The categories of personal information categories disclosed</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li> <span><i className="uil uil-check"></i></span>
                  <b>The right to say no to the sale of Personal Data (opt-out).</b> You have the right to
                  direct Us to not sell Your personal information. To submit an opt-out request please contact Us.
                </li>

                <li><span><i className="uil uil-check"></i></span>
                  <b>The right to delete Personal Data.</b> You have the right to request the deletion of
                  Your Personal Data, subject to certain exceptions. Once We receive and confirm Your request, We
                  will delete (and direct Our Service Providers to delete) Your personal information from our
                  records, unless an exception applies. We may deny Your deletion request if retaining the
                  information is necessary for Us or Our Service Providers to:
                  <ul>
                    <li className="ps-0">
                      Complete the transaction for which We collected the personal information, provide a good or
                      service that You requested, take actions reasonably anticipated within the context of our
                      ongoing business relationship with You, or otherwise perform our contract with You.
                    </li>

                    <li className="ps-0">
                      Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal
                      activity, or prosecute those responsible for such activities.
                    </li>

                    <li className="ps-0">
                      Debug products to identify and repair errors that impair existing intended functionality.
                    </li>

                    <li className="ps-0">
                      Exercise free speech, ensure the right of another consumer to exercise their free speech
                      rights, or exercise another right provided for by law.
                    </li>

                    <li className="ps-0">
                      Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et.
                      seq.).
                    </li>

                    <li className="ps-0">
                      Engage in public or peer-reviewed scientific, historical, or statistical research in the
                      public interest that adheres to all other applicable ethics and privacy laws, when the
                      information's deletion may likely render impossible or seriously impair the research's
                      achievement, if You previously provided informed consent.
                    </li>

                    <li className="ps-0">
                      Enable solely internal uses that are reasonably aligned with consumer expectations based on
                      Your relationship with Us.
                    </li>

                    <li className="ps-0">Comply with a legal obligation.</li>

                    <li className="ps-0">
                      Make other internal and lawful uses of that information that are compatible with the context
                      in which You provided it.
                    </li>
                  </ul>
                </li>

                <li><span><i className="uil uil-check"></i></span>
                  <b>The right not to be discriminated against.</b> You have the right not to be
                  discriminated against for exercising any of Your consumer's rights, including by:
                  <ul>
                    <li className="ps-0">Denying goods or services to You</li>

                    <li className="ps-0">
                      Charging different prices or rates for goods or services, including the use of discounts or
                      other benefits or imposing penalties
                    </li>

                    <li className="ps-0">Providing a different level or quality of goods or services to You</li>

                    <li className="ps-0">
                      Suggesting that You will receive a different price or rate for goods or services or a
                      different level or quality of goods or services
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 className="display-6 mb-4">Exercising Your CCPA Data Protection Rights </h4>        
              <p>
                In order to exercise any of Your rights under the CCPA, and if You are a California resident, You
                can contact Us:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary ">
                <li> <span><i className="uil uil-check"></i></span>
                  <p>By email: roguesupport@roguerecruit.com</p>
                </li>

                <li>
                  <p><span><i className="uil uil-check"></i></span>
                    By visiting this page on our website:{"{' '}"}
                    <a className="text-primary"
                      href="www.roguerecruit.com/support"
                      rel="external nofollow noopener noreferrer"
                      target="_blank"
                    >
                      www.roguerecruit.com/support
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                Only You, or a person registered with the California Secretary of State that You authorize to act on
                Your behalf, may make a verifiable request related to Your personal information.
              </p>
              <p>Your request to Us must:</p>
              <ul className="icon-list bullet-bg bullet-soft-primary">
                <li><span><i className="uil uil-check"></i></span>
                  Provide sufficient information that allows Us to reasonably verify You are the person about whom
                  We collected personal information or an authorized representative
                </li>

                <li><span><i className="uil uil-check"></i></span>
                  Describe Your request with sufficient detail that allows Us to properly understand, evaluate, and
                  respond to it
                </li>
              </ul>
              <p>We cannot respond to Your request or provide You with the required information if we cannot:</p>
              <ul className="icon-list bullet-bg bullet-soft-primary">
                <li><span><i className="uil uil-check"></i></span>Verify Your identity or authority to make the request</li>

                <li><span><i className="uil uil-check"></i></span>And confirm that the personal information relates to You</li>
              </ul>
              <p>
                We will disclose and deliver the required information free of charge within 45 days of receiving
                Your verifiable request. The time period to provide the required information may be extended once by
                an additional 45 days when reasonable necessary and with prior notice.
              </p>

              <p>
                Any disclosures We provide will only cover the 12-month period preceding the verifiable request's receipt.
              </p>

              <p>
                For data portability requests, We will select a format to provide Your personal information that is
                readily useable and should allow You to transmit the information from one entity to another entity
                without hindrance.
              </p>
              <h4 className="display-6 mb-4">Do Not Sell My Personal Information </h4>
              <p>
                You have the right to opt-out of the sale of Your personal information. Once We receive and confirm
                a verifiable consumer request from You, we will stop selling Your personal information. To exercise
                Your right to opt-out, please contact Us.
              </p>

              <p>
                The Service Providers we partner with (for example, our analytics or advertising partners) may use
                technology on the Service that sells personal information as defined by the CCPA law. If you wish to
                opt out of the use of Your personal information for interest-based advertising purposes and these
                potential sales as defined under CCPA law, you may do so by following the instructions below.
              </p>

              <p>
                Please note that any opt out is specific to the browser You use. You may need to opt out on every
                browser that You use.
              </p>
              <h5 className="display-7 mb-4">Website</h5>
              <p>
                You can opt out of receiving ads that are personalized as served by our Service Providers by
                following our instructions presented on the Service:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary">
                <li><span><i className="uil uil-check"></i></span>
                  The NAI's opt-out platform:{"{' '}"}
                  <a className="text-primary"
                    href="http://www.networkadvertising.org/choices/"
                    rel="external nofollow noopener noreferrer"
                    target="_blank"
                  >
                    http://www.networkadvertising.org/choices/
                  </a>
                </li>

                <li><span><i className="uil uil-check"></i></span>
                  The EDAA's opt-out platform{"{' '}"}
                  <a className="text-primary"
                    href="http://www.youronlinechoices.com/"
                    rel="external nofollow noopener noreferrer"
                    target="_blank"
                  >
                    http://www.youronlinechoices.com/
                  </a>
                </li>

                <li><span><i className="uil uil-check"></i></span>
                  The DAA's opt-out platform:{"{' '}"}
                  <a className="text-primary"
                    href="http://optout.aboutads.info/?c=2&amp;lang=EN"
                    rel="external nofollow noopener noreferrer"
                    target="_blank"
                  >
                    http://optout.aboutads.info/?c=2&amp;lang=EN
                  </a>
                </li>
              </ul>
              <p>
                The opt out will place a cookie on Your computer that is unique to the browser You use to opt out.
                If you change browsers or delete the cookies saved by your browser, You will need to opt out again.
              </p>
              <h5 className="display-7 mb-4">Mobile Devices</h5>
              <p>
                Your mobile device may give You the ability to opt out of the use of information about the apps You
                use in order to serve You ads that are targeted to Your interests:
              </p>
              <ul className="icon-list bullet-bg bullet-soft-primary">
                <li><span><i className="uil uil-check"></i></span> 
                  &quot;Opt out of Interest-Based Ads&quot; or &quot;Opt out of Ads Personalization&quot; on Android
                  devices
                </li>

                <li><span><i className="uil uil-check"></i></span> 
                &quot;Limit Ad Tracking&quot; on iOS devices</li>
              </ul>
              <p>
                You can also stop the collection of location information from Your mobile device by changing the
                preferences on Your mobile device.
              </p>
              <h3 className="display-5 mb-3 mt-9">"Do Not Track" Policy as Required by California Online Privacy Protection Act (CalOPPA)</h3>
              <p>Our Service does not respond to Do Not Track signals.</p>
              <p>
                However, some third party websites do keep track of Your browsing activities. If You are visiting
                such websites, You can set Your preferences in Your web browser to inform websites that You do not
                want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of
                Your web browser.
              </p>
              <h3 className="display-5 mb-3 mt-9">Children's Privacy</h3>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                identifiable information from anyone under the age of 13. If You are a parent or guardian and You
                are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware
                that We have collected Personal Data from anyone under the age of 13 without verification of
                parental consent, We take steps to remove that information from Our servers.
              </p>
              <p>
                If We need to rely on consent as a legal basis for processing Your information and Your country
                requires consent from a parent, We may require Your parent's consent before We collect and use that
                information.
              </p>
              <h3 className="display-5 mb-3 mt-9">Your California Privacy Rights (California's Shine the Light law)</h3>
              <p>
                Under California Civil Code Section 1798 (California's Shine the Light law), California residents
                with an established business relationship with us can request information once a year about sharing
                their Personal Data with third parties for the third parties' direct marketing purposes.
              </p>

              <p>
                If you'd like to request more information under the California Shine the Light law, and if You are a
                California resident, You can contact Us using the contact information provided below.
              </p>
              <h3 className="display-5 mb-3 mt-9"> California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</h3>
              <p>
                California Business and Professions Code section 22581 allow California residents under the age of
                18 who are registered users of online sites, services or applications to request and obtain removal
                of content or information they have publicly posted.
              </p>

              <p>
                To request removal of such data, and if You are a California resident, You can contact Us using the
                contact information provided below, and include the email address associated with Your account.
              </p>

              <p>
                Be aware that Your request does not guarantee complete or comprehensive removal of content or
                information posted online and that the law may not permit or require removal in certain
                circumstances.
              </p>
              <h3 className="display-5 mb-3 mt-9"> Links to Other Websites</h3>
              <p>
                Our Service may contain links to other websites that are not operated by Us. If You click on a third
                party link, You will be directed to that third party's site. We strongly advise You to review the
                Privacy Policy of every site You visit.
              </p>

              <p>
                We have no control over and assume no responsibility for the content, privacy policies or practices
                of any third party sites or services.
              </p>
              <h3 className="display-5 mb-3 mt-9">Changes to this Privacy Policy</h3>
              <p>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the
                new Privacy Policy on this page.
              </p>

              <p>
                We will let You know via email and/or a prominent notice on Our Service, prior to the change
                becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>

              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
              <h3 className="display-5 mb-3 mt-9">Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul className="icon-list bullet-bg bullet-soft-primary">
                <li><span><i className="uil uil-check"></i></span> 
                  <p>By email: roguesupport@roguerecruit.com</p>
                </li>
              </ul>
                    

              

                  {/* // <a href="#" className="btn btn-primary rounded-pill">Apply Now</a> */}
                </div>
            
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </Animated>


    </>
  );
}

export default Privacy;
