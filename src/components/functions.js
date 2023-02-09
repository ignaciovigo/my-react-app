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

export function saveToStorage ({cart,totalProducts}){
  window.localStorage.setItem('cart',JSON.stringify(cart))
  window.localStorage.setItem('total',totalProducts)
}


export function resetStorage(){
  window.localStorage.removeItem('cart')
  window.localStorage.removeItem('total')
}