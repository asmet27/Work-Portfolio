import turtle as t

def jump (distance):
    """ Move turtle without making a mark on screen"""
    t.penup()
    t.forward(distance)
    t.pendown()
    return None

def draw_triangle(side_length):
    """Given side length, draw 3 sided figure
        using right turns 
        return None       
    """
    n_sides = 3
    angle = 360 / n_sides
    
    for i in range(n_sides):
        t.forward(side_length)
        t.left(angle)      
    return None

def color_triangle(side_length, color):
    t.fillcolor(color)
    t.begin_fill()
    draw_triangle (side_length)
    t.end_fill()
    return None

t.speed('fastest')
color_list = ["red", "yellow", "blue", "green"]

n_colors = len(color_list)

# Get several colors from input
prompt = "Type a color "
for i in range(n_colors):
    new_color = input(prompt)
    color_list[i] = new_color
    print(color_list)
    
# Draw several triangles without lines between them
prompt = "Type a background color "
new_backgroundcolor = input(prompt)
t.bgcolor(new_backgroundcolor)

n = t.numinput("Triangles", "How many", minval = 3, maxval = 30)
n = int(n)

angle = 360 / n
size = 40
c = 0
for i in range(n):
    my_color = color_list[c] 
    color_triangle(size, my_color)
    c = c + 1
    if c >= n_colors: # or (n_colors - 1)
        c = 0
    t.left(angle)
    jump(50)
