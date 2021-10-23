/**
 * @summary https://ant.design/components/modal/
 * @example {
    modalType: 'confirm',
    options: {
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        cancelText: 'No',
        okType: 'danger',
        maskClosable: true,
        okButtonProps: {
          disabled: true,
        },
        cancelButtonProps: {
          loading: true,
        },
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
    }
 */

// antd
import {Modal} from 'antd';

type OkButtonProps = {
    disabled: boolean;
};
type CancelButtonProps = {
    loading: boolean;
};

interface Option {
    title: string;
    content: string;
    okText: string;
    cancelText: string;
    okType: string;
    maskClosable: boolean;
    okButtonProps: OkButtonProps;
    cancelButtonProps: CancelButtonProps;
    onOk(): void;
    onCancel(): void;
}

interface ModalOption {
    modalType: string;
    options: Option
}

export const dialog = {
    open (options: ModalOption) {
        // @ts-ignore
        Modal[options.modalType](options.options);
    },
};
