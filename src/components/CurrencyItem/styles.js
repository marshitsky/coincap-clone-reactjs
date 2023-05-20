import styled from "styled-components";

const TableItem = styled.tr`
  margin: 8px 0;
  width: 100%;
  border-radius: 0.28571429rem;
  border: 1px solid #000;
`;

const TableElement = styled.td`
  padding: 0.78571429em;
`;

const CoinSymbol = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const CoinAbbr = styled.p`
  color: #666;
  opacity: 0.7;
`;

export { CoinSymbol, TableItem, TableElement, CoinAbbr };
