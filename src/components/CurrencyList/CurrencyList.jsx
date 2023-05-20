import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../../store";
import { CurrencyItem } from "../../components";
import {
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
} from "./styles";

export const CurrencyList = () => {
  const dispatch = useDispatch();
  const { currencies } = useSelector((store) => store.currencies);
  const [loadedData, setLoadedData] = useState(1);

  useEffect(() => {
    dispatch(getCurrencies(loadedData));
  }, [dispatch, loadedData]);

  return (
    <ListWrapper>
      <InfoBlock>
        <MarketValues>
          <Statistic>
            <StatisticName>market cap</StatisticName>
            <StatInfo>
              <StatNum>$1.14T</StatNum>
            </StatInfo>
          </Statistic>
          <Statistic>
            <StatisticName>exchange vol</StatisticName>
            <StatInfo>
              <StatNum>$12.10B</StatNum>
            </StatInfo>
          </Statistic>
          <Statistic>
            <StatisticName>assets</StatisticName>
            <StatInfo>
              <StatNum>2,295</StatNum>
            </StatInfo>
          </Statistic>
          <Statistic>
            <StatisticName>exchanges</StatisticName>
            <StatInfo>
              <StatNum>73</StatNum>
            </StatInfo>
          </Statistic>
          <Statistic>
            <StatisticName>markets</StatisticName>
            <StatInfo>
              <StatNum>11,424</StatNum>
            </StatInfo>
          </Statistic>
          <Statistic>
            <StatisticName>btc dom index</StatisticName>
            <StatInfo>
              <StatNum>45.4%</StatNum>
            </StatInfo>
          </Statistic>
        </MarketValues>
      </InfoBlock>

      <CoinsList>
        <Table>
          <thead>
            <tr>
              <RowName>Rank</RowName>
              <RowName>Name</RowName>
              <RowName>Price</RowName>
              <RowName>Market cap</RowName>
              <RowName>VWAP(24Hr)</RowName>
              <RowName>Supply</RowName>
              <RowName>Volume(24Hr)</RowName>
              <RowName>Change(24Hr)</RowName>
            </tr>
          </thead>
          <tbody>
            {currencies?.data?.map((currency) => (
              <CurrencyItem key={currency?.id} {...currency} />
            ))}
          </tbody>
        </Table>
      </CoinsList>

      <div>
        <ViewMoreBtn onClick={() => setLoadedData((previous) => previous + 1)}>
          View More
        </ViewMoreBtn>
      </div>
    </ListWrapper>
  );
};
