import React from "react";

import { connect } from 'react-redux';
import './Product.css'

class ViewProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products
        }
    }
    handleChange = (event) => {

        let { products } = this.props;
        products = products.filter(product => product['Name'].toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        this.setState({products:products})

    }

    render() {
        return (<div>
            <h3>PRODUCTS</h3>
            <div><input type="text" onChange={this.handleChange} placeholder="type to search based on name" /></div>
            <div className="products">
                {
                    this.state.products.map((product) => {
                        return <div key={product.id} className="productBox">
                            {
                                Object.keys(product).map((pKey) => {
                                    if (pKey !== "id") {
                                        return <React.Fragment key={product.id + pKey}>
                                            <label>
                                                {pKey}
                                            </label>
                                            <div>
                                                {product[pKey]}
                                            </div>
                                        </React.Fragment>
                                    } else {
                                        return null
                                    }
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>)
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.productData.products
    }
}

export default connect(mapStateToProps, null)(ViewProducts);