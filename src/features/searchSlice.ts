import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
const API_KEY = import.meta.env.VITE_API_KEY

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (query : any,thunkAPI) => {
       try {
        console.log(query)
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log(data);
        return data;
       } catch(e) {
        if (e instanceof Error) {
            return thunkAPI.rejectWithValue(e.message); // Safely access `message`
          }
          return thunkAPI.rejectWithValue('An unknown error occurred'); // Fallback for non-Error types
       }
          
            
        
    }
)
const initialState = <{
    query:string,
    results:[],
    isLoading:boolean,
    error:null | unknown,
}>  {
    query:'',
    results:[],
    isLoading:false,
    error:null,
}
const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers: {
        setQuery(state,action) {
            state.query = action.payload
        },
        clearResults(state) {
            state.results = [];
            state.error = null;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchSearchResults.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchSearchResults.fulfilled,(state,action) => {
            state.isLoading = false;
            state.error = null;
            state.results = action.payload.results;
            console.log(state.results);
        });
        builder.addCase(fetchSearchResults.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})
export const getResult = (state:RootState) : any[] => {
    return state.search.results;
}
export const {setQuery,clearResults} = searchSlice.actions;
export default searchSlice.reducer;
