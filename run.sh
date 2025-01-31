#!/bin/sh
set -e
DIR=$(dirname "$(readlink -f "$0")")
. "$DIR/.env"

echo "[api] launching..." 
"$DIR/api/run.sh"
