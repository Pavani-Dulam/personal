# 4.Write a Python program to sum all the items in a dictionary
a={'Ten': 10, 'Twenty': 20, 'Thirty': 30, 'Fourty': 40, 'Fifty': 50}
b=list(a.values())
sum=0
for i in range(len(b)):
    sum=sum+b[i]
print("sum=",sum)