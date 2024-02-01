#  2.For a given list, generate a list containing squares of even items in list
l=[]
n=int(input("enter how many no of items you want="))
for i in range(n):
    a=int(input("enter number%d="%i))  
    l.append(a)
print(l)
newl=[]
for i in l:
    if(i%2==0):
        b=i**2
        newl.append(b)
print(newl)

