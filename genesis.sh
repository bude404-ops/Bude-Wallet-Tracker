#!/bin/bash
# BudE Genesis: Run this ONCE to initialize the workspace
mkdir -p .bude/manifests .bude/updates apps/dashboard/src/app packages/ai-core packages/media-engine data/projects scripts
echo '{"version": "1.0.0", "modules": ["core"]}' > .bude/manifests/current.json
echo "BudE StoryBoard Initialized successfully."
