import { request } from './request.js';




// 查询投票状态
export async function queryStatus() {
  const userPhone = localStorage.getItem('userPhone');
  if (!userPhone) {
    if (location.pathname !== '/login.html') { alert("您还没有登录，请登录"); location.href = '/login.html'; }
    return;
  }
  const res = await request('/public/vote/getVoteStatus', `?userPhone=${userPhone}`);
  if (res.data === 'inProgress' && location.pathname !== '/vote.html') {
    location.href = '/vote.html';
  } else if (res.data === 'voted' && location.pathname !== '/status/ok.html') {
    location.href = '/status/ok.html';
  } else if (res.data === 'notStarted' && location.pathname !== '/status/no.html') {
    location.href = '/status/no.html';
  }
  return res;
}

// 登录
export function login(data) {
  return request('/public/vote-user/checkPhone', data);
}

// 获取所有节目列表
export function games() {
  return request('/public/program/allList');
}

// 投票
export function voting(optionId) {
  const userPhone = localStorage.getItem('userPhone');
  return request(`/public/vote/vote?optionId=${optionId}&userPhone=${userPhone}`);
}
