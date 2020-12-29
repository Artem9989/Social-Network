import profileReducer, { addPostActionCreator, deletePost } from './Profile-reducer'

let state = {
    posts: [
        { id: 1, postMessage: 'Привет', likeCount: 12 },
        { id: 2, postMessage: 'Меня зовут Артем', likeCount: 22 },
        { id: 3, postMessage: 'Я люблю React', likeCount: 32 },
        { id: 4, postMessage: 'Я соскучилась', likeCount: 42 },
        { id: 5, postMessage: 'Мур' },
        { id: 6, postMessage: 'Гав гав' }]
};

it ('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Новый пост");
    // 2. action

    let newState = profileReducer (state,action);
    //expectation
    expect( newState.posts.length).toBe(7);
});

it ('Новый пост = Новому посту', () => {
    // 1. test data
    let action = addPostActionCreator("123");
    // 2. action

    let newState = profileReducer (state,action);
    //expectation
    expect(newState.posts[6].postMessage).toBe("123");
});

it ('Длина массива после удаления должна уменьшится', () => {
    // 1. test data
    let action = deletePost(5);
    // 2. action

    let newState = profileReducer (state,action);
    //expectation
    expect(newState.posts.length).toBe(5);
});

it ('Если передали не корректный id', () => {
    // 1. test data
    let action = deletePost(888);
    // 2. action

    let newState = profileReducer (state,action);
    //expectation
    expect(newState.posts.length).toBe(6);
});

  // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);