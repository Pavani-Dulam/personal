# Please write a program to generate all sentences where subject is in ["I", "You"] and verb is in ["Play", "Love"] 
    #    and the object is in ["Hockey","Football"].
subjects= ["I", "You"]
verb=["Play", "Love"]
object=["Hockey","Football"]
for i in range(len(subjects)):
    for j in range(len(verb)):
        for k in range(len(object)):
            print(subjects[i]+" "+verb[j]+" "+object[k])

