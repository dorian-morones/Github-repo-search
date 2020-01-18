import React, {Component, Fragment} from 'react'
import styled from 'styled-components';

const FilterInput = styled.input`
    color: #333;
    background: none;
    border: none;
    margin-left: 10px;
    padding: 2px 5px;
`
const SearchContainer = styled.div`
    border-bottom: solid 1px #333;
    max-width: 300px;
    float: right;
    color: #333;
    margin-right: 20px;
`
const ButtonSearch = styled.button`
    display: block;
    border-radius: 5px;
    background: #333;
    color: #fafafa;
    border: none;
    padding: 2px 10px;
`

class FilterName extends Component {
    constructor(props) {
        super(props)
        this.handlerSearch = this.handlerSearch.bind(this);
        this.state = { 
            name: "",
        }
    }

    handlerSearch(e){
        this.props.handlerFilters(this.state.name)
    }

    render(){

        return(
            <Fragment>
                <ButtonSearch onClick={e => this.handlerSearch(e)}>Search</ButtonSearch>
                <SearchContainer>
                    <i className="fas fa-search"></i><FilterInput onChange={e => this.setState({name: e.target.value})} placeholder="Type a name" />
                </SearchContainer>
            </Fragment>
        )
    }
}

export default FilterName;