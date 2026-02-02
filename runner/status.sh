#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
RUNNER_DIR="$SCRIPT_DIR/.runner"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "=== GitHub Actions Runner Status ==="
echo ""

if [[ ! -f "$RUNNER_DIR/.runner" ]]; then
    echo -e "${YELLOW}Not configured.${NC} Run: ./setup.sh"
    exit 0
fi

cd "$RUNNER_DIR"

# Check if running as service
if [[ -f ".service" ]]; then
    echo "Mode: Service"
    ./svc.sh status 2>/dev/null || echo -e "${RED}Service not running${NC}"
else
    # Check if running interactively
    if pgrep -f "Runner.Listener" > /dev/null; then
        echo -e "Mode: Interactive"
        echo -e "Status: ${GREEN}Running${NC}"
    else
        echo -e "Mode: Interactive"
        echo -e "Status: ${RED}Stopped${NC}"
    fi
fi

echo ""
echo "Runner name: $(cat .runner | grep -o '"agentName":"[^"]*"' | cut -d'"' -f4)"
