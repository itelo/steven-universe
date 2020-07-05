import React from "react";

type EpisodeProps = {
  url: string;
  name: string;
};

const Episode = (props: EpisodeProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>{props.name}</button>
      {show && <video src={props.url} controls />}
    </>
  );
};

Episode.defaultProps = {};

export default Episode;
