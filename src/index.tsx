import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'https://steven-universe-portuguese.herokuapp.com/v1/graphql',
  // headers: {
  //   'hasura-collaborator-token': 'IDToken eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzoyMzIyM2JiNi1lODQ3LTRhMTAtOThhNS02Yzk1YjZlYWUxOGEiLCJ0eXAiOiJKV1QifQ.eyJhbGxvd2VkX3NjaGVtYXMiOltdLCJhbGxvd2VkX3RhYmxlcyI6e30sImF0X2hhc2giOiJpc0FFRmNyNEtqa3hueUFsSkpxajJBIiwiYXVkIjpbIjQ5MGIyMzllLTkzMTQtNDY4My05NjhmLTI4YzFmYjM5MWZmNl9jb25zb2xlIl0sImF1dGhfdGltZSI6MTU5MzM1Njk2MiwiY29sbGFib3JhdG9yX3ByaXZpbGVnZXMiOlsiYWRtaW4iLCJncmFwaHFsX2FkbWluIiwidmlld19tZXRyaWNzIl0sImV4cCI6MTU5MzM2NDEzOCwiaWF0IjoxNTkzMzYwNTM4LCJpc3MiOiJodHRwczovL29hdXRoLnByby5oYXN1cmEuaW8vIiwianRpIjoiMjFjYmM1MjEtMzBlZS00NWEyLThjMjgtNjQ5OWM4ZDFiMTQzIiwibWV0cmljc19mcWRuIjoidXMtZWFzdC0yLWF3cy1tZXRyaWNzLWNsb3VkLmhhc3VyYS1hcHAuaW8iLCJub25jZSI6IiIsInByb2plY3QiOnsiaWQiOiI4M2Q0MTM2ZC02OTI5LTQ0YjAtYmNmZS04MTc2MmQ5MGQ3ZTYiLCJuYW1lIjoibmVhdC1oYWdmaXNoLTg1In0sInJhdCI6MTU5MzM1Njk1Miwic2lkIjoiOWJlZjRjZjktYzhmYy00NzY3LWEwMTYtMGMwNDc1MDBjMGQ3Iiwic3ViIjoiMzk1YmNkODQtZDAwMS00MDkwLTg3ZGEtNzZmZWFjOTQ0YjRhIn0.RGYKQjV8jKmFwcYyaVnEMOPejxxBlDwYHuTMmurbmM9MrF4z8jVxQYluo4stsiL84WDT0ojIR5cWRc-D0c7qjuSG7HcMr31Z7FXIi0MoGyhemZn0l9v7c3T3QnTMuCTcPn46RkX6gLMMkI9-_zMmQDFig9VK5NNCdIoRRxPrmL6YhTdNTTP4_yswrJ_kqgbaRXq88JzgaWeUvLm5TBFr28BUdsncHOSpxb4RGGozJWc-C2HuxKdhoter1NQVewUaLuHMPL-Mrq6I_dXm5AEbMF7H0BzEUhaSxj3iPGZseTS0v0gj2fG6ypcyehqSPJzR9B4VwCqqmeuT2CE9tBvqS3LXvNXHL9NAWcpX20FtmGvkoxkNCjd4U1mda1huEnf20geYTREp8Xady98aQpXBX20lin4fly0ckmCOCulglLcqs6Qpna-nNzHVqJSW9Asrb8P2GIkE14VMi-Pg6gb1wsXR4UeWulEAH8tCtoqxlmOnLy6NmKbjVEAwsmL_embRMewq1PsumSA_St5Neu4Ahl8pacgoHYUDaBf6gCQ85li2xcyr5JnBs4JmGG_RykjzuHbO7gucYpptgrS5iudDwYwZyLgStullYmKXar0i3FZFJFMBs-66OgvkB_e5jT2T3GceiNIyvjCXrUNaxg3uJ9WAOBawRzZVygocmNZQssQ'
  // }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
