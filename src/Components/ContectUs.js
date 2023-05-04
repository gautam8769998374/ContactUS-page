import React, { useState,  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContectUs.css'
import phoneIcon from './contact-phone-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from "react-bootstrap";
// import { BsThreeDotsVertical } from "react-icons/bs";




const ContectUs = () => {
   const [selectedCode, setSelectedCode] = useState("(+91)");

  const handleCodeSelect = (code) => {
    setSelectedCode(code);
  };
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);

  const handleEmailChange = (e) => {
    setEmail (e.target.value);
    setValidEmail(validateEmail(e.target.value));
  };

  const handleEmailBlur = () => {
    setTouchedEmail(true)
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    return re.test(email);
  };
   
  const getIcon = () => {
    if (touchedEmail || document.activeElement === document.getElementById('email')){
    if(validEmail){
      return (
        <span className="input-group-text bg-light-gray c-green p-3 icon-container">
        <FontAwesomeIcon icon={faCheckCircle} />
      </span>
      );
    }else if (email !== " ") {
      return(
        <span className="input-group-text bg-light-gray c-red p-3 icon-container">
        <FontAwesomeIcon icon={faTimesCircle} />
      </span>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
};
    return (
        <div>
        <div class="my-3 problem-statement-sec shadow">
    <div class="container p-3 p-md-5 bg-white">
    <div class="row">
    <div class="col-12 col-md-5 px-md-5">
    <div class="font40 font-weight-bold c-red line-height-125">
    <h1 class="Contact"> Contact Us </h1>
     </div>
    <div class="hspacer15"></div>
    <div class="font18 c-blue font-weight-bold">
     {/* <h5 class="contact">Please fill out the form to enable our research representatives to contact you at the
    earliest.</h5> */}
    <h5>Company Info :</h5>
    </div>
    <div class="py-5">
    
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>U.S Office :</h5>
       <h6> Milwaukee, Wisconsin
        U.S</h6>
    <div class="col-2">
      <img src={phoneIcon}height="20" width="20" alt="" class=""/>
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      +1-917-730-4660
    </div>
    <div class="c-blue font16">
      {/* (US Office Hours) */}
    {/* (Corporate Office Hours) */}
   

    </div>
    </div>
    </div>
    {/* <!-- <div class="row py-2">
    <div class="col-2">
      <img src="contact-phone-icon.png" alt="" class="">
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
    +1-888-600-6441
    </div>
    <div class="c-blue font16">
    US/Can Toll Free
    </div>
    </div>
    </div> --> */}
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>Corporate office :</h5> 
        
        <h6>RDB Boulevard, 8th Floor, Plot K 1, Sector 5, Block EP and GP, Kolkata 700091, India.
        
        </h6>
       
      
    <div class="col-2">
      {/* <img src={phoneIcon} height="20" width="20" alt="" class=""/> */}
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      {/* +91-9836913164 */}
    </div>
    <div class="c-blue font16">
    {/* (sales@sheeranalyticsandinsights.com) */}
    </div>
    </div>
    </div>
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>Branch Office :</h5> 
        
        <h6>11/822, Chopasani Housing Board Jodhpur (Rajasthan) 342001, India
       
        </h6>
    <div class="col-2">
      {/* <!-- <img src="contact-phone-icon.png" height="40", width="40" alt="" class=""> --> */}
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      {/* <!-- +91-9836913164 --> */}
    </div>
    <div class="c-blue font16">
     {/* (sales@sheeranalyticsandinsights.com) ; */}
    </div>
    </div>
    </div>
    <div class="row py-2">
      <h5 style={{color: 'blue'}}>Contact details :</h5>  
    <div class="col-2">
      <img src={phoneIcon} height="20" width="20" alt="" class=""/>
    </div>
    <div class="col-10">
    <div class="c-blue font20 font-weight-bold">
      +91-9836913164
    </div>
    <div class="c-blue font16 d-flex align-items-center">
    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
    sales@sheeranalyticsandinsights.com
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-12 col-md-7">
    <form name="Form1" onsubmit="if (!window.__cfRLUnblockHandlers) return false; return Form1_Validator(this)" action="subscribecontactus_new.asp?send=cs" method="post">
    <div class="row">
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Full Name <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="first_name" name="first_name" maxlength="40"/>
    </div>
    </div>
{/*     
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Job Title <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="job_title" maxlength="80" name="job_title"/>
    </div>
    </div> */}
    </div>
    <div class="row">
    <div class="col-12">
    <label class="font15 c-gray">Your Email <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
    <span className="input-group-text bg-light-gray c-gray p-3" id="basic-addon1">
    <FontAwesomeIcon icon={faEnvelope} />
    </span>
    </div>
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" 
    id="email" maxlength="80" name="email" value={email}
     onChange={handleEmailChange}
     onBlur={handleEmailBlur}
     />
     {getIcon()}
    </div>
    </div>
    </div>
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Job Title <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="job_title" maxlength="80" name="job_title"/>
    </div>
    </div>
    <div class="row">
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Company Name <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="company" maxlength="80" name="company"/>
    </div>
    </div>
    
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Phone No. <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
      <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        {selectedCode ? selectedCode : ""}
      </Dropdown.Toggle>
      <Dropdown.Menu className='custom-dropdown-menu'>
        <Dropdown.Item onClick={() => handleCodeSelect("(+91)")}>
          (+91) India
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+44)")}>
          (+44) United Kingdom
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1)")}>
          (+1) United States
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+93)")}>
          (+93) Afghanistan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+355)")}>
          (+355) Albania
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+213)")}>
          (+213) Algeria
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+376)")}>
          (+376) Andorra
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+244)")}>
          (+244) Angola
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-268)")}>
          (+1-268) Antigua and Barbuda
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+54)")}>
          (+54) Argentina
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+374)")}>
          (+374) Armenia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+61)")}>
          (+61) Australia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+43)")}>
          (+43) Austria
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+994)")}>
          (+994) Azerbaijan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-242)")}>
          (+1-242) Bahamas
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+973)")}>
          (+973) Bahrain
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+880)")}>
          (+880) Bangladesh
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-246)")}>
          (+1-246) Barbados
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+375)")}>
          (+375) Belarus
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+32)")}>
          (+32) Belgium
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+501)")}>
          (+501) Belize
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+229)")}>
          (+229) Benin
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+975)")}>
          (+975) Bhutan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+591)")}>
          (+591) Bolivia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+387)")}>
          (+387) Bosnia and Herzegovina
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+267)")}>
          (+267) Botswana
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+55)")}>
          (+55) Brazil
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-284)")}>
          (+1-284) British Virgin Islands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+673)")}>
          (+673) Brunei
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+359)")}>
          (+359) Bulgaria
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+226)")}>
          (+226) Burkina Faso
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+257)")}>
          (+257) Burundi
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+855)")}>
          (+855) Cambodia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+237)")}>
          (+237) Cameroon
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-867)")}>
          (+1-867) Canada
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+238)")}>
          (+238) Cape Verde
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+236)")}>
          (+236) Central African Republic
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+235)")}>
          (+235) Chad
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+56)")}>
          (+56) Chile
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+86)")}>
          (+86) China
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+57)")}>
          (+57) Colombia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+269)")}>
          (+269) Comoros
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+243)")}>
          (+243) Democratic Republic of Congo
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+242)")}>
          (+242) Republic of Congo
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+506)")}>
          (+506) Costa Rica
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+225)")}>
          (+225) Cote d'Ivoire
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+385)")}>
          (+385) Croatia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+53)")}>
          (+53) Cuba
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+357)")}>
          (+357) Cyprus
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+420)")}>
          (+420) Czech Republic
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+45)")}>
          (+45) Denmark
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+253)")}>
          (+253) Djibouti
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-767)")}>
          (+1-767) Dominica
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-809)")}>
          (+1-809) Dominican Republic
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-829)")}>
          ( +1-829) Dominican Republic
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-849)")}>
          (+1-849) Dominican Republic
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+670)")}>
          (+670) East Timor
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+593)")}>
          (+593) Ecuador
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+20)")}>
          (+20) Egypt
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+503)")}>
          (+503) El Salvador
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+240)")}>
          (+240) Equatorial Guinea
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+291)")}>
          (+291) Eritrea
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+372)")}>
          (+372) Estonia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+251)")}>
          (+251) Ethiopia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+500)")}>
          (+500) Falkland Islands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+298)")}>
          (+298) Faroe Islands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+679)")}>
          (+679) Fiji
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+358)")}>
          (+358) Finland
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+33)")}>
          (+33) France
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+689)")}>
          (+689) French Polynesia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+241)")}>
          (+241) Gabon
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+220)")}>
          (+220) Gambia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+995)")}>
          (+995) Georgia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+49)")}>
          (+49) Germany
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+233)")}>
          (+233) Ghana
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+350)")}>
          (+350) Gibraltar
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+30)")}>
          (+30) Greece
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+299)")}>
          (+299) Greenland
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-473)")}>
          (+1-473) Grenada
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-671)")}>
          (+1-671) Guam
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+502)")}>
          (+502) Guatemala
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+224)")}>
          (+224) Guinea
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+245)")}>
          (+245) Guinea-Bissau
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+592)")}>
          (+592) Guyana
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+509)")}>
          (+509) Haiti
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+504)")}>
          (+504) Honduras
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+852)")}>
          (+852) Hong Kong
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+36)")}>
        (+36) Hungary
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+354)")}>
        (+354) Iceland
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+91)")}>
        (+91) India
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+62)")}>
        (+62) Indonesia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+98)")}>
        (+98) Iran
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+964)")}>
        (+964) Iraq
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+353)")}>
        (+353) Ireland
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+44-1624)")}>
        (+44-1624) Isle of Man
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+972)")}>
        (+972) Israel
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+39)")}>
        (+39) Italy
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-876)")}>
        (+1-876) Jamaica
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+81)")}>
        (+81) Japan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+44-1534)")}>
        (+44-1534) Jersey
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+962)")}>
        (+962) Jordan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+7)")}>
        (+7) Kazakhstan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+254)")}>
        (+254) Kenya
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+686)")}>
        (+686) Kiribati
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+383)")}>
        (+383) Kosovo
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+965)")}>
        (+965) Kuwait
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+996)")}>
        (+996) Kyrgyzstan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+856)")}>
        (+856) Laos
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+371)")}>
        (+371) Latvia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+961)")}>
        (+961) Lebanon
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+266)")}>
        (+266) Lesotho
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+231)")}>
        (+231) Liberia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+218)")}>
        (+218) Libya
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+423)")}>
        (+423) Liechtenstein
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+370)")}>
        (+370) Lithuania
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+352)")}>
        (+352) Luxembourg
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+853)")}>
        (+853) Macao
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+389)")}>
        (+389) Macedonia (FYROM)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+261)")}>
        (+261) Madagascar
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+265)")}>
        (+265) Malawi
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+60)")}>
        (+60) Malaysia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+960)")}>
        (+960) Maldives
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+223)")}>
        (+223) Mali
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+356)")}>
        (+356) Malta
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+692)")}>
        (+692) Marshall Islands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+596)")}>
        (+596) Martinique
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+222)")}>
        (+222) Mauritania
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+230)")}>
        (+230) Mauritius
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+262)")}>
        (+262) Mayotte
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+52)")}>
        (+52) Mexico
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+691)")}>
        (+691) Micronesia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+373)")}>
        (+373) Moldova
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+377)")}>
        (+377) Monaco
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+976)")}>
        (+976) Mongolia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+382)")}>
        (+382) Montenegro
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-664)")}>
        (+1-664) Montserrat
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+212)")}>
        (+212) Morocco
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+258)")}>
        (+258) Mozambique
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+95)")}>
        (+95) Myanmar (Burma)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+264)")}>
        (+264) Namibia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+674)")}>
        (+674) Nauru
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+977)")}>
        (+977) Nepal
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+31)")}>
        (+31) Netherlands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+687)")}>
        (+687) New Caledonia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+64)")}>
        (+64) New Zealand
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+505)")}>
        (+505) Nicaragua
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+227)")}>
        (+227) Niger
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+234)")}>
        (+234) Nigeria
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+47)")}>
        (+47) Norway
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+968)")}>
        (+968) Oman
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+92)")}>
        (+92) Pakistan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+970)")}>
        (+970) Palestine
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+507)")}>
        (+507) Panama
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+675)")}>
        (+675) Papua New Guinea
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+595)")}>
        (+595) Paraguay
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+51)")}>
        (+51) Peru
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+63)")}>
        (+63) Philippines
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+48)")}>
        (+48) Poland
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+351)")}>
        (+351) Portugal
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+974)")}>
        (+974) Qatar
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+40)")}>
        (+40) Romania
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+7)")}>
        (+7) Russia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+250)")}>
        (+250) Rwanda
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+290)")}>
        (+290) Saint Helena
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-869)")}>
        (+1-869) Saint Kitts and Nevis
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-758)")}>
        (+1-758) Saint Lucia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+590)")}>
        (+590) Saint Martin (French part)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+508)")}>
        (+508) Saint Pierre and Miquelon
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-784)")}>
        (+1-784) Saint Vincent and the Grenadines
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+685)")}>
        (+685) Samoa
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+378)")}>
        (+378) San Marino
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+239)")}>
        (+239) Sao Tome and Principe
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+966)")}>
        (+966) Saudi Arabia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+221)")}>
        (+221) Senegal
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+381)")}>
        (+381) Serbia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+248)")}>
        (+248) Seychelles
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+232)")}>
        (+232) Sierra Leone
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+65)")}>
        (+65) Singapore
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+421)")}>
        (+421) Slovakia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+386)")}>
        (+386) Slovenia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+677)")}>
        (+677) Solomon Islands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+252)")}>
        (+252) Somalia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+27)")}>
        (+27) South Africa
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+500)")}>
        (+500) South Georgia and the South Sandwich Islands
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+82)")}>
        (+82) South Korea
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+211)")}>
        (+211) South Sudan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+34)")}>
        (+34) Spain
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+94)")}>
        (+94) Sri Lanka
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+249)")}>
        (+249) Sudan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+597)")}>
        (+597) Suriname
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+268)")}>
        (+268) Eswatini
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+46)")}>
        (+46) Sweden
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+41)")}>
        (+41) Switzerland
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+963)")}>
        (+963) Syria
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+886)")}>
        (+886) Taiwan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+992)")}>
        (+992) Tajikistan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+255)")}>
        (+255) Tanzania
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+66)")}>
        (+66) Thailand
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+228)")}>
        (+228) Togo
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+676)")}>
        (+676) Tonga
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1-868)")}>
        (+1-868) Trinidad and Tobago
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+216)")}>
        (+216) Tunisia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+90)")}>
        (+90) Turkey
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+993)")}>
        (+993) Turkmenistan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+688)")}>
        (+688) Tuvalu
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+256)")}>
        (+256) Uganda
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+380)")}>
        (+380) Ukraine
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+971)")}>
        (+971) United Arab Emirates
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+44)")}>
        (+44) United Kingdom
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+1)")}>
        (+1) United States of America
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+598)")}>
        (+598) Uruguay
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+998)")}>
        (+998) Uzbekistan
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+678)")}>
        (+678) Vanuatu
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+58)")}>
        (+58) Venezuela
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+84)")}>
        (+84) Vietnam
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+967)")}>
        (+967) Yemen
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+260)")}>
        (+260) Zambia
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCodeSelect("(+263)")}>
        (+263) Zimbabwe
        </Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="phone_no" maxlength="40" name="phone_no"/>
    </div>
    </div>
    </div>
    
    
    
    {/* <div class="row">
    <div class="col-12">
    <label class="font15 c-gray">Your Email <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
    <span className="input-group-text bg-light-gray c-gray p-3" id="basic-addon1">
    <FontAwesomeIcon icon={faEnvelope} />
    </span>
    </div>
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" 
    id="email" maxlength="80" name="email" value={email}
     onChange={handleEmailChange}
     onBlur={handleEmailBlur}
     />
     {getIcon()}
    </div>
    </div>
    </div> */}
     {/* <div class="row">
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Country</label>
    <select class="form-control bg-light-gray" id="country" name="country" size="1">
    <option value="Select Country">Select Country</option>
    <option value="Afghanistan">
    Afghanistan</option>
    <option value="Albania">
    Albania</option>
    <option value="Algeria">
    Algeria</option>
    <option value="Andorra">
    Andorra</option>
    <option value="Angola">
    Angola</option>
    <option value="Anguilla">
    Anguilla</option>
    <option value="Antarctica">
    Antarctica</option>
    <option value="Antigua and Barbuda">
    Antigua and Barbuda</option>
    <option value="Argentina">
    Argentina</option>
    <option value="Armenia">
    Armenia</option>
    <option value="Aruba">
    Aruba</option>
    <option value="Australia">
    Australia</option>
    <option value="Austria">
    Austria</option>
    <option value="Azerbaijan">
    Azerbaijan</option>
    <option value="Bahamas, The">
    Bahamas, The</option>
    <option value="Bahrain">
    Bahrain</option>
    <option value="Bangladesh">
    Bangladesh</option>
    <option value="Barbados">
    Barbados</option>
    <option value="Belarus">
    Belarus</option>
    <option value="Belgium">
    Belgium</option>
    <option value="Belize">
    Belize</option>
    <option value="Benin">
    Benin</option>
    <option value="Bermuda">
    Bermuda</option>
    <option value="Bhutan">
    Bhutan</option>
    <option value="Bolivia">
    Bolivia</option>
    <option value="Bosnia and Herzegovina">
    Bosnia and Herzegovina</option>
    <option value="Botswana">
    Botswana</option>
    <option value="Brazil">
    Brazil</option>
    <option value="British Indian Ocean Territory">
    British Indian Ocean Territory</option>
    <option value="Brunei">
    Brunei</option>
    <option value="Bulgaria">
    Bulgaria</option>
    <option value="Burkina Faso">
    Burkina Faso</option>
    <option value="Burundi">
    Burundi</option>
    <option value="Cambodia">
    Cambodia</option>
    <option value="Cameroon">
    Cameroon</option>
    <option value="Canada">
    Canada</option>
    <option value="Cape Verde">
    Cape Verde</option>
    <option value="Central African Republic">
    Central African Republic</option>
    <option value="Chad">
    Chad</option>
    <option value="Chile">
    Chile</option>
    <option value="China"> 
    China</option>
    <option value="Cocos (Keeling) Islands">
    Cocos (Keeling) Islands</option>
    <option value="Colombia">
    Colombia</option>
    <option value="Comoros">
    Comoros</option>
    <option value="Congo - the Democratic Republic of the">
    Congo - the Democratic Republic of the</option>
    <option value="Congo, Republic of the">
    Congo, Republic of the</option>
    <option value="Costa Rica">
    Costa Rica</option>
    <option value="Côte d'Ivoire">
    Côte d'Ivoire</option>
    <option value="Croatia">
    Croatia</option>
    <option value="Cuba">
    Cuba</option>
    <option value="Curacao">
    Curacao</option>
    <option value="Cyprus">
    Cyprus</option>
    <option value="Czech Republic">
    Czech Republic</option>
    <option value="Denmark">
    Denmark</option>
    <option value="Djibouti">
    Djibouti</option>
    <option value="Dominica">
    Dominica</option>
    <option value="Dominican Republic">
    Dominican Republic</option>
    <option value="Ecuador">
    Ecuador</option>
    <option value="Egypt">
    Egypt</option>
    <option value="El Salvador">
    El Salvador</option>
    <option value="Equatorial Guinea">
    Equatorial Guinea</option>
    <option value="Eritrea">
    Eritrea</option>
    <option value="Estonia">
    Estonia</option>
    <option value="Ethiopia">
    Ethiopia</option>
    <option value="Europe">
    Europe</option>
    <option value="Falkland Islands (Malvinas)">
    Falkland Islands (Malvinas)</option>
    <option value="Fiji">
    Fiji</option>
    <option value="Finland">
    Finland</option>
    <option value="France">
    France</option>
    <option value="Gabon">
    Gabon</option>
    <option value="Gambia">
    Gambia</option>
    <option value="Georgia">
    Georgia</option>
    <option value="Germany">
    Germany</option>
    <option value="Ghana">
    Ghana</option>
    <option value="Greece">
    Greece</option>
    <option value="Greenland">
    Greenland</option>
    <option value="Grenada">
    Grenada</option>
    <option value="Guatemala">
    Guatemala</option>
    <option value="Guinea-Bissau">
    Guinea-Bissau</option>
    <option value="Guyana">
    Guyana</option>
    <option value="Haiti">
    Haiti</option>
    <option value="Heard Island and McDonald Islands">
    Heard Island and McDonald Islands</option>
    <option value="Holy See (Vatican City State)">
    Holy See (Vatican City State)</option>
    <option value="Honduras">
    Honduras</option>
    <option value="Hong Kong">
    Hong Kong</option>
    <option value="Hungary">
    Hungary</option>
    <option value="Iceland">
    Iceland</option>
    <option value="India">
    India</option>
    <option value="Indonesia">
    Indonesia</option>
    <option value="Iran -  Islamic Republic of">
    Iran - Islamic Republic of</option>
    <option value="Iraq">
    Iraq</option>
    <option value="Ireland">
    Ireland</option>
    <option value="Israel">
    Israel</option>
    <option value="Italy">
    Italy</option>
    <option value="Jamaica">
    Jamaica</option>
    <option value="Japan">
    Japan</option>
    <option value="Jordan">
    Jordan</option>
    <option value="Kazakhstan">
    Kazakhstan</option>
    <option value="Kenya">
    Kenya</option>
    <option value="Kiribati">
    Kiribati</option>
    <option value="Korea, North">
    Korea, North</option>
    <option value="Korea, South">
    Korea, South</option>
    <option value="Kuwait">
    Kuwait</option>
    <option value="Kyrgyzstan">
    Kyrgyzstan</option>
    <option value="Laos">
    Laos</option>
    <option value="Latvia">
    Latvia</option>
    <option value="Lebanon">
    Lebanon</option>
    <option value="Lesotho">
    Lesotho</option>
    <option value="Liberia">
    Liberia</option>
    <option value="Libya">
    Libya</option>
    <option value="Liechtenstein">
    Liechtenstein</option>
    <option value="Lithuania">
    Lithuania</option>
    <option value="Luxembourg">
    Luxembourg</option>
    <option value="Macau">
    Macau</option>
    <option value="Macedonia">
    Macedonia</option>
    <option value="Madagascar">
    Madagascar</option>
    <option value="Malawi">
    Malawi</option>
    <option value="Malaysia">
    Malaysia</option>
    <option value="Maldives">
    Maldives</option>
    <option value="Mali">
    Mali</option>
    <option value="Malta">
    Malta</option>
    <option value="Marshall Islands">
    Marshall Islands</option>
    <option value="Mauritania">
    Mauritania</option>
    <option value="Mauritius">
    Mauritius</option>
    <option value="Mexico">
    Mexico</option>
    <option value="Moldova">
    Moldova</option>
    <option value="Monaco">
    Monaco</option>
    <option value="Mongolia">
    Mongolia</option>
    <option value="Montenegro">
    Montenegro</option>
    <option value="Morocco">
    Morocco</option>
    <option value="Mozambique">
    Mozambique</option>
    <option value="Myanmar">
    Myanmar</option>
    <option value="N Guinea">
    N Guinea</option>
    <option value="Namibia">
    Namibia</option>
    <option value="Nauru">
    Nauru</option>
    <option value="Nepal">
    Nepal</option>
    <option value="Netherlands">
    Netherlands</option>
    <option value="Netherlands Antilles">
    Netherlands Antilles</option>
    <option value="New Zealand">
    New Zealand</option>
    <option value="Nicaragua">
    Nicaragua</option>
    <option value="Niger">
    Niger</option>
    <option value="Nigeria">
    Nigeria</option>
    <option value="Northern Mariana Islands">
    Northern Mariana Islands</option>
    <option value="Norway">
    Norway</option>
    <option value="Oman">
    Oman</option>
    <option value="Pakistan">
    Pakistan</option>
    <option value="Palau">
    Palau</option>
    <option value="Palestinian Territories">
    Palestinian Territories</option>
    <option value="Panama">
    Panama</option>
    <option value="Papua New Guinea">
    Papua New Guinea</option>
    <option value="Paraguay">
    Paraguay</option>
    <option value="Peru">
    Peru</option>
    <option value="Philippines">
    Philippines</option>
    <option value="Poland">
    Poland</option>
    <option value="Portugal">
    Portugal</option>
    <option value="Qatar">
    Qatar</option>
    <option value="Romania">
    Romania</option>
    <option value="Russia">
    Russia</option>
    <option value="Rwanda">
    Rwanda</option>
    <option value="Saint Kitts and Nevis">
    Saint Kitts and Nevis</option>
    <option value="Saint Lucia">
    Saint Lucia</option>
    <option value="Saint Vincent and the Grenadines">
    Saint Vincent and the Grenadines</option>
    <option value="Samoa">
    Samoa</option>
    <option value="San Marino">
    San Marino</option>
    <option value="Sao Tome and Principe">
    Sao Tome and Principe</option>
    <option value="Saudi Arabia">
    Saudi Arabia</option>
    <option value="Senegal">
    Senegal</option>
    <option value="Serbia">
    Serbia</option>
    <option value="Seychelles">
    Seychelles</option>
    <option value="Sierra Leone">
    Sierra Leone</option>
    <option value="Singapore">
    Singapore</option>
    <option value="Slovakia">
    Slovakia</option>
    <option value="Slovenia">
    Slovenia</option>
    <option value="Solomon Islands">
    Solomon Islands</option>
    <option value="Somalia">
    Somalia</option>
    <option value="South Africa">
    South Africa</option>
    <option value="Spain">
    Spain</option>
    <option value="Sri Lanka">
    Sri Lanka</option>
    <option value="Sudan">
    Sudan</option>
    <option value="Suriname">
    Suriname</option>
    <option value="Swaziland">
    Swaziland</option>
    <option value="Sweden">
    Sweden</option>
    <option value="Switzerland">
    Switzerland</option>
    <option value="Syria">
    Syria</option>
    <option value="Taiwan">
    Taiwan</option>
    <option value="Tajikistan">
    Tajikistan</option>
    <option value="Tanzania">
    Tanzania</option>
    <option value="Thailand">
    Thailand</option>
    <option value="Timor-Leste">
    Timor-Leste</option>
    <option value="Togo">
    Togo</option>
    <option value="Tonga">
    Tonga</option>
    <option value="Trinidad and Tobago">
    Trinidad and Tobago</option>
    <option value="Tunisia">
    Tunisia</option>
    <option value="Turkey">
    Turkey</option>
    <option value="Turkmenistan">
    Turkmenistan</option>
    <option value="Tuvalu">
    Tuvalu</option>
    <option value="Uganda">
    Uganda</option>
    <option value="Ukraine">
    Ukraine</option>
    <option value="United Arab Emirates">
    United Arab Emirates</option>
    <option value="United Kingdom">
    United Kingdom</option>
    <option value="United States">
    United States</option>
    <option value="Uruguay">
    Uruguay</option>
    <option value="Uzbekistan">
    Uzbekistan</option>
    <option value="Vanuatu">
    Vanuatu</option>
    <option value="Venezuela">
    Venezuela</option>
    <option value="Vietnam">
    Vietnam</option>
    <option value="Virgin Islands -  U.S.">
    Virgin Islands - U.S.</option>
    <option value="Virgin Islands - British">
    Virgin Islands - British</option>
    <option value="Wallis and Futuna">
    Wallis and Futuna</option>
    <option value="Western Sahara">
    Western Sahara</option>
    <option value="Yemen">
    Yemen</option>
    <option value="Zambia">
    Zambia</option>
    <option value="Zimbabwe">
    Zimbabwe</option>
    </select>
    </div>
    <div class="col-12 col-md-6">
    <label class="font15 c-gray">Choose Industry</label>
    <select class="form-control bg-light-gray" id="Industry" size="1" name="Industry">
    <option selected="selected">Choose Industry</option>
    <option value="Aerospace and Defense">Aerospace and Defense</option>
    <option value="Automotive and Transportation">Automotive and Transportation
    </option>
    <option value="Chemical and Materials">Chemical and Materials</option>
    <option value="Energy and Power">Energy and Power</option>
    <option value="Food and Beverage">Food and Beverage</option>
    <option value="Healthcare">Healthcare</option>
    <option value="Information and Communication Technology">Information and
    Communication Technology</option>
    <option value="Packaging Construction and Mining">Packaging Construction and
    Mining</option>
    <option value="Semiconductor and Electronics">Semiconductor and Electronics
    </option>
    <option value="other">other</option>
    </select>
    </div>
    </div> */}
     {/* <div class="row"> */}
    {/* <div class="col-12 col-md-6">
    <label class="font15 c-gray">Company Name <span class="c-red font-weight-bold font15">*</span></label>
    <div class="input-group mb-3">
    <input type="text" class="form-control bg-light-gray" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="company" maxlength="80" name="company"/>
    </div>
    </div> */}
    
    <div class="hspacer15"></div>
    <div class="row" style={{display:'none'}}>
    <div class="col-12 col-md-6">
    <div class="form-group">
    <label class="font15 c-gray">Enter text from the image </label>
    <input placeholder="Enter text from the image" type="text" name="BetaPotataCaptcha" id="BetaPotataCaptcha" class="form-control bg-light-gray"/>
    </div>
    </div>
    <div class="col-12 col-md-6">
    <div class="form-group">
    <label class="font15 c-gray">&nbsp; </label>
    <div class="form-control font-weight-bold text-center captcha">
    <div style={{ backgroundColor: "white", color: "#005AA0", fontFamily: "Arial", fontSize: "14px", fontWeight: "bold", height: "24px" }} align="left">
    8
    7
    4
    3
    1
    &nbsp;</div>
    </div>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <label class="font15 c-gray">Message</label>
    <div class="input-group mb-3">
    <textarea class="form-control bg-light-gray" id="Comments" name="Comments" rows="3"></textarea>
    </div>
    </div>
    </div>
    <div class="row" style={{display: 'none'}}>
    <div class="col-12">
    <div id="Managepreferences" class="form-group col-lg-12">
    <label style={{ fontWeight:'bold', marginTop:'10px', display:'inline-block', fontSize:'12px' }}>
    Manage
    preferences :</label>
    <ul style={{listStyle:'none', fontSize:'12px', padding:'0', margin:'0'}}>
    <li><input type="checkbox" name="SelectAll"/> Select all</li>
    <li><input type="checkbox" name="Newsletter"/><span id="txNewsletter">
    News-Letters with latest Market
    insights</span></li>
    <li><input type="checkbox" name="ProductAndService"/><span id="txProductAndService"> Information &amp; discussion on the
    relevant new products and services </span></li>
    <li><input type="checkbox" name="InsightAndInformation"/><span id="txInsightAndInformation"> Information &amp; discussion on Market
    insights and Market information</span> </li>
    <li><input type="checkbox" name="EventsAndConferences"/><span id="txEventsAndConferences"> Information &amp; discussion on our
    events and conferences</span></li>
    
    <li><label style={{ fontWeight:'bold', marginTop:'10px', display:'inline-block'}}>
    Preferred modes for discussion</label>
    <ul style={{listStyle:'none',padding:'0 0 0 10px'}}>
    <li><input type="checkbox" name="ModeSelectAll"/> Select all</li>
    <li><input type="checkbox" name="ModeEMail"/> <span id="txModeEMail">Email</span></li>
    <li><input type="checkbox" name="ModePhone"/> <span id="txModePhone">Phone</span></li>
    <li><input type="checkbox" name="ModeSocialMedia"/> <span id="txModeSocialMedia">Professional and social network
    (Linkedin, etc)</span></li>
    
    </ul>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <input class="btn btn-primary btn-blue btn-block py-3 font15 font-weight-bold text-uppercase" type="submit" value="Send us Email" name="submit"/>
    {/* <button className='button btn btn-primary btn-blue btn-block py-3 font15 font-weight-bold text-uppercase'>Send us Email</button> */}
    <span>
    By clicking the "Submit" button, you are agreeing to the
    <a href> Terms of Use </a> and
    <a href>Privacy Policy.</a>
    </span>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
      </div>
    )
   }
 
  


export default ContectUs