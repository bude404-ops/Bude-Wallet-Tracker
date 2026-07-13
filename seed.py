import os
import json
from datetime import datetime


BLUEPRINT = "blueprint.json"


def create_folder(path):
    os.makedirs(path, exist_ok=True)


def create_file(path, content):

    folder = os.path.dirname(path)

    if folder:
        create_folder(folder)

    with open(path, "w", encoding="utf-8") as file:
        file.write(content)


def build():

    print("================================")
    print("BudE Genesis Builder Starting")
    print("================================")


    with open(BLUEPRINT, "r", encoding="utf-8") as file:
        blueprint = json.load(file)


    for folder in blueprint["folders"]:
        create_folder(folder)
        print("Created folder:", folder)


    for filename, content in blueprint["files"].items():

        create_file(filename, content)

        print("Created file:", filename)


    create_folder("docs")

    with open(
        "docs/build_log.txt",
        "a",
        encoding="utf-8"
    ) as log:

        log.write(
            f"Build completed: {datetime.now()}\n"
        )


    print("================================")
    print("BudE Genesis Build Complete")
    print("================================")


if __name__ == "__main__":
    build()
