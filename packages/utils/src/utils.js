import pMap from 'p-map';

const data = [1, 2, 3, 4, 5];

async function processData(item) {
  // 这里是异步处理逻辑，例如发送 HTTP 请求等
  return item * 2; // 这里简单地将每个元素乘以 2
}

export async function multi2(data){
    const result = await pMap(data, processData, { concurrency: 2 });
    console.log(result); // 输出 [2, 4, 6, 8, 10]
    return result
}