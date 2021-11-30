import React from 'react';
import { Route , Switch } from 'react-router-dom';
import CollectionOverview from '../../Components/collection-overview/Collection_overview';

import CollectionPage from '../category/Collection';

const ShopPage = ({match}) =>{
    console.log(match);
    return(
        
    <div className="shop-page">
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route exact path={`${match.path}:/categoryId`} component={CollectionPage}/>
        </Switch>
    </div>
)}



export default ShopPage ;