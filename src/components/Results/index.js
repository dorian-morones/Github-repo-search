import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import ResultItem from "./ResultItem.js"

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render(){
        let Repo = this.props.result && this.props.result !== undefined ? this.props.result.map( (item, index) => {
            return(
                <ResultItem 
                key={index} 
                id={item.id}
                name={item.name}
                avatar={item.avatar_url}
                url={item.html_url}
                language={item.language}
                /> 
            )
        }) : <p>Loading</p>

        return(
            <div className="row justify-content-md-center">
                <div className="col-lg-10 Results__Wrapper">
                    {this.props.loading === true ? <p>Loading</p> : Repo}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.results.data.items,
        loading: state.results.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getResults: () => {
         dispatch(actions.getResults());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Results);