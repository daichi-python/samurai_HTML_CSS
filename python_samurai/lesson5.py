def calc(x, y):
    return x * y

print(calc(3, 5))


def triangle_area(a, h):
    return a * h / 2
    
print(triangle_area(4, 5))


file_list = []
def add_list(filename):
    file_list.append(filename + ".py")
    
add_list("function")
print(file_list)
add_list("Hello")
print(file_list)