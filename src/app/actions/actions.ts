import { foodTypes } from '../../../types';

export const addToCart = (product: foodTypes) => {
  const cart: foodTypes[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // Ensure cart is an array
  if (!Array.isArray(cart)) {
    console.error("Cart is not an array:", cart);
    localStorage.setItem('cart', JSON.stringify([]));
    return;
  }

  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({ ...product, inventory: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId: string | number) => {
  let cart: foodTypes[] = JSON.parse(localStorage.getItem('cart') || '[]');
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated array
};
export const updateCartQuantity = (productId : string|number , quantity:number) => {

 const cart : foodTypes[] = JSON.parse(localStorage.getItem('cart') || '[]' )
 const productIndex = cart.findIndex(item => item.id === productId)
 if(productIndex > -1){
  cart[productIndex].inventory = quantity
 }
 localStorage.setItem("cart", JSON.stringify(cart));

}
export const getCartItems = (): foodTypes[] => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  return Array.isArray(cart) ? cart : []; // Ensure it's always an array
};

