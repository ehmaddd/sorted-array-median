var findMedianSortedArrays = function(nums1, nums2) {

  const merged = nums1.concat(nums2);
  const sorted = merged.sort(function(a, b){return a - b});
  if(sorted.length%2 == 0){
    console.log('even');
  }
  else {
    console.log('odd');
  }
};

const nums1 = [1,3];
const nums2 = [2];
findMedianSortedArrays(nums1, nums2);


