import React from "react";
import { useSeasonsQuery } from "../generated/graphql";
import EpisodesList from "./episodes";
import Background from "../components/Background";
import Logo from "../components/Logo";
import styled from "styled-components";
import {
  CircularProgress,
  Button,
  Grid,
  Paper,
  useTheme,
  Theme,
  AppBar,
  Tabs,
  makeStyles,
  Box,
  Typography,
  Tab,
} from "@material-ui/core";
import DonatePaypal from "../components/DonatePaypal";

type AppProps = {};

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Container = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-areas:
    ". head ."
    ". content .";
  grid-template-columns: 1fr minmax(auto, 1000px) 1fr;
  grid-template-rows: 186px 1fr;
  }
`;

const Header = styled.div`
  grid-area: head;
`;

const Nav = styled.div`
  grid-area: nav;
  padding: 24px;
`;

const Content = styled.div`
  grid-area: content;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const StyledButton = styled(Button)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const App = (props: AppProps) => {
  const { data, loading } = useSeasonsQuery();
  const [seasonSelectedId, setSeasonSelectId] = React.useState(
    // season 1 id
    "746e5638-47ca-4a84-956f-7190e72d54aa"
  );

  const theme = useTheme();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e: any, index: number) => {
    const season = data?.seasons.find(season => season.index === (index + 1));
    setSeasonSelectId(season!.id);
    setValue(index);
  }

  return (
    <Background>
      <Container theme={theme}>
        <Header>
          <Logo />
        </Header>
        <Content>
          <div className={classes.root}>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    {data?.seasons
                      .sort((a, b) => a.index - b.index)
                      .map((season) => (
                        <Tab label={season.name} {...a11yProps(season.id)} />
                      ))}

                    {/* <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} /> */}
                  </Tabs>
                </AppBar>
                {data?.seasons
                  .sort((a, b) => a.index - b.index)
                  .map((season, index) => (
                    <TabPanel value={value} index={index}>
                      {seasonSelectedId !== null && (
                        <EpisodesList seasonId={seasonSelectedId} />
                      )}
                    </TabPanel>
                  ))}
              </>
            )}
          </div>
        </Content>
        {/* <DonatePaypal />
        <Nav>
          <Paper>
            {loading ? (
              <CircularProgress />
            ) : (
              data?.seasons
                .sort((a, b) => a.index - b.index)
                .map((season) => (
                  <div key={season.id}>
                    <StyledButton
                      color={seasonSelectedId === season.id ? 'secondary' : 'default'}
                      onClick={() =>
                        seasonSelectedId === season.id
                          ? setSeasonSelectId(null)
                          : setSeasonSelectId(season.id)
                      }
                      // color="primary"
                      fullWidth
                    >
                      {season.name}
                    </StyledButton>
                  </div>
                ))
            )}
          </Paper>
        </Nav>
        <Content>
          {seasonSelectedId !== null && (
            <EpisodesList seasonId={seasonSelectedId} />
          )}
        </Content> */}
      </Container>
    </Background>
  );
};

App.defaultProps = {};

export default App;
