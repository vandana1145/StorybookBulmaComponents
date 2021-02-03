import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import ControlledButton from './Button';

export default{
    title: 'Bulma-Elements/Button',
    component: Button,
}

export const defaultButton = () => (
    <Button text=”Default Button” onClick={() => {}} />
);

export const largeButton = () => (
    <Button text="Large Button" onClick={() => {}} size="large" />
);
export const outlineSmallButton = () => (
    <Button
        text="Outline Small Button"
        onClick={() => {}}
        size="small"
        type="outline"
    />
);
export const rectangularLargeButton = () => (
    <Button
        text="Rectangular Large Button"
        onClick={() => {}}
        size="large"
        variant="rectangular"
    />
);


export const disabledButton = () => (
    <Button text="Disabled Button" onClick={() => {}} isDisabled={true} />
);


export const warningButton = () => (
    <Button
        text="Warning Button"
        onClick={() => {}}
        backgroundColor="orange"
    />
);