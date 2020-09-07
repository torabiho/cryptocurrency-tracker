import React, { useState, useEffect, useCallback} from 'react';
import './Dropdown.scss';
import AddList from '../addList/AddList';
import { ADD_CRYPTOCURRENCY, ADD_LIMIT_MESSAGE } from '../../constants';

const Dropdown = props => {

    const [menuVisibility, setMenuVisibility] = useState(false);
    const onDropDownClick = useCallback((e) => {
        e.preventDefault();
        setMenuVisibility(!menuVisibility);
    }, [menuVisibility])

    useEffect(() => {    
        if(menuVisibility){
            document.addEventListener('click', onDropDownClick);
            return () => {
                document.removeEventListener('click', onDropDownClick);
            };
        }
    }, [menuVisibility, onDropDownClick]);

    const { menuItems, addingLimitReached } = props;
    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <div className={`dropdown__button ${menuVisibility ? 'show' : ''}`} onClick={onDropDownClick}>{ADD_CRYPTOCURRENCY}</div>
                {menuVisibility && menuItems.length > 0 ? (<AddList addListItems={menuItems} />) : null}
            </div>
            { addingLimitReached && <p className="dropdown__error">{ADD_LIMIT_MESSAGE}</p> }
        </div>
    );
    
}

Dropdown.defaultProps = {
    menuItems: []
};

export default Dropdown;