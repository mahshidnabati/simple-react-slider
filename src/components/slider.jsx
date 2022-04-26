import React, { Component } from 'react';

class Slider extends Component {
    state = { 
                imageUrl:"./images/image1.jpg",
                imageName:["image1.jpg","image2.jpg","image3.jpg"]
            } 
            constructor(){
                super();
                this.funcNext=this.funcNext.bind(this);
                this.funcBack=this.funcBack.bind(this);
            }
            funcBack(){
                let srcState=this.state.imageUrl;
                let imagesState=srcState.substring(9);
                let imageStateIndex=this.state.imageName.indexOf(imagesState);
                if (imageStateIndex>0 && imageStateIndex<this.state.imageName.length) {
                    imageStateIndex--;
                    this.setState({imageUrl:'./images/'+this.state.imageName[imageStateIndex]});
                }else{        
                    this.setState({imageUrl:'./images/'+this.state.imageName[this.state.imageName.length-1]});
                 }
            }
            funcNext(){
                let srcState=this.state.imageUrl;
                let imagesState=srcState.substring(9);
                let imageStateIndex=this.state.imageName.indexOf(imagesState);
                if (imageStateIndex>=0 && imageStateIndex<this.state.imageName.length-1) {
                    imageStateIndex++;
                    this.setState({imageUrl:'./images/'+this.state.imageName[imageStateIndex]});
                }else{        
                    this.setState({imageUrl:'./images/'+this.state.imageName[0]});
                 }
            }
    render() { 
        return (
            <>
             <div className="badge bg-light">
                <img src={this.state.imageUrl} alt="nothing" id="img" 
                className="mt-1 border border-primary shadow p-3 mb-1 bg-white rounded mx-auto d-block"/>
                <div className="mt-0 badge bg-secondary">
                    <button id="back" onClick={this.funcBack} className="btn btn-info rounded">Back</button>
                    <button id="next" onClick={this.funcNext} className="btn btn-info rounded ms-1">Next</button>
                </div>
            </div>
            </>
            );
    }
}   
 
export default Slider;