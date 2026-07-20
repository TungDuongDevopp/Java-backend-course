package array;

import java.util.Arrays;

public class Bai1 {
    public static void main(String[] args) {
        int [] nums = {1,3,12,1,6,5,17};
        System.out.println(search(nums,5)); // Hiển thị 5 do nums[5] == 5;
        System.out.println(search(nums,40)); // Hiển thị -1

    }
    public static int search(int[] arr, int target){
        for(int i = 0;i<arr.length;i++){
            if(arr[i] == target) return i;
        }
        return -1;
    }


}
