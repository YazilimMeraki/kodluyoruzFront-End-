# Merge Sort
## [16,21,11,8,12,22] 

1- Dizi 2 eşit parçaya bölünür
**[16,21,11] ve [8,12,22]**

2- Bu ayırma işlemi, alt diziler en çok iki elemanlı olana kadar devam eder.

**[16],[21],[11],[8],[12],[22]** => Hepsi tek kalana kadar parçalandı 

3- Tekrar birleştirilmeye başlanır sıralanarak.
**[16,21], [8,11],[12,22]**

**[8,11,16,21],[12,22]**

**[8,11,12,16,21,22]** => Listenin son hali 

## BigO gösterimi =>  O(nlogn)