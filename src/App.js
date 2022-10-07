
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

      constructor(){
        super();
        this.state={
            products:[
                {
                        title: 'Mobile Phone',
                        price: 9999,
                        qty: 0,
                        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                        id:1
                },
                {
                        title: 'Tablet',
                        price: 11999,
                        qty: 0,
                        img: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        id:2
                },
                {
                        title: 'Laptop',
                        price: 59999,
                        qty: 0,
                        img: 'https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        id:3
                }
            ]
        }
      }


      increaseQty = (product)=>{
        
        const {products} =this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products
        })
      }

      decreaseQty=(product)=>{
        const {products} =this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
            this.setState({
                products
            })
      }

      deleteProduct=(id)=>{
            const {products} = this.state;
            const items = products.filter((item)=>item.id!==id)

            this.setState({
                products:items
            })
      }

      getCartTotal = ()=>{
        const {products} = this.state;
        let count=0;
        products.forEach((item)=>{
          count+=item.qty;
        })
        return count;
      }

      getTotalBill = ()=>{
        const {products} = this.state;
        let total=0;
        products.forEach((product)=>{
          total = total+product.qty*product.price;
        })
        return total;
      }



  render() {
    const {products} = this.state; 
  return (
   <div className='App'>
        <Navbar count = {this.getCartTotal()}/>
        <Cart
          products = {products}
          increaseQty ={this.increaseQty}
          decreaseQty ={this.decreaseQty}
          deleteProduct = {this.deleteProduct}
        />
        <div style={{marginLeft:20, padding:10, fontSize:20}}>
          Total: {this.getTotalBill()}
        </div>
    </div>
  );
}
}

export default App;
