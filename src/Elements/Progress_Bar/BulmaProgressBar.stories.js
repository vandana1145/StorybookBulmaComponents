import React from 'react';
import BulmaProgressBar from './BulmaProgressBar';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default{
    title: "Bulma-Elements/ProgressBar",
    component: BulmaProgressBar
}


export const DefaultProgressBar = () => <BulmaProgressBar>Default Progress Bar</BulmaProgressBar>
export const LinkProgressBar = () => <BulmaProgressBar variant="is-large">Linking Progress Bar</BulmaProgressBar>
export const InfoProgressBar = () => <BulmaProgressBar variant="is-info">Info Progress Bar</BulmaProgressBar>
export const WarningProgressBar = () => <BulmaProgressBar variant="is-warning">Warning Progress Bar</BulmaProgressBar>
export const DangerProgressBar = () => <BulmaProgressBar variant="is-danger">Danger Progress Bar</BulmaProgressBar>
