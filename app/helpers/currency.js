import { helper } from '@ember/component/helper';

export function currency(params/*, hash*/) {
  // console.log(params);
  // let {value}=params;
  // let rupees = Math.floor(params);
  let paisa = "00";
  let sign = '₹';

  // if (paisa.toString().length === 1) { paisa = '0' + paisa; }
  return `${sign}${params}.${paisa}`;
}

export default helper(currency);
