import { Heading } from "../Heading";
import { BannerContainer } from "./styles";

export const Banner = () => {
  return (
    <BannerContainer>
      <Heading as="span" size="md" className="marqueeStyle">
        &nbsp;REACT - NEXT.JS - WEB DESIGN - MOBILE - REACT - NEXT.JS - WEB
        DESIGN - MOBILE -
      </Heading>
      <Heading as="span" size="md" className="marqueeStyle2">
        &nbsp;REACT - NEXT.JS - WEB DESIGN - MOBILE -
      </Heading>
    </BannerContainer>
  );
};
