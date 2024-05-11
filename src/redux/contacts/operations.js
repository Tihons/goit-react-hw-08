import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/contacts');
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContacts = createAsyncThunk('contacts/addTask', async (text, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', text);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteTask',
  async (contactskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

