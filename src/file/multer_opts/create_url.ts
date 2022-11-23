export const createImageUrl = (file): string => {
  const serverAdress = process.env.SERVER_ADRESS;
  return `${serverAdress}/public/${file.filename}`;
};
