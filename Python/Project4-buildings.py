building_list = []

prompt = "Type a building name or type Quit to stop "
name = input(prompt)
while name != 'Quit':
    building_list.append(name)
    name = input(prompt)
#end while

print()
print(building_list)
print()

for name in building_list:
    print(name)
