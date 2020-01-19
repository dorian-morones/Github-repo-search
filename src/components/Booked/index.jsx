import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import { storeRepo } from "../../Utilities/storeRepo.js"
import BookedItem from '../Booked/BookedItems.jsx'
import styled from 'styled-components';

const AlertText = styled.p`
    color:#333;
    font-size: 30px;
    font-weight: 500;
    padding: 20px;
    text-align: center;
`
class BookedContainer extends Component {
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
        let Repo = this.props.booked && this.props.booked.length > 0 ? this.props.booked.map( (item, index) => {
            return(
                <BookedItem 
                key={index} 
                id={item.id}
                name={item.name}
                avatar={item.avatar}
                url={item.url}
                language={item.language}
                // handlerStoreRepo={this.handlerStoreRepo}
                /> 
            )
        }) : <AlertText>You don't have any repository booked <i className="far fa-frown"></i><br/> Please book a repository to can display it here.</AlertText>
        console.log("Repo", Repo)
        return(
            <div className="col-lg-10 align-self-center Results__Wrapper">
                {this.props.loading === true ? <p>Loading</p> : Repo}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        booked: state.results.storedRepo,
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
  )(BookedContainer);