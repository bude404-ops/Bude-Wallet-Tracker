import json
import os

MEMORY_FILE='database/creative_memory.json'

class CreativeMemory:

    def __init__(self):
        os.makedirs('database',exist_ok=True)

        if not os.path.exists(MEMORY_FILE):
            self.memory={
                'projects':[],
                'characters':[],
                'worlds':[],
                'stories':[]
            }
            self.save()
        else:
            self.load()


    def load(self):
        with open(MEMORY_FILE,'r') as file:
            self.memory=json.load(file)


    def save(self):
        with open(MEMORY_FILE,'w') as file:
            json.dump(self.memory,file,indent=4)


    def add_item(self,category,item):
        if category in self.memory:
            self.memory[category].append(item)
            self.save()


    def get_items(self,category):
        return self.memory.get(category,[])
