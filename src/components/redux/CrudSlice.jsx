import { createSlice } from "@reduxjs/toolkit";

const CrudSlice = createSlice({
    name: "CRUD",
    initialState: [],
    reducers: {
        addUser(state, action) {
            return [...state, action.payload];
        },
        deleteUser(state, action) {
            state.splice(action.payload, 1);
        },
        editUser(state, action) {
            const { id } = action.payload;
            state[id] = action.payload;
        },
    },
});

export const { addUser, deleteUser, editUser } = CrudSlice.actions;
export default CrudSlice.reducer;
