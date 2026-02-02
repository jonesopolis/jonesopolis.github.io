#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RUNNER_DIR="$SCRIPT_DIR/.runner"

if [[ ! -f "$RUNNER_DIR/.runner" ]]; then
    echo "Runner not configured."
    exit 1
fi

cd "$RUNNER_DIR"

# Try to stop service first
if [[ -f ".service" ]]; then
    ./svc.sh stop 2>/dev/null || true
fi

echo "Runner stopped."
