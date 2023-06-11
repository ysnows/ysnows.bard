import jsonrpc from 'jsonrpc-lite';
import http from 'http';

function result(method, params) {

    const requestData = jsonrpc.request("123", method, params);

    const options = {
        hostname: '127.0.0.1', // 您的服务器地址
        port: 8080, // 服务器端口
        path: '', // 请求路径
        method: 'POST', // 使用 POST 方法
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(JSON.stringify(requestData)),
        },
    };

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const response = jsonrpc.parse(data);
            console.log(response);
        });
    });

    req.on('error', (error) => {
        console.error(error);
    });

    req.write(JSON.stringify(requestData));
    req.end();

}

export {result};
