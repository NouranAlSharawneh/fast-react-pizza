import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding.js';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// thunk is a midlware
// action creator , the second argument is a function which is the thunk
export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  //The payload
  return { position, address };
});

const initialState = {
  userName: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address. Please try again later.';
      });
  },
});

export const { updateUserName } = userSlices.actions;
export default userSlices.reducer;
