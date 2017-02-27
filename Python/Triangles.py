import turtle as t

def draw_triangle(side_length):
    """Given side_length, draw a triangle
       each side is side_length pixels long
       return None
    """
    n_sides = 3
    angle = 360 / n_sides

    for count in range(n_sides):
        t.forward(side_length)
        t.right(angle)
    #end for
        
    return None
#end def

t.speed('fastest')
t.pencolor('blue')

# draw 3 triangles
length = 60
draw_triangle(length)
length = 70
draw_triangle(length)
length = 120
draw_triangle(length)

answer = t.numinput("Triangles", "How many figures to draw in spiral? ")
n = int(answer)

size = 7
extra = 5

for i in range(n):
    draw_triangle(size)
    size = size + extra
    t.right(4)
    t.forward(8)
#end for
