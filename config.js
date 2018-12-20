var api = '';
var apiConfig = 'development';
if(apiConfig == 'development') {
  api = 'http://ladmin.zjchgkj.com'
}else if (apiConfig == 'test') {
  api = ''
} else if (apiConfig == 'production') {
  api = ''
}