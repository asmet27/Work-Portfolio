
def fahr_to_celsius(degrees_f):
    fahr = degrees_f - 32
    celsius = fahr * (100/180)
    return celsius
#end def

def celsius_to_fahr(degrees_c):
    fahr = degrees_c *(180/100) + 32
    return fahr
#end def

# 1. Boiling 212 F, should give 100 c
f = 212
c = fahr_to_celsius(f)
print("Boiling", f, "degrees F is", c, "degrees C")

# 2. Freezing 32 F, should give 0 C
f = 32
c = fahr_to_celsius(f)
print("Freezing", f, "degrees F is", c, "degrees C")

# 3. 68 F, should give 20 C
f = 68
c = fahr_to_celsius(f)
print("Room temp", f, "degrees F is", c, "degrees C")

# 4. Boiling 100 C, should give 212 F
c = 100
f = celsius_to_fahr(c)
print("Boiling", c, "degrees C is", f, "degrees F")

# 5. Freezing 0 C, should give 32 F
c = 0
f = celsius_to_fahr(c)
print("Freezing", c, "degrees C is", f, "degrees F")

# 6. 20 C, should give 68 F
c = 20
f = celsius_to_fahr(c)
print("Room temp", c, "degrees C is", f, "degrees F")
