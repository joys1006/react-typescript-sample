import React, { Component } from 'react';
import Loading from '../Loading/Loading';

// 비동기식 청크관리
export default function async(getComponent: Function) {
    class Async extends Component {

        static Component = null;

        state = {
            Component: Async.Component
        };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent()
                    .then(
                        // @ts-ignore
                        ({ default: Component }) => {
                            Async.Component = Component;

                            this.setState({ Component });
                        });
            }
        }

        render() {
            const { Component } = this.state
            if (Component) {
                // @ts-ignore
                return <Component {...this.props} />;
            } else {
                // 로딩
                return <Loading />;
            }
        }

    }

    // @ts-ignore
    Async.getComponent = () => {
        // @ts-ignore
        return getComponent().then(({default: Component}) => {
            Async.Component = Component;
        });
    }

    return Async;
}
