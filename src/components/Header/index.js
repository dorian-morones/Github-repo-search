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
                <div className="col-lg-2 logo">
                    <h2>Github Filters</h2>
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
        // ,
        // getFilteredResults: (results) => {
        //     dispatch(actions.getFilteredResults(results));
        // }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);