# 1.Calculate tax payable for a given income. Prompt user to enter a positive number.
salary=float(input("enter salary="))
if(salary>0 and salary<10000):
    tax=salary*0.01
    print(tax)
if(salary>10000 and salary<20000):
     tax=salary*0.02
     print(tax)
if(salary>20000 and salary<30000):
     tax=salary*0.03
     print(tax)
else:
    print(salary*0.05)




