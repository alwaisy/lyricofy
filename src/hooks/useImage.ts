export const useImage = (path: string | URL) => {
  // console.log(new URL(path, import.meta.url).href);

  return new URL(path, import.meta.url).href;
};
