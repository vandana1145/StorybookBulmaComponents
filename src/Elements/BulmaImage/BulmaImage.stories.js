import React from 'react';
import BulmaImage from './BulmaImage';
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default{
    title: 'Bulma-Elements/Images',
    components: BulmaImage
}

export const RetinaImage = () => <BulmaImage>This is a (default) retina image. Size is reduced from 540x540 to 128x128.</BulmaImage>
export const ReducedSizeImage = () => <BulmaImage variant="is-32x32">This image is reduced to 32x32</BulmaImage>
export const OneByOneImage = () => <BulmaImage variant="image is-1by1">This image is 1by1</BulmaImage>