import React from "react";

const ContactSection = ({ icon, text1, text2, title ,email}) => {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          <p>{text1}</p>
          <p className="mail-text"><a style={{textDecoration: "none", color: "inherit"}} href={`mailto:${email}`}>{email}</a></p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
