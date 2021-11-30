import React from 'react'

const ServicesSection = ({image,title,text, experienceDetails, text2}) => {
    return (
      <div className="ServicesSection">
        <div className="service">
          <div className="service-content">
            <img src={image} alt="" />
            <h5 className="s-title">{title}</h5>
            <h5 className="s-text2">{text2}</h5>
            <p className="s-text">{text}</p>
            <p className="s-text">{experienceDetails}</p>
          </div>
        </div>
      </div>
    );
}

export default ServicesSection
