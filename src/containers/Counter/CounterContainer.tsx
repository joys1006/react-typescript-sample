import React, { Component } from 'react';
import { AnyAction, bindActionCreators, Dispatch} from 'redux';
import { connect } from 'react-redux';
import Counter from '../../components/Counter/Counter';

import * as counterActions from '@src/store/modules/counter/counter.module';
import { StoreState } from '@src/store/modules';

interface Props {
    number: number;
    color: Array<number>;
    CounterActions: typeof counterActions;
};

class CounterContainer extends Component<Props> {
    onIncrement = () => {
        const { CounterActions } = this.props;
        CounterActions.increment();
    };
    onDecrement = () => {
        const { CounterActions } = this.props;
        CounterActions.decrement();
    };
    setRandomColor = () => {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];
        this.props.CounterActions.setColor(color);
    };

    render() {
        const { onIncrement, onDecrement, setRandomColor } = this;
        const { number, color } = this.props;

        return (
            <Counter
                number={number}
                color={color}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onRandomizeColor={setRandomColor}
            />
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        number: state.counter.number,
        color: state.counter.color
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        CounterActions: bindActionCreators(counterActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
