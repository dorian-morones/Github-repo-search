import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import { filterBooked } from "../../Utilities/filterBooked.js"
import BookedItem from '../Booked/BookedItems.jsx'
import styled from 'styled-components';

const AlertText = styled.p`
    color:#333;
    font-size: 30px;
    font-weight: 500;
    padding: 20px;
    text-align: center;
`
const FilterInput = styled.input`
    color: #333;
    background: none;
    border: none;
    margin-left: 10px;
    padding: 2px 5px;
    width: 300px;
`
const SearchContainer = styled.div`
    border-bottom: solid 1px #333;
    width: 350px;
    color: #333;
    margin-right: 20px;
`
class BookedContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            filtered: false
        }

        this.handlerFilterRepo = this.handlerFilterRepo.bind(this);
    }

    handlerFilterRepo(e, keyword){
        this.setState({filtered: true})
        let newResults = filterBooked(keyword);
        this.props.storeFilteredRepo(newResults);
    }

    render(){
        const { booked, loading, filteredBooked } = this.props;

        let data = this.state.filtered === false ? booked : filteredBooked;
        let Repo = data && data.length > 0 ? data.map( (item, index) => {
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
        return(
            <Fragment>
                {
                    booked.length > 1 ?
                        <div className="col-lg-10 align-self-center Results_Search_Wrapper">
                            <SearchContainer>
                                <i className="fas fa-filter"></i><FilterInput onChange={e => this.handlerFilterRepo(e, e.target.value)} placeholder="Filter your booked Repositories" />
                            </SearchContainer>
                        </div>
                    : null
                }
                <div className="col-lg-10 align-self-center Results__Wrapper">
                    {loading === true ? <p>Loading</p> : Repo}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        booked: state.results.storedRepo,
        filteredBooked: state.results.storeFilteredRepo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        storeRepo: (repo) => {
            dispatch(actions.storeRepo(repo));
        },
        storeFilteredRepo: (repo) => {
            dispatch(actions.storeFilteredRepo(repo));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookedContainer);