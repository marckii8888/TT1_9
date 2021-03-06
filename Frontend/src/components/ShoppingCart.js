import React from 'react';
import productlist from '../datajson/products.json'

const ShoppingCart = () => {
    const ShopList = {
        "shopList":[
            {
                "name": "Detergent",
                "quantity": 1,
                "price": 4.99
            },
            {
                "name": "Apples",
                "quantity": 1,
                "price": 5.95
            },
            {
                "name": "White Bread",
                "quantity": 1,
                "price": 2.40
            },
            {
                  "name": "Pork",
                  "quantity": 1,
                  "price": 6.70
            },
            {
                  "name": "Celery",
                  "quantity": 1,
                  "price": 3.10
            },
        ]
    }
    // totalPriceHandler();
    // const totalPriceHandler = () =>{
    //     setTotalPrice(totalPrice+ shopItem.price);
    //   }
    // const [totalPrice, setTotalPrice] = useState(0.00);

    const cartDataBody = ShopList.shopList.map((shopitem, index) => {
      return (<tr key={index}>
                <td>{shopitem.name}</td>
                <td>{shopitem.quantity}</td>
                <td>{shopitem.price.toFixed(2)}</td>
                <td><button type="submit" className="ui button red">Delete</button></td>
              </tr>);});

    // const totalBody = totalPrice.toFixed(2);

    return (
        <div class="row">
            <h1 className="flexHeader">My Cart</h1>
            <div class="form-group col-sm-12 col-md-12">
                <div class="col-sm-7 col-md-7">
                    <table id="cartTable">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="cartDataBody">
                            {ShopList.shopList.length===0? 
                                <tr>
                                <td><center>No items in the shopping cart. </center></td>
                                </tr>:
                                cartDataBody}
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-5 col-md-5">
                    <table id="totalTable">
                        <thead>
                            <tr>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="totalBody">
                            {/* {ShopList.shopList.length===0? 
                                    <tr>
                                    <td><center> 0 </center></td>
                                    </tr>:
                                    totalBody
                                    } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;