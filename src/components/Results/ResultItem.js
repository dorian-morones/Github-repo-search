import React, {Component} from "react";

const default_image = "https://www.shareicon.net/data/256x256/2017/06/21/887457_logo_512x512.png"

class ResultItem extends Component {
    render(){
        let {id, name, avatar, url, language} = this.props

        return (
            <article className="CharacterCard__Wrapper">
                <div data="card header" className="CharacterCard__Img_Wrapper">
                    <div className="card-image">\
                      <img src={avatar} alt={avatar} />
                    </div>
                    <div className="CharacterCard__Title">
                        <h2 className="CharacterCard__Name">{name}</h2>
                         <p className="CharacterCard__Description">id: {id}</p>
                         <p className="CharacterCard__Description">url: <a href={url}>{url}</a></p>
                         <p className="CharacterCard__Description">language: {language}</p>
                    </div>
                </div>
            </article>
          );
    }
};

export default ResultItem