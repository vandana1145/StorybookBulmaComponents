import React from 'react';
import BulmaTags from './BulmaTags';
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default{
    title: 'Bulma-Elements/Tags',
    component: BulmaTags
}


export const DefaultTag = () => <BulmaTags>This is default Tag</BulmaTags>
export const MediumDarkTag = () => <BulmaTags variant="is-dark is-medium">Tag is dark and medium size</BulmaTags>
export const PrimaryTag = () => <BulmaTags variant="is-primary">Tag is primary</BulmaTags>
export const LargeWarningTag = () => <BulmaTags variant="is-warning is-large">Large Warning Tag</BulmaTags>
export const NormalDangerTag = () => <BulmaTags variant="is-danger is-normal">Normal Danger Tag</BulmaTags>

