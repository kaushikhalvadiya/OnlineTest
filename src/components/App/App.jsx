import React from 'react';
import { Item } from '../Item/Item.jsx';
//export
class App extends React.Component {
   render() {
      return (
         <div>
           Test
             {this.props.children}
        </div>
      );
   }
}

export default App;