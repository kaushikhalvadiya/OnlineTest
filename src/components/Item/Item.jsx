import React from 'react';

import { ItemListing } from './ItemListing.jsx';
import itemController from '../../controllers/itemController.js';

export class Item extends React.Component{
    constructor(){
        super();
        console.log("T");
        this.state = {
            items : itemController.getAllItem()
        };
    }

    render(){
        return(
            <div>test
                  <ItemListing itemListingProp={this.state.items}/>  
            </div>
        )
    }
}