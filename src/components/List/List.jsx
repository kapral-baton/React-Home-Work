import React, {Component, Fragment} from 'react';

class List extends Component {
    render() {

        let {list, removeFirst, btn, btn1, moveFirst} = this.props;

        return Array.isArray(list) && list.length ? (
            <Fragment>
                <ul>
                    {list.map( item => <li key={item.id}>{item.title}</li>)}
                </ul>
                <button onClick={removeFirst}>{btn}</button>
                {btn1 && <button onClick={moveFirst}>{btn1}</button>}
            </Fragment>



        ) : null  ;
    }
}

export default List;