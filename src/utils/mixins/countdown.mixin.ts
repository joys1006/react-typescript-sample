/**
 * @author Has
 * @reg_date 2018-11-16
 * @summary countdown mixins
 */

// 3rd Party Libraries
import moment from 'moment';

interface CountState {
    diffSeconds: number;
    intervalId: number;
}

class Countdown {
    state: CountState;

    constructor () {
        this.state = {
            diffSeconds: 0,
            intervalId: 0,
        };
    }

    startCountDown = (seconds: number, countDownHandler: Function) => {
        const afterTime = moment().add(seconds, 'seconds');
        let timeDiff = afterTime.diff(moment(), 'seconds');

        this.state = {
            ...this.state,
            diffSeconds: timeDiff
        }

        clearInterval(this.state.intervalId);
        countDownHandler(this.state.diffSeconds);

        if (this.state.diffSeconds <= 0) {
            this.clearCountDown();
        } else {

            let timer: any = setInterval(() => {
                timeDiff = afterTime.diff(moment(), 'seconds');
                this.state = {
                    ...this.state,
                    diffSeconds: timeDiff
                };
                countDownHandler(this.state.diffSeconds);
            }, 1000);

            this.state = {
                ...this.state,
                intervalId: timer
            };
        }
    }

    clearCountDown = () =>  {
        clearInterval(this.state.intervalId);
        this.state = {
            ...this.state,
            diffSeconds: 0,
            intervalId: 0,
        };
    }
};

export const countdown = new Countdown();
