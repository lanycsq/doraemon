 let array = [2, 1, 5, 3, 8, 4, 9, 5];

 // 插入排序
 function sort(array) {
     for (let i = 0; i < array.length; i++) {
         for (let j = i; j > 0; j--) {
             if (array[j] < array[j - 1]) {
                 let a = array[j];
                 array[j] = array[j - 1];
                 array[j - 1] = a;
             }
         }
     }

     return array;
 }
 sort.call(null, array)

 //冒泡排序
 function sort1(array) {
     for (let i = 0; i < array.length - 1; i++) {
         for (let j = 0; j < array.length - i - 1; j++) {
             if (array[j] > array[j + 1]) {
                 let a = array[j];
                 array[j] = array[j + 1];
                 array[j + 1] = a
             }
         }
         console.log(array);
         return array
     }
 }
 sort1.call(null, array)

 // 希尔排序算法
 function sort2(array) {
     var interval = parseInt(array.length / 2); //分组间隔设置
     while (interval > 0) {
         for (let i = 0; i < array.length; i++) {
             let n = i;
             while (array[n] < array[n - interval] && n > 0) {
                 var temp = array[n];
                 array[n] = array[n - interval];
                 array[n - interval] = temp;
                 n = n - interval;
             }
         }
         interval = parseInt(interval / 2);
     }
     return array;
 }
 sort2.call(null, array)