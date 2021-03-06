import React, {useState} from "react";
import ReactDOM from "react-dom";

const CategoryComponent = (props) => {
    var ShopList = {
        "shopList":[
            {
                "name": "Men's Casual Premium Slim Fit T-Shirts",
                "price": 22.3
            },
            {
                "name": "Men's Cotton Jacket",
                "price": 55.99
            },
            {
                "name": "Men's Casual Slim Fit",
                "price": 15.99
            },
        ]
    }
    
     const shopItemHandler = (event) =>{
          setShopItem(ShopList.shopList[event.target.value]);
      }
     
      const submitHandler = () => {
        if(JSON.stringify(shopItem)!=="{}"){
          setShoppingList([...shoppingList,shopItem]);
          totalPriceHandler();
        }
      };
      const totalPriceHandler = () =>{
        setTotalPrice(totalPrice+ shopItem.price);
      }
      const [shoppingList, setShoppingList] = useState([]);
      const [shopItem, setShopItem] = useState({});
      const [totalPrice, setTotalPrice] = useState(0.00);
      const all_table_rows = shoppingList.map((shopitem, index) => {
        return (<tr key={index}>
                  <td>{shopitem.name}</td>
                  <td>{shopitem.price.toFixed(2)}</td>
                </tr>);});
      const dropdown_options = ShopList.shopList.map((shopitem, index)=>{
        return <option key={index} value={index} >{shopitem.name}</option>
      });

    return (
        <div>
    <div className="App">
      <h1 className="flexHeader">DBS Marketplace</h1>
      <div className="content">
        <div className="ui form">
            <div className="field">
              <label className="formTitle">Men's Clothing</label>
              <select className="ui dropdown" onClick={shopItemHandler} >
                {dropdown_options}
              </select>
            </div>
            <div className="field">
              <p className="fontTitle">Price: {JSON.stringify(shopItem)==="{}"? "0.00": shopItem.price.toFixed(2)}</p>
            </div>
            <div className="ui submit button" onClick={submitHandler}>Submit</div>
          </div>
        <div className="ui container" >
              <table className="ui celled table" >
                  <thead >
                      <tr>
                          <th>Name of Shopping Item</th>
                          {shoppingList.length!==0 && <th>Price</th>}
                      </tr>
                  </thead>
                  <tbody>
                      {shoppingList.length===0? 
                      <tr>
                        <td><center>No items in the shopping list. Add now!</center></td>
                      </tr>:
                      all_table_rows}
                  </tbody>
                  <tfoot className="tablefoot">
                      <tr>
                          <td className="foot_cell_style">Total Price</td>
                          {shoppingList.length!==0 && <td>${totalPrice.toFixed(2)}</td>}
                      </tr>
                  </tfoot>
              </table>
          </div>
        </div>
    </div>
    </div>
  );
}

export default CategoryComponent;