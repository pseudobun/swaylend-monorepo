import BigNumber from 'bignumber.js';

export const getFormattedPrice = (number: BigNumber): string => {
  if (!number || number.isNaN() || number.eq(0)) return '$ 0.00';

  if (number.gte(1000000000)) {
    return `$ ${number.div(1000000000).toFixed(2, 1)}B`;
  }
  if (number.gte(1000000)) {
    return `$ ${number.div(1000000).toFixed(2, 1)}M`;
  }
  if (number.gte(1000)) {
    return `$ ${number.div(1000).toFixed(2, 1)}K`;
  }
  if (number.gte(1)) {
    return `$ ${number.toFixed(2, 1)}`;
  }
  return '< $1';
};

export const getFormattedNumber = (number: BigNumber): string => {
  if (!number || number.isNaN() || number.eq(0)) return '0.0';

  if (number.gte(1000000000)) {
    return `${number.div(1000000000).toFixed(2, 1)}B`;
  }
  if (number.gte(1000000)) {
    return `${number.div(1000000).toFixed(2, 1)}M`;
  }
  if (number.gte(1000)) {
    return `${number.div(1000).toFixed(2, 1)}K`;
  }
  if (number.gte(1)) {
    return `${number.toFixed(2, 1)}`;
  }
  if (number.gte(0.001)) {
    return number.toFixed(3, BigNumber.ROUND_FLOOR);
  }
  return '< 0.001';
};
