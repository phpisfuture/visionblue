var api = '';
var apiConfig = 'production';
if(apiConfig == 'development') {
  api = 'http://ladmin.zjchgkj.com'
}else if (apiConfig == 'test') {
  api = ''
} else if (apiConfig == 'production') {
  api = 'http://admin.zjchgkj.com'
}