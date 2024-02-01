# 4.Program to Find Sum of Natural Numbers Using Recursion
num=int(input("enter a number"))
def  myfun(n):
    if n==0:
        return 0
    else:
        return n+myfun(n-1)

print(myfun(num))
