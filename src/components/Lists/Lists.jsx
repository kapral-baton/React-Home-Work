import React, {Component} from 'react';
import List from './../List/List'

class Lists extends Component {
    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    };

    moveFirst(){
        this.setState({
            secondList: [this.state.firstList.shift(1), ...this.state.secondList]
        })
    }

    moveFromSecondToThird(){
        this.setState({
            thirdList:  [this.state.secondList.shift(1), ...this.state.thirdList]

        })
    }

    removeLastItem(){
        this.setState({
            thirdList: this.state.thirdList.slice(0,-1)
        })
    }

    moveLeft(){
        this.setState({
            firstList: [this.state.secondList.shift(1), ...this.state.firstList]
        })
    }


    render() {
        return (
            <div>
                <List btn='Transfer first to right' list={this.state.firstList} removeFirst={this.moveFirst.bind(this)}/>
                <List
                    btn='Transfer first to right'
                    btn1='Transfer first to left'
                    list={this.state.secondList}
                    removeFirst={this.moveFromSecondToThird.bind(this)}
                    moveFirst={this.moveLeft.bind(this)}
                />
                <List btn='Remove last item' list={this.state.thirdList} removeFirst={this.removeLastItem.bind(this)}/>
            </div>
        );
    }
}

export default Lists;