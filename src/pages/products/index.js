import React from "react";
import { getAllProducts } from '../../actions'
import { connect } from 'react-redux';
import './Product.css'
import { DisplayData } from '../../helpers/displayData';

class ViewProducts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
   
    handleChange = (event) => {

        let { products } = this.props;
        products = products.filter(product => product['Name'].toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        this.setState({ products: products })

    }
    componentDidMount(){
        this.props.getAllProducts()
    }

    render() {
        if (!this.props.products || (this.props.products && this.props.products.length === 0)) {
            return <div>Loading...</div>
        }
        let {products}=this.state.products.length>0?this.state:this.props
        return (<div>
            <h3>PRODUCTS</h3>
            <div><input type="text" onChange={this.handleChange} placeholder="type to search based on name" /></div>
            <div className="products">
                {
                    products.map((product) => {
                        return <div key={product.id} className="productBox">
                            {
                                Object.keys(product).map((pKey) => {
                                    if (pKey !== "id") {
                                       
                                           return <DisplayData label={pKey} key={product.id + pKey} value={product[pKey]} />
                                      
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
const mapDispatchToProps = {
    getAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);