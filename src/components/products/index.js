import React from "react";

import { connect } from 'react-redux';
import './Product.css'

const ViewProducts = (props) =>
    (<div>
        <h3>PRODUCTS</h3>
        <div className="products">
            {
                props.products.map((product) => {
                    return <div className="productBox">
                        {
                            Object.keys(product).map((pKey) => {
                                return <React.Fragment>
                                    <label>
                                        {pKey}
                                    </label>
                                    <div>
                                        {product[pKey]}
                                    </div>
                                </React.Fragment>
                            })
                        }
                    </div>
                })
            }
        </div>
    </div>)


const mapStateToProps = (state) => {
    return {
        products: state.productData.products
    }
}

export default connect(mapStateToProps, null)(ViewProducts);