import styled from '@emotion/styled';

const Hero = styled.h1`
  font-size: ${({ theme }) => console.log(theme) || theme.sizes[7]};
  text-align: center;
`;

export default Hero;
