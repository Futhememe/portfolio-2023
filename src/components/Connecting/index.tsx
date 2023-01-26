import { Divider } from "../Divider";
import { Text } from "../Text";
import { CodeContainer, ConnectingContainer, DesignContainer } from "./styles";

export const Connecting = () => {
  return (
    <ConnectingContainer>
      <CodeContainer>
        <div>
          <Divider />
          <Text size="4xl">Code</Text>
        </div>
      </CodeContainer>
      <Text size="4xl">Me</Text>
      <DesignContainer>
        <div>
          <Text size="4xl">Design</Text>
          <Divider />
        </div>
      </DesignContainer>
    </ConnectingContainer>
  );
};
