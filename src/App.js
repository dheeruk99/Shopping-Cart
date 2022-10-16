
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

import firebase from 'firebase/compat/app';
import { doc, deleteDoc } from "firebase/firestore";




class App extends React.Component {

      constructor(){
        super();
        this.state={
            products:[],
            loading:true
        }
        
        this.db = firebase.firestore();
        
      }

    //   componentDidMount(){
    //     firebase
    //         .firestore()
    //         .collection('Products')
    //         .get()
    //         .then((snapshot)=>{
             
    //           const products = snapshot.docs.map((doc)=>{
    //             const data = doc.data();
    //             data['id'] = doc.id;
    //             return data;
    //           })
             

    //           this.setState({
    //             products,
    //             loading:false
    //           })
    //   })
    // }

       componentDidMount(){
        this.db
            .collection('Products')
            // .where('price','==',9999)
            // .where('title','==','Watch')
            // .orderBy('price')
            // .orderBy('price','desc')
            
            
            .onSnapshot((snapshot)=>{
             
              const products = snapshot.docs.map((doc)=>{
                const data = doc.data();
                data['id'] = doc.id;
                return data;
              })
             

              this.setState({
                products,
                loading:false
              })
      });
    }


    addProduct = ()=>{

      this.db
            .collection('Products')
            .add({
              img:'',
              qty:1,
              title:'Washing Machine',
              price: 11999
            })
            .then((docRef)=>{
                console.log('Product is Added', docRef);
            })
            .catch((err)=>{
              console.log(err);
            })
    }

      increaseQty = (product)=>{
        
        const {products} =this.state;
        const index = products.indexOf(product);
        // products[index].qty+=1;

        // this.setState({
        //     products
        // })

        const docRef = this.db.collection('Products').doc(products[index].id);
        docRef.update({
          qty: products[index].qty+1
        })
        .then(()=>{
          console.log('Product updated successfully');
        })
        .catch((err)=>{
          console.log('Error',err);
        })
      }

      decreaseQty=(product)=>{
        const {products} =this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        // products[index].qty-=1;
        //     this.setState({
        //         products
        //     })
        const docRef = this.db.collection('Products').doc(products[index].id);

        docRef.update({
          qty:products[index].qty-1
        })
        .then(()=>{
          console.log('Cart Updated Successfully');
        })
        .catch((err)=>{
          console.log('Error',err);
        })
      }

       deleteProduct = async(id)=>{
            const {products} = this.state;
            // const items = products.filter((item)=>item.id!==id)

            // this.setState({
            //     products:items
            // })

            const index = products.indexOf(products);
            await deleteDoc(doc(this.db, "Products", id));
            console.log('Product deleted successfully')
            
                
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
    const {products,loading} = this.state; 
  return (
   <div className='App'>
       

        <Navbar count = {this.getCartTotal()}/>
        
        {loading && <h1>loading Products...</h1>}

        <Cart
          products = {products}
          increaseQty ={this.increaseQty}
          decreaseQty ={this.decreaseQty}
          deleteProduct = {this.deleteProduct}
        />
        <div style={{marginLeft:20, padding:10, fontSize:20}}>
          Total: {this.getTotalBill()}
        </div>

        {/* <button onClick={this.addProduct}>Add Product</button> */}
        
    </div>
  );
}
}

export default App;
