import React, { Component } from 'react';

// Utils
import { dialog, countdown } from '@src/utils/mixins';

const PagePanel = () => (ChildrenComponent: any) => {
    return class extends Component {
        render() {
            return (
                <ChildrenComponent parentsState={ this.state }
                                   dialog={ dialog }
                                   countdown={ countdown }
                                   {...this.props} />
            )
        }
    }
}

export default PagePanel;
