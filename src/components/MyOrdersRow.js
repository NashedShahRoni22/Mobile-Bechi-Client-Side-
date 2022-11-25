import React from 'react';

const MyOrdersRow = ({mb}) => {
    return (
        <tr key={mb._id}>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12">
                      <img
                        src={mb.productImage}
                        alt="ProductImage"
                      />
                    </div>
                  </div>
                </td>
                <td>{mb.productName}</td>
                <td>{mb.productPrice}</td>
                <td>
                  <button className="btn btn-outline btn-error btn-xs">
                    Delete
                  </button>
                  <button className="btn btn-outline btn-success btn-xs ml-5">
                    Pay Now
                  </button>
                </td>
              </tr>
    );
};

export default MyOrdersRow;