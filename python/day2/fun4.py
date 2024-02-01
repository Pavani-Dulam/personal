# 4.Prices of an item across multiple days is provided as a list. Calculate which combination of purchase, sale price yields maximum profit.
#          [123, 189, 202, 91, 254, 289]
#          Note:You have to buy an item before you sell
selling_price=[250,140,600,300]
cost_price=[200,100,560,150]
profit=[]
t=()
for i in range(len(selling_price)):
    a=selling_price[i]-cost_price[i]
    profit.append(a)
print(profit)
print(max(enumerate(profit)))
t=(selling_price[3],cost_price[3])
print(t)



