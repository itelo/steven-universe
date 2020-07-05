import React from "react";
import { useSeasonsQuery } from "../generated/graphql";
import EpisodesList from "./episodes";

type AppProps = {};

const App = (props: AppProps) => {
  const { data, loading } = useSeasonsQuery();
  const [seasonSelectedId, setSeasonSelectId] = React.useState<null | string>(null);
  
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <ul>
          {data?.seasons
            .sort((a, b) => a.index - b.index)
            .map((season) => (
              <li key={season.id}>
                <button onClick={() => setSeasonSelectId(season.id)}>{season.name}</button>
                {seasonSelectedId === season.id && <EpisodesList seasonId={season.id} />}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

App.defaultProps = {};

export default App;
