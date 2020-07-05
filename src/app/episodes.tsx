import React from 'react';
import { useEpisodesListBySeasonIdQuery } from '../generated/graphql';
import Episode from './episode';
 
type EpisodesListProps = {
  seasonId: string;
}
 
const EpisodesList = (props: EpisodesListProps) => {
  const { data, loading } = useEpisodesListBySeasonIdQuery({
    variables: {
      season_id: props.seasonId
    }
  });
  return <div>
    {loading ? (
        "loading"
      ) : (
        <ul>
          {data?.episodes
            .sort((a, b) => a.index - b.index)
            .map((episode) => (
              <Episode url={episode.url} name={episode.name} key={episode.id} />
            ))}
        </ul>
      )}
  </div>
}
 
EpisodesList.defaultProps = {}
 
export default EpisodesList;