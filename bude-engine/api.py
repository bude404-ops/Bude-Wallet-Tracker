from ai_core import AICore
from output_manager import OutputManager

core=AICore()
saver=OutputManager()


def generate(prompt,category):

    result=core.generate(prompt,category)

    saver.save('latest_output',result)

    return result
