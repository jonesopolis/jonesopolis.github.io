#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
RUNNER_DIR="$SCRIPT_DIR/.runner"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

if [[ ! -f "$RUNNER_DIR/.runner" ]]; then
    echo "Runner not configured. Nothing to uninstall."
    exit 0
fi

cd "$RUNNER_DIR"

# Stop and uninstall service if running
if [[ -f ".service" ]]; then
    echo "Stopping service..."
    ./svc.sh stop 2>/dev/null || true
    ./svc.sh uninstall 2>/dev/null || true
fi

# Get removal token and unregister
echo "Unregistering runner from GitHub..."
cd "$REPO_DIR"
TOKEN=$(gh api repos/jonesopolis/jonesopolis.github.io/actions/runners/registration-token -X POST --jq '.token')

cd "$RUNNER_DIR"
./config.sh remove --token "$TOKEN"

# Clean up
echo "Cleaning up..."
rm -rf "$RUNNER_DIR"

echo ""
echo -e "${GREEN}✓ Runner uninstalled successfully.${NC}"
