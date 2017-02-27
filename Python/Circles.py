# p6_circles.py

import random
import turtle as t

def jumpto(x, y):
    t.penup()
    t.goto(x, y)
    t.pendown()
    return None
                 
color_list = ['light blue', 'hot pink', 'navy', 'dark green', 'yellow']

def random_one_of(a_list):
    n = len(a_list)
    index = random.randrange(0, n)
    item = a_list[index]
    return item 
t.speed(0)
for i in range(65):
    x = random.randint(-200, 201)
    y = random.randint(-200, 201)
    radius = random.randint(15, 60)
    jumpto(x, y)
    my_color = random_one_of(color_list)
    print(my_color)
    t.fillcolor(my_color)
    t.begin_fill()
    t.circle(radius)
    t.end_fill()
    



    
