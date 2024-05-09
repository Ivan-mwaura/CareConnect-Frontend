import {configureStore, createStore, combineReducers} from 'redux'

//Define the initial state of the store
const initialState = {
    adminRouteDisplay: 'adminpage',
}


//define your action creators

export const setAdminRouteDisplay = (option) => {
    return {
        type: 'SET_ADMIN_ROUTE_DISPLAY',
        payload: option,
    };
};


//Define your reducers

const adminRouteDisplayReducer = (state = initialState.adminRouteDisplay, action) => {
    switch (action.type) {
        case 'SET_ADMIN_ROUTE_DISPLAY':
            return action.payload;
        default:
            return state;
    }
};

//combine all reducers

const rootReducer = combineReducers({
    adminRouteDisplay: adminRouteDisplayReducer,
});

//create the redux store

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

export default store;