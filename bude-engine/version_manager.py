import json
import os

VERSION_FILE='version.json'

class VersionManager:

    def get_version(self):
        if os.path.exists(VERSION_FILE):
            with open(VERSION_FILE,'r') as f:
                return json.load(f).get('version')
        return '0.0.0'

    def compare(self,current,new):
        return current != new
