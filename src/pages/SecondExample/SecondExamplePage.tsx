import React from 'react';
import PagePanel from '@components/PagePackages/PagePanel/PagePanel';
import TableListContainer from '@src/containers/TableList/TableListContainer';
import PageTitle from '@components/PagePackages/PageTitle/PageTitle';

interface Props {
}

const SecondExamplePage = (props: Props) => {

    return (
        <div>
            {/* 타이틀 */}
            <PageTitle title="두번째 예제 페이지" />
            {/* // 타이틀 */}
            <TableListContainer />
        </div>
    )
}

export default PagePanel()(SecondExamplePage);
