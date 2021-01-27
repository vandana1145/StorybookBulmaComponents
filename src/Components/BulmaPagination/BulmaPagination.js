import React from 'react';

const BulmaPage = (props) => {
    const {variant = "pagination", children, className, ...rest} = props
    return (
        <div>
      <pagination
        {...props()}
        pageSizes={[
          { text: 'Ten', value: 10 },
          { text: 'Twenty', value: 20 },
          { text: 'Thirty', value: 30 },
          { text: 'Fourty', value: 40 },
          { text: 'Fifty', value: 50 },
        ]}
      />
    </div>
    );
}

export default BulmaPage;