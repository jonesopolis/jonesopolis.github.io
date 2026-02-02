#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RUNNER_DIR="$SCRIPT_DIR/.runner"

if [[ ! -f "$RUNNER_DIR/.runner" ]]; then
    echo "Runner not configured. Run setup.sh first."
    exit 1
fi

cd "$RUNNER_DIR"
./run.sh
