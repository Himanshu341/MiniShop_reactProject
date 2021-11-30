import React from 'react';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import './collection_overview.style.css';
import CollectionPreview from '../preview-collection/PreviewCollection';
import { selectCollections } from '../../redux/Shop-redux/shop.selector';


const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);