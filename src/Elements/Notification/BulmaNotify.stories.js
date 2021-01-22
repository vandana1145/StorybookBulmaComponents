import React from 'react';
import BulmaNotify from './BulmaNotify';
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default {
    title: "Bulma-Elements/Notification",
    component: BulmaNotify
}


export const PrimaryNotice = () => <BulmaNotify variant="is-primary">Primary Notice</BulmaNotify>
export const LinkingNotice = () => <BulmaNotify variant="is-link">Link Notice</BulmaNotify>
export const WarningNotice = () => <BulmaNotify variant="is-warning">Warning Notice</BulmaNotify>
export const DangerNotice = () => <BulmaNotify variant="is-danger">Danger Notice</BulmaNotify>
export const DefaultNotice = () => <BulmaNotify>Default Success Notice</BulmaNotify>