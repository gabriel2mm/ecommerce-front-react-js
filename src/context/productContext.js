import React, { useState, useContext, createContext, useEffect } from 'react';

const CartContext = createContext({products : [], addProduct: null, removeProduct: null});
export const CartContextProvider = ({children}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
  }, []);

  function addProduct(product) {
    if(products.filter(p => p.id === product.id).length > 0){
      products.map( p=> {
        if(p.id === product.id){
          if(p.quantidade + 1 <= product.productManagement.amount){
            p.quantidade = p.quantidade + 1;
          }
        }
        setProducts([...products]);
        return p;
      })
    }else{
      setProducts([...products, product]);
    }
  }

  function removeProduct(product ){
    if(products.filter(p => p.id === product.id).length > 0){
      if(product.quantidade > 1){
        products.map( p => {
            p.quantidade = p.quantidade - 1;
            return p;
        });
        setProducts([...products]);
      }else{
        setProducts(products.filter(p => p.id !== product.id));
      }
    }
  }

  return (
    <CartContext.Provider value={{products, addProduct, removeProduct}}>
     {children}
    </CartContext.Provider>
  )
}

export function useCartContext (){
  const context = useContext(CartContext);

  return context;
}