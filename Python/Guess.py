import random as r

def get_int(prompt, minvalue, maxvalue):
    """ Given a string int, int -> returns int
    """
    number = int(input(prompt))
    
    while True:
        if number < minvalue:
            print("Too large")
        elif number > maxvalue:
            print("Too small")
        else:
            break
        #end if
        number = int(input(prompt))
    #end while
    return number

hint = "Please enter a number between 1 and 100 "
answer = r.randint(1, 100)
guess = get_int(hint, 1, 100)


while guess != answer:
    if guess < answer:
        print("Too small")
    elif guess > answer:
        print("Too big")
    #end if
    guess = get_int(hint, 1, 100)
#end while

print("Congratulations, thats right!")
print(answer)


