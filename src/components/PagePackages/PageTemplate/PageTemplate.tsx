import React from 'react';
import {Layout} from 'antd';

interface Props {
    id: string;
}

const PageTemplate: React.FC<Props> = ({children}) => {
    return (
        <Layout>
            { children }
        </Layout>
    );
}

export default PageTemplate;
