import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Content from './components/Content'
import { Container } from '@material-ui/core';

class App extends Component {
  state = {
    repo: '',
    license: '',
    stars: '10'
  };

  onOrganizationSearch = value => {
    const { license, repo, stars } = value;
    this.setState({ repo: repo, license: license, stars: stars });
  };

  render() {
    const { repo, license, stars } = this.state;

    return (
      <>
        <Container maxWidth="sm">
          <Navigation
            repo={repo}
            license={license}
            stars={stars}
            onOrganizationSearch={this.onOrganizationSearch}
          />

          <Content stars={stars} repo={repo} license={license} />
        </Container>
      </>
    );
  }
}

export default App;