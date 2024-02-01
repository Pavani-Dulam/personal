# 1.Display a histogram using values from a list. Use # as the  character.
# l=[]
# n=int(input("enter how many no of items you want="))
# for i in range(n):
#     a=int(input("enter number%d="%i))  
#     l.append(a)
# print(l)
# for i in l:
#     while(i>0):
#         print("# ",end="")
#         i=i-1
#     print("\n")

l=[]
n=int(input("enter how many no of items you want="))
for i in range(n):
    a=int(input("enter number%d="%i))  
    l.append(a)
print(l)
for i in l:
    while(i>0):
        print( "#",end=" ")
        i=i-1
    print("\n")

