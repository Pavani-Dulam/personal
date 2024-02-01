# 2.Program to find whether a string is a palindrome.
x =str(input("enter a string="))
  
w = ""
for i in x:
    w = i + w

  
if (x == w):
    print("Yes palindrome")
else:
    print("Not palindrome")