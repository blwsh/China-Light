const money = (number: number) => new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'}).format(number);

export default money;
