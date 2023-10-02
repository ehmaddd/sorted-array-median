var findMedianSortedArrays = function(nums1, nums2) {

  const merged = nums1.concat(nums2);
  const sorted = merged.sort(function(a, b){return a - b});
  if(sorted.length%2 == 0){
    const half = sorted.length / 2;
    const halfplus = half+1;
    const sum = sorted[half - 1] +sorted[halfplus - 1];
    console.log(sum/2);
  }
  else {
    const half = parseInt((sorted.length-1) / 2);
    console.log(sorted[half]);
  }
};

const nums1 = [1, 2];
const nums2 = [3, 4];
findMedianSortedArrays(nums1, nums2);


