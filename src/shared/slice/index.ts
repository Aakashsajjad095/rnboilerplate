import {
    createSlice
} from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        loading: false,
        firebaseToken: null,
        logout: false
    },
    reducers: {
        ChangeLoading: (state, action) => {
            state.loading = action.payload;
        },
        setFirebaseTOken: (state, action) => {
            state.firebaseToken = action.payload;
        },
        setLogout: (state, action) => {
            state.logout = true;
        }
    },
    extraReducers: {
       
    },
});

export const { ChangeLoading, setFirebaseTOken, setLogout } = sharedSlice.actions;

export default sharedSlice.reducer;
