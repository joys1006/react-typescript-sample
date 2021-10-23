import CounterContainer from '@src/containers/Counter/CounterContainer';
import React from 'react';
import PagePanel from '@components/PagePackages/PagePanel/PagePanel';
import { Button } from 'antd';
import PageTitle from '@components/PagePackages/PageTitle/PageTitle';
import PageTemplate from '@components/PagePackages/PageTemplate/PageTemplate';

interface Props {
    dialog: any;
}

const FirstExamplePage = (props: Props) => {

    const dialogActiveTestHandler = () => {
        const { dialog } = props;
        const options = {
            modalType: 'confirm',
            options: {
                title: 'Are you sure delete this task?',
                content: 'Some descriptions',
                okText: 'Yes',
                cancelText: 'No',
                okType: 'normal',
                maskClosable: true,
                okButtonProps: {
                },
                cancelButtonProps: {
                    loading: false,
                },
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                },
            },
        }
        dialog.open(options);
    }

    return (
        <div>
            {/* 타이틀 */}
            <PageTitle title="첫번째 예제 페이지" />
            {/* // 타이틀 */}

            <CounterContainer />

            <Button type="default"
                    onClick={ dialogActiveTestHandler }>
                팝업컴포넌트 오픈 테스트
            </Button>
        </div>
    )
}

export default PagePanel()(FirstExamplePage);
