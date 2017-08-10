import React from "react";


export class ItemListing extends React.Component
{
    render(){
            console.log("ItemListing");
        var myStyle = {
            border:1,
            borderColor:"black"
        }

        return(
            <div>
                <h1>Products you're looking for:</h1>
                <table style={myStyle} cellPadding="3" cellSpacing="3">
                    <tbody>
                    {this.props.itemListingProp.map((Product,i) => <tr key={i}>
                            <td>
                                <img src={Product.Path} border="0" alt="Issue in loading image." />
                            </td>
                           <td>
                                <table  cellPadding="3" cellSpacing="3">
                                    <tr>
                                         <td>
                                                {Product.Pid}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <b>{Product.Name}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                {Product.SKU}
                                        </td>
                                    </tr>
                                     <tr>
                                        <td>
                                                <b>{Product.Price}</b>
                                        </td>
                                    </tr>
                                     <tr>
                                        <td>
                                                {Product.Rating}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}