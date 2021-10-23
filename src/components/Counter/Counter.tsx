import React from 'react';

import { Button } from 'antd';

interface Props {
    number: number;
    color: Array<number>;
    onIncrement(): void;
    onDecrement(): void;
    onRandomizeColor(): void;
}

const Counter: React.FC<Props> = ({ number, color, onIncrement, onDecrement, onRandomizeColor}) => {
    const style = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };
    return (
        <div style={style}>
            <h1>{ number }</h1>
            <Button type="primary" onClick={ onIncrement }>+</Button>
            <Button type="primary" onClick={ onDecrement }>-</Button>
            <Button type="primary" onClick={ onRandomizeColor }>Randomize Color</Button>
        </div>
    );
}

export default Counter;
