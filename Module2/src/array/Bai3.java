package array;

public class Bai3 {
    public static void main(String[] args) {
        int [] nums = {1,3,12,1,6,5,17};
        update(nums,3,60);
    }
    private static void update(int[] arr, int index, int newValue){
        System.out.format("Mảng ban đầu: ");
        for(int i : arr){
            System.out.print(i+" ");
        }
        arr[index] = newValue;
        System.out.format("\nMảng sau khi sửa phần tử có index %d: ",index);
        for(int i : arr){
            System.out.print(i+" ");
        }

    }
}
