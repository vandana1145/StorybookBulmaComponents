import React from 'react';
import BulmaBC from './BulmaBC';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default {
    title: 'Bulma-Components/Breadcrumb',
    component: BulmaBC
}

export const BasicBC = () => <BulmaBC></BulmaBC>
export const LargeBC = () => <BulmaBC variant="is-large"></BulmaBC>
export const MediumBC = () => <BulmaBC variant="is-medium"></BulmaBC>
export const SmallBC = () => <BulmaBC variant="is-small"></BulmaBC>
export const DotSeparatorBC = () => <BulmaBC variant="has-dot-separator"></BulmaBC>
export const SucceedSeparatorBC = () => <BulmaBC variant="has-succeeds-separator"></BulmaBC>
export const ArrowSEparatorBC = () => <BulmaBC variant="has-arrow-separator"></BulmaBC>
export const CenteredBC = () => <BulmaBC variant="is-centered"></BulmaBC>
export const RightBC = () => <BulmaBC variant="is-right"></BulmaBC>