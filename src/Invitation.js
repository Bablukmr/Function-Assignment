import { Fragment } from "react"

function Invitation(props){
   
   const details={
    Subject: "  Birthday party Invitation" ,
    To:"  jaGdish@gmail.com",
    partyname: " birthday party",
    otherguest:"Ritu , Saurabh , Kartik",
    near: "Green field Avenue",
    sirname:"JaGdish"
}
   //partyname,otherguest,near,from}
    return(
        <Fragment>
    <h5>Subject:{details.Subject}</h5>
    <h5>To:{details.To}</h5>
    <h5>Hi {details.sirname} </h5>
<div> I am having a {details.partyname} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them -{details.otherguest}.
<br></br>
<br></br>
ehind our school , near {details.near} .
<br></br>
<br></br>
I hope you will come and see you soon .
<br></br>
from,<br></br>
{details.sirname}

</div>
        </Fragment>
    );
}
export default Invitation ;