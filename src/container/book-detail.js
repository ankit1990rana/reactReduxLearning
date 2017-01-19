import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
    render(){
        if(!this.props.activeBook){
            return (
                <div>Please select a book</div>
            );
    }
        return (
            <div>
                <p>{this.props.activeBook.title}</p>
            </div>
        );
    }
}

function  mapStateToProps(state){
    return {
        activeBook: state.activeBook // Get value for glabal state or store
    }
}

export default connect(mapStateToProps)(BookDetails);