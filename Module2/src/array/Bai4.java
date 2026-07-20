package array;

import java.sql.Array;

public class Bai4 {
    public static void main(String[] args) {
        int [] nums = {1,3,12,1,6,5,17};
        int [] result = delete(nums,3);

        System.out.println("Mảng ban đầu: ");
        for(int i : nums){
            System.out.print(i+" ");
        }


        System.out.format("\nMảng sau khi xóa phần tử: ");
        for(int i : result){
            System.out.print(i+" ");
        }

    }
    private static int[] delete(int[] arr, int index){
        int [] newArr = new int[arr.length-1];
        System.arraycopy(arr, 0, newArr, 0, index);
        System.arraycopy(arr, index + 1, newArr, index, arr.length - index - 1);
        return newArr;
    }

}
