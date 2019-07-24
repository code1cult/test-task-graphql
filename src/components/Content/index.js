import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RepositoryList from '../RepositoryList';
import Loading from '../Loading';
import ErrorMessage from '../Error';

const GET_REPOSITORIES = gql`
query($main: String!){
    search(query: $main, last: 10, type: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
          }
        }
      }
    }
  }
`;

const Content = ({ repo, license, stars }) => {
  let main = 'language:JavaScript stars:>' + stars +' '+ repo + ' '  + (license === '' ? '':'license:'+ license);
  return (
    <Query
      query={GET_REPOSITORIES}
      variables={{
        main
      }}

    >
      {({ data, loading, error }) => {
        if (error) {
          return <ErrorMessage error={error} />;
        }
        const { search } = data;
        if (loading && !search) {
          return <Loading />;
        }
        return (
          <RepositoryList
            edges={search.edges}
          />
        );
      }}
    </Query>
  )
}






export default Content;
