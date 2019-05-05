import axios from 'axios'
import jsonp from 'assets/js/jsonp'
import {HOME_RECOMMEND_PAGE_SIZE, jsonpOptions, SUCC_CODE, TIMEOUT} from "@/api/config";

//获取幻灯片数据--ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT   //可以设置一个timeout10毫秒测试接收不到数据到情况
  }).then(res => {
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
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 10000)
    })
  });
};

//获取热门推荐数据
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      return res;
    }
    throw new Error('没有成功获取到数据!')
  }).catch(err => {
    console.log(err);
  })
};
