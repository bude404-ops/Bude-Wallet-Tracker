from prompt_manager import PromptManager
from generation_backend import GenerationBackend

class CreativeGenerator:

    def __init__(self):
        self.prompts=PromptManager()
        self.backend=GenerationBackend()


    def create(self,category,input_text):

        prompt=self.prompts.build(category,input_text)

        return self.backend.generate(prompt)
