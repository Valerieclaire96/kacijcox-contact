import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


// define the ContactCard component outside the Home component
const ContactCard = (props) => {
  const { store, actions } = useContext(Context)
  // sample data for the contact card

  return (
    <div className="contact-card container">
      <div className="row justify-content-center align-items-center">
        { }
        <div className="col-md-2">
          <img
            src="https://hotpot.ai/images/site/testimonials/social/linkedin_ankit%20rijal/gallery1.jpg"
            alt="Profile"
            className="contact-picture"
            style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '100px' }}
          />
        </div>

        {/* Right side with contact details */}
        <div className="col-md-8">
          <div className="contact-details">
            <h2>{props.name}</h2>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
        <button class="btn btn-danger" onClick={() => actions.deleteContact(props.contactid)}>delete</button>
      </div>
    </div>
  );
};

// Export the ContactCard component
export default ContactCard;


