import React from 'react';
import BulmaIcon from './BulmaIcon';
import { FaApple } from 'react-icons/fa';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default{
    title: 'Bulma-Elements/Icons',
    component: BulmaIcon
}


export const DefaultIcon = () => <BulmaIcon></BulmaIcon>
export const IconWithText = () => <BulmaIcon text="Test" size="large"></BulmaIcon>
export const InfoIcon = () => <BulmaIcon variant="has-text-info">{<FaApple/>}</BulmaIcon>
export const DangerIcon = () => <BulmaIcon variant="has-text-danger"></BulmaIcon>
export const WarningIcon = () => <BulmaIcon variant="has-text-warning"></BulmaIcon>
export const MediumIcon = () => <BulmaIcon variant="is-medium"></BulmaIcon>
export const LargeIcon = () => <BulmaIcon variant="is-large"></BulmaIcon>