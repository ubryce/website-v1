import React from 'react';
import './CSS/Work.css';

function Work() {
  return (
    <div className="work">
      <div className="cursor"></div>
      <div className="wrapper">
        <div className="project-list">
          <div className="project p-1">
            <div className="project-title"><h1>Moodroid</h1></div>
            <div className="project-categ">Android App</div>
            <div className="project-overlay"></div>
          </div>
          <div className="project p-2">
            <div className="project-title"><h1>Blockchain Transactions v2</h1></div>
            <div className="project-categ">Web App</div>
            <div className="project-overlay"></div>
          </div>
          <div className="project p-3">
            <div className="project-title"><h1>IDK</h1></div>
            <div className="project-categ">IDK</div>
            <div className="project-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
