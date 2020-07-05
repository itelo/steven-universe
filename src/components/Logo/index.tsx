import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import styled from "styled-components";
import logo from "../../assets/logo.png"

const StyledLogo = styled.div`
  background: url(${logo});
  width: 386px;
  height: 164px;
  background-size: 386px;
`;

function Logo() {
  const theme = useTheme()
  return <StyledLogo theme={theme} />
}

Logo.defaultProps = {}
 
export default Logo;