import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import ResultItem from "./ResultItem.jsx"
import { storeRepo } from "../../Utilities/storeRepo.js"

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = { }

        this.handlerStoreRepo = this.handlerStoreRepo.bind(this);
    }

    handlerStoreRepo(repo){
        let newRepo = storeRepo(repo)
        this.props.storeRepo(newRepo)
    }
    render(){
        let Repo = this.props.result && this.props.result !== undefined ? this.props.result.map( (item, index) => {
            return(
                <ResultItem 
                key={index} 
                id={item.id}
                name={item.name}
                avatar={item.owner.avatar_url}
                url={item.html_url}
                language={item.language}
                handlerStoreRepo={this.handlerStoreRepo}
                /> 
            )
        }) : <p>Loading</p>

        return(
            <div className="col-lg-10 align-self-center Results__Wrapper">
                {this.props.loading === true ? <p>Loading</p> : Repo}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.results.data.items,
        booked: state.results.storeRepo,
        loading: state.results.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        storeRepo: (repo) => {
            dispatch(actions.storeRepo(repo));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Results);