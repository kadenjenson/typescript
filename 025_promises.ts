// Start mowing -> Pending

// Complete mowing process -> Resolve

// Did not mow lawn. Jerk. -> Reject

"use strict"; // With es6 in the tsconfig, anyother file that has the 'let' method, will not work unless you add the 'use strict' as shown here.

let performUpload = function(imgStatus : string) : Promise<{imgStatus : string}> {
  return new Promise((resolve) => {
    console.log(`Status: ${imgStatus}`);
    setTimeout(() => {
      resolve({ imgStatus: imgStatus });
    }, 1000);
  });
}

var upload;
var compress;
var transfer;

performUpload('uploading...')
.then((res) => {
  upload = res;
  return performUpload('compressing...')
})
.then((res) => {
  compress = res;
  return performUpload('transferring...')
})
.then((res) => {
  transfer = res;
  return performUpload('Image upload completed...')
});