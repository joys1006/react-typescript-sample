import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

// UI components
import TableList from '@components/TableList/TableList';

// Actions
import * as tableListActions from '@src/store/modules/tableList/tableList.module';
import {StoreState} from '@src/store/modules';
import {PaginationProps} from 'antd';
import {ColumnType} from 'antd/lib/table/interface';
import {FilterValue, SorterResult} from 'antd/es/table/interface';
import TableListResponse from '@src/types/response/TableListResponse';

interface Props {
    loading: boolean;
    data: Array<TableListResponse>;
    TableListActions: typeof tableListActions;
};

interface States {
    columns: Array<ColumnType<any>>;
    pagination: PaginationProps;
    loading: boolean;
}

class TableListContainer extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false,
            pagination: {
                current: 1,
                pageSize: 10
            },
            columns: [
                {
                    title: 'no',
                    dataIndex: 'no',
                    width: '20%',
                }, {
                    title: 'name',
                    dataIndex: 'name'
                },
                {
                    title: 'createdAt',
                    dataIndex: 'createdAt',
                    width: '20%',
                },
            ]
        };
    }

    handleTableChange = (pagination: PaginationProps, filters: Record<string, FilterValue | null>, sorter: SorterResult<any>) => {
        const pager = { ...this.state.pagination };
        const payload = {
            current: pagination.current,
            size: pagination.pageSize,
            ...filters,
        };
        pager.current = pagination.current;

        this.setState({
            pagination: pager,
        });

        this.getTableData(payload);

    }

    getTableData = async (params = {}) => {

        const { TableListActions, loading } = this.props;
        const samplePayload = {
            current: this.state.pagination.current,
            size: this.state.pagination.pageSize,
            ...params,
        };

        try {
            await TableListActions.getTableDataRequest(samplePayload)
            await TableListActions.getTableDataRequest(samplePayload)
            if (!loading) {
                this.getTableDataCallBack();
            }
        } catch(e) {
            console.log(e);
        }
    }

    getTableDataCallBack = () => {
        const pagination = { ...this.state.pagination };
        pagination.total = 200;
        this.setState({
            pagination,
        });
    }

    componentDidMount () {
        this.getTableData();
    }

    render () {
        const { columns, pagination } = this.state;
        const { data, loading } = this.props;
        const { handleTableChange } = this;

        return (
            <TableList columns={columns}
                       changedDataEventHandler={handleTableChange}
                       loading={loading}
                       pagination={pagination}
                       data={data} />
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        data: state.tableList.data,
        loading: state.tableList.loading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        TableListActions: bindActionCreators(tableListActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableListContainer);
