
import React from 'react';
import BulmaButton from './BulmaButton';
import 'react-bulma-components/dist/react-bulma-components.min.css';

//component strory format

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Bulma/Button",
    component: BulmaButton 
}

export const Dark = () => <button variant="button is-dark">Dark</button>
export const White = () => <button variant="button is-white">White</button>
export const Text= () => <button variant="button is-text">Text</button>
export const Ghost = () => <button variant="button is-ghost">Ghost</button>