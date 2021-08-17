#!/bin/bash

echo "Setting up Repo: M-PULSE."
echo "Linking dependencies"
cd ../ui-system-one
ls
yarn link
cd -
yarn link ui-system-one
yarn start