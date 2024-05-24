import { SquareContainer, SquareText } from './components.styles';

type SquareProps = {
  onClick: () => void;
  value: 'X' | 'O' | '';
};

const Square = ({ onClick, value }: SquareProps) => {
  return (
    <SquareContainer onClick={onClick}>
      <SquareText>{value}</SquareText>
    </SquareContainer>
  );
};

export default Square;
