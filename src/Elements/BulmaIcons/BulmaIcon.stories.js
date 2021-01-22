import React from 'react';
import BulmaIcon from './BulmaIcon';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default{
    title: 'Bulma-Elements/Icons',
    component: BulmaIcon
}


export const DefaultIcon = () => <BulmaIcon></BulmaIcon>
export const TextIcon = () => <BulmaIcon variant="icon-text has-text-info icon fas fa-info-circle">Info</BulmaIcon>