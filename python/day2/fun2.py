#  2. Display cubes of numbers using anonymous functions.
        # Note: Use map with a lambda function to calculate the cube of each number

print("\nCube of every number:")
def myfun(a):
    cubes = list(map(lambda x: x ** 3,a))
    print(cubes)
myfun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

