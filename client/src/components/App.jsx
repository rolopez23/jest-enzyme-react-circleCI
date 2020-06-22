import React from 'react';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/')
    .then(res => console.log(res))
    .catch(err => console.error(err));
  };

  render() {
    return (
      <div>Ahoy Cap't! App is Running!</div>
    )
  };
}

export default App;
