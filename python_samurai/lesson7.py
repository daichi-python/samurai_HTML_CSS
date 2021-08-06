# for i in range(1, 31):
#     print(i)
    
# for i in range(1, 31):
#     if i % 5 == 0:
#         print("Buzz")
#     else:
#         print(i)

for i in range(1, 31):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 5 == 0:
        print("Buzz")
    elif i % 3 == 0:
        print("Fizz")
    else:
        print(i)