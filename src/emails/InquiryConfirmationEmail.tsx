import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface InquiryConfirmationEmailProps {
  name: string;
}

export const InquiryConfirmationEmail = ({
  name,
}: InquiryConfirmationEmailProps) => (
  <Html>
    <Body style={{ backgroundColor: "#f6f9fc", fontFamily: "sans-serif" }}>
      <Container style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "8px" }}>
        <Heading style={{ color: "#333" }}>Inquiry Received!</Heading>
        <Text>Hi {name},</Text>
        <Text>
          Thank you for reaching out to Nassy Property Consultants. We have received your inquiry and our team will get back to you shortly.
        </Text>
        <Hr />
        <Text style={{ fontSize: "12px", color: "#888" }}>
          This is an automated confirmation from Nassy Property Consultants.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default InquiryConfirmationEmail;