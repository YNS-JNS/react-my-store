import styled from 'styled-components';

interface MyProps {
  $bgColor?: string;
  $textColor?: string;
  $padding?: string;
  $margin?: string;
  $width?: string;
  $height?: string;
  $fontSize?: string;
  children: React.ReactNode;
}

// Styled button
const ButtonWrapper = styled.button<MyProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 5px;
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  cursor: pointer;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  font-weight: 600;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
`;

// Functional Component
const MyButton = ({
  $bgColor,
  $textColor = '#fff',
  $padding = '8px 16px',
  $margin = '8px 4px',
  $width = 'auto',
  $height = 'auto',
  children,
}: MyProps) => {
  return (
    <ButtonWrapper
      $bgColor={$bgColor}
      $textColor={$textColor}
      $padding={$padding}
      $margin={$margin}
      $width={$width}
      $height={$height}
    >
      {children}
    </ButtonWrapper>
  );
};

export default MyButton;

/*
  const MyButton: React.FC<MyProps & { children: React.ReactNode }> = ({
  $bgColor,
  $textColor = '#fff',
  $padding = '8px 16px',
  $margin = '8px 4px',
  $width = 'auto',
  $height = 'auto',
  children,
}: MyProps) => {...}
*/