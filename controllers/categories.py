import json
from pprint import pprint

with open('icanhasdata.json') as data_file:    
    data = json.load(data_file)

c = []
category = []
t = []

output = {}

for row in data['data']:
    c.append(row[17])
    category.append(row[15])
    t.append(row[14])
pop = []
for item in c:
    ps = item.split(',')
    for p in ps:
        pop.append(p.strip())

pop = set(pop)
category = set(category)
t = set(t)

pop = list(pop)
category = list(category)
t = list(t)
output['population'] = pop
output['category'] = category
output['type'] = t


with open('icanhasparams.json', 'w') as outfile:
    json.dump(output, outfile)

