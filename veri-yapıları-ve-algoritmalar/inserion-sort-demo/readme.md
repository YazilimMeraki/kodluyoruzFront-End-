
# Insertion Sort projesi

## [22,27,16,2,18,6]

Insertion Sort yani araya ekleme sıralama algoritması ikinci elemandan başlayarak elemanın kendinden önceki elemanlarla karşılaştırılması suretiyle büyük elemanların dizide sağa doğru kaydırılması işlemlerini tekrar eder. 

1- Listenin ilk hali = [22,27,16,2,18,6]

2- 2. elemanı seçilir =[22,**27**,16,2,18,6]

3- 1. eleman seçimden küçük 3.elemandan büyüktür.
yani 1.ile yer değiştirmez ama 3.elemanla yeri değişir 
ve listenin yeni hali aşağıdaki gibi olur.
**[22,16,27,2,18,6]** 16  2.eleman oldu ve 1.elemandan büyük
olduğu için tekrar yer değiştirir.
**[16,22,27,2,18,6]** => Son hali budur.

4- Dizinin 4.elemanı olan 2 seçilir ve karşılaştırma işlemleri yapılır ve 2 solundaki tüm sayılardan küçüktür yeni oluşan sıralama =>**[2,16,22,27,18,6]**

5- 5. eleman seçilir ve işlem tekrarlanır.
sıralama =>**[2,16,18,22,27,6]**

6- 6. eleman seçilir ve işlem tekrarlanır.
Sıralama son hali => **[2,6,16,18,22,27]**

#### BigO Gösterimi

Genellikle sonsuz bir serinin kalan terimini karakterize etmek için kullanılır. Bilgisayar bilimlerinde algoritmaların bilgi karmaşıklığının çözümlenmesi için kullanılır.

Big O gösterimi : (n-1)+(n-2)+(n+3)+...+1 = (n(n-1))/2 = n^2 sonucuna ulaşırız.
Sonuç : O(n^2)


#### Time Complexity

Best Case : Dizinin sıralı olması. n
Worst Case : Dizinin tersten sıralı olması : n^2
Average Case : Dizinin normal dağılımı : n^2

**Dizi sıralandıktan sonra 18 sayısı dizinin ortalarında olur.Bu sebeple Average Case kapsamına girer**


## Soru 2

#### [7,3,5,8,2,9,4,15,6] => ilk 4 aşama

1- [3,7,5,8,2,9,4,15,6]
2- [3,5,7,8,2,9,4,15,6]
3- [2,3,5,7,8,9,4,15,6]
4- [2,3,4,5,7,8,9,15,6]