import React from "react";
import user from "../images/user.jpg";


const ContactCard = (props) => {
    const {id, name, email, place} = props.contact;
    return (
        <div className="item">
            <img className="user avatar" src={user} alt="user"></img>
            <div className="content">
             <div className="header">{name}</div>
             <div>{email}</div>
             <div>{place}</div>
            </div>
            <i className="trash icon" style={{color:"blue", marginTop:"7px"}} onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard;