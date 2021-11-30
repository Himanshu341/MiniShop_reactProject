import React from 'react';
import './collection.style.css';
import {connect} from 'react-redux';
import CollectionItem from '../../Components/collection-item/Collection-item';
import { selectCollection } from '../../redux/Shop-redux/shop.selector';

const CollectionPage = ({collection}) =>{
    const {title , items} = collection;
    return(
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state , ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps) (CollectionPage);