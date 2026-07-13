import json
import os

CONFIG='bude-engine/ai_config.json'

class GenerationBackend:

    def __init__(self):
        self.config=self.load_config()


    def load_config(self):
        if os.path.exists(CONFIG):
            with open(CONFIG,'r') as file:
                return json.load(file)

        return {}


    def generate(self,prompt):

        provider=self.config.get('provider','local')

        if provider=='local':
            return self.local_generate(prompt)

        return {
            'status':'No provider configured',
            'prompt':prompt
        }


    def local_generate(self,prompt):

        return {
            'status':'Local backend ready',
            'prompt':prompt,
            'output':'Connect local model runner'
        }
