import React from 'react';
import BulmaButtonControl from './BulmaButtonControl';
import 'react-bulma-components/dist/react-bulma-components.min.css';

//Story Meta data
export default{
    title: 'Bulma-Elements/BulmaButtonControl',
    component: BulmaButtonControl,
    argTypes: {
        ButtonColor: { control: 'className' },
    }
};

/*export const Primary = () => <BulmaButtonControl variant="is-primary">Primary Button</BulmaButtonControl>
export const Info = () => <BulmaButtonControl variant="is-info">Info Button</BulmaButtonControl>
export const Warning = () => <BulmaButtonControl variant="is-warning is-medium">Warning Button</BulmaButtonControl>
export const Danger = () => <BulmaButtonControl variant="is-danger is-large">Danger Button</BulmaButtonControl>*/


// Stories using args : We create a "template" of how args map to rendering
const Template = (args) => <BulmaButtonControl {...args}/>

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    className: 'Primary',
   size: 'Large',
};

export const Secondary = Template.bind({});
Secondary.args = {
    className: 'Dark',
   size: 'Large',
};

