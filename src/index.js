import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = {
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
};



const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(<ApolloProvider client={client}><App/></ApolloProvider>, document.getElementById('root'));
