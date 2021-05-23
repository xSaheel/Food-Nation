const initialState = {        // alias as filters
    isVegOnly: false,
    isNonVegOnly: false
};

const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NON_VEG_ONLY':
            return !state;   
        case 'VEG_ONLY':
            return !state;
        default: 
            return state;
    }
}

export default filtersReducer;