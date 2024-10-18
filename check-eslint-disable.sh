#!/bin/bash

# Check for eslint-disable-next-line in changed files
if git diff --cached --name-only | grep 'src/.*\.\(ts\|tsx\)$' | xargs grep -R -n 'eslint-disable-next-line'; then
  echo "Found eslint-disable-next-line. The commit has been aborted."
  exit 1
else
  exit 0
fi
