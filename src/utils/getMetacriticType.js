export default function getMetacriticType(note) {
  if(note < 100 && note >= 80) {
    return 'best';
  } else if(note < 80 && note >= 40) {
    return 'middle';
  } else {
    return 'low';
  }
};