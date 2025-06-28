import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h4>Count: {count}</h4>
        <button
          onClick={() => {
            return this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc
        </button>
        <h4>Location: {location}</h4>
        <h4>Contact: hero@maildrop.cc</h4>
      </div>
    );
  }
}

export default UserClass;
