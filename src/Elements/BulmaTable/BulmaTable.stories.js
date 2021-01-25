import React from 'react';
import BulmaTable from './BulmaTable';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default{
    title: 'Bulma-Elements/Table',
    component: BulmaTable
}


export const defaultTable = () => <BulmaTable>A new dafault table</BulmaTable>
export const borderedTable = () => <BulmaTable variant="is-bordered">A new dafault table</BulmaTable>
export const stripedTable = () => <BulmaTable variant="is-striped">A new dafault table</BulmaTable>
export const narrowTable = () => <BulmaTable variant="is-narrow">A new dafault table</BulmaTable>
export const hoverableTable = () => <BulmaTable variant="is-hoverable">A new dafault table</BulmaTable>
export const fullwidthTable = () => <BulmaTable variant="is-fullwidth">A new dafault table</BulmaTable>
export const newTable = () => <BulmaTable variant="is-ordered is-striped is-narrow is-hoverable is-fullwidth">A new dafault table</BulmaTable>

