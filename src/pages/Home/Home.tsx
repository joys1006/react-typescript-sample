/**
 * @author Has
 * @reg_date 2018-11-02
 * @summary Home
 */
import React from 'react';

// Layout Container
// PagePackages Components
import PagePanel from '@components/PagePackages/PagePanel/PagePanel';
// antd
import PageTemplate from '@components/PagePackages/PageTemplate/PageTemplate';
import PageHeader from '@components/PagePackages/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import async from '@src/components/Async/Async';
import {HomeButtomWrap} from '@src/styled/pages/home/home';

export const FirstExamplePage = async(() => import('@src/pages/FirstExample/FirstExamplePage'));
export const SecondExamplePage = async(() => import('@src/pages/SecondExample/SecondExamplePage'));

interface Props {
    number: number;
};

const Home: React.FC<Props> = (Props) => {
    return (
        <PageTemplate id="Home">
            <PageHeader />

            <HomeButtomWrap>
                <Link to='/first-example'>첫번째</Link>
                <Link to='/second-example'>두번째</Link>
            </HomeButtomWrap>

        </PageTemplate>
    )
}

export default PagePanel()(Home);
