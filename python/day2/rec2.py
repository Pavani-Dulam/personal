# 2.write a program to calculate the factorial( using Recursion)
def fact(n):
    if (n==1 or n==0):
         return 1
    else:
         return (n*fact(n-1))
print(fact(5))