let initialState = {
    friendsNav: [
        { id: 1, friendName: 'Влад' },
        { id: 2, friendName: 'Саня' },
        { id: 3, friendName: 'Вика' },
        { id: 4, friendName: 'Паша' },
        { id: 5, friendName: 'Гоша' },
        { id: 6, friendName: 'Артур' },]

};

const siteBarReducer = (state = initialState, action) => {
    return state;
}

export default siteBarReducer;