import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./pages/dashboard/slice";
import landingSlice from './pages/landing/slice'
import footerSlice from './components/Footer/slice'
import headerSlice from './components/Header/slice'
import notfoundSlice from './pages/notfound/slice'


export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    landing:landingSlice,
    footer:footerSlice,
    header:headerSlice,
    notfound:notfoundSlice,
    


  },
  
});
