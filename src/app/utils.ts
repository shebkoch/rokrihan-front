export const numpf = (n, f, s, t) => {
  // f - 1, 21, 31, ...
  // s - 2-4, 22-24, 32-34 ...
  // t - 5-20, 25-30, ...
  n = n % 100;
  let n10 = n % 10;
  if ( (n10 === 1) && ( (n === 1) || (n > 20) ) ) {
    return String(n) + f;
  } else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
    return String(n) +  s;
  } else {
    return String(n) + t;
  }
};
export const dateNames = (value, x, postfix) => {
  if (x == 'minutes')  return numpf(value, ' минуту', ' минуты', ' минут') + postfix;
  if (x == 'hours')  return numpf(value, ' час', ' часа', ' часов') + postfix;
  if (x == 'days')  return numpf(value, ' день', ' дня', ' дней') + postfix;
  if (x == 'months')  return numpf(value, ' месяц', ' месяца', ' месяцев') + postfix;
  if (x == 'years')  return numpf(value, ' год', ' года', ' лет') + postfix;
};
export const idByLogin = (login : string) => {

  switch (login) {
    case 'shebup': return 1;
    case 'profitroll': return 2;
    case 'mesarthim' : return 3;
    case 'slancelord' : return 4;
    case 'vega': return 5;
    case 'gridmon' : return 6;
  }
}

