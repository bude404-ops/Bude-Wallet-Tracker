import os
import json

CHARACTER_FOLDER='projects/characters'

class CharacterManager:

    def create_character(self,name):
        os.makedirs(CHARACTER_FOLDER,exist_ok=True)

        character={
            'name':name,
            'appearance':{},
            'personality':{},
            'background':'',
            'relationships':[],
            'skills':[],
            'powers':[],
            'weaknesses':[],
            'style_presets':[]
        }

        path=f'{CHARACTER_FOLDER}/{name}.json'

        with open(path,'w') as file:
            json.dump(character,file,indent=4)

        return path

    def load_character(self,name):
        path=f'{CHARACTER_FOLDER}/{name}.json'

        with open(path,'r') as file:
            return json.load(file)
