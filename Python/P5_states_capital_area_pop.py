state_list = []
filename = 'states_capitals_area_pop.txt'

with open(filename, 'r') as my_file: # open for reading ('r')
    for line in my_file:
        line = line.strip() # Remove newline character
        if line[0] != "#":  # ***
            # [0] state name
            # [1] capital
            # [2] area in square kilometers
            # [3] population in millions example 11.4
            item_list = line.split(',') # Split at comma
            state = item_list[0].lower() # ---
            capital = item_list[1].lower()  # ---
            area = int(item_list[2])        # ===
            pop = float(item_list[3])       # ===
            state_list.append([state, capital, area, pop]) # ===
        #end if # ***
    #end for
#end with
        
# Debug
print("DEBUG\n") # ***
for item_list in state_list:
    print(item_list)
#end for

print()

# Ask for a state, display its capital
hint = "Type a state or start of state name or QUIT to end: "  # ***
state_to_find = input(hint)
state_to_find = state_to_find.lower()

while state_to_find != 'quit':
    print()
    found = False
    n_to_match = len(state_to_find) # ***
    for item_list in state_list:
        state = item_list[0].lower() # Easier comparisons lower to lower
        if state_to_find == state[0:n_to_match]: # ***
            print_state = state.title( )
            capital = item_list[1]
            print_capital = capital.title()
            area = int(item_list[2])
            print_area = format(area, '10,d') # 10 spaces, show commas
            pop = float(item_list[3])
            print_pop = format(pop, '10,.1f')  # 6 spaces, 1 after decimal, show commas
            found = True
            print(print_state, "capital: ", print_capital, "\n",
                  print_area, "sq km\n   ",
                  print_pop, "millions\n")                  
            ##break  # ***
        #end if
    #end for
    if not found: # ***
        print("No such state, please try again\n") # ***
    #end if # ***
    state_to_find = input(hint)
    state_to_find = state_to_find.lower()
#end while

print("\nFinished")
