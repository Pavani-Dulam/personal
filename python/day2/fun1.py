from itertools import permutations
a=['a','b','c','d','e']
s=[]
for i in range(len(a)):
    s.extend(permutations(a,i+1))
for i in s:
    print(i)