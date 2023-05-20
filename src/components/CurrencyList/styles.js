import styled from "styled-components";

const ListWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  place-self: center;
  width: 100%;
  padding-bottom: 21px;
  background-color: #fff;
`;

const InfoBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 10em !important;
  background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))
    rgb(255, 255, 255);
  color: #fff;
`;

const MarketValues = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  margin: 0 auto;
  padding: 1.3em 0;
  width: calc(1127px + 2rem);
`;

const Statistic = styled.div``;

const StatisticName = styled.p`
  margin: 0;
  font-size: 1.3em;
  font-weight: 700;
  color: #fff !important;
  text-transform: uppercase;
  text-align: center;
`;

const StatInfo = styled.div`
  text-align: center;
`;

const StatNum = styled.span`
  font-size: 1.3em;
  /* font-weight: 700; */
`;

const CoinsList = styled.table`
  display: grid;
  place-items: center;
  margin-top: 7em;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px !important;
  border-collapse: separate;
  z-index: 2;
`;

const Table = styled.thead`
  border-collapse: separate;
  border-spacing: 3rem 10px;
`;

const RowName = styled.th`
  padding: 0.78571429em;
`;

const ViewMoreBtn = styled.button`
  padding: 0.78571429em 1.5em;
  margin-top: 15px;
  background: rgb(24, 198, 131) !important;
  color: #fff;
  font-weight: 700;
  font-size: 1em;
  line-height: 1em;
  text-align: center;
  border-radius: 10em;
  outline: 0;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
  :hover {
    transform: translateY(-2px);
  }
`;

export {
  CoinsList,
  ListWrapper,
  ViewMoreBtn,
  InfoBlock,
  Table,
  RowName,
  MarketValues,
  Statistic,
  StatisticName,
  StatInfo,
  StatNum,
};
