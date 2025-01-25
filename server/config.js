/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1,
    title: "神秘大礼包",
    text: ""
  },
  {
    type: 1,
    count: 1,
    text: "",
    title: "骆驼祥子奖",
    img: "../img/luotuoxiangzi.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "",
    title: "心里没谱",
    img: "../img/xinlimeipu.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "",
    title: "空气节点奖",
    img: "../img/kongqijiedian.jpg"
  },
  {
    type: 4,
    count: 1,
    text: "",
    title: "微光奖",
    img: "../img/weiguang.jpg"
  },
  {
    type: 5,
    count: 1,
    text: "",
    title: "不醒人事奖",
    img: "../img/buxinrenshi.jpg"
  },
  {
    type: 6,
    count: 1,
    text: "",
    title: "天然奖",
    img: "../img/tianran.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "B4G";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
