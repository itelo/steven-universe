import React from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails, AccordionActions } from "@material-ui/core";
import styled from "styled-components";

type EpisodeProps = {
  url: string;
  name: string;
  index: number;
};

export const StyledAccordion = styled(Accordion)`
  max-width: 600px;
`

const Episode = (props: EpisodeProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <StyledAccordion onClick={() => setShow(true)}>
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls={props.name}
        id={props.name}
      >
        <Typography>{props.index} - {props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {show && <video src={props.url} controls style={{width: '100%'}}  />}
      </AccordionDetails>
    </StyledAccordion>
    // <>
    // </>
    // <>
    //   <button onClick={() => setShow(true)}>{props.name}</button>
    //   
    // </>
  );
};

Episode.defaultProps = {};

export default Episode;
