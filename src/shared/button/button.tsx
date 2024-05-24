import { PropsWithChildren } from 'react';

import { ButtonText, StyledButton } from './button.styles';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
