const contactReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return action.payload;
        default:
            return state;
    }
};

export default contactReducer;