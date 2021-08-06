def check(num):
    if num == 42:
        return "Answer to the Ultimate Question of Life, the Universe, and Everything"
    else:
        return None
        
print(check(42))
print(check(3))


even_num = []
odd_num = []

def sort_number(num):
    if num % 2 == 0:
        even_num.append(num)
    else:
        odd_num.append(num)
        
sort_number(45)
sort_number(2)
print(even_num)
print(odd_num)