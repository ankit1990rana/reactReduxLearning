import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectBook from '../actions/index';

class BookList extends Component{

    renderList(){
       return  this.props.books.map((books) => {
            return(
                <li 
                    onClick={() => this.props.selectBook(books)} 
                    key={books.title} 
                    className="list-group-item">
                    {books.title}
                </li>
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
        books: state.books // Get value for glabal state or store
    }
};

function mapDispatchToProps (dispatch){ // dispact will dispatch the evnt to all the reducers
   return bindActionCreators({ selectBook : selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList); // connect state, actions with the componenet