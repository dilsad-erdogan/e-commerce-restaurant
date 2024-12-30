import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item._id === newItem._id);
            if(itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.totalPrice;
            } else {
                state.products.push({
                    _id: newItem._id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }

            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },

        removeFromCart(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item._id === id);
            if(findItem) {
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity -= findItem.quantity;
                state.products = state.products.filter(item => item._id !== id);
            }
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item._id === id);
            if(findItem) {
                if(findItem.quantity > 1){
                    findItem.quantity -= 1;
                    state.totalPrice -= findItem.price;
                    state.totalQuantity -= 1;
                }
            }
        },
        
        increaseQuantity(state, action) {
            const id = action.payload;
            const findItem = state.products.find((item) => item._id === id);
            if(findItem) {
                findItem.quantity += 1;
                state.totalPrice += findItem.price;
                state.totalQuantity += 1;
            }
        },

        dropCart(state) {
            state.products = []
            state.totalPrice = 0
            state.totalQuantity = 0
        }
    },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, dropCart } = cartSlice.actions
export default cartSlice.reducer