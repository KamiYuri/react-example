import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

class App extends Component {
  state = {};

  componentDidMount() {
    axios.get('http://localhost/api/test').then((result) => {
      const data = result.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <Button variant="contained">Submit</Button>
      </div>
    );
  }
}

export default App;
