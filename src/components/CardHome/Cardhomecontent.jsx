import React from 'react';
import 'assets/scss/style.css';


class Cardhomecontent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      imageUrl: this.props.imageUrl
    };
  }
  render() {
    return (
      <div className="content-home-3-content">
        <p>
          <img src={this.state.imageUrl} />
          <span>{this.state.title}</span>
        </p>
      </div>
    );
  }
}

export default Cardhomecontent;
