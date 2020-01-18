import React, {Component, Fragment} from 'react'

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
                <button onClick={e => this.handlerSearch(e)}>Search</button>
                <input onChange={e => this.setState({name: e.target.value})} placeholder="Type a name"/>
            </Fragment>
        )
    }
}

export default FilterName;