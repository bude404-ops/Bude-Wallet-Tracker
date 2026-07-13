import os
import json

ART_FOLDER='projects/art_profiles'

class ArtManager:

    def create_visual_profile(self,name):
        os.makedirs(ART_FOLDER,exist_ok=True)

        profile={
            'name':name,
            'style':'',
            'character_reference':'',
            'environment_reference':'',
            'color_palette':[],
            'camera_style':'',
            'consistency_id':name
        }

        path=f'{ART_FOLDER}/{name}.json'

        with open(path,'w') as file:
            json.dump(profile,file,indent=4)

        return path


    def build_prompt(self,profile):
        return f"{profile['style']} style, {profile['character_reference']}"
