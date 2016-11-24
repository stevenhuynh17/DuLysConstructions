import React, {Component} from 'react';
import './MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="Content">
          <div className="Wording">
            <h1>About Us</h1>
            <p>With over 10 years of professional experience,
              Les Construction Du lys has the expertise in new 
              construction and home remodeling around Los Angeles.
              <br/>
              From start to finish, we complete our projects with 
              the highest standards of quality, safety, integrity, 
              value and fine craftsmanship.
            </p>
            <button>Get a Quote</button>
          </div>
        </div>
        <div className="Services">
          <h1>Services</h1>
          <ul>
            <li>
              <div className="image">
                <a href="">
                <img 
                  src="https://st.hzcdn.com/fimgs/fcc18a680283bc39_1204-w500-h500-b0-p0--transitional-bathroom.jpg"
                  role="presentation"
                />
                <h2>Bathrooms</h2>
                </a>
              </div>
            </li>
            <li>
              <div className="image">
                <a href="">
                <img 
                  src="https://st.hzcdn.com/fimgs/fcc18a680283bc39_1204-w500-h500-b0-p0--transitional-bathroom.jpg"
                  role="presentation"
                />
                <h2>Kitchens</h2>
                </a>
              </div>
            </li>
            <li>
             <div className="image">
                <a href="">
                <img 
                  src="https://st.hzcdn.com/fimgs/fcc18a680283bc39_1204-w500-h500-b0-p0--transitional-bathroom.jpg"
                  role="presentation"
                />
                <h2>Renovations</h2>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MainPage; 