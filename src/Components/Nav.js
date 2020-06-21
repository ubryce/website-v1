import React from 'react';
import '../App.css';

class Navs extends React.Component {

  constructor() {
    super();
    this.state = {
      scrolled:false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if(isTop !== true){
        this.setState({ scrolled: true});
      } else {
        this.setState({ scrolled: false});
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  
  render() {
    
  return (
    <nav className={this.state.scrolled ? "navs scrolled" : "navs"}>
            <input type="checkbox" id="nav" className="hiddens"></input>
            <label for="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="logo">
                <a href="/">bryce</a>
            </div>
            <div className="nav-wrapper">
                <ul>
                    <li><a style={{ textDecoration: 'none' }} href="/">work<span>.</span></a></li>
                    <li><a style={{ textDecoration: 'none' }} href="/">about<span>.</span></a></li>
                    <li><a style={{ textDecoration: 'none' }} href="/">contact<span>.</span></a></li>
                </ul>
            </div>
        </nav>
  );
}
}

export default Navs;
