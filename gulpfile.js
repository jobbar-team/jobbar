const gulp = require('gulp');
const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');

gulp.task('http', (done) => {
  const app = connect().use(serveStatic('test/fixtures'));
  http.createServer(app).listen(9000, done);
});

gulp.task('test', () => {
  console.log('It works!');
});
