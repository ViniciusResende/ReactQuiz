export const shuffleArray = (array: any[]) => //find out why cant use brackets
  [...array].sort(() => Math.random() - 0.5);
