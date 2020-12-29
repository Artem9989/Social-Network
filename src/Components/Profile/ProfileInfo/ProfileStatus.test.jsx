import React from 'react';
import ProfileStatus from './ProfileStatus';
import { create } from 'react-test-renderer';

// it ('length of posts should be incremented', () => {
//     // 1. test data
//     let action = addPostActionCreator("Новый пост");
//     // 2. action

//     let newState = profileReducer (state,action);
//     //expectation
//     expect( newState.posts.length).toBe(7);
// });
describe("ProfileStatus Component", () => {
    test('status from props should', () => {
        // 1. test data
        const component = create(<ProfileStatus status="Привет" />);
        // 2. action

        let instance = component.getInstance();
        //expectation
        expect(instance.state.status).toBe("Привет");
    });

    test('<span> should display with correct status', () => {
        // 1. test data
        const component = create(<ProfileStatus status="Привет" />);
        // 2. action

        let root = component.root;
        let span = root.findByType("span");
        //expectation
        expect(span).not.toBeNull();
    });

    test('Не должно быть инпута', () => {
        // 1. test data
        const component = create(<ProfileStatus status="Привет" />);
        // 2. action

        let root = component.root;

        //expectation
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test('Режим редактирования', () => {
        // 1. test data
        const component = create(<ProfileStatus status="Привет" />);
        // 2. action

        let root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        //expectation
        expect(input.props.value).toBe("Привет");
    });
    test('callback should be called', () => {
        // 1. test data
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Привет" updateStatus = {mockCallback} />);
        // 2. action
        const instance = component.getInstance();
        instance.deactivatedEditMode();
        //expectation
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});


