import React from 'react';
import './CSS/Work.css';

function Work() {
  return (

    <div>
      <div className="container-fluid">
        <br></br><br></br>

        <h6>featured projects</h6>

        <div className="vertical"></div>
        <br></br>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
            <div className="col-lg-8"></div>

            <div className="col-lg-4 project project1 wow fadeInUp" data-wow-delay="0.2s" onclick="location.href='project.html'"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
            <div className="col-lg-6 project project2 wow fadeInUp" data-wow-delay="0.2s" onclick="location.href='project.html'"></div>
        
            <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
            <div className="col-lg-7"></div>

            <div className="col-lg-4 project project3 wow fadeInUp" data-wow-delay="0.2s" onclick="location.href='project.html'"></div>
        
            <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>
      </div>
    </div>

   

  );
}

export default Work;
