
const initialState = {

    userDetailsIs: [
        {
            id: 1,
            name: 'ABC',
            designation: 'TL',
            skills: 'React Js, NodeJs  JS'
        },
        {
            id: 2,
            name: 'SDF',
            designation: 'SE',
            skills: 'React Js, NodeJs angular JS'
        },
        {
            id: 3,
            name: 'XVZ',
            designation: 'ASE',
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



        //    const userDetailsIs = update(userDetailsIs, {
        //     [action.payload.index]:{
        //         $set: [action.payload.save_editData]
        //     }
        // });


        // userDetailsIs: state.userDetailsIs.splice(action.payload.index, action.payload.save_editData)

        // userDetailsIs: ( () => {
        //      state.userDetailsIs.splice(action.payload.index, 1, action.payload.save_editData);
        //      console.log(state.userDetailsIs);
        //     return state.userDetailsIs;
        // })()


    }

}

export default rootReducer;