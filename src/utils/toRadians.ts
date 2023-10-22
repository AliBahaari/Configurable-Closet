export const toRadians = (degrees: string, precision = 2) => {
  return parseFloat(((parseFloat(degrees) * Math.PI) / 180).toFixed(precision));
};
