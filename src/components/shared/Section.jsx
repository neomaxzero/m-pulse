import styled from '@emotion/styled';

const Section = styled.div`
  margin-top: ${({ theme, lvl }) => theme.sizes[lvl || 4]};
`;

export default Section;
