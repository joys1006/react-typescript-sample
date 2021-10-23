import React from 'react';
import { PaginationProps, Table } from 'antd';
import { ColumnType, TableCurrentDataSource, TablePaginationConfig} from 'antd/lib/table/interface';
import {FilterValue, SorterResult} from 'antd/es/table/interface';

interface Props {
    columns: Array<ColumnType<any>>;
    data: Array<any>;
    pagination: PaginationProps;
    loading: boolean;
    changedDataEventHandler(pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<any> | SorterResult<any>[], extra: TableCurrentDataSource<any>): void;
};

const TableList: React.FC<Props> = (props) => {
    return (
        <Table
            columns={props.columns}
            rowKey={record => record.no}
            dataSource={props.data}
            pagination={props.pagination}
            loading={props.loading}
            onChange={props.changedDataEventHandler}
        />
    );
}

export default TableList;
