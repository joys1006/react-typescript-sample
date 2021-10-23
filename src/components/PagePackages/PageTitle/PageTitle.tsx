import React from 'react';

import { TitleWidget } from '@src/styled/components/pagePackages/pageTitle/pageTitle';

interface Prop {
    title: string;
}

const PageTitle: React.FC<Prop> = ({ title}) => {

    return (
        <TitleWidget>
            <h2>{title}</h2>
        </TitleWidget>
    )
}

export default PageTitle;
