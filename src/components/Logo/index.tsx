import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import styled from "styled-components";
import logo from "../../assets/logo.png"

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function Logo() {
  const theme = useTheme()
  return <StyledLogo src={logo} theme={theme} />
}

Logo.defaultProps = {}
 
export default Logo;