import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ContactInput } from "@/lib/contact-schema";

export function ContactEmail({
  name,
  email,
  phone,
  topic,
  message,
}: ContactInput) {
  return (
    <Html>
      <Head />
      <Preview>Pesan baru dari {name}</Preview>
      <Body
        style={{
          backgroundColor: "#050508",
          color: "#fafafa",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Container style={{ margin: "24px auto", maxWidth: 560, padding: 24 }}>
          <Heading style={{ fontSize: 22 }}>Pesan portofolio baru</Heading>
          <Text>Ada pesan masuk dari formulir kontak.</Text>
          <Hr />
          <Section>
            <Text>
              <strong>Nama:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Telepon:</strong> {phone || "-"}
            </Text>
            <Text>
              <strong>Topik:</strong> {topic}
            </Text>
            <Text>
              <strong>Pesan:</strong>
              <br />
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
