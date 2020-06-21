import React from 'react';
import '../App.css';

class Navs extends React.Component {

  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };
  render() {
    console.log(this.state);
  return (
    <nav className={this.state.show ? "active" : "hidden"}>
            <input type="checkbox" id="nav" className="hidden"></input>
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
