package loop;
import utils.Validation;
public class Bai1 {
    public static void main(String[] args) {
         int n;
         n = (int)Validation.getNumber("Mời nhập số nguyên n: ",0,true);
         System.out.format(" %d nghiệm đầu của số %d: ",20,n);
         for(int i = 1;i<=20;i++){
             System.out.println(n*i);
         }

    }
}
