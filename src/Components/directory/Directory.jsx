import React  from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import MenuItems from '../menu-item/MenuItem';
import Paper from '@material-ui/core/Paper';
import './directory.style.css';

const Directory = ({sections}) => (
  
        <Paper>
          <div className="directory-menu">
            {
              sections.map(({title,imageUrl,id}) => (
                <MenuItems key={id} title={title} imageUrl={imageUrl} />
              ))
            }

          </div>
        </Paper>
    
);


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps) (Directory);