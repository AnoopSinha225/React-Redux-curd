
const initialState = {

    userDetailsIs: [
        {
            id: 1,
            name: 'John Wick',
            designation: 'Technical Engineer',
            skills: 'React Js, NodeJs'
        },
        {
            id: 2,
            name: 'Andrew Will',
            designation: 'Software Engineer',
            skills: ' NodeJs angular JS'
        },
        {
            id: 3,
            name: 'Mike Willson',
            designation: 'Associate S.Engineer',
            skills: 'React Js, angular JS'
        },
    ]
}

const rootReducer = (state = initialState, action) => {

    // console.log(action);
    // console.log(initialState);

    switch (action.type) {
        case 'ADD_USER_DETAILS':
            return {
                userDetailsIs: state.userDetailsIs.concat({ id: Math.round(Math.random() * 100), ...action.payload.userDetails })
            }


        case "Del_Item":
            return {
                userDetailsIs: state.userDetailsIs.filter(e => e.id !== action.key)
            }


        case "Edit_USER_DETAILS":

            let updateUser = [...state.userDetailsIs];
            updateUser.splice(action.payload.index, 1, action.payload.save_editData);

            return {
                ...state,
                userDetailsIs: updateUser
            }

        default:
            return initialState;
    }

}

export default rootReducer;