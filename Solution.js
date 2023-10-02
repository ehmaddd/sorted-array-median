var findMedianSortedArrays = function(nums1, nums2) {

//   const merged = nums1.concat(nums2);
//   const sorted = merged.sort(function(a, b){return a - b});
//   if(sorted.length%2 == 0){
//     const half = sorted.length / 2;
//     const halfplus = half+1;
//     const sum = sorted[half - 1] +sorted[halfplus - 1];
//     console.log(sum/2);
//   }
//   else {
//     const half = parseInt((sorted.length-1) / 2);
//     console.log(sorted[half]);
//   }
const merged = [];
    let i = 0, j = 0;

    // Merge the sorted arrays without sorting
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    // Append the remaining elements from both arrays (if any)
    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        // If the merged array has an even length, return the average of the two middle elements
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        // If the merged array has an odd length, return the middle element
        return merged[mid];
    }
};

const nums1 = [1, 2];
const nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));


