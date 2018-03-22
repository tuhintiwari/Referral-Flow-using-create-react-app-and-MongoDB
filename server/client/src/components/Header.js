import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    console.log("Debug:"+this.props.auth);
    switch (this.props.auth) {
      case null :
        return 'Still deciding';

      case false :
        return <li><a href="/auth/google">Specialist Doctor Login</a></li>;

      default :
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {
    console.log(this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo right">ReferralFlow</a>
            <ul className="left hide-on-med-and-down">
              <li><a>Patient Login</a></li>
              <li className="active"><a>General Physician</a></li>
              <li><a>Specialist Office</a></li>
              <li>{this.renderContent()}</li>
            </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth : state.auth };
}

export default connect(mapStateToProps)(Header);
