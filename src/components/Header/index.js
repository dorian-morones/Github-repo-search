import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import FilterName from "./FilterItem.js"
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MenuContainer = styled.ul`
    display:flex;
    padding-left: 0px;
`
const MenuItem = styled.li`
    list-style: none;
    margin-right: 10px;
    font-size:20px;
`
const MenuLogo = styled.h2`
    text-align:center;
    margin-bottom: 5px;
    color: #333;
`

class Header extends Component {
    constructor(props) {
        super(props)
        this.handlerFilters = this.handlerFilters.bind(this);
        
    }

    handlerFilters(name){
        this.props.getResults(name)
    }

    render(){
        return(
            <div className="Filters__Wrapper row">
                <div className="col-lg-2">
                    <MenuLogo className="logo">Github Filters</MenuLogo>
                </div>
                <div className="col-lg-2">
                    <MenuContainer>
                        <MenuItem>
                            <Link to="/">Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/booked">Booked</Link>
                        </MenuItem>
                    </MenuContainer>
                </div>
                <div className="col-lg-8 Filter">
                    <FilterName handlerFilters={this.handlerFilters}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.results.data.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getResults: (name) => {
         dispatch(actions.getResults(name));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);