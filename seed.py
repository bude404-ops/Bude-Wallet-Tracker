import os
import json
from datetime import datetime


def create_folder(path):
    os.makedirs(path, exist_ok=True)


def create_file(path, content):

    folder = os.path.dirname(path)

    if folder:
        create_folder(folder)

    if not os.path.exists(path):

        with open(path, "w", encoding="utf-8") as file:
            file.write(content)


def build():

    print("Starting BudE Genesis Builder")

    with open("blueprint.json", "r", encoding="utf-8") as file:
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
            f"Build completed {datetime.now()}\n"
        )


    print("BudE Genesis Complete")


if __name__ == "__main__":
    build()
