import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductSection from '../components/section/Section';
import ProductList from '../components/product-list/ProductList';
import CustomerForm from '../components/customer-form/CustomerForm';

export default function ProductPage() {
  const history = useHistory();
  const handleSubmit = value => {
    if (!value.name || !value.email || !value.gender ) {
      return;
    }
    history.push({
      pathname: '/checkout',
      state: { name: value.name }
    });
  }
  return (
    <div>
      <ProductSection
        title="Produtos"
        type="h1">
        <ProductList />
      </ProductSection>
      <ProductSection
        title="Dados do Cliente"
        type="h2">
        <CustomerForm
          onSubmit={handleSubmit} />
      </ProductSection>
    </div>
  );
}