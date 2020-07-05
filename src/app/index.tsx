import React from "react";
import { useSeasonsQuery } from "../generated/graphql";
import EpisodesList from "./episodes";
import Background from "../components/Background";
import Logo from "../components/Logo";
import styled from "styled-components";
import { CircularProgress, Button, Grid, Paper } from "@material-ui/core";

type AppProps = {};

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "head head"
    "nav content";
  grid-template-columns: 384px 1fr;
  grid-template-rows: 186px 1fr;
`;

const Header = styled.div`
  grid-area: head;
`;

const Nav = styled.div`
  grid-area: nav;
`;

const Content = styled.div`
  grid-area: content;
`;

const App = (props: AppProps) => {
  const { data, loading } = useSeasonsQuery();
  const [seasonSelectedId, setSeasonSelectId] = React.useState<null | string>(
    null
  );

  console.log({ loading });

  return (
    <Background>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Nav>
          <Paper>
            {loading ? (
              <CircularProgress />
            ) : (
              data?.seasons
                .sort((a, b) => a.index - b.index)
                .map((season) => (
                  <div key={season.id}>
                    <Button
                      onClick={() =>
                        seasonSelectedId === season.id
                          ? setSeasonSelectId(null)
                          : setSeasonSelectId(season.id)
                      }
                      // color="primary"
                      fullWidth
                    >
                      {season.name}
                    </Button>
                  </div>
                ))
            )}
          </Paper>
        </Nav>
        <Content>
          {seasonSelectedId !== null && (
            <EpisodesList seasonId={seasonSelectedId} />
          )}
        </Content>
      </Container>
    </Background>
  );
};

App.defaultProps = {};

export default App;
