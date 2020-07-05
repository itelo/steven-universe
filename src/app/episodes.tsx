import React from 'react';
import { useEpisodesListBySeasonIdQuery } from '../generated/graphql';
import Episode from './episode';
import styled from 'styled-components';
 
type EpisodesListProps = {
  seasonId: string;
}

const Container = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
`
 
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
        <Container>
          {data?.episodes
            .sort((a, b) => a.index - b.index)
            .map((episode) => (
              <Episode index={episode.index} url={episode.url} name={episode.name} key={episode.id} />
            ))}
        </Container>
      )}
  </div>
}
 
EpisodesList.defaultProps = {}
 
export default EpisodesList;