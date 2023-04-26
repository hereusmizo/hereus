import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy";
  }, []);
  return (
    <div style={{ flexGrow: 1, backgroundColor: "#F9F9FA", minHeight: 800 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          align="center"
          variant="h4"
          style={{
            fontWeight: "bolder",
            marginRight: 10,

            marginTop: 30,
          }}
        >
          REFUND
        </Typography>
        <Typography
          align="center"
          variant="h4"
          style={{
            fontWeight: "bolder",
            marginTop: 30,
            color: "#1473E6",
            marginRight: 10,
          }}
        >
          POLICY
        </Typography>
      </div>
      <Container
        style={{
          background: "#fff",
          padding: 20,
          marginTop: 20,
        }}
      >
        <Typography paragraph>
          Our focus is complete customer satisfaction. Please read the fine
          prints of each deal before buying it, it provides all the details
          about the services or the product you purchase.
        </Typography>
        <Typography paragraph>
          In case of dissatisfaction from our services, clients have the liberty
          to cancel their projects and request a refund from us. Our Policy for
          the cancellation and refund will be as follows:
        </Typography>
        <Typography variant="h6">Cancellation Policy</Typography>
        <Typography paragraph>
          For Cancellations please contact the us via contact us link.
        </Typography>

        <Typography paragraph>
          All the customers who are willing to cancel the service of Hereus
          should contact the support team before 7 business days. Cancel request
          received later than 7 business days from payment date will not be
          accepted as cancellable.
        </Typography>
        <Typography variant="h6">Refund Policy</Typography>
        <Typography paragraph>
          In case any client is not completely satisfied with Hereus's service,
          we can provide a refund within 7 days of payment.
        </Typography>
        <Typography paragraph>
          In case any client who are facing problems regarding payment on
          Monthly Recharge Plan such as accidental double payments and payment
          success but payment not success, please contact us from our contact
          page as soon as possible. We will review and investigate your problems
          and try our best to solve and refund you as soon as possible.
        </Typography>
        <Typography paragraph>
          The refund will be directly paid by Hereus to customer as per their
          refund.
        </Typography>
        <Typography paragraph>
          Refund payment method will be upto the customer's will.
        </Typography>
        <Typography variant="h6">Contact Us</Typography>
        <Typography paragraph>
          If you have any questions about this Refunds and Cancellations Policy,
          You can contact us at hereusmizo@gmail.com
        </Typography>
      </Container>
    </div>
  );
};

export default RefundPolicy;
