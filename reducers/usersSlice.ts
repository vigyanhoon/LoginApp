import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from './store'

interface UserDetail {

}

const initialState = {
  allUsers: []
}

const usersSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.allUsers = action.payload
    },
  }
})

export const getUsers = (name:string): AppThunk => async dispatch => {
  fetch('https://api.github.com/search/users?q=' + name)
      .then((response) => response.json())
      .then((json) => dispatch(setUsers(json.items)))
}

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer