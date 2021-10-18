export const updateProduct = (product) => ({
  type: 'GET_PRODUCTS',
  payload: product,
});

export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    payload: id,
  });

export const dark =(condition) => ({
  type: 'DARK-MODE',
  payload: condition
});



