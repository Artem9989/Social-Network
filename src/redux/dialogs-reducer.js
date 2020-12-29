const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
    messages: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как ты?' },
        { id: 3, message: 'Давно не виделись' },
        { id: 4, message: 'Я соскучилась' },
        { id: 5, message: 'Гав гав' },],
    MyMessages: [
        { id: 1, MyMessage: 'Привет, я артем' },
        { id: 2, MyMessage: 'Как зовут тебя?' },
        { id: 3, MyMessage: 'Гав гав' },],
    dialogs: [
        { id: 1, name: 'Дима' },
        { id: 2, name: 'Вика' },
        { id: 3, name: 'Алексей' },
        { id: 4, name: 'Вася' },
        { id: 5, name: 'Саша' },
        { id: 6, name: 'Маша' },]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case UPDATE_NEW_DIALOG_MESSAGE_TEXT:{
        //     let stateCopy = {
        //         messages: [...state,messages],
        //         ...state
        //     };
        //   return {...state,
        //         newDialogMessageText: action.NewDialogText
        //     };
        //     stateCopy.newDialogMessageText = action.NewDialogText;
        
        // }
        case SEND_MESSAGE:{
            let NewDialogText = action.newDialogMessageText;
            return {
                ...state,    
                MyMessages: [...state.MyMessages, { id: 88, MyMessage: NewDialogText}],  
            };
           // stateCopy.messages = [...state.messages];
           // stateCopy.MyMessages = [...state.MyMessages];
           // stateCopy.dialogs = [...state.dialogs];
           // stateCopy.MyMessages.push(newDialogMessage);
          //  stateCopy.newDialogMessageText = '';
            
        }
        default:
            return state;
    }
}


export const sendMessageCreator = (newDialogMessageText) => ({type: SEND_MESSAGE, newDialogMessageText})

export default dialogsReducer;