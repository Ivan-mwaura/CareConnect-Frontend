import React from "react";
import Slider from "react-slick";
import './dashboard.scss'
// Import react-slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background1 from "../../Assets/Images/maternal-care-background-1.jpeg";
import background2 from "../../Assets/Images/maternal-care-background-2.jpeg"; 
import background3 from "../../Assets/Images/maternal-care-background-3.jpeg";
import background4 from "../../Assets/Images/maternal-care-background-4.jpeg";
import background5 from "../../Assets/Images/maternal-care-background-5.jpeg";


const Dashboard = () => {

  return (
    <div className="main-page">
          <div className="overlay">
            <div className="dashboard-text">
              
              <p className="dashboard-description">
              Pregnancy and childbirth should be safe, respectful, and equitable for everyone, everywhere.. </p>
            </div>     
          </div>
          {/* BACKGROUND IMAGE*/}
          <img src={background2}className="background-image"/>

          <div className="problem-statement-approach">

            <div className="problem-statement">
              <h1><span className="highlight-word">The issue</span></h1>
              
              <span className="problem circle-1">
              800+ WOMEN DIE EVERY DAY
              from complications related
              to pregnancy and
              childbirth.
              </span>
              <span className="problem circle-2">
              That’s
              1 WOMAN
                EVERY
              2 MINUTES.
              </span>
              <span className="problem circle-3">
              And yet,
              almost all maternal deaths are preventable.
              </span>
  
            </div>
            <div className="approach">
              <h1><span className="highlight-word">Our Approach</span></h1>

                <img src={background3} alt="" className="OurApproach-background-image"/>

                <span className="approach-text">
                All people should have access to quality, respectful, and equitable maternity care. ​​We are raising awareness about the maternal health crisis, investing in community-based solutions, and mobilizing for policy change.
                </span>
            </div>

          </div>

          <div className="our-impact">
            <h1 className="highlight-word"><span style={{padding:'10px'}}>Our Intended Impact</span></h1>

            <div className="impact-card-container">
                <div className="impact-cards">

                  <div className="impact-card-1">
                    <span className="t1">More than</span><br/>
                    <h1><span className="t2">1.5 million</span>,<br /></h1>
                  <span className="t3">women, families, and healthcare workers supported.</span>

                  </div>

                <div className="impact-card-2">
                  <span>Over</span><br/>
                  <h1><span>$42 million</span>,<br /></h1>
                  <span>invested to support awareness raising, community-led solutions, and advocacy for systems change.</span>
                
                </div>

                <div className="impact-card-3">
                  <span>More than</span><br/>
                  <h1><span>600,000</span><br/></h1>
                  <span>ndividuals engaged in advancing maternal health and birth equity.</span>
                </div>
              </div>

            </div>

            

          </div>
           
            
    </div>
  );
};

export default Dashboard;
