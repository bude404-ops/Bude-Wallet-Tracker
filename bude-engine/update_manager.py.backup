import os
import json
import shutil
from datetime import datetime


UPDATE_FOLDER = "updates"
LOG_FILE = "docs/update_log.txt"


def apply_updates():

    print("================================")
    print("BudE Update Manager")
    print("================================")

    if not os.path.exists(UPDATE_FOLDER):
        print("No updates folder found")
        return


    os.makedirs("docs", exist_ok=True)


    for update_file in sorted(os.listdir(UPDATE_FOLDER)):

        if not update_file.endswith(".json"):
            continue


        path = os.path.join(
            UPDATE_FOLDER,
            update_file
        )


        with open(path, "r", encoding="utf-8") as file:
            update = json.load(file)


        print("Applying:", update.get("version"))


        for filename, data in update.get("files", {}).items():

            content = data.get("content", "")
            mode = data.get("mode", "system")


            if mode == "protected" and os.path.exists(filename):
                print("Protected:", filename)
                continue


            os.makedirs(
                os.path.dirname(filename) or ".",
                exist_ok=True
            )


            if os.path.exists(filename):
                shutil.copy(
                    filename,
                    filename + ".backup"
                )


            with open(
                filename,
                "w",
                encoding="utf-8"
            ) as output:

                output.write(content)


            print("Updated:", filename)


        with open(
            LOG_FILE,
            "a",
            encoding="utf-8"
        ) as log:

            log.write(
                f"{datetime.now()} Applied {update_file}\n"
            )


    print("BudE Updates Complete")


if __name__ == "__main__":
    apply_updates()
