import React, { Component } from 'react';
import styled from 'styled-components';

const TICK_RATE = 500;
const Load = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

class Loading extends Component {
    state = {
        dots: 0,
    };

    componentDidMount() {
        this.interval = setInterval(this.onTick, TICK_RATE);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick = () => {
        this.setState(prevState => ({ dots: (prevState.dots + 1) % 4 }));
    };

    render() {
        const { dots } = this.state;

        return (
            <Load>
                <small>
                    Loading {new Array(dots).fill(0).map(dot => '.')}
                </small>
            </Load>
        );
    }
}

export default Loading;
