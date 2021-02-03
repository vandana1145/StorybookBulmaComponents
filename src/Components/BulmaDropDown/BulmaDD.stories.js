import React from 'react';
import BulmaDD from './BulmaDD';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default{
    title: 'Bulma_Components/Dropdown',
    component: BulmaDD
}

export const DefaultActiveDD = () => 
<BulmaDD variant="dropdown">
    <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
    </span>
</BulmaDD>