import React from 'react';

import { ItemListing } from './ItemListing.jsx';
import itemController from '../../controllers/itemController.js';

export class Item extends React.Component{
    constructor(){
        super();

        this.state = {
            items : itemController.getAllItem()
        };
console.log("ItemListing");
    }
    

    render(){
        return(
            <div>
                  <ItemListing itemListingProp={this.state.items}/>  
            </div>
        )
    }
}