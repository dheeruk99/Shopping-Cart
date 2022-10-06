const React = require('react');


const CartItem =(props)=>{
    // constructor() {
    //     super();
    //     this.state={
    //         title: 'Mobile Phone',
    //         price: 999,
    //         qty: 0,
    //         img: ''
    //     }
    // }

    // DecreaseQty=()=>{
    //     const {qty} = this.state;
    //     if(qty==0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     }
    //     )
    // }

//    IncreaseQty=()=>{

//     //setState form-1 if previous state not required use this
//     // this.setState({
//     //     qty:this.state.qty+1
//     // })

//     //setState form-2 if previous State required use this
//         this.setState((prevState)=>{
//             return{
//                 qty:prevState.qty+1
//             }
//         })
//    }
    
        const {title, price, qty, id}  = props.product;
        const {products,IncreaseQty,DecreaseQty,DeleteProduct} = props;
        return (
            <div className='cart-item'>
                <div className='right-block'>
                    <img style={styles.Image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img alt='Increase' className='action-icons' onClick={()=>IncreaseQty(props.product)} src='https://cdn-icons-png.flaticon.com/512/992/992651.png'/>
                        <img alt='Decrease' className='action-icons' onClick={()=>DecreaseQty(props.product)} src='https://cdn-icons-png.flaticon.com/512/992/992683.png'/>
                        <img alt='Delete' className='action-icons' onClick={()=>DeleteProduct(id)} src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'/>
                        
                    </div>
                </div>
                
            </div>
        );
    }



const styles ={
    Image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}



export default CartItem;




















