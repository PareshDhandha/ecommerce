import { createSlice } from "@reduxjs/toolkit";


const ProfileSlice = createSlice({
    name: 'profile',
    initialState: [],
    reducers: {
        addCameraPicture(state: any, action: any) {
            state.push(action.payload);
        },
        addImagePicture(state: any, action: any) {
            state.push(action.payload);
        }
    }
});

export const { addCameraPicture, addImagePicture } = ProfileSlice.actions;
export default ProfileSlice.reducer; 