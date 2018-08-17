import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

export default class ProductContainer extends Component {
  // componentDidMount() {
  //   this.props.fetchProducts()
  // }

  render() {
    const productList = [{
		"productURL": "https://groceries.asda.com:443/api/items/view?itemid=910000374507",
		"id": "910000374507",
		"extraLargeImageURL": "https://ui1.assets-asda.com:443/g/v5/981/313/5051413981313_280_IDShot_3.jpeg",
		"name": "ASDA Grower's Selection Satsumas",
		"price": "£1.00",
		"imageURL": "https://ui2.assets-asda.com:443/g/v5/981/313/5051413981313_130_IDShot_4.jpeg"
	}, {
		"productURL": "https://groceries.asda.com:443/api/items/view?itemid=1121465",
		"id": "1121465",
		"extraLargeImageURL": "https://ui1.assets-asda.com:443/g/v5/677/308/5051413677308_280_IDShot_3.jpeg",
		"name": "ASDA Grower's Selection Ripen at Home Kiwi Fruit",
		"price": "£0.75",
		"imageURL": "https://ui2.assets-asda.com:443/g/v5/677/308/5051413677308_130_IDShot_4.jpeg"
	}, {
		"productURL": "https://groceries.asda.com:443/api/items/view?itemid=910000911005",
		"id": "910000911005",
		"extraLargeImageURL": "https://ui3.assets-asda.com:443/g/v5/013/823/5054070013823_280_IDShot_3.jpeg",
		"name": "ASDA Chosen by Kids Pears",
		"price": "£1.00",
		"imageURL": "https://ui2.assets-asda.com:443/g/v5/013/823/5054070013823_130_IDShot_4.jpeg"
	}, {
		"productURL": "https://groceries.asda.com:443/api/items/view?itemid=910001181511",
		"id": "910001181511",
		"extraLargeImageURL": "https://ui1.assets-asda.com:443/g/v5/013/755/5054070013755_280_IDShot_3.jpeg",
		"name": "ASDA Chosen By Kids Easy Peasy Peelers",
		"price": "£1.00",
		"imageURL": "https://ui2.assets-asda.com:443/g/v5/013/755/5054070013755_130_IDShot_4.jpeg"
	}, {
		"productURL": "https://groceries.asda.com:443/api/items/view?itemid=910000911861",
		"id": "910000911861",
		"extraLargeImageURL": "https://ui3.assets-asda.com:443/g/v5/013/762/5054070013762_280_IDShot_3.jpeg",
		"name": "ASDA Chosen by Kids Apples",
		"price": "£0.95",
		"imageURL": "https://ui2.assets-asda.com:443/g/v5/013/762/5054070013762_130_IDShot_4.jpeg"
}
]
    return (
      <div>
      {productList.length &&
        <ProductDetailsComponent data={productList} />
      }
      </div>
    )
  }
}

class ProductDetailsComponent extends Component {
  state = {
    productInBasket: []
  }

  findProduct = (productId) => {
    return this.state.productInBasket.findIndex(productList => productList.id === productId)
  }
  productAdded = (id, flag) => {
    let indexInBasket = this.findProduct(id);
    const productInBasket = this.state.productInBasket;
    if (indexInBasket < 0) {
      const productObj = {
        id: id,
        //total: 1
      }
      productInBasket.push(productObj)
    } else {
      // flag ? productInBasket[indexInBasket].total++ : productInBasket[indexInBasket].total--
      //productInBasket[indexInBasket].total++
    }
    this.setState({productInBasket: productInBasket})
  }
  createProductComp = () => {
    return this.props.data.map( (product, index) => {
      return (
        <IndividualProductComp
          key={index}
          productData={product}
          productAdded = {this.productAdded}
          addedItemList = {this.state.productInBasket}
        />
      )
    })
  }
  render() {
    return(
      <div className='productListings'>
        {this.createProductComp()}
      </div>
    )
  }
}

class IndividualProductComp extends Component {
  addToBasket = () => {
    this.props.productAdded(this.props.productData.id);
  }
  isInBasket = () => {
    //`In Basket(${this.props.addedItemList[productIndex].total})`
    const productIndex = this.props.addedItemList.findIndex(addedItem => addedItem.id === this.props.productData.id)
    return productIndex < 0 ? 'Add' : 'In Basket'
  }
  render () {
    const {productName, id, price, imageURL} = this.props.productData;
    return(
      <div className='individualProduct'>
        <div>
          <img src={imageURL}></img>
        </div>
        <div className="prdName">{productName}</div>
        <div>{price}</div>
        <button onClick={this.addToBasket} className="addBtn">{this.isInBasket()}</button>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.products
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchProducts: fetchProducts
//   }, dispatch)
// }

//export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
