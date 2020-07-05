import React from "react";
import { useSeasonsQuery } from "../generated/graphql";
import EpisodesList from "./episodes";
import Background from "../components/Background";
import Logo from "../components/Logo";
import styled from "styled-components";
import {
  CircularProgress,
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
    ". content ."
    ". donate .";
    
  grid-template-columns: 1fr minmax(auto, 1000px) 1fr;
  grid-template-rows: 186px 1fr 100px;
  }

  ${({theme}) => theme.breakpoints.down('sm')} {
    grid-template-areas:
    ". head ."
    ". content ."
    ". donate .";
    grid-template-columns: 0 minmax(auto, 1000px) 0;
    grid-template-rows: 186px 1fr 100px;
  }
`;

const Header = styled.div`
  grid-area: head;
`;

const Content = styled.div`
  grid-area: content;
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
                  </Tabs>
                </AppBar>
                {data?.seasons
                  .sort((a, b) => a.index - b.index)
                  .map((season, index) => (
                    <TabPanel value={value} index={index}>
                      {seasonSelectedId === season.id && (
                        <EpisodesList seasonId={seasonSelectedId} />
                      )}
                    </TabPanel>
                  ))}
              </>
            )}
          </div>
        </Content>
      </Container>
    </Background>
  );
};

App.defaultProps = {};

export default App;
