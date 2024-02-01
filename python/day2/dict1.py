#covwerting two lists into a dictionary
#  keys = ['Ten', 'Twenty', 'Thirty']
#         values = [10, 20, 30]
#         o/p:-{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
res = {keys[i]:values[i] for i in range(len(keys))}
print(res)
 

