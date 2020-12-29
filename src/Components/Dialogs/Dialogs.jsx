import React from 'react';
import DialogsCSS from './Dialogs.module.css';
//import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../Common/FormsControls/FormsControls'
import {minLengthCreator, maxLengthCreator , required} from '../../redux/utils/validators/Validators'
//import { updateNewDialogMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let MyMessagesElements = state.MyMessages.map(MyMessage => <Message MyMessage={MyMessage.MyMessage} key={MyMessage.id} id={MyMessage.id} />);
    //const newDialogMessageText = state.newDialogMessageText;

    // let onSendMessageChange = (e) => {
    //     let text = e.target.value;
    //     props.updateNewDialogMessageText(text);

    // }
    let addNewMessage = (values) => {
        props.sendMessage(values.newDialogMessageText);
    }



    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} id={message.id} />);
    return (
        <div className={DialogsCSS.dialogs}>
            <div className={DialogsCSS.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={DialogsCSS.messages}>
                {messagesElements}
                {MyMessagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const minLength1 = minLengthCreator(1);
const maxLength15 = maxLengthCreator(15);

const addMessageForm = (props) => {

    return(
    <form onSubmit = {props.handleSubmit}>
        <Field component={Textarea} validate ={[required, minLength1, maxLength15 ]} name={"newDialogMessageText"} className={DialogsCSS.NewMessage} Placeholder='Введите ваше сообщение' />
        <div> <button>Отправить сообщение</button> </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(addMessageForm);

export default Dialogs;