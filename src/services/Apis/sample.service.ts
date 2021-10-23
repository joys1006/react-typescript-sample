// Project Sources
import moment from 'moment';
import TableListPayload from '@src/types/payload/TableListPayload';
import TableListResponse from '@src/types/response/TableListResponse';

const SampleService = {
    SampleTableData(payload: TableListPayload): Promise<Array<TableListResponse>> {
        return new Promise((resolve, reject) => {
            let data: Array<TableListResponse> = [];
            const startSize = (payload.current > 1) ? (payload.current * payload.size) - 9 : payload.current;
            const length = (payload.current * payload.size);
            console.log(payload, length);
            for (let i = startSize; i <= length; i++) {
                data.push(
                    {
                        no: i,
                        name: `목 데이터 테스트${i}`,
                        content: `테스트${i}입니다.`,
                        createdAt: moment(new Date()).format('YYYY-MM-DD'),
                    }
                )
            }
            setTimeout(() => {
                resolve(data);
                reject(new Error("request is failed"));
            }, 2000);
        });
        // return _axios.get(`?page=${payload.page}&size=${payload.size}`);
    },
};

export default SampleService;
