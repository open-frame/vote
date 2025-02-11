// 解析查询参数
export function getSearchParams(params) {
  if (!params) {
    return '';
  }
  const searchParams = new URLSearchParams(params);
  return searchParams.toString();
}

