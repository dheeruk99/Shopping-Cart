
import React  from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

   constructor(){
    super();
    this.state={
        products:[
            {
                    title: 'Mobile Phone',
                    price: 9999,
                    qty: 0,
                    img: '',
                    id:1
            },
            {
                    title: 'Tablet',
                    price: 11999,
                    qty: 0,
                    img: '',
                    id:2
            },
            {
                    title: 'Laptop',
                    price: 59999,
                    qty: 0,
                    img: '',
                    id:3
            }
        ]
    }
   }


   IncreaseQty = (product)=>{
    
    const {products} =this.state;
    const index = products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products
    })
   }

   DecreaseQty=(product)=>{
    const {products} =this.state;
    const index = products.indexOf(product);
    if(products[index].qty==0){
        return;
    }
    products[index].qty-=1;
        this.setState({
            products
        })
   }

   DeleteProduct=(id)=>{
        const {products} = this.state;
        const items = products.filter((item)=>item.id!=id)

        this.setState({
            products:items
        })
   }
render(){
    const {products}= this.state;
    return(
        <div className="cart">
                {products.map((product)=>{
                    return (
                        <CartItem 
                        product ={product} 
                        key={product.id}
                        IncreaseQty ={this.IncreaseQty}
                        DecreaseQty ={this.DecreaseQty}
                        DeleteProduct = {this.DeleteProduct}
                        />
                    )
                })}
        </div>
    )
}


}


export default Cart;