import React, {Component} from "react";
import styled from 'styled-components';

const default_image = "https://www.shareicon.net/data/256x256/2017/06/21/887457_logo_512x512.png"

const RepoArticle = styled.article`
    max-width: 300px;
    border-radius: 0.625rem;
    overflow: hidden;
    margin-bottom: 4rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

const RepoImage = styled.img`
    width: 100%;
    height: 300px;
`
const RepoTitle = styled.h2`
    font-family: 'Bebas Neue', cursive;
    color: #6e5494;
    margin: 0px;
    font-size: 1.625rem;
    font-weight: 400;
    font-stretch: expanded;
`
const RepoText = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #000;
    margin: 0px;
    font-size: 0.875rem;
`

class ResultItem extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            booked: false
        }

        this.handlerBookedState = this.handlerBookedState.bind(this);
    }

    handlerBookedState(e, repo){
        e.preventDefault();
        this.setState({booked: true})
        this.props.handlerStoreRepo(repo)
    }

    render(){
        let {id, name, avatar, url, language} = this.props

        let image = avatar === undefined || avatar === '' ? default_image : avatar;

        return (
            <RepoArticle className="CharacterCard__Wrapper">
                <div data="card header" className="CharacterCard__Img_Wrapper">
                    <div className="card-image" >
                      <RepoImage src={image} alt={image} />
                    </div>
                    <div className="CharacterCard__Title">
                        <RepoTitle className="CharacterCard__Name">{name}</RepoTitle>
                         <RepoText className="CharacterCard__Description"><strong>id</strong>: {id}</RepoText>
                         <RepoText className="CharacterCard__Description"><strong>url</strong>: <a href={url}>{url} <i className="fas fa-external-link-alt"></i></a></RepoText>
                         <RepoText className="CharacterCard__Description"><strong>language</strong>: {language}</RepoText>
                         <RepoText className="CharacterCard_Store" onClick={e => this.handlerBookedState(e, this.props)}>Book this repository <i className="far fa-save"></i></RepoText>
                    </div>
                </div>
            </RepoArticle>
          );
    }
};

export default ResultItem