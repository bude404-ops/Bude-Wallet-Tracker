import os
import json

UPDATE_FOLDER='updates'
VERSION_FILE='version.json'


def get_current_version():
    if os.path.exists(VERSION_FILE):
        with open(VERSION_FILE,'r') as f:
            return json.load(f).get('version','0.0.0')
    return '0.0.0'


def apply_updates():

    current=get_current_version()

    print('Current Version:',current)

    for file in sorted(os.listdir(UPDATE_FOLDER)):

        if not file.endswith('.json'):
            continue

        with open(f'{UPDATE_FOLDER}/{file}') as f:
            update=json.load(f)

        version=update.get('version')

        if version <= current:
            print('Skipping old update:',version)
            continue

        print('Applying update:',version)

        for path,data in update.get('files',{}).items():
            os.makedirs(os.path.dirname(path) or '.',exist_ok=True)
            with open(path,'w') as out:
                out.write(data.get('content',''))

        with open(VERSION_FILE,'w') as f:
            json.dump(update,f,indent=4)

    print('Update process complete')


if __name__=='__main__':
    apply_updates()
