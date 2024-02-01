# 7.print all elements in a list
#       print all even index elements in a list
#       print all odd index elements in a list
l=[]
n=int(input("enter how many no of items you want="))
for i in range(n):
    a=int(input("enter number%d="%i))  
    l.append(a)
print(l)
oddl=[]
evenl=[]

for i in range(n):
    if(i%2==0):
        evenl.append(l[i])
    else:
        oddl.append(l[i])
print(oddl)
print(evenl)