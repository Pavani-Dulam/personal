# 2.Prompt user to enter a number and print out all the odd, even numbers between 0 and the number separately on two
num=int(input("enter a number"))
even=[]
odd=[]
for i in range(num):
    if(i%2==0):
        even.append(i)
    else:
        odd.append(i)
print(even)
print(odd)
