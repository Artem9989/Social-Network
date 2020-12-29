import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./Profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, postMessage: 'Привет', likeCount: 12 },
                { id: 2, postMessage: 'Меня зовут Артем', likeCount: 22 },
                { id: 3, postMessage: 'Я люблю React', likeCount: 32 },
                { id: 4, postMessage: 'Я соскучилась', likeCount: 42 },
                { id: 5, postMessage: 'Мур' },
                { id: 6, postMessage: 'Гав гав' }],
            newPostText: 'kamasutra.com'
        },
        dialogsPage: {
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
            newDialogMessageText: 'Test',
            dialogs: [
                { id: 1, name: 'Дима' },
                { id: 2, name: 'Вика' },
                { id: 3, name: 'Алексей' },
                { id: 4, name: 'Вася' },
                { id: 5, name: 'Саша' },
                { id: 6, name: 'Маша' },]
        },
        siteBarPage: {
            friendsNav: [
                { id: 1, friendName: 'Влад' },
                { id: 2, friendName: 'Саня' },
                { id: 3, friendName: 'Вика' },
                { id: 4, friendName: 'Паша' },
                { id: 5, friendName: 'Гоша' },
                { id: 6, friendName: 'Артур' },]

        },
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addMessage() {
        let newDialogMessage = {
            id: 88,
            MyMessage: this._state.dialogsPage.newDialogMessageText,
        };
        this._state.dialogsPage.MyMessages.push(newDialogMessage);
        this._state.dialogsPage.newDialogMessageText = '';
        this._callSubscriber(this._state);
    },
    updatenewDialogMessageText(NewDialogText) {
        this._state.dialogsPage.newDialogMessageText = NewDialogText;
        this._callSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 5,
            postMessage: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) { //{type: 'ADD-POST'}
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);

            this._callSubscriber(this._state);
       
    }
    


}



export default store;
window.store = store;
//store - OOP