# .Prompt user to enter a value between 1 to 100 and print out the grade based on rules below
            # >= 90 and <= 100 : Grade A
            # >= 80 and < 90 : Grade B
            # >= 70 and < 80 : Grade C
            # < 70 : Grade F
userInput=float(input("enter your marks:"))
if(userInput>= 90 and userInput<= 100):
    print("Grade A")
if(userInput>= 80 and userInput< 90):
    print("Grade B")
if(userInput>=70 and userInput<80):
    print("Grade C")
if(userInput<70):
    print("Grade F")
if(userInput<1 or userInput>100):
    print("enter valid input")

