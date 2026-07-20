package array;

public class Bai5 {
    public static void main(String[] args) {
        int [] nums = {1,3,12,1,6,5,17};
        int[] result = insert(nums,3,80);
        System.out.println("Mảng ban đầu: ");
        for(int i : nums){
            System.out.print(i+" ");
        }
        System.out.println("\nMảng sau khi chèn: ");
        for(int i : result){
            System.out.print(i+" ");
        }
    }
   private static int[] insert(int[] arr, int index, int value){
       int [] newArr = new int[arr.length+1];
       System.arraycopy(arr, 0, newArr, 0, index);
       System.arraycopy(arr, index, newArr, index + 1, arr.length - index);
       newArr[index] = value;
       return newArr;
   }
}
