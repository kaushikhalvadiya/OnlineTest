import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App/App.jsx";
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { Item } from './components/Item/Item.jsx';

// ReactDOM.render((
//     <Router history={browserHistory}>
//         <Route path='/' component={App}>
//             <IndexRoute component={Item}/>
//              <Route path='Item' component={Item}/> 
//         </Route>
//     </Router>
// ), document.getElementById('app'));


ReactDOM.render(<App />, document.getElementById('app'));