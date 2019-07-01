import numpy as np

def weighted_lottery(weights):
    container_lists = []
    for (name, weight) in weights.items():
        for _ in range(weight):
            container_lists.append(name)
    return np.random.choice(container_lists)





other_weights = {
    'winning' : 1,
    'break_even' : 2,
    'losing' : 3
    }

print(weighted_lottery(other_weights))


import numpy as np

def weighted_lottery(weights):
    container_list = []

    for (name, weight) in weights.items():
        for _ in range(weight):
            container_list.append(name)

    return np.random.choice(container_list)

#  weights = {
#      'winning': 1,
#      'losing': 1000
#  }
#
#  print(weighted_lottery(weights))

other_weights = {
    'green': 1,
    'yellow': 2,
    'red': 3
}

print(weighted_lottery(other_weights))