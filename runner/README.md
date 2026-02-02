# Self-Hosted GitHub Actions Runner

Run GitHub Actions workflows locally for faster builds.

## Quick Start

```bash
# Setup (downloads runner, registers with GitHub)
./setup.sh

# Start runner interactively (Ctrl+C to stop)
./start.sh

# Or install as a background service
./install-service.sh
```

## Requirements

- **GitHub CLI** (`gh`) - Install with `brew install gh`
- **Authenticated** - Run `gh auth login` if needed

## Scripts

| Script | Description |
|--------|-------------|
| `setup.sh` | Download runner and register with GitHub |
| `start.sh` | Run interactively (foreground) |
| `install-service.sh` | Install as a background service (launchd/systemd) |
| `stop.sh` | Stop the runner |
| `status.sh` | Check runner status |
| `uninstall.sh` | Unregister and clean up |

## How It Works

1. `setup.sh` detects your OS/architecture and downloads the appropriate runner
2. Gets a registration token via GitHub CLI
3. Configures the runner with labels: `self-hosted`, `<OS>`, `<arch>`
4. The workflow uses `runs-on: self-hosted` to target your local runner

## Multiple Machines

Each machine needs its own runner registration:

```bash
# On new machine, clone repo then:
cd runner
./setup.sh
./install-service.sh
```

Runners are named `local-<hostname>` to avoid conflicts.

## Troubleshooting

**Runner not picking up jobs?**
- Check status: `./status.sh`
- Verify workflow has `runs-on: self-hosted`
- Check GitHub: Settings → Actions → Runners

**Permission denied?**
- Make scripts executable: `chmod +x *.sh`

**Need to reconfigure?**
- Run `./uninstall.sh` then `./setup.sh`
