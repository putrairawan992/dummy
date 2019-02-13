import React from "react";
import Service from "services/Services";

export default class UserTest extends React.Component {
  getUser = () => {
    let service = new Service();
    service.modelGetUser();
  };
  render() {
    return (
      <div>
        <button onClick={this.getUser}>Get User</button>
      </div>
    );
  }
}
