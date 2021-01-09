import React from 'react';
import styled from '@emotion/styled';
import Container from './components/shared/Container';
import Section from './components/shared/Section';

const Table = styled.table`
  font-weight: 400;
  width: 100%;
  font-size: ${({ theme }) => theme.sizes[3]};
  border-collapse: collapse;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TH = styled.th`
  padding: ${({ theme }) => theme.sizes[1]};
  text-align: left;
`;

const TD = styled.td`
  padding: ${({ theme }) => theme.sizes[1]};
  text-align: left;
`;
const ScoreList = ({ items, deleteScore }) => {
  return (
    <Section lvl={8}>
      <Container>
        <Table>
          <TableHead>
            <tr>
              <TH>DATE</TH>
              <TH>SCORE</TH>
            </tr>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <tr key={item.id}>
                <TD>{new Date(item.date).toLocaleDateString()}</TD>
                <TD>{item.score}</TD>
                <button onClick={() => deleteScore(item.id)}>X</button>
              </tr>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Section>
  );
};

export default ScoreList;
