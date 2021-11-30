import React from 'react';
import './categoryNav.style.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategorySection } from '../../redux/Category/category.selector';

export const Cate = ({name , image} )=>{
    return(
        <>
            <div className="categoryItem">
                {/* <img src={image} alt="" width='100px' height='150px' /> */}
                <a className='category-menu-link'>{name}</a>
            </div>
        </>
    )
}


const CategoryNav= ({categoryMenu }) => {
    return(
        <>
            <div className="categoryNav">
                <div className="categoryNav-items">
                        {
                            categoryMenu.map(({name ,id , image}) =>(
                                <Cate key={id}  name={name} image={image} />
                            ))
                        }
                   
                </div>
            </div>
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    categoryMenu: selectCategorySection
  });
export default connect(mapStateToProps) (CategoryNav);