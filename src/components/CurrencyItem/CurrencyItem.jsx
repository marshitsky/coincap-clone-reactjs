import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { getFloat } from "../../utils/getFloat";
import { getSimpleValues } from "../../utils/getSimpleValues";
import { CoinSymbol, TableItem, TableElement, CoinAbbr } from "./styles";
import { ROUTE } from "../../router/routes.js";

export const CurrencyItem = ({
  rank,
  symbol,
  name,
  supply,
  maxSupply,
  marketCapUsd,
  volumeUsd24Hr,
  priceUsd,
  changePercent24Hr,
  vwap24Hr,
  explorer,
}) => {
  const priceUsdValue = getFloat(priceUsd);
  const marketCapValue = getSimpleValues(marketCapUsd);
  const VWAPValue = getFloat(vwap24Hr);
  const supplyValue = getSimpleValues(supply);
  const volumeValue = getSimpleValues(volumeUsd24Hr);
  const changePercentNumber = getFloat(changePercent24Hr);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(generatePath(ROUTE.HOME + ROUTE.COIN, { id: "" }), {
      state: {
        item: "",
      },
    });
  };

  return (
    <TableItem onClick={handleNavigate}>
      <TableElement>{rank}</TableElement>
      <TableElement>
        <CoinSymbol>
          <img
            src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
            alt="icon"
          />
          <div>
            <p>{name}</p>
            <CoinAbbr>{symbol}</CoinAbbr>
          </div>
        </CoinSymbol>
      </TableElement>
      <TableElement>${priceUsdValue}</TableElement>
      <TableElement>${marketCapValue}</TableElement>
      <TableElement>${VWAPValue} </TableElement>
      <TableElement>${supplyValue}</TableElement>
      <TableElement>${volumeValue}</TableElement>
      <TableElement>{changePercentNumber} %</TableElement>
    </TableItem>
  );
};
