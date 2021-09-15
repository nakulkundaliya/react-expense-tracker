export const getTotalAmount = (list) => {
  if (list) {
    const total = list.reduce((a, b) => a + parseFloat(b.amount), 0);
    return total.toFixed(2);
  }

  return 0;
};

export const isEmpty = (data) => {
  if (
    data.date === '' ||
    data.category === '' ||
    data.description === '' ||
    data.amount === ''
  ) {
    return true;
  }
  return false;
};

export const monthOptions = [
  { label: 'January', value: '01' },
  { label: 'Febuary', value: '02' },
  { label: 'March', value: '03' },
  { label: 'April', value: '04' },
  { label: 'May', value: '05' },
  { label: 'June', value: '06' },
  { label: 'July', value: '07' },
  { label: 'August', value: '08' },
  { label: 'September', value: '09' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' }
];
