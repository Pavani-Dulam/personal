fname="oranges"
fprice=5.90
sname="shampoo"
sprice=3.70
tname="olive oil"
tprice=9.50

company_name="golden corner"
company_adress="2 mandilara"
company_city="rodos,gr"

message="thanks for shopping with us today"
print("*"*50)

print("\t\t{}".format(company_name.title()))
print("\t\t{}".format(company_adress))
print("\t\t{}".format(company_city))

print("="*50)
print("\tProduct name \tProduct price")
print("\t{}\t \t${}".format(fname.title(),fprice))
print("\t{}\t${}".format(sname.title(),sprice))
print("\t{}\t\t${}".format(tname.title(),tprice))
print("="*50)
print("\t\t\t total")
total=fprice+sprice+tprice
print("\t\t\t${}".format(total))
print("="*50)
print("\t\t\t{}".format(message))
      
      
      
      
      

