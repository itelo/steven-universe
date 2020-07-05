import React from "react";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

type EpisodeProps = {
  url: string;
  name: string;
  index: number;
};

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Episode = (props: EpisodeProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <Accordion onClick={() => setShow(true)}>
      <AccordionSummary
        aria-controls={props.name}
        id={props.name}
      >
        <Typography>{props.index} - {props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {show && <video src={props.url} controls style={{width: '100%'}}  />}
      </AccordionDetails>
    </Accordion>
  );
};

Episode.defaultProps = {};

export default Episode;
