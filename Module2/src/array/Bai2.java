package array;

import java.util.Arrays;

public class Bai2 {
    public static void main(String[] args) {
        int [] nums = {1,3,12,1,6,5,17};
        System.out.println("Mảng ban đầu: ");
        for(int i : nums){
            System.out.print(i+" ");
        }
        System.out.println("\nMảng sau khi thêm: ");
        int [] result = add(nums,6);
        for(int i : result){
            System.out.print(i+" ");
        }
    }
    private static int[] add(int[] arr, int value){
        int[] newArr = Arrays.copyOf(arr, arr.length + 1);
        newArr[newArr.length - 1] = value;
        return newArr;
    }
}
