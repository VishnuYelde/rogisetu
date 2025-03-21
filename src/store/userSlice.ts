import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    id: string | undefined;
    name: string | null;
    email: string | null | undefined;
    role: string | null;
}

const initialState: UserState = {
    id: undefined,
    name: null,
    email: null,
    role: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
        },
        clearUser: (state) => {
            state.id = undefined;
            state.name = null;
            state.email = null;
            state.role = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
