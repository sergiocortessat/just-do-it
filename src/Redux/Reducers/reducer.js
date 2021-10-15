// create product reducer for redux
const initialState = {
    products: [],
    totalSum: 0,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: [...state.products,action.payload],
                totalSum: state.totalSum + action.payload.price
            };
     

        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id),
                totalSum: state.totalSum - action.payload.price
            };
        default:
            return state;
        }
}