import React from 'react';

const BulmaBC = (props) => {
    const {variant="breadcrumb", className, separator, align, ...rest} = props
    return(
        <nav className={`breadcrumb ${variant}`} {...rest}>
            <ul>
                <li><a href="#">Bulma</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Components</a></li>
            </ul>
        </nav>
    );
}

export default BulmaBC;


/*<Breadcrumb className={`breadcrumb ${variant}`} {...rest}>
            <BreadcrumbItem><a href="/#">Breadcrumb 1</a></BreadcrumbItem>
            <BreadcrumbItem><a href="/#">Breadcrumb 2</a></BreadcrumbItem>
            <BreadcrumbItem><a href="/#">Breadcrumb 3</a></BreadcrumbItem>
</Breadcrumb> */