import React from "react";

type DonatePaypalProps = {};

const DonatePaypal = (props: DonatePaypalProps) => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="XBQLXVC7L4G3N" />
      <input type="hidden" name="currency_code" value="BRL" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        src="https://www.paypal.com/en_BR/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
};

DonatePaypal.defaultProps = {};

export default DonatePaypal;
