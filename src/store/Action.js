export const saveUserDetails = userDetails => {
    return {
       type: 'ADD_USER_DETAILS',
       payload: {userDetails}
    }; 
   }

   export const save_edit_data = (save_editData, index) => {
    console.log(save_editData,index)
    return {
       type: 'Edit_USER_DETAILS',
       payload: {save_editData, index}
       
    }; 
   }