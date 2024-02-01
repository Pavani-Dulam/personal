def add(l1, l2):
    dictionary = {l1[i]: l2[i] for i in range(min(len(l1), len(l2)))}
    # a=(dictionary.items())
    # print(type(a))
    merge = list(dictionary.items())
    return merge
print(add([1, 2, 3],['a', 'b', 'c']))