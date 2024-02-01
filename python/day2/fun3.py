
from itertools import permutations
a=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
s=[]
for i in range(len(a)+1):
    s.extend(permutations(a,i))
for i in s:
    if(len(i)==4):
         print(i)