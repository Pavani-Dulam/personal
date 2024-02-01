#  3.Write a Python program to iterate over dictionaries using for loops
a={'Ten': 10, 'Twenty': 20, 'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
# print(a.keys())
# print(a.values())
c=list(a.keys())
d=list(a.values())
for i in range(len(c)):
    print(c[i],d[i])
    

        


