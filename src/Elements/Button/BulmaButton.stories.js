
import React from 'react';
import BulmaButton from './BulmaButton';
import 'react-bulma-components/dist/react-bulma-components.min.css';

//component strory format

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Bulma-Elements/Button",
    component: BulmaButton, 
};

export const Dark = () => <BulmaButton variant="is-dark">Dark</BulmaButton>
export const Danger = () => <BulmaButton variant="is-danger is-large">Danger</BulmaButton>
export const Success= () => <BulmaButton variant="is-success">Success</BulmaButton>
export const Info = () => <BulmaButton variant="is-info is-outlined is-rounded is-large">Info</BulmaButton>