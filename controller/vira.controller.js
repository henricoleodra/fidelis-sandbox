const { logger } = require('../utils');

const inquiryMutasi = (req, res) => {
    res.status(200).json({
        output_schema: {
            acct_inq_indicator: 'E',
            acct_no: {
                acct_no_x: '0010008484',
            },
            acct_tran_total: 4,
            acct_tran_array: {
                acct_tran_detail: [
                    {
                        acct_tran_desc: 'BIAYA ADM',
                        acct_tran_curr_val: 0,
                        acct_tran_curr_code: 'IDR',
                        acct_tran_code: 945,
                        acct_tran_date: {
                            acct_tran_date_dd: 16,
                            acct_tran_date_mm: 4,
                            acct_tran_date_yy: 10,
                        },
                        trx_data_type: 'D',
                        acct_tran_amount: '+0000000010000.00',
                        acct_tran_add_data: '',
                    },
                    {
                        acct_tran_desc: 'PAJAK BUNGA',
                        acct_tran_curr_val: 0,
                        acct_tran_curr_code: 'IDR',
                        acct_tran_code: 197,
                        acct_tran_date: {
                            acct_tran_date_dd: 31,
                            acct_tran_date_mm: 3,
                            acct_tran_date_yy: 10,
                        },
                        trx_data_type: 'D',
                        acct_tran_amount: '+0000107693815.74',
                        acct_tran_add_data: '',
                    },
                    {
                        acct_tran_desc: 'BUNGA',
                        acct_tran_curr_val: 0,
                        acct_tran_curr_code: 'IDR',
                        acct_tran_code: 761,
                        acct_tran_date: {
                            acct_tran_date_dd: 31,
                            acct_tran_date_mm: 3,
                            acct_tran_date_yy: 10,
                        },
                        trx_data_type: 'C',
                        acct_tran_amount: '+0000538469078.71',
                        acct_tran_add_data: '',
                    },
                    {
                        acct_tran_desc: 'BIAYA ADM',
                        acct_tran_curr_val: 0,
                        acct_tran_curr_code: 'IDR',
                        acct_tran_code: 945,
                        acct_tran_date: {
                            acct_tran_date_dd: 19,
                            acct_tran_date_mm: 3,
                            acct_tran_date_yy: 10,
                        },
                        trx_data_type: 'D',
                        acct_tran_amount: '+0000000010000.00',
                        acct_tran_add_data: '',
                    },
                ],
            },
            acct_request_code: 0,
            acct_resp_code: '00',
        },
        error_schema: {
            error_message: {
                indonesian: 'SUCCESS',
                english: 'SUCCESS',
            },
            error_code: 'MC',
        },
    });
};

module.exports = {
    inquiryMutasi
};
