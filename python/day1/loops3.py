#  3.Prompt user to enter a number and print out its factorial (using looping).
num=int(input("enter a number"))
fact=1
while(num!=0):
    fact=fact*num
    num=num-1
print(fact)

