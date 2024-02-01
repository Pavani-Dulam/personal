#   3.Prompt user to enter an year and print out if it is a leap year or not.
year=int(input("enter year:"))
if(((year % 4 == 0) and (year % 100 != 0)) or (year % 400 == 0)):
    print("leap year")
else:
    print("not leap year")
    