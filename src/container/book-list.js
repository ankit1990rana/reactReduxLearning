import React,{Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component{

    renderList(){
       return  this.props.books.map((books) => {
            return(
                <li key={books.title} className="list-group-item">{books.title}</li>
            );
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){ // Function name is Arbitrary
    // Whatever is retured will be show up as props
    // Books will be props and state.books is the reducer, state is a global state or store
    return {
        books: state.books
    }
};

export default connect(mapStateToProps)(BookList);