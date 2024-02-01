# 3.For a given list, generate a list containing squares of the items in list that are greater than 10 and less than 50
l=[]
n=int(input("enter how many no of items you want="))
for i in range(n):
    a=int(input("enter number%d="%i))  
    l.append(a)
print(l)
newl=[]
for i in l:
    if(i>10 and i<50):
        b=i**2
        newl.append(b)
print(newl)