import os
import json

COMIC_FOLDER='projects/comics'

class ComicManager:

    def create_comic(self,title):
        os.makedirs(COMIC_FOLDER,exist_ok=True)

        comic={
            'title':title,
            'style':'',
            'pages':[],
            'characters':[],
            'story':'',
            'format':'comic'
        }

        path=f'{COMIC_FOLDER}/{title}.json'

        with open(path,'w') as file:
            json.dump(comic,file,indent=4)

        return path


    def create_panel(self,description):
        return {
            'description':description,
            'camera':'',
            'dialogue':[],
            'caption':'',
            'effects':[]
        }
