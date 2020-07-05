import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import styled from "styled-components";
import bg from "../../assets/steven-universe-love-like-you-1920×1080.jpg"

type BackgroundProps = {}

const StyledBackground = styled.div`
  background: url(${bg});
  width: 100vw;
  height: 100vh;
`
 

function Background(props: React.FC<{}>) {
  const theme = useTheme()
  return <StyledBackground {...props} theme={theme} />

}
Background.defaultProps = {}
 
export default Background;