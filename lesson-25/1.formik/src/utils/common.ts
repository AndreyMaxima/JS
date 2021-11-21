export const isEmptyObject = (obj: any) => {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return Object.keys(obj).every((key) => !obj[key]);
};
