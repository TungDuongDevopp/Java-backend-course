package Loop_Structure;

import utils.Validation;

public class Bai8 {
    public static void main(String[] args) {
        int secret = 78;
        int n;
        int count = 0;
        do{
            n = (int) Validation.getNumber("\nMời nhập số nguyên dương n: ", 0, true);
            if(n>secret){
                System.out.format("%d lớn hơn số cần tìm thử lại đi!",n);
            }
            else if(n<secret){
                System.out.format("%d nhỏ hơn số cần tìm thử lại đi!",n);
            }
            count++;
        } while (n!=secret);
        System.out.format("\nChính xác! Bạn đã đoán đúng sau %d lần.",count);


    }
}
