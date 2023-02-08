export const cutTitle = (title) => {
  return title.split(' ',3).join(' ')
}

export const arrayInSubArrays = (arr, maxElements) => {
  const out = [];
  for (let i = 0; i < arr.length; i += maxElements) {
    const element = arr.slice(i, i + maxElements);
    out.push(element);
  }
  return out;
};
