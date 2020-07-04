import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import logo from './logo.svg';
import './App.css';

type ExchangeRatesData = {
  user :{
    id: string;
    name: string;
    age: number;
  }[]
}

function App() {
  const EXCHANGE_RATES = gql`
  {
    user {
      id
      name
      age
    }
  }
`;


  const { loading, error, data } = useQuery<ExchangeRatesData>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>no Data</p>

  return <div>{data.user.map(({ id, name, age }) => (
    <div key={id}>
      <p>
        {name}: {age}
      </p>
    </div>
  ))}</div>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
