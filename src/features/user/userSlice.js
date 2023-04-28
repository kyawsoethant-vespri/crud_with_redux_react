import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updateUser = state.find((users) => users.id === id);
      if (updateUser) {
        updateUser.name = name;
        updateUser.email = email;
      } else {
        return state;
      }
    },
    deleteUsers: (state,action) => {
      const {id} = action.payload
      const deleteUser = state.find((users) => users.id === id )

      if(deleteUser){
        return state.filter(delUsers => delUsers.id !== id)
      }
    }
  },
});

export const { addUser, updateUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer;
