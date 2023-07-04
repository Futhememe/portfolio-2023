import { HeaderContainer, button, title } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <p className={title}>Gustavo Souza - 2023</p>

      <button className={button}>Menu</button>
    </HeaderContainer>
  );
};
