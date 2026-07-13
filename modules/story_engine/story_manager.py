import os
import json

STORY_FOLDER='projects/stories'

class StoryManager:

    def create_story(self,title,idea):
        os.makedirs(STORY_FOLDER,exist_ok=True)

        story={
            'title':title,
            'idea':idea,
            'genre':'',
            'tone':'',
            'world':'',
            'characters':[],
            'chapters':[],
            'scenes':[]
        }

        path=f'{STORY_FOLDER}/{title}.json'

        with open(path,'w') as file:
            json.dump(story,file,indent=4)

        return path

    def add_chapter(self,story,chapter):
        story['chapters'].append(chapter)
        return story

    def add_scene(self,story,scene):
        story['scenes'].append(scene)
        return story
