import axios from 'axios'
import {SUCC_CODE, TIMEOUT} from "@/api/config";

//获取幻灯片数据--ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT   //可以设置一个timeout10毫秒测试接收不到数据到情况
  }).then(res => {
    console.log('then1');
    if (res.data.code === SUCC_CODE) {
      return res.data.slider;
    }
    throw new Error('没有成功获取到数据!')
  }).catch(err => {
    if (err) {
      console.log(err);
    }
    return [
      {
        linkUrl: 'www.baidu.com',
        picUrl: require('assets/img/404.png')
      }
    ]
  }).then(data => {
    console.log('then2');
    console.log(data);
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(data);
      },1000)
    })
  });
};
