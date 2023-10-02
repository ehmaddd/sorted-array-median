var findMedianSortedArrays = function(nums1, nums2) {

  const merged = nums1.concat(nums2);
  const sorted = merged.sort(function(a, b){return a - b});
  console.log(sorted);
};

const nums1 = [1,3];
const nums2 = [2];
findMedianSortedArrays(nums1, nums2);


