// import React from 'react';
// import {graphql} from 'react-relay';

// import logo from './logo.svg';
// import './App.css';

// type ExchangeRatesData = {
//   user :{
//     id: string;
//     name: string;
//     age: number;
//   }[]
// }

// function App() {
//   const EXCHANGE_RATES = gql`
//   {
//     user {
//       id
//       name
//       age
//     }
//   }
// `;


//   const { loading, error, data } = useQuery<ExchangeRatesData>(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   if (!data) return <p>no Data</p>

//   return <div>{data.user.map(({ id, name, age }) => (
//     <div key={id}>
//       <p>
//         {name}: {age}
//       </p>
//     </div>
//   ))}</div>
//   );
// }

// export default App;

import React from 'react';
import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';

import { environment } from './relay';

const renderQuery = ({error, props}: any) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    console.log(props);
    // return <div>{props..name} is great!</div>;
  }
  return <div>Loading</div>;
}
  
const App = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppRelayQuery {
          user {
            id
            name
            age
          }
        }
      `}
      variables={{}}
      render={renderQuery}
    />
  );
}

export default App;