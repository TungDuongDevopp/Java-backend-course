package Loop_Structure;

import utils.Validation;

public class Bai5 {
    public static void main(String[] args) {
        int a,b;
        int sumEven  = 0;
        int sumOdd = 0;
        do{
            a = (int) Validation.getNumber("Mời nhập số a: ",0,true);
            b = (int)Validation.getNumber("Mời nhập số b: ",0,true);
        } while(a>=b);
        for(int i = a; i<=b;i++){
           if(isEven(i)) {
               sumEven+=i;
           }
           else {
               sumOdd+=i;
           }
        }

        System.out.format("Tổng số chẵn trong đoạn [%d,%d] là: %d",a,b,sumEven);
        System.out.format("\nTổng số lẻ trong đoạn [%d,%d] là: %d",a,b,sumOdd);
    }
    private static boolean isEven(int n){
        if(n % 2 == 0) return true;
        return false;
    }
}
