import React from 'react';
import BulmaBox from './BulmaBox';
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default {
    title: "Bulma-Elements/Box",
    component: BulmaBox
}

export const DefaultBox = () => <BulmaBox>Default Bulma Box</BulmaBox>
//export const BoxOne = () => <BulmaBox variant="box-background-color">Bulma Box One</BulmaBox>
//export const BoxTwo = () => <BulmaBox variant="box-color">Bulma Box Two</BulmaBox>
//export const BoxThree = () => <BulmaBox variant="box-shadow">Bulma Box Three</BulmaBox>