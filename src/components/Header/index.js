import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import FilterName from "./FilterItem.js"

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
                    <h2 className="logo">Github Filters</h2>
                </div>
                <div className="col-lg-10 Filter">
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