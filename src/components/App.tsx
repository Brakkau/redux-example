import React from 'react';
import {connect} from 'react-redux';

const App = (props : any) => {
    return <ol>
        {props
            .todos
            .map((todo : string) => <li>{todo}</li>)}
    </ol>
};

const mapStateToProps = (state : any) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
