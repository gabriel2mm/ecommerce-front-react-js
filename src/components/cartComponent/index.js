import React from 'react';
import { Empty } from 'antd';
import { PlusOutlined, LineOutlined } from '@ant-design/icons';
import { useCartContext } from '../../context/productContext';
import "./styles.css";

const CartComponent = () => {
  const { products, addProduct, removeProduct } = useCartContext();

  function handleAddProduct(product){
    addProduct(product)
  }
  function handleRemoveProduct(product){
    removeProduct(product)
  }

  function currencyString(product){
    const value =product.quantidade * product.productManagement.product.price;
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  function renderProducts() {
    if (products && products.length > 0) {
      return products.map((p, index) =>
        (
          <tr key={index}>
            <td className="ant-table-row ant-table-row-level-0"><img className="img" src={`https://imagensshowcase.s3-sa-east-1.amazonaws.com/imagens/${p.image}`} alt={p.productManagement.product.name} /></td>
            <td className="ant-table-row ant-table-row-level-0 title">{p.productManagement.product.name}</td>
            <td className="ant-table-row ant-table-row-level-0 title">
              {p.productManagement.amount > 1 ? (<button className="aumentar" onClick={e => handleAddProduct(p)}><PlusOutlined/></button>) : (null)}
              <span>{p.quantidade}</span>
              <button className="remover" onClick={e => handleRemoveProduct(p)}><LineOutlined/></button>
            </td>
            <td className="ant-table-row ant-table-row-level-0 title">{currencyString(p)}</td>
          </tr>
        )
      )
    }

    return <tr><td className="ant-table-row ant-table-row-level-0" colSpan={4}><div className="mensagem"><Empty description="nenhum produto no carrinho :(" /></div></td></tr>
  }

  return (
    <>
      <table className="table">
        <thead className="ant-table-thead">
          <tr>
            <th>Imagem</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody className="ant-table-tbody">
           {renderProducts()}
        </tbody>
      </table>
    </>
  )
}

export default CartComponent;

