export default function getMetacriticType(price) {
  if(price < 100 && price >= 80) {
    return 'best';
  } else if(price < 80 && price >= 40) {
    return 'middle';
  } else {
    return 'low';
  }
};