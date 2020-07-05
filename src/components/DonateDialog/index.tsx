import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import DonatePaypal from "../DonatePaypal";
import picpayQrCode from "../../assets/picpay.jpg";
import styled from "styled-components";
import { Typography, useTheme, Theme } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DonationCard = styled.div`
  background-color: rgba(0, 0, 0, .03);
  border: 1px solid rgba(0, 0, 0, .125);
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DonationGroud = styled.div<{theme: Theme}>`
  display: grid;
  grid-template-areas: 
    "picpayTitle paypalTitle"
    "picpayCard paypalCard";
  grid-gap: 12px;
  grid-template-columns: 200px 200px;
  grid-template-rows: 24px 200px;
  ${({theme})=> theme.breakpoints.down('sm')} {
    grid-template-areas: 
      "paypalTitle"
      "paypalCard"
      "picpayTitle"
      "picpayCard";
    grid-template-columns: 100%;
    grid-template-rows: 32px 200px 32px 200px;
  }
`

const PicpayTitle = styled.div`
  grid-area: picpayTitle;
  align-items: center;
  justify-content: center;
  display: flex;
`
const PaypalTitle = styled.div`
  grid-area: paypalTitle;
  align-items: center;
  justify-content: center;
  display: flex;
`
const PicpayCard = styled(DonationCard)`
  grid-area: picpayCard;
`
const PaypalCard = styled(DonationCard)`
  grid-area: paypalCard;
`

const QrCodeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  `

export default function DonateDialog(props: {
  open: boolean;
  onClose?: () => void;
}) {
  const theme = useTheme();
  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Doe pelo paypal ou picpay :)"}
      </DialogTitle>
      <DialogContent>
        <DonationGroud theme={theme}>
          <PicpayTitle>
            <Typography>Picpay</Typography>
          </PicpayTitle>
          <PaypalTitle>
            <Typography>Paypal</Typography>
          </PaypalTitle>
          <PaypalCard>
            <DonatePaypal />
          </PaypalCard>
          <PicpayCard>
            <QrCodeImg src={picpayQrCode} />
          </PicpayCard>
        </DonationGroud>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
