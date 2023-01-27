import { Heading } from "../Heading";
import { LinkButton } from "../LinkButton";
import { Text } from "../Text";
import { FooterContainer, SocialContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Heading size="4xl">Get in touch !</Heading>
      <Text size="xl">Currently available for freelance</Text>
      <SocialContainer>
        <LinkButton variant="contained" color="white">
          LinkedIn
        </LinkButton>
        <LinkButton variant="contained" color="white">
          Instagram
        </LinkButton>
      </SocialContainer>
    </FooterContainer>
  );
};
