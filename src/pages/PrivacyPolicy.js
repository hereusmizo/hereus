import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy";
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
          PRIVACY
        </Typography>
        <Typography
          align="center"
          variant="h4"
          style={{
            fontWeight: "bolder",
            marginTop: 30,
            color: "#1473E6",
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
          At Hereus, accessible from hereus.in, one of our main priorities is
          the privacy of our visitors. This Privacy Policy document contains
          types of information that is collected and recorded by Hereus and how
          we use it.
        </Typography>
        <Typography paragraph>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </Typography>
        <Typography paragraph>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Hereus. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Consent
        </Typography>
        <Typography paragraph>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Information we collect
        </Typography>
        <Typography paragraph>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </Typography>
        <Typography paragraph>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          How we use your information
        </Typography>
        <Typography paragraph>
          We use the information we collect in various ways, including to:
        </Typography>
        <Typography paragraph>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Log Files
        </Typography>
        <Typography paragraph>
          Hereus follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the website, and gathering demographic information.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Advertising Partners Privacy Policies
        </Typography>
        <Typography paragraph>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Hereus.
        </Typography>
        <Typography paragraph>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Hereus, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </Typography>
        <Typography paragraph>
          Note that Hereus has no access to or control over these cookies that
          are used by third-party advertisers.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Third Party Privacy Policies
        </Typography>
        <Typography paragraph>
          Hereus's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </Typography>
        <Typography paragraph>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </Typography>
        <Typography paragraph>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </Typography>
        <Typography paragraph>
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </Typography>
        <Typography paragraph>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </Typography>
        <Typography paragraph>
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
        </Typography>
        <Typography paragraph>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          GDPR Data Protection Rights
        </Typography>
        <Typography paragraph>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </Typography>
        <Typography paragraph>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </Typography>
        <Typography paragraph>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </Typography>
        <Typography paragraph>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </Typography>
        <Typography paragraph>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </Typography>
        <Typography paragraph>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </Typography>
        <Typography paragraph>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </Typography>
        <Typography paragraph>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Children's Information
        </Typography>
        <Typography paragraph>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </Typography>
        <Typography paragraph>
          Hereus does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </Typography>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
