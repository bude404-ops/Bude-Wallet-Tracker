import os
import json

STORYBOARD_FOLDER='projects/storyboards'

class StoryboardManager:

    def create_storyboard(self,title):
        os.makedirs(STORYBOARD_FOLDER,exist_ok=True)

        storyboard={
            'title':title,
            'scenes':[]
        }

        path=f'{STORYBOARD_FOLDER}/{title}.json'

        with open(path,'w') as file:
            json.dump(storyboard,file,indent=4)

        return path


    def add_scene(self,storyboard,scene):
        storyboard['scenes'].append(scene)
        return storyboard


    def create_scene(self,number,description):
        return {
            'scene':number,
            'description':description,
            'shots':[],
            'dialogue':[],
            'characters':[],
            'camera':{},
            'lighting':'',
            'director_notes':''
        }
